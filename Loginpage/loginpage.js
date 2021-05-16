//storing data of inputs
const login_update={"email":"","password":""}
//buttons 
const homebutton =document.getElementById("home")
const SignUpbutton = document.getElementById('SignUp')
const loginbutton = document.getElementById("login")
//inputs
const email =document.getElementById("email")
const psw = document.getElementById("psw")
//user message
const warning = document.getElementById('warning')//class
const unlock = document.getElementById('unlock')//class
const usermessage = document.getElementById('userm')//content


//user input details
email.addEventListener('keyup',(ele)=>{
        login_update.email=ele.target.value
        console.log(login_update.email)
})

psw.addEventListener('keyup',(ele)=>{
    login_update.password=ele.target.value
})

//login
loginbutton.addEventListener("click",()=>Login())
