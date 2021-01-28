function killCopy(e){
    return false
}
function reEnable(){
    return true
}
document.onselectstart=new Function ('return false')
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0px";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
}