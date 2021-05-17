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
//token
 
//user input details
email.addEventListener('keyup',(ele)=>{
        login_update.email=ele.target.value
        console.log(login_update.email)
})
psw.addEventListener('keyup',(ele)=>{
    login_update.password=ele.target.value
})
let mytoken
//login
loginbutton.addEventListener("click",()=>Login())

const Login = () =>{
    url = 'https://rbds-attendance.herokuapp.com/user/login'
   
    const options = {
        method: 'POST',
        body: JSON.stringify(login_update),
        headers:{
            "Content-Type":"application/json"
        }
        
    };
    fetch(url,options).then((res) => res.json()).then((res)=>{
        localStorage.setItem("token",res?.token)
        if(res.message === "Auth successful"){
            
            unlock.className = "unlock icon"
            setTimeout(() => {
                window.location.replace('../mainpage/index.html')
            }, 3000);
        }
        else{
           warning.className = "ui icon warning message"
           usermessage.innerHTML = res.message||"please recheck details"
           setTimeout(() => {
            warning.className = "ui icon message"
            usermessage.innerHTML  = ""
        }, 3000)
        }
    })
    
    

}
