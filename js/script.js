(function ($) {
    "use strict";

    // Sakura falling animation
    $('.sakura-falling').sakura('start', {
        blowAnimations: [
            'blow-soft-left'
        ],                    // Horizontal movement animation names
        className: 'sakura',  // Class name to use
        fallSpeed: 3.5,       // Factor for petal fall speed
        maxSize: 25,          // Maximum petal size
        minSize: 12,           // Minimum petal size
        newOn: 250,           // Interval after which a new petal is added
    });

})(jQuery);

// Play or Pause audio on click
$(document).on('click', function () {
    const audio = document.getElementById("my_audio");
    if (audio) {
        if (audio.paused) {
            audio.play(); // Play the audio if it is paused
        } else {
            audio.pause(); // Pause the audio if it is playing
        }
    } else {
        console.error("Audio element not found.");
    }
});


// Countdown timer for the wedding date
const countDownDate = new Date("April 15, 2025 12:00:00").getTime();

// Update the countdown every second
const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for a happy life!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML =
        `<div class='container'>
            <div class='days block'>${days}<br>Days</div>
            <div class='hours block'>${hours}<br>Hours</div>
            <div class='minutes block'>${minutes}<br>Minutes</div>
            <div class='seconds block'>${seconds}<br>Seconds</div>
        </div>`;
}, 1000);

// Console log styles and messages
const styles = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 4px solid #3E0E02',
    'color: white',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

const styles1 = [
    'color: #FF6C37',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

const styles2 = [
    'color: teal',
    'display: block',
    'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
    'line-height: 40px',
    'font-weight: bold',
    'font-size: 32px'
].join(';');

console.log('%c SAVE THE DATE: 15th April, 2022', styles);
console.log('%cYour presence is requested!%c\n\nRegards: Harshal & Nandini', styles1, styles2);
