let btn=document.querySelector("button");
let form = document.querySelector('form');
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    document.querySelector('img').src = `https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif`
    let inp = document.querySelector('input').value
   let response = await  fetch(`https://source.unsplash.com/random/900×700/?${inp}`) 
   document.querySelector('img').src =response.url
})


// let formm=document.querySelector('form')
// formm.addEventListener("submit",async(e)=>{
//     e.preventDefault()
// document.querySelector("img").src = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
//     let inp = document.querySelector("input").value
//  let f=await fetch(`https://source.unsplash.com/random/900×700/?${inp}`)
//  let response=await f.url
//  document.querySelector("img").src=response
// })