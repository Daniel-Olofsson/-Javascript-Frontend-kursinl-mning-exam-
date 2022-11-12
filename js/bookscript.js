let cookbookDiv = document.getElementById('cookbookDiv');

let firstButton = document.getElementById('button-addon1');
let secondButton = document.getElementById('button-addon2');
let thirdButton = document.getElementById('button-addon3');
let fourthButton = document.getElementById('button-addon4');

let sixthButton = document.getElementById('button-addon6');
let seventhButton = document.getElementById('button-addon7');
let eighthButton = document.getElementById('button-addon8');

let fifthButton = document.getElementById('button-addon5');
let ninthButton = document.getElementById('button-addon9');
let tenthButton = document.getElementById('button-addon10');
let eleventhButton = document.getElementById('button-addon11');

let twelfthButton = document.getElementById('button-addon12');
//let thirteenthButton = document.getElementById('button-addon13');
//let fourteenthButton = document.getElementById('button-addon14');
//let fifteenthButton = document.getElementById('button-addon15');


//fetch
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
//PUT
let putInfo = () => {
  let idValue = document.getElementById('input-id').value;
  let titelValue = document.getElementById('input-titel').value;
  let bodyValue = document.getElementById('input-body').value;
  let userIdValue = document.getElementById('input-userid').value;
  
  fetch('https://jsonplaceholder.typicode.com/posts/' + idValue, {
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

//POST
let postInfo = () => {
  let postTitelValue = document.getElementById('post-input-titel').value;
  let postBodyValue = document.getElementById('post-input-body').value;
  let postUserIdValue = document.getElementById('post-input-userid').value;
  fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  body: JSON.stringify({
    //id: postIdValue,
    title: postTitelValue,
    body: postBodyValue,
    userId: postUserIdValue,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((postdata) => {
    console.log(postdata);
    console.log("hello")
    cookbookDiv.innerHTML += `<hr>` + " ID: " + postdata.id + " Titel: " + postdata.title + " Body: " + postdata.body + " UserID: " + postdata.userId + `<hr>`;
  } );

}



//PATCH
let patchInfo = () => {
  let patchIdValue = document.getElementById('patch-input-id').value;
  let patchTitelValue = document.getElementById('patch-input-titel').value;
  let patchBodyValue = document.getElementById('patch-input-body').value;
  let patchUserIdValue = document.getElementById('patch-input-userid').value;
  fetch('https://jsonplaceholder.typicode.com/posts/' + patchIdValue, {
  method: 'PATCH',
  body: JSON.stringify({
    //id: patchIdValue,
    title: patchTitelValue,
    body: patchBodyValue,
    userId: patchUserIdValue,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((postdata) => {
    console.log(postdata);
    console.log("hello")
    cookbookDiv.innerHTML += `<hr>` + " ID: " + postdata.id + " Titel: " + postdata.title + " Body: " + postdata.body + " UserID: " + postdata.userId + `<hr>`;
  } );

}
let deleteIdValue = document.getElementById('delete-input-id').value;
let deleteInfo = async () => {
try {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' +deleteIdValue, {
    method: "delete"
  });

  if (!response.ok) {
    const message = 'Error with Status Code: ' + response.status;
    throw new Error(message);
  }

  const data = await response.json();
  console.log(data);
  console.log(response);
  cookbookDiv.innerHTML += `<hr> Status text: ` + data
} catch (error) {
  console.log('Error: ' + error);
}

}







firstButton.addEventListener('click', putInfo);
secondButton.addEventListener('click', putInfo);
thirdButton.addEventListener('click', putInfo);
fourthButton.addEventListener('click', putInfo);

sixthButton.addEventListener('click', postInfo);
seventhButton.addEventListener('click', postInfo);
eighthButton.addEventListener('click', postInfo);

fifthButton.addEventListener('click', patchInfo);
ninthButton.addEventListener('click', patchInfo);
tenthButton.addEventListener('click', patchInfo);
eleventhButton.addEventListener('click', patchInfo);

twelfthButton.addEventListener('click', deleteInfo);
//thirteenthButton.addEventListener('click', deleteInfo);
//fourteenthButton.addEventListener('click', deleteInfo);
//fifteenthButton.addEventListener('click', deleteInfo);

window.addEventListener('load', getInfo);