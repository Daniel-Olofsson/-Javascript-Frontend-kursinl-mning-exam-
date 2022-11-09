let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let recipeName = document.getElementById("recipe-name");
let url = "https://themealdb.com/api/json/v1/1/search.php?s=";

let varukorg = [];

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

        varukorg.push(myMeal);

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

        console.log(varukorg);
   
        //document.cookie = `cart=${ingredients} "SameSite=None"; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
        //allCookies += document.cookie;
        
        //local storage for recipe list
        //localStorage.setItem('Varukorg',ingredients);
        //localStorage.setItem('foodName', myMeal.strMeal);
        //recipeList.innerHTML += myMeal.strMeal + `<br></br>`;
        //recipeName.innerHTML +=  myMeal.strMeal + `<br></br>`+ ingredients + `<br></br>`;
        displayVarukorg();
        //log
      
        console.log(ingredients);
        //results for user search
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
        });
        
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">Please enter a valid recipe</h3>`;
      });
  }
};

function displayVarukorg(){
  recipeName.innerHTML = "";

  for (i=0; i<varukorg.length; i++)
  {
    var myMeal = varukorg[i];

    let count = 1;
    let ingredients = [];
        for (let i in myMeal) {
            let ingredient = "";
            let measure = "";
            if (i.startsWith("strIngredient") && myMeal[i]) {
                ingredient = myMeal[i];
                if (myMeal[`strMeasure` + count]) {
                    measure = myMeal[`strMeasure` + count];
            } 
                else {
                    measure = "";
                }
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
          }
    }
    console.log("ingredients")

    recipeName.innerHTML += `
      <h2>${myMeal.strMeal}</h2>
      <h3>Ingredients:</h3>
      <p>${ingredients}</p>
      <hr>
      `;
  }

}

window.addEventListener("load", getInfo);
searchBtn.addEventListener("click", getInfo);