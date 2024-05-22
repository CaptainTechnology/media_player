let progres=document.getElementById("progress");
let ctrlicon=document.getElementById("ctrlicon");
let song=document.getElementById("song");
let source=document.getElementById("source");
let next=document.getElementById("next");
let back=document.getElementById("back");
let sarr=["media/1.mp3","media/2.mp3","media/2.mp3"];
let i=0;




function songplay(){
    source.src=sarr[i];    
song.onloadeddata = function(){
    progres.max = song.duration;
    progres.value = song.currentTime;
}

ctrlicon.parentElement.addEventListener("click",()=>{
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }else{
        song.play();
        
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
})


if(song.play()){
    setInterval(() => {
        progres.value=song.currentTime;
    }, 1000);
}

progres.onchange=function(){
    song.play();
    song.currentTime=progres.value;
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
}
}



songplay();