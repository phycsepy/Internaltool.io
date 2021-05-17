//input 
const semail = document.getElementById('semail')
const spsw = document.getElementById('spsw')
//button
const SignUp = document.getElementById('ssignup')
//livecontent
const livecontent = document.getElementById('livecontent')
//Stronging the data 
const sign_updata ={"email":"","password":""}
//email
semail.addEventListener('keyup',(ele)=>{
    sign_updata.email = ele.target.value
})
//password
spsw.addEventListener('keyup',(ele)=>{
    sign_updata.password = ele.target.value
})

SignUp.addEventListener('click',()=>Sign_Up())

const Sign_Up = ()=>{
    url = 'https://rbds-attendance.herokuapp.com/user/signup'
    const options = {
        method: 'POST',
        body: JSON.stringify(sign_updata),
        headers:{
            "Content-Type":"application/json"
        }
        
    };
     fetch(url,options).then((res) => res.json()).then((res)=>{
          livecontent.innerHTML = (res.message !== undefined)?res.message:"Please recheck yout details"
     })    
    
}