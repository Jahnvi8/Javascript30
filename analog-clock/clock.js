const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const sec = now.getSeconds();
    const secToDeg = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secToDeg}deg)`

    const min = now.getMinutes();
    const minToDeg = ((min / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minToDeg}deg)`

    const hour = now.getHours();
    const hourToDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`
}

setInterval(setDate, 1000);