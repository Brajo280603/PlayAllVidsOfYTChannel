# Playing all videos from a channel of Youtube

[![portfolio](https://www.flaticon.com/free-icon/youtube_1077097?related_id=1077046&origin=search#)](https://brajo280603.github.io/PlayAllVidsOfYTChannel/)

1.first get all the links of the youtube channel

to get all the links open the youtube channel and click on videos ,

click (f12) to open console

to auto-scroll to the end of the videos run this script on console 

```javaScript
    var scroll = setInterval(function(){ window.scrollBy(0, 1000)}, 1000);
```

after scrolling to the bottom of the page ;
enter the script to get all the links

```javaScript
    window.clearInterval(scroll); console.clear(); urls = $$('a');urls.forEach( url => {if(url.id == "thumbnail"){console.log(url.href);}})
```

after using this script you should get all the links 




by default this app uses [ichika_nito](https://www.youtube.com/@ichika_nito/videos)'s channel
