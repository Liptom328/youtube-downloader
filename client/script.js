var convertBtnMp3 = document.querySelector('.convert-button-mp3');
var convertBtnMp4 = document.querySelector('.convert-button-mp4');
var heading = document.querySelector('.heading');
var URLinput = document.querySelector('.URL-input');

convertBtnMp3.addEventListener('click', () => {
    if(URLinput.value.startsWith("https://youtu.be/") || URLinput.value.startsWith("https://www.youtube.com/watch?v=")) {
        heading.innerHTML = "Downloading...";
        sendURL(URLinput.value, 'mp3');
    } else {
        heading.innerHTML = "Error: Not a valid URL";
    }
});

convertBtnMp4.addEventListener('click', () => {
    if(URLinput.value.startsWith("https://youtu.be/") || URLinput.value.startsWith("https://www.youtube.com/watch?v=")) {
        heading.innerHTML = "Downloading...";
        console.log(URLinput.value.lenght)
        sendURL(URLinput.value, 'mp4');
    } else {
        heading.innerHTML = "Error: Not a valid URL";
    }
});

function sendURL(URL, format) {
    window.location.href = `http://localhost:4000/${format}?URL=${URL}`;
    heading.innerHTML = "Liptom328 YouTube Downloader!";
}