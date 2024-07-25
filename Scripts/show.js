const main = document.getElementById("main")

export const showMovieInfantil = (data) => {
    console.log(data)

    const {id, title, year, value, description, type} = data

    console.log(id, title, year, value, description, type);

    const movieInfantil_1 = document.createElement("div")
    movieInfantil_1.classList.add("movie-1")

    movieInfantil_1.innerHTML = `
    <div class= "Vivo">
    <img src=${`https://www.themoviedb.org/t/p/original/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg`}>
    </div>
    `;

    main.appendChild(movieInfantil_1);
};
