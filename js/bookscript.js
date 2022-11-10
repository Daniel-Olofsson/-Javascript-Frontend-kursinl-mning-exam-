let cookbookDiv = document.getElementById('cookbookDiv');
let firstButton = document.getElementById('button-addon1');
let secondButton = document.getElementById('button-addon2');
let thirdButton = document.getElementById('button-addon3');
let fourthButton = document.getElementById('button-addon4');

let getInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        console.log(data.length)
        
        data.forEach(datas => {
          for(let key in datas){
            console.log(`${key}: ${datas[key]}`)
            cookbookDiv.innerHTML += ` ${key}:  ${datas[key]} `;
          }
          
        });
        



        
        })
       
}








let putInfo = () => {
  let idValue = document.getElementById('input-id').value;
  let titelValue = document.getElementById('input-titel').value;
  let bodyValue = document.getElementById('input-body').value;
  let userIdValue = document.getElementById('input-userid').value;
  
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: idValue,
    title: titelValue,
    body: bodyValue,
    userId: userIdValue,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((postdata) => {
    
    console.log(postdata);
    console.log(postdata.id);
    console.log(postdata.title);
    console.log("hello")
    console.log(idValue)
    console.log(titelValue);
    cookbookDiv.innerHTML += `<hr>` + " ID: " + postdata.id + " Titel: " + postdata.title + " Body: " + postdata.body + " UserID: " + postdata.userId + `<hr>`;
  } );

}
firstButton.addEventListener('click', putInfo);
secondButton.addEventListener('click', putInfo);
thirdButton.addEventListener('click', putInfo);
fourthButton.addEventListener('click', putInfo);
window.addEventListener('load', getInfo);