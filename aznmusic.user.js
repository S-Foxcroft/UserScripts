// ==UserScript==
// @name     Amazon Music Clock
// @version  1.0
// @grant    none
// @include https://music.amazon.co.uk/*
// @author Shaun Foxcroft <sfoxcroft@outlook.com> (https://github.com/S-Foxcroft)
// ==/UserScript==
var clockElem = document.createElement("div");
function zeroPad(val){
  if(val < 10) return "0"+val;
  return ""+val;
}
function updateClock(){
	var d = new Date();
  var val = zeroPad(d.getHours())+":"+zeroPad(d.getMinutes());
  clockElem.innerText = val;
}
setTimeout(function(){
  clockElem.id="clockDiv";
  clockElem.style="display:block;background:none;color:white;font-family:arial;font-size:32pt;padding-left:6px;padding-right:10px";
  var rem = document.body.querySelector("div.leftSide");
  rem.removeChild(rem.childNodes[0]);
  rem.prepend(clockElem);
  setInterval(updateClock,500);
  updateClock();
},2000);