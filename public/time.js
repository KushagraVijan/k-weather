const time = document.getElementById('timeData');


setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString();
}, 1000);

const sunrise = document.getElementById('sunrise').innerHTML;
const sunset = document.getElementById('sunset').innerHTML;
const sunrise2 = document.getElementById('sunrise2').innerHTML;
const sunset2 = document.getElementById('sunset2').innerHTML;
const sunrise3 = document.getElementById('sunrise3').innerHTML;
const sunset3 = document.getElementById('sunset3').innerHTML;

document.getElementById('sunrise').innerHTML = moment(sunrise * 1000).format('h:mm A');
document.getElementById('sunset').innerHTML = moment(sunset * 1000).format('h:mm A');
document.getElementById('sunrise2').innerHTML = moment(sunrise2 * 1000).format('h:mm A');
document.getElementById('sunset2').innerHTML = moment(sunset2 * 1000).format('h:mm A');
document.getElementById('sunrise3').innerHTML = moment(sunrise3 * 1000).format('h:mm A');
document.getElementById('sunset3').innerHTML = moment(sunset3 * 1000).format('h:mm A');