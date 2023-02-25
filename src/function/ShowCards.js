import "../index.css";
const showCards = (movie) => {
  return `<div class="card">
      <img src=${movie.Poster} class="h-[450px]"/>
      <div class="text">
        <h1 class="title">${movie.Title}</h1>
        <h1 class="year">${movie.Year}</h1>
        <button class="show-detail bg-sky-500 hover:bg-sky-800 text-white py-2 text-xl rounded-md w-[172px]" data-imdbid="${movie.imdbID}">Show Details</button>
      </div>
    </div>`;
};

export default showCards;
