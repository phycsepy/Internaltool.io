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

// const newda={"url":"","message":"","token":""}
const Login=()=>{
    url = 'https://rbds-attendance.herokuapp.com/user/login'
    sendserver(login_update,url)

    // console.log(newda)
    // if(newda.message==="Auth successful"){
    //     usermessage.innerHTML="Login Successful"
    //     unlock.className ="unlock icon"

    //     setTimeout(() => {
           
    //         window.location.replace(newda.url)
    //     }, 3000);
    // }
    // else{
    //     usermessage.innerHTML = newda.message
    //     warning.className = "ui icon warning message"

    // }


    
}
    
const save = []
//call server
const sendserver =(details,url)=>{
    console.log('in send of login')
    const options = {
        method: 'POST',
        body: JSON.stringify(details),
        headers:{
            "Content-Type":"application/json"
        }
        
    };
     save.push(fetch(url,options).then((res) => res.json()))
        
    console.log(save)
}
// homepage
homebutton.addEventListener("click",()=>{
    window.location.replace("../Homepage/index.html")
})
//signUppag
SignUpbutton.addEventListener("click",()=>{
    window.location.replace("../Signpage/index.html")
})

