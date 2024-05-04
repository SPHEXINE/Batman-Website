
const { movies } = window;

// For debugging, display all of our data in the console.
console.log({ movies }, "Data");

window.onload = function () {

    const cardContain = document.querySelector(".container");

    movies.forEach(movie => {

       const card = displayContent(movie);

       cardContain.appendChild(card);
    });
};

function displayContent(movieCard)
{
    // Create a <div> to hold the card
    const card = document.createElement('div');
    // Add the .card class to the <div>
    card.classList.add("card");

    //Create movie thumbnail image for the card
    const image = document.createElement('img');
    image.src = movieCard.thumbnail;
    image.classList.add("card-image");
    image.style.width = "380px";
    image.style.height = "auto";
    card.appendChild(image);

    // Create movie Title for the card
    const title = document.createElement('h3');
    title.textContent = movieCard.movieName;
    card.appendChild(title);

    //Create release date for the card
    const releaseDate = document.createElement('h4');
    releaseDate.textContent = movieCard.relDate;
    card.appendChild(releaseDate);

    //create a watchable trailer Button
    const watTra = document.createElement('button');
    watTra.textContent = "Watch Trailer";

    //If user clicks on button it will launch the iframe
    watTra.onclick = function() {

        //calls function to create iframe
        playTrailer(movieCard);

    };


    //creates link for the card
    const movURL = document.createElement('a');
    movURL.href = movieCard.urls[0].url;

    //makes the card a clickable link to movie, also its position matters so if you move the code of the line
    //the content's position will change
    movURL.appendChild(image);
    movURL.appendChild(title);
    movURL.appendChild(releaseDate);

    card.appendChild(movURL);
    card.appendChild(watTra);

    return card;
}

function playTrailer(trailerURL)
{
    const trailer = document.querySelector('.video');
    trailer.innerHTML = "";

    //creates the name same with "title" to display on top of iframe
    const moviName = document.querySelector('.moviName')
    moviName.textContent = trailerURL.movieName;

    //creates a iframe for the Trailer
    const movTra = document.createElement('iframe');
    movTra.src = trailerURL.urls[1].url;
    movTra.width = "460";
    movTra.height = "260";
    movTra.allowFullscreen = true;

    trailer.appendChild(movTra);

    return trailer;
}