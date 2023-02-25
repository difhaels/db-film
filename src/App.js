import ShowCards from "./function/ShowCards";
import ShowDetail from "./function/ShowDetail";

function App() {
  return (
    <div className="mx-64 relative">
      <h1 className="dx-mo text-5xl font-bold my-10">DX MOVIES DATABASE</h1>
      <input type="text" className="input-keyword border-2 w-[80%] h-10 text-xl p-2" placeholder="Search Database Movie" />
      <button
        className="search-button text-xl bg-sky-500 text-white px-5 py-2"
        onClick={function () {
          const inputKeyword = document.querySelector(".input-keyword");
          fetch(`http://www.omdbapi.com/?apikey=b47f8f50&s=${inputKeyword.value}`)
            .then((response) => response.json())
            .then((response) => {
              const movies = response.Search;
              let cards = "";
              movies.forEach((m) => {
                cards += ShowCards(m);
              });
              const movieContainer = document.querySelector(".movie-container");
              movieContainer.innerHTML = cards;
              // when show detail
              const modalDetailButton = document.querySelectorAll(".show-detail");
              modalDetailButton.forEach((btn) => {
                btn.addEventListener("click", function () {
                  const imdbId = this.dataset.imdbid;

                  fetch(`http://www.omdbapi.com/?apikey=b47f8f50&i=${imdbId}`)
                    .then((response) => response.json())
                    .then((m) => {
                      const movieDetail = ShowDetail(m);
                      const modalBody = document.querySelector(".detail-body");
                      const detail = document.querySelector(".detail");
                      detail.classList.remove("sr-only");
                      const closeBtn = document.querySelector(".close-button");
                      closeBtn.classList.remove("sr-only");
                      modalBody.innerHTML = movieDetail;
                    });
                });
              });
            });
        }}
      >
        Search
      </button>
      <div className="movie-container mt-7 inline-grid grid-cols-3 gap-3"></div>
      <div className="detail">
        <div className="detail-body relative"></div>
        <button
          className="bg-red-600 px-5 py-2 rounded-xl text-white text-xl fixed right-3 bottom-3 close-button sr-only"
          onClick={() => {
            const detail = document.querySelector(".detail");
            detail.classList.add("sr-only");
          }}
        >
          close
        </button>
      </div>
    </div>
  );
}

export default App;
