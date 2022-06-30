/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import popUP from './popUp.js';
import likeFeature from './likeButton.js';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

const container = document.querySelector('#popular-section');

const display = (movies) => {
  movies.forEach((movie) => {
    const { title, poster_path, vote_average } = movie;
    
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.id = (id);
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h4>${title}</h4>
        </div>
  <div class="interact">
          <button type="button" class="btn btn-info comment" data-toggle="modal" data-target="#exampleModal">Comment<i class="bi bi-chat"></i></button>
          <button type="button" class="like-btn">
           <span class="icon">
              <i class="fa-regular fa-heart"></i>
           </span>
          </button>
          <span class="${getClassByRate(vote_average)} span">
          ${vote_average}
        </span>
  </div>
      `;
    container.appendChild(movieEl);
  });
  likeFeature();
  popUP(movies);
};

function getClassByRate(vote) {
  if (vote >= 7) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
}

export default display;