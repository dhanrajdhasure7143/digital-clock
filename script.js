const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

/**
 * An array of the days of the week
 * @type {string[]}
 */
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/**
 * An array of the months of the year
 * @type {string[]}
 */
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Toggles the dark mode
 * @param {MouseEvent} e - The click event
 */
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

/**
 * Sets the clock hands to the correct positions, and updates the time and date display elements.
 */
function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

/**
 * Scales a number from one range to another range.
 * @param {number} num - The number to scale
 * @param {number} in_min - The minimum of the input range
 * @param {number} in_max - The maximum of the input range
 * @param {number} out_min - The minimum of the output range
 * @param {number} out_max - The maximum of the output range
 * @returns {number} The scaled number
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

/**
 * Initializes the clock by setting it to the current time, and starts the interval which will update the clock every second.
 */
setTime()

/**
 * Starts an interval which will call the setTime function every second, thus keeping the clock up to date.
 */
setInterval(setTime, 1000)

/**
 * Logs the author of the program to the console.
 */
function author() {
    console.log('Created with ❤️ by Dhanraj D. Hasure');
}

/**
 * Calls the author function.
 */
author()
