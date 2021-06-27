const newYear="1 Jan 2022";

const daysText= document.getElementById("days");
const hoursText= document.getElementById("hours");
const minsText= document.getElementById("mins");
const secText= document.getElementById("sec");

function countDown() {
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const timeLeft=Math.floor(newYearDate-currentDate);
    const totalSecLeft=Math.floor(timeLeft/1000);
    const daysLeft=Math.floor(totalSecLeft/3600/24);
    const hourLeft=Math.floor(totalSecLeft/3600)%24;
    const minsLeft=Math.floor(totalSecLeft/60)%60;
    const secLeft=Math.floor(totalSecLeft)%60;
    // console.log(secLeft);
    // console.log(hourLeft);
    // console.log(minsLeft);

    daysText.innerHTML=daysLeft;
    hoursText.innerHTML=formatTime(hourLeft);
    minsText.innerHTML=formatTime(minsLeft);
    secText.innerHTML=formatTime(secLeft);

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countDown();

setInterval(countDown, 1000);