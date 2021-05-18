//token
const token = localStorage.getItem('token')
//content
const placerun = document.getElementById("placerun")
//all buttons
const rbds = document.getElementById('rbds')
const home = document.getElementById('home')
const calendar = document.getElementById("calendar")
const attendance= document.getElementById("attendance")
const Organization = document.getElementById('Organization')
const me = document.getElementById("me")

attendance.addEventListener("click",()=>attend())
let headcount = 0
let headcount2 = 0
const todaystart = new Date()
const todayend = new Date()
let checkin_time


function displayattends(){
  console.log(token)
  const constent_display = document.getElementById('constent_display')

  checkin_time =  todaystart.getHours()  + ":" + todaystart.getMinutes()
  console.log(checkin_time)
  fetch('https://rbds-attendance.herokuapp.com/attendance/startSession', {
                method: 'post',
                headers: {
                    'Authorization': 'Bearer '+token
                }
            }).then(response =>{
              console.table(response)
              if((headcount ===0) &&(response.statusText === "OK") ){
                constent_display.innerHTML = `started recording from ${checkin_time}`
                headcount= headcount + 1
                
              }
              else{
                constent_display.innerHTML = "Your attedence already started recording"
              }
            
            });

}
let checkout_time

function stopthis(){
  
  const constent_display2 = document.getElementById('constent_display2')
  

  checkout_time =   todayend.getHours()+ ":" +todayend.getMinutes();
  console.log(checkout_time)
  fetch('https://rbds-attendance.herokuapp.com/attendance/endSession', {
                method: 'post',
                headers: {
                    'Authorization': 'Bearer '+token
                }
            }).then(response =>{
              console.table(response)
              if((headcount2 ===0) &&(response.statusText === "OK") ){
                constent_display2.innerHTML = `stoped recording from ${checkout_time}`
                headcount2= headcount2 + 1
                
              }
              else{
                constent_display2.innerHTML = "Your attedence already stoped recording"
              }
            
            });


}
function timecheck(){

  var diff = Math.abs(todayend - todayend);
 const display3 = document.getElementById('display3')
  display3.innerHTML = `${diff}`
  
}
function clearscreen(){
  document.body.style.backgroundImage = "url('')"
}   

function attend(){
  clearscreen()
    placerun.innerHTML = ` 
<div class="ui three column grid">
  
  <div class="column">
   <div class="ui card">
       <div class="content">
         <div class="header">Recording Attendence </div>
        </div>
        <div class="content"><h4 class="ui sub header">Timings 9:00 - 5:30</h4>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div id="constent_display"class="summary"></div>
              </div>
            </div>
          </div>
        </div>

          <div class="extra content">
            <button  onclick="displayattends()"id="startbutton"class="ui inverted green button">Start <i class="arrow circle right icon"></i></button>
           </div>
    </div>
  </div>


  <div class="column marright">
  <div class="ui card">
       <div class="content">
         <div class="header">Remote Clock Out</div>
        </div>
        <div class="content"><h4 class="ui sub header">Timings 9:00 - 5:30</h4>
          <div class="ui small feed">
            <div class="event">
              <div class="content">
                <div id="constent_display2"class="summary"></div>
              </div>
            </div>
          </div>
        </div>

          <div class="extra content">
            <button  onclick="stopthis()"class="ui inverted red button">Stop  <i class="circle icon"></i></button>
           </div>
  </div>
  </div>
  <div class="column marright">
    <div class="ui card">
    <div class="content">
    <div class="header">Let's a call it day </div>
   </div>
   <div class="content"><h4 class="ui sub header">bye</h4>
     <div class="ui small feed">
       <div class="event">
         <div class="content">
           <div id="display3"class="summary"></div>
         </div>
       </div>
     </div>
   </div>


      
        <div class="extra content">
        <button  onclick="timecheck()"class="ui inverted orange button">Check Time Spent   <i class="square icon"></i></button>
        </div>
    </div>
  </div>
  
  
 
</div>
  
    `  
}

function commingsoon(){
  placerun.innerHTML =''
  document.body.style.backgroundImage = "url('../images/26690.svg')";
  document.body.style.backgroundRepeat = "no-repeat"
  
}

        


home.addEventListener('click',()=>commingsoon())
rbds.addEventListener('click',()=>commingsoon())
calendar.addEventListener('click',()=>commingsoon())
me.addEventListener('click',()=>commingsoon())
Organization.addEventListener('click',()=>commingsoon())


