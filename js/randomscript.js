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
            let myRandomMeal = data.meals[0]
            //log the prob selected prob
            console.log(myRandomMeal.strMeal);
            console.log(myRandomMeal.strCategory);
            console.log(myRandomMeal.strTags);
            console.log(myRandomMeal.strMealThumb);
            console.log(myRandomMeal.strYoutube);
            console.log(myRandomMeal.strArea);
            var counter = 1;
            for(var i = 0; i < counter; i++){
                randomresult.innerHTML += `
                <img src=${myRandomMeal.strMealThumb} class="img-fluid img-thumbnail" style="heigth:10:%; width: 10%;">
                <h2>${myRandomMeal.strMeal}</h2>
                <h2>Youtube:</h2>
                <a href="${myRandomMeal.strYoutube}" target="_blank">Visit tutorial!</a> 
                <h2>Tags:</h2>
                <h2>${myRandomMeal.strTags}</h2>
                <h2>Category:</h2>
                <h2>${myRandomMeal.strCategory}</h2>
                `;
            }


        })

}
for (let i = 0; i < 20; i++) {
    getInfo();
  }

window.addEventListener("load", getInfo);
random_searchbtn.addEventListener("click", getInfo);