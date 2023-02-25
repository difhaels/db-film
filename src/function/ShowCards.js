const showCards = (movie) => {
  return `<div class="border-2 border-slate-400 rounded-md p-5">
      <img src=${movie.Poster} class="h-[450px]"/>
      <div class="flex flex-col space-y-1">
        <h1 class="text-2xl">${movie.Title}</h1>
        <h1 class="text-slate-600 text-xl">${movie.Year}</h1>
        <button class="show-detail bg-sky-500 hover:bg-sky-800 text-white py-2 text-xl rounded-md w-[172px]" data-imdbid="${movie.imdbID}">Show Details</button>
      </div>
    </div>`;
};

export default showCards;
