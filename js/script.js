/*window.onload=function(){
   document.getElementById('tah_audio').onplay();
}*/
var source = "music/WhatsApp Audio 2022-12-13 at 16.40.22.mp3"
 var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() { 
     audio.play(); 
 }, true);
 audio.src = source;


const d=document.querySelector("#day")
const h=document.querySelector("#hour")
const m =document.querySelector("#min")
const s=document.querySelector("#sec")
const newyear=new Date(`Dec 25 2022 00:00:00:`)


function updation(){

    const currentyear=new Date()
    
    
    const diff=newyear-currentyear
    const day =Math.floor(diff/1000/60/60/24)
    const hour =Math.floor((diff/1000/60/60)%24)
    const minute =Math.floor((diff/1000/60)%60)
    const sec =Math.floor((diff/1000)%60)


    d.innerHTML=day<10?"0"+day:day
    h.innerHTML=hour<10?"0"+hour:hour
    m.innerHTML=minute<10?"0"+minute:minute
    s.innerHTML=sec<10?"0"+sec:sec






    
    
}





setInterval(updation,1000);


