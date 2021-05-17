console.log('hi')
const out =document.getElementById("out")
const val =localStorage.getItem('token') 
console.log(val)
out.addEventListener("click",()=>logout())


const logout = () => {
    window.location.replace('./Homepage/index.html')
}

