let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://themealdb.com/api/json/v1/1/search.php?s=";
let getInfo = () => {
  let userInp = document.getElementById("user-inp").value;
  if (userInp.length == 0) {
    result.innerHTML = `<h3 class="msg">The input field cannot be empty</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("user-inp").value = "";
        console.log(data);
        console.log(data.meals[0]);
        let myMeal = data.meals[0];
        console.log(myMeal.strMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strInstructions);
        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            if (myMeal[`strMeasure` + count]) {
              measure = myMeal[`strMeasure` + count];
            } else {
              measure = "";
            }
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
        }
        // modal
        //document.cookie = `cart=${ingredients} "SameSite=None"; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
        //allCookies += document.cookie;
        let modal_titel = document.createElement('h1');
        document.getElementById('modalcontent').appendChild(modal_titel);
        modal_titel.innerHTML = myMeal.strMeal;
        //local storage for recipe list
        const storageData = localStorage.getItem('Varukorg');
        document.getElementById('modalcontent').innerHTML += storageData;
        localStorage.setItem('Varukorg',ingredients);
        console.log(storageData);
        console.log(ingredients);
        result.innerHTML = `
      <img src=${myMeal.strMealThumb}>
      <h2>${myMeal.strMeal}</h2>
      <h3>Ingredients:</h3>
      <ul class="ingredients"></ul>
      <h3>Instructions:</h3>  
      <p>${myMeal.strInstructions}</p>
      `;
        
        let ingredientsCon = document.querySelector(".ingredients");
        ingredients.forEach((item) => {
          let listItem = document.createElement("li");
          listItem.innerText = item;
          ingredientsCon.appendChild(listItem);
          //display modal button
          //document.getElementById("myBtn").style.display = "block";
        });
        
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Please enter a valid recipe</h3>`;
      });
  }
};
window.addEventListener("load", getInfo);
searchBtn.addEventListener("click", getInfo);

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var modalcontainer = document.getElementsByClassName("modal-content");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
