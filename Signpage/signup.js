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

    fetch('https://rbds-attendance.herokuapp.com/user/signup', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'email': sign_updata.email,
            "password":sign_updata.password
        })
    })
        .then(response => console.log(response));
    

}