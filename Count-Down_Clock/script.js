function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    //get total difference in seconds
    var seconds = Math.floor((t / 1000) % 60);
    //convert total seconds to number of seconds by dividing total seconds by number of seconds remaining after days,hourse and minutes are account for:
    var minutes = Math.floor((t / 1000 / 60) % 60);
    //convert total seconds to number of miutes by dividing total seconds by number of minutes remaining after days and hours are account for:
    var hours = Math.floor((t / 1000 * 60 * 60) % 24);
    //convert total seconds to number of hours by dividing total seconds by number of hours remaining after days are account for:       
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    //convert total seconds to number of days by dividing total seconds by number of days in seconds 
    debugger;
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };

}
function initializeClock(id, endTime) {
    var clock = document.getElementById(id);
    //first grab #clockDiv from div
    var daysSpan = clock.querySelector('.days');
    //grab the days span tag from the #clockdiv 's div
    var hoursSpan = clock.querySelector('.hours');
    //grab the Hours span tag from the #clockdiv 's div
    var minutesSpan = clock.querySelector('.minutes');
    //grab the minutes span tag from the #clockdiv 's div
    var secondsSpan = clock.querySelector('.seconds');
    //grab the seconds span tag from the #clockdiv 's div

    function updateClock() {
        var t = getTimeRemaining(endTime)
        //calculate endTime date -current date and return a 

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
    updateClock();
    var timeInterval = setInterval(updateClock, 1000)
}
var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);