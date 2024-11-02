
//aa.style.backgroundColor="#555555";
//console.log(aa.style.backgroundColor);
window.onload=function(){
    //console.log(aa.getBoundingClientRect());
    //console.log(bb.getBoundingClientRect());
    
}

document.getElementById("ddd").addEventListener("animationstart", () => {
    //console.log("Animation started");
    pstr();
    let countn=0;
    let ee=document.getElementById("eee");
    let countinterval=setInterval(function () {
        ee.innerHTML = countn+"%";
        countn+=1;
        if(countn>100){
            clearInterval(countinterval);
            document.getElementById("fff").style.animationPlayState="running";
            document.getElementById("ggg").style.animationPlayState="running";
            //document.getElementById("hhh").style.animationPlayState="running";
            document.getElementById("bbb").style.borderColor="#7fca98";
        }
    },30)
});

document.getElementById("fff").addEventListener("animationend", () => {
    //console.log("Animation end");
    document.getElementById("iii").classList.add("animationcls");
    //document.getElementById("iii").style.left=document.getElementById("hhh").style.left;
    //document.getElementById("iii").style.top=document.getElementById("hhh").style.top;
    document.getElementById("aaa").classList.add("fadein");

});
document.addEventListener("animationend", (evnet) => {
    //console.log(evnet.animationName,evnet.target.id);
    if(evnet.animationName=="fadein" && evnet.target.id=="aaa"){
        document.getElementById("aaa").remove();
        //console.log("dele");
        let ado=document.getElementById("music");
        //console.log(ado);
        ado.volume=0.2;
        ado.play();
        
    }
});

function btc(){
    document.getElementById("iii").classList.add("animationcls");
    setTimeout(function(){
        document.getElementById("iii").classList.remove("animationcls");
    },1600);
}
function pstr(){
    let el=document.getElementById("jjj");

    setTimeout(function(){
        pstr2("Initialization...");
    },50);
    
    setTimeout(function(){
        el.innerHTML=el.innerHTML+"<br>";
        pstr2("Verifying...");
    },1050);
    setTimeout(function(){
        el.innerHTML=el.innerHTML+"<br>";
        pstr2("Permission Allowed");
    },2050);
    
    
    
}
function pstr2(ins){
    let el=document.getElementById("jjj");
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
