const zoom = document.getElementById('zoomed-in');
var media;
const img = zoom.querySelector('img');
const video = zoom.querySelector('video');
var cap;

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
        }
        zoom.querySelector('figcaption').innerHTML = cap.innerHTML;

        zoom.classList.remove('hidden');
    });
});

zoom.addEventListener('click', () => {
    zoom.classList.add('hidden');
});