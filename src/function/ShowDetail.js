const ShowDetail = (m) => {
  return `<div class="card-detail w-[700px] border-2 p-3 shadow-2xl bg-white">
            <div class="flex items-center">
                <img src=${m.Poster} class="w-auto h-[250px]" />
                <ul class="pl-5">
                    <li class="text-xl font-bold pb-2">
                        <h1>${m.Title} (${m.Year})</h1>
                    </li>
                    <li>
                        <strong>Director : </strong>${m.Director}
                    </li>
                    <li>
                        <strong>Genre : </strong>${m.Genre}
                    </li>
                    <li>
                        <strong>Rated : </strong>${m.Rated}
                    </li>
                    <li>
                        <strong>Released : </strong>${m.Released}
                    </li>
                    <li class="text-justify mb-[80px]">
                        <strong>Plot : </strong>${m.Plot}
                    </li>
                </ul>
            </div>
        </div>`;
};

export default ShowDetail;
