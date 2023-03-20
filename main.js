let rawVidLinks = document.getElementById("YTvidraw");
let playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click",()=>{

    playYTVideo();
    
})

let currentIndex = 1;

function playYTVideo(){

    
    console.log(rawVidLinks.value);
    let text = rawVidLinks.value;
    text = text.replaceAll(/(VM\d*:\d*)+/g,"");
    text = text.replaceAll(/(&amp;t=\d*s)+/g,"");
    text = text.replaceAll("https://" ,", https://")
    text =  text.slice(1);
    YTvideos = text.split("  , ");

    for(let i = 0;i<YTvideos.length;i++){
        YTvideos[i] = YTvideos[i].split("https://www.youtube.com/watch?v=").pop();

    }

    console.log(YTvideos);


    player.loadVideoById({'videoId': YTvideos[currentIndex],'startSeconds': 0});

    currentIndex = 0;
    

}


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '390',
width: '640',
videoId: YTvideos[0],
playerVars: {
    'playsinline': 1
},
events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
}
});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
// event.target.playVideo();
}

//   // 5. The API calls this function when the player's state changes.
//   //    The function indicates that when playing a video (state=1),
//   //    the player should play for six seconds and then stop.
//   var done = false;

function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
//   setTimeout(stopVideo, 6000);

//   done = true;
}

if (event.data == YT.PlayerState.ENDED){
    player.loadVideoById({'videoId': YTvideos[currentIndex],
    'startSeconds': 0})
    currentIndex ++;
}
}
//   function stopVideo() {
//     player.stopVideo();
//   }