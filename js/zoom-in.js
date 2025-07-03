const zoom = document.getElementById('zoomed-in');
const background = document.querySelector('.highlight-bg')
const img = zoom.querySelector('img');
const video = zoom.querySelector('video');
var media, cap;

const artpieces = document.querySelectorAll('.artpiece');
artpieces.forEach(artpiece => {
    artpiece.addEventListener('click', () => {
        media = artpiece.querySelector('img, video');
        cap = artpiece.querySelector('figcaption');
            
        if (media.tagName.toLowerCase() === 'img') {
            img.src = media.src;
            img.classList.remove('hidden');
            video.classList.add('hidden');
            img.style.height = img.naturalHeight < img.naturalWidth / 2 ? 'auto' : '80%';
        } else {
            video.src = media.src;
            video.classList.remove('hidden');
            img.classList.add('hidden');
            video.controls = media.classList.contains('control');
        }
        zoom.querySelector('figcaption').innerHTML = cap.innerHTML;

        zoom.classList.remove('hidden');
        background.classList.remove('hidden');
        PauseVideos(true);
    });
});

function PauseVideos(pause) {
    artpieces.forEach(artpiece => {
        let media = artpiece.querySelector('video');
        if (media) {
            if (pause) {
                media.pause();
            } else {
                media.play();
            }
        }
    });
}

function CloseZoom() {
    zoom.classList.add('hidden');
    background.classList.add('hidden');
    video.muted = true;
    PauseVideos(false);
}

zoom.addEventListener('click', CloseZoom);
background.addEventListener('click', CloseZoom);