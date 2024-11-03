
//aa.style.backgroundColor="#555555";
//console.log(aa.style.backgroundColor);
window.onload=function(){
    //console.log(aa.getBoundingClientRect());
    //console.log(bb.getBoundingClientRect());
    
}

document.getElementById("opening_midbox_progress_inner").addEventListener("animationstart", () => {
    //console.log("Animation started");
    pstr();
    let countn=0;
    let ee=document.getElementById("opening_midbox_progress_text");
    let countinterval=setInterval(function () {
        ee.innerHTML = countn+"%";
        countn+=1;
        if(countn>100){
            clearInterval(countinterval);
            document.getElementById("opening_midbox_circle1").style.animationPlayState="running";
            document.getElementById("opening_midbox_circle2").style.animationPlayState="running";
            //document.getElementById("hhh").style.animationPlayState="running";
            document.getElementById("opening_midbox").style.borderColor="#7fca98";
        }
    },40)
});

document.getElementById("opening_midbox_circle1").addEventListener("animationend", () => {
    //console.log("Animation end");
    document.getElementById("opening_midbox_fadecircle").classList.add("animationcls");
    //document.getElementById("iii").style.left=document.getElementById("hhh").style.left;
    //document.getElementById("iii").style.top=document.getElementById("hhh").style.top;
    document.getElementById("opening_base").classList.add("fadein");

});
document.addEventListener("animationend", (evnet) => {
    //console.log(evnet.animationName,evnet.target.id);
    if(evnet.animationName=="fadein" && evnet.target.id=="opening_base"){
        document.getElementById("opening_base").remove();
        //console.log("dele");
        let ado=document.getElementById("music");
        //console.log(ado);
        ado.volume=0.2;
        ado.play();
        
    }
});

function btc(){
    document.getElementById("opening_midbox_fadecircle").classList.add("animationcls");
    setTimeout(function(){
        document.getElementById("opening_midbox_fadecircle").classList.remove("animationcls");
    },1600);
}
function pstr(){
    let el=document.getElementById("opening_midbox_showtext");

    setTimeout(function(){
        pstr2("Initialization...");
    },50);
    
    setTimeout(function(){
        el.innerHTML=el.innerHTML+"<br>";
        pstr2("Verifying...");
    },1450);
    setTimeout(function(){
        el.innerHTML=el.innerHTML+"<br>";
        pstr2("Permission Allowed");
    },2650);
    
    
    
}
function pstr2(ins){
    let el=document.getElementById("opening_midbox_showtext");
    let showtext = setInterval(function(){
        if(ins != ""){
            
            el.innerHTML=el.innerHTML+ins[0];
            ins=ins.slice(1,ins.length);
        }
        else{
            clearInterval(showtext);
            //console.log("clearinterval")
        }
    },50);
    
}
