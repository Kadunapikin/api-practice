const img = document.querySelector('img');
const reloadBtn = document.getElementById('reload-btn');


const loadRandomGif = () => {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=rzYxTMljevzFf9tAcXR5ZgM6kE4p1sHs&s=cats', { mode: 'cors' })
    .then(response => response.json())
    .then(response => {
      img.src = response.data.images.original.url;
    });
}

// Load a random GIF on initial page load
loadRandomGif();

// Add event listener to reload button
reloadBtn.addEventListener('click', loadRandomGif);