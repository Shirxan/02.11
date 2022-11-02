let btn = document.querySelector('#one');
btn.addEventListener("click", (e)=>{
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response=>{
    response.json()
    .then(gelenData => {
    let data = '';
    for(let i = 0;i<gelenData.length;i++){
        data += `<li class="list-group-item"> Comment:${gelenData[i].id} <br> ${gelenData[i].body} </li>`
    }document.querySelector('ul').innerHTML = data

    })
    .catch(err => console.log(err))
})
.catch(err => console.log(err))
})
