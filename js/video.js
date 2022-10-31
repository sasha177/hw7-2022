var video;

// when the page loads, initialize the video element 
// and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("video autoplay: " + video.autoplay);
	console.log("video loop: " + video.loop);
});

//when you press play
document.querySelector("#play").addEventListener("click", function() {
	//play the video
	console.log("Play Video");
	video.play();
	//update the volume information
});

//when you press pause
document.querySelector("#pause").addEventListener("click", function() {
	//pause the video
	console.log("Pause Video");
	video.pause();
});

//when you press slow down
document.querySelector("#slower").addEventListener("click", function() {
	//slow down video by 10%
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed: " + video.playbackRate);
});

//when you press speed up
document.querySelector("#faster").addEventListener("click", function() {
	//speed up video by 10%
	video.playbackRate = video.playbackRate * 1.1;
	console.log("Speed: " + video.playbackRate);
});

//when you press skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	//skip ahead by 10 seconds
	x = video.duration - video.currentTime;
	if (x >= 10) video.currentTime += 10;
	else video.currentTime=0;
	console.log("Current Video Location: " + video.currentTime);
});

//when you press mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute";
	}
});

//when you change the volume slider
document.querySelector("#slider").oninput = function(){
	video.volume = this.value/100;
}

//when you press Original remove the old school class
document.querySelector("#orig").addEventListener("click", function() {
  	video.classList.remove("oldSchool");
});


//when you press Old School add the old school class
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});