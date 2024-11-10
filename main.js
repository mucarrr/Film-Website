const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", () => {
    clickCounter++;
    
    if (imageItem - (5 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else{
        movieLists[i].style.transform = `translateX(0)`;
        clickCounter = 0;
      
    }
  });
});


document.querySelector(".toggle-ball").addEventListener("click", ()=>{ document.querySelectorAll(".container,.movie-list-title, .navbar, .side-bar, .side-bar i, .toggle, .toggle-ball, .movie-list-filter select").forEach((item) => item.classList.toggle("active"))});
   
console.log(window.innerWidth)
