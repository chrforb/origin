var current = 0;
var autoSlide;
var playing = true;
var timing = 2000; //2 secs

var images = [
    "img/pexels-egor-kamelev-1101196.jpg",
    "img/pexels-em-hopper-3010851.jpg",
    "img/pexels-macro-photography-12569708.jpg",
    "img/pexels-pixabay-35669.jpg",
    "img/pexels-pixabay-45863.jpg",
    "img/pexels-pixabay-70083.jpg",
    "img/pexels-pixabay-73798.jpg",
    "img/pexels-pixabay-76957.jpg",
    "img/pexels-thierry-fillieul-638689.jpg",
    "img/pexels-thierry-fillieul-674318.jpg",
]

//controls pause and play functions
function playOrPause() {
    var playPause = document.getElementById('controlBtn');

    //toggles between play:pause
    playing = !playing; 

    //change text to current pause or play state
    playPause.innerText = playing ? 'Pause' : 'Play';

    if (playing) {
        //if state = playing, change autoSlide to timing from dropdown window
        autoSlide = setInterval(nextSlide, timing);
      } else {
        //if state != playing, remove autoSlide timing, causing slide to pause
        clearInterval(autoSlide);
      }
}

//shows slide
function showImage() {
    //all elements with class slide
    var slides = document.querySelectorAll('.slide');

    console.log('showImage called');
    console.log(slides);

    //iterate through slides array
    slides.forEach((slide, index) => {
        //img src = images[current]
        slide.src = images[index];
        slide.style.display = index == current ? 'block' : 'none';
    });
}

//controls next slide button
function nextSlide() {
    //increment current image index, then wrap back when reaching slideshow length
    current = (current + 1) % images.length;
    showImage();
}

//controls previous slide button
function prevSlide() {
    //decrement, then wrap when reaching slideshow length
    current = (current - 1 + images.length) % images.length;
    showImage();
}

//controls dropdown for changing timing
function changeTime(){
    var timingOptions = document.getElementById('timing');
    var selectedTime = timingOptions.value;

    //parse selected timing into int
    timing = parseInt(selectedTime);
    //clear assigned interval for autoSlide
    clearInterval(autoSlide);

    //set new time option
    if (playing) {
        autoSlide = setInterval(nextSlide, timing);
  }
}

//start slideshow
showImage();