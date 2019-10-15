window.onload=function(){
    for(var i=0;i<10;i++)
    document.getElementsByClassName('des')[i].style.display='none';
}
function change() {
    document.getElementById('sun').style.boxShadow='0px 0px 10px 10px hsl(41, 95%, 50%)';
    document.getElementById('des_sun').style.display='';
}
function recover(){
    document.getElementById('sun').style.boxShadow='0px 0px 10px 2px black';
    document.getElementById('des_sun').style.display='none';
}
function change1(i) {
    var a=i.innerHTML.toLowerCase();
    document.getElementById(a).style.boxShadow='0px 0px 10px 10px white';
    a='des_'+a;
    document.getElementById(a).style.display='';
}
function recover1(i) {
    var a=i.innerHTML.toLowerCase();
    document.getElementById(a).style.boxShadow='0px 0px 10px 2px black';
    a='des_'+a;
    document.getElementById(a).style.display='none';
}
function go(i) {
    var a=i.innerHTML.toLowerCase();
    if(a=='earth')a='earthS';
    if (a=='saturn')a='saturnS';
    if(document.getElementById(a).style.display=='none'){
        document.getElementById(a).style.display='';
    }
    else{
        document.getElementById(a).style.display='none';
    }
}


