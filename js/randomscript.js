let randomresult = document.getElementById("randomresult");
let random_searchbtn = document.getElementById("randomsearch-btn");
let url = "https://themealdb.com/api/json/v1/1/random.php"




let getInfo = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //random obj
            console.log(data);
            //random obj with prop
            console.log(data.meals[0]);
            //list for obj
            let myRandomMeal = data.meals[0];
            
            //log the prob selected prob
            console.log(myRandomMeal.strMeal);
            console.log(myRandomMeal.strCategory);
            console.log(myRandomMeal.strTags);
            console.log(myRandomMeal.strSource)
            console.log(myRandomMeal.strMealThumb);
            console.log(myRandomMeal.strYoutube);
            console.log(myRandomMeal.strArea);
            //
            
            for(let i = 0; i<1; i++){
                let text = "";

                text += `<div class="card">
                <div class=card-header>${myRandomMeal.strMeal}</div>
                <img src=${myRandomMeal.strMealThumb} class="img-fluid img-thumbnail" style="heigth:10:%; width: 10%;">
                <h2>Source: ${myRandomMeal.strSource}</h2>
                <a href="${myRandomMeal.strYoutube}" target="_blank">Youtube tutorial</a>
                <h2>Category: ${myRandomMeal.strCategory}</h2> 
                `;
                if(myRandomMeal.strTags != null){
                  text += `<h2>Tags: ${myRandomMeal.strTags}</h2>
                  </div>`
                }
                else {
                  text += `</div>`
                }
                
                randomresult.innerHTML += text;

            }


        })

}
function randomRecipes(){
for (let i = 0; i < 20; i++) {
    getInfo();
  }
}

window.addEventListener("load", getInfo);
random_searchbtn.addEventListener("click", randomRecipes);