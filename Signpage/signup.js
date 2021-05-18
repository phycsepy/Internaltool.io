//input 
const semail = document.getElementById('semail')
const spsw = document.getElementById('spsw')
//button
const SignUp = document.getElementById('ssignup')
//livecontent
const warning = document.getElementById('warning')//class
const unlock = document.getElementById('unlock')//class
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
         if(sign_updata.email ===""&& sign_updata.password===""){
            livecontent.innerHTML = "Fill the deails"
            warning.className = "ui icon warning message"
            setTimeout(() => {
                livecontent.innerHTML =''
                warning.className = "ui icon message"
            }, 3000);

         }
          
         else if(res.message ==="User created"){
              livecontent.className="bluecolor"
              livecontent.innerHTML="User created"
                  
              setTimeout(()=>{
                window.location.replace('../Loginpage/index.html')
              },6000)
          }
          else{
            livecontent.innerHTML = (res.message !== undefined)?res.message:"Please recheck yout details"
            warning.className = "ui icon warning message"
            setTimeout(() => {
                livecontent.innerHTML =''
                warning.className = "ui icon message"
            }, 3000);
          }
          
          
     })   
        
     
    
}