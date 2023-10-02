const categorii = document.getElementById("selectCategorie");
const rating = document.getElementById("selectRating");
const containerMovies = document.getElementById("containerMovies");
console.log("categorii html", categorii);
const filtruButton = document.getElementById("filtruButton");
console.log(filtruButton);

var filtruCategorie = "all-categories";
var filtruRating = "any-rating";
// categorii.addEventListener("change", async (e) => {
 
 

//   const filtru = e.target.value.toLowerCase()
//   filtruCategorie = filtru
//  const movies = await fetchData() 


// });

categorii.addEventListener("change",filtrare)
async function filtrare() {
  console.log('test');
  const movies = await fetchData() 
console.log(categorii.value);
  let moviesFiltered = movies.filter(movie =>{

    if (movie.category.toLowerCase().search(categorii.value) !== -1) {
      
      return true
      
    }
      return false
    
    })
    
    displayCard(moviesFiltered)
    
}

rating.addEventListener("change",filtrarePeRating)
async function filtrarePeRating() {
  console.log('test');
  const movies = await fetchData() 
console.log(rating.value);
  let moviesFiltered = movies.filter(movie =>{

    if (rating.value && Math.round(movie.rating) == rating.value) {
      
      return true
      
    }
      return false
    
    })
    displayCard(moviesFiltered)
    
}


const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("blur", async ()=>{
  cautaText()
  console.log('test2')
} )
async function cautaText() {
  
 const movies = await fetchData() 
 let moviesFiltered = [];
if(searchInput.value === ""){
  moviesFiltered = movies;
}else{

   moviesFiltered = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
}

      
console.log(moviesFiltered);
    
    displayCard(moviesFiltered);
};


// function contains(text_one, text_two){
//   if (text_one.indexOf(text_two) != -1){
//       return true;
//   }
// }

async function fetchData() {
  return await fetch("http://localhost:3002/movies").then((response) =>
    response.json()
  );
}

async function main() {
  const data = await fetchData();
  console.log("data", data);
displayCard(data)
  console.log("containerMovies", containerMovies);

  const filtru = "Action";

  let moviesFiltered;

  if (filtru === "") {
    moviesFiltered = data.filter((movie) => {
      console.log(
        "aici in filtru",
        movie,
        " = movie db",
        movie.category,
        " = movie.category db",
        filtru,
        " = filtru"
      );
      return movie.category === filtru;
    });
  } else {
    moviesFiltered = data;
    console.log("moviesFiltered = data");
  }
displayCard(moviesFiltered)
  console.log("moviesFiltered", moviesFiltered);

}

main();

// function trnsform(data) {
//   function filterCategory(type) {
//     return type.category.includes(selectedCateg);
//   }
//   data = data.result.rows.filter(filterDesignation);
//   return data;
// }

function displayCard(data) {
  containerMovies.innerHTML = ""
  data.forEach((element) => {
    containerMovies.innerHTML += `
    <div class="movie-card" id="${element.id}">
            <div class="movie-head">
              <img src="${element.image}" alt="" class="card-img">
            </div>
            <div class="card-body overview"  >
              <h3 class="card-title">Title: ${element.title}</h3>
              <div class="card-info">
                <div class="category">Genre: ${element.category}</div>
                <div class="rating">Rating: ${element.rating}</div>
                <div class="year">Year: ${element.year}</div>`;
  });
  
}