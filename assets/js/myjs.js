/*
window.onload=function(){
    
}*/

function togglemusic(){
    let ado=document.getElementById("music");
    if(ado.paused){
        ado.play();
        document.getElementById("musicbtn").style.backgroundImage="url('images/music_ac.png')"
        console.log("music play");
    }  
    else{
        ado.pause();
        document.getElementById("musicbtn").style.backgroundImage="url('images/music_na.png')"
        console.log("music pause");
    }
}