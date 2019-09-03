// ==UserScript==
// @name     Crunchyroll Playback Focus (Script)
// @version  1.4.4
// @grant    none
// @include	 /^https?://www\.crunchyroll.com/.*/.*-[0-9]*.*/
// @author Shaun Foxcroft <sfoxcroft@outlook.com> (https://github.com/S-Foxcroft)
// ==/UserScript==
function run(){
  console.log("~ Correct Page Check & Adjustment");
  var player = document.getElementById("showmedia_video_player");
  if(player === null){
    console.log("not a playback page, aborting!");
    return;
  }
	player.width="1920";
	player.height="1080";
  var ea = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
  for(i=0;i<ea.length;i++){
    ea[i].style = ""; 
  }
  if(!window.userjs) window.userjs = {};  
  console.log("~ Insertion");
  
  var closeDiv = document.createElement("div");
  var nextDiv = document.createElement("div");
  var prevDiv = document.createElement("div");
  closeDiv.id = "closeDiv";
  nextDiv.id="nextDiv";
  nextDiv.innerText = ">";
  prevDiv.id="prevDiv";
  prevDiv.innerText = "<";
  document.body.appendChild(closeDiv);
  closeDiv.addEventListener('click',function(){
	  if(localStorage["dim"]) closeBox();
	  else openBox();
  });
   if(localStorage["dim"] == true) {
    openBox();
    closeBox();
  }
  else openBox();
  
  
  console.log("~ Previous and Next - Only required if episode is listed");
  var episodeCollection = document.getElementsByClassName("collection-carousel-media");
  var thisEpIdArr = document.location.href.split("-");
  var thisEpId = thisEpIdArr[thisEpIdArr.length - 1].split("?")[0]; // id from address bar
  var thisEpLoc = 0;
  for(var i =0;i<episodeCollection.length;i++){
    var iterEp = episodeCollection[i];
    if(iterEp.getAttribute("media_id") == thisEpId)
      thisEpLoc = i;
  }
  if(thisEpLoc > 0){
    document.body.appendChild(prevDiv);
    prevDiv.addEventListener('click',function(){
    	document.location = episodeCollection[thisEpLoc-1].getElementsByClassName("link")[0].href
    });
  }
  if(thisEpLoc < episodeCollection.length - 1){
    document.body.appendChild(nextDiv);
    nextDiv.addEventListener('click',function(){
    	document.location = episodeCollection[thisEpLoc+1].getElementsByClassName("link")[0].href
    });
  }
  
  console.log("~ Removal");
  destroy(document.getElementsByClassName("guestbook")[0]);
  var removed = document.getElementsByClassName("showmedia-related");
  destroy(removed[0]);
  destroy(removed[0]);
  destroy(document.getElementsByClassName("cr-expo-banner")[0].parentNode);
}
function destroy(elem){
 elem.parentNode.removeChild(elem); 
}
function closeBox(){
	var me = document.getElementById("closeDiv");
	me.innerText = "Lights off";
	me.className = "off";
  	var del = document.getElementsByClassName("dimmerswitch");
    destroy(del[0]);
    destroy(del[0]);
    destroy(del[0]);
    destroy(del[0]);
    document.getElementsByTagName("header")[0].className = document.getElementsByTagName("header")[0]
                                                           .className.replace(" blackheader","");
	localStorage["dim"] = false;
}
function openBox(){
	document.getElementsByTagName("header")[0].className += " blackheader";
	var me = document.getElementById("closeDiv");
	me.innerText = "Lights back on";
	me.className = "on";
	var newDivs = [document.createElement("div"),document.createElement("div"),document.createElement("div"),
                 document.createElement("div")];
	newDivs[0].id="dsL";
    newDivs[1].id="dsR";
    newDivs[2].id="dsT";
    newDivs[3].id="dsB";
    newDivs.forEach(function(elem){
        elem.className = "dimmerswitch";
  	    document.body.appendChild(elem);
    });
	localStorage["dim"] = true;
}

setTimeout(run,75);