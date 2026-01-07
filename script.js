const API_KEY = "YOUR_API_KEY";

function searchMovie() {
    const movieName = document.getElementById("movieInput").value;
    const resultDiv = document.getElementById("movieResult");

    if (movieName === "") {
        resultDiv.innerHTML = "<p>Please enter a movie name.</p>";
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                resultDiv.innerHTML = `<p>${data.Error}</p>`;
            } else {
                resultDiv.innerHTML = `
                    <div class="movie-card">
                        <img src="${data.Poster}" alt="Poster">
                        <h2>${data.Title}</h2>
                        <p><strong>Year:</strong> ${data.Year}</p>
                        <p><strong>Genre:</strong> ${data.Genre}</p>
                        <p><strong>IMDb Rating:</strong> ⭐ ${data.IMDbRating}</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = "<p>Error fetching movie data.</p>";
            console.error(error);
        });
}
