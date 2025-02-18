const resultsItem = document.getElementsByClassName('programAcordeonItem');

for (let i = 0; i < resultsItem.length; i++) {
    resultsItem[i].addEventListener("click", function() {
        for (let j = 0; j < resultsItem.length; j++) {
            if (i !== j) {
                resultsItem[j].classList.remove("active");
            }
        }
        this.classList.toggle("active");
    });
}

const questionsItem = document.getElementsByClassName('questionsItem');

for (let i = 0; i < questionsItem.length; i++) {
    questionsItem[i].addEventListener("click", function() {
        for (let j = 0; j < questionsItem.length; j++) {
            if (i !== j) {
                questionsItem[j].classList.remove("active");
            }
        }
        this.classList.toggle("active");
    });
}

const overlay = document.getElementById('overlay');
const videoIframe = document.getElementById('video-iframe');
function openOverlay(src) {

    videoIframe.src = src;
    overlay.style.display = 'block';
}

function closeOverlay() {
    overlay.style.display = 'none';
    videoIframe.src = '';
}
