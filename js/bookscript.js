
let getInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.userId)
        console.log(data.title)
        var titelData = data.title;
        var userID = data.userId;



        let cookbookDiv = document.getElementById('cookbookDiv')
        cookbookDiv.innerHTML += "Titel: " + data.title + " ID: " + data.userId;})
       
}


window.addEventListener('load', getInfo);