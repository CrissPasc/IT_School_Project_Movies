async function fetchData() {
    return await fetch("http://localhost:3002/movies").then((response) =>
      response.json()
    ).then(data => { displayCard(data.results);})
    
}
displayCard(data.results);



function displayCard(data){
    
   data.forEach((element) => {
      containerMovies.innerHTML += `
      <div class="movie-card" id="${element.id}">
            <div class="movie-head">
              <img src="${element.image}" alt="" class="card-img">
              <div class="card-overlay">
                <div class="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="rating-card">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>${element.rating}}</span>
                </div>
                <div class="play">
                  <ion-icon class="play-circle-outline"></ion-icon>
                </div>
              </div>
            </div>
            <div class="card-body" >
              <h3 class="card-title">${element.title}</h3>
              <div class="card-info">
                <span class="category">${element.category}</span>
                <span class="rating">${element.rating}</span>
                <span class="year">${element.year}</span>
              </div>
            </div>
          </div>`;
        });
    };



  async function main() {
    const data = await fetchData();
    console.log("data", data);
  displayCard(data);
    console.log("containerMovies", containerMovies);
  }