const apiKey = "ddc45a5bc0d3ef708de57e045e9cf37a";

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const moviesContainer = document.getElementById("moviesContainer");
const loader = document.getElementById("loader");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        searchMovies(query);
    }
});

function searchMovies(query) {
    loader.style.display = "block";

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(res => res.json())
        .then(data => {
            loader.style.display = "none";
            displayMovies(data.results);
        })
        .catch(err => {
            loader.style.display = "none";
            console.log(err);
        });
}

function displayMovies(movies) {
    moviesContainer.innerHTML = "";

    if (!movies || movies.length === 0) {
        moviesContainer.innerHTML = "<p>Aucun film trouvé 😢</p>";
        return;
    }

    movies.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("movie");

        div.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.vote_average}</p>
        `;

        moviesContainer.appendChild(div);
    });
}

div.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" onerror="this.src='https://via.placeholder.com/300x450'">
    <h3>${movie.title}</h3>
    <p>⭐ ${movie.vote_average}</p>
`;