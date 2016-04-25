var url = "http://api.curalate.com/v1/reels/uogallery.jsonp?callback=jsonpCallback";
var script = document.createElement('script');
var head = document.getElementsByTagName('head')[0];

var FanReel = function(module){
  var _data,
    body,
    pageWrap;

  module.init = function(data){
    _data = data;
    console.log(_data.items);
    body = document.getElementsByTagName('body')[0];
    pageWrap = document.createElement('div');
    pageWrap.className = "page-wrap";
    body.appendChild(pageWrap);
    fanReel = document.createElement('div');
    fanReel.setAttribute('id', 'fan-reel');
    pageWrap.appendChild(fanReel);

    for(var i = 0; i < _data.items.length; i++){
      var outerDiv = document.createElement('div');
      outerDiv.setAttribute('id', _data.items[i].id);
      outerDiv.className = "thumbnail";
      fanReel.appendChild(outerDiv);
      var innerDiv = document.createElement('img');
      innerDiv.setAttribute('src', 'http:' + _data.items[i].photo.medium_square.url);
      outerDiv.appendChild(innerDiv);
      var hoverOverlayDiv = document.createElement('div');
      hoverOverlayDiv.className = "hover-overlay no-display";
      hoverOverlayDiv.innerHTML = "username: " + _data.items[i].user.username + "<br />like count: " +  _data.items[i].like_count;
      outerDiv.appendChild(hoverOverlayDiv);
     
      outerDiv.addEventListener('mouseover', function(e){  // add overlay with display: block to display likes count and username on hover
        e.preventDefault();
        e.currentTarget.children[1].className =  "hover-overlay display";     
      });

      outerDiv.addEventListener('mouseout', function(e){ // remove overlay with display: none
        e.preventDefault();
        e.currentTarget.children[1].className =  "hover-overlay no-display";   
      });

      outerDiv.addEventListener('click', function(e){
        e.preventDefault();
        e.currentTarget.children[1].className =  "hover-overlay no-display";   
      });

    }


  }

  return module;

}(FanReel || {});

function jsonpCallback(data){
  FanReel.init(data);
}

script.setAttribute('src', url);
head.appendChild(script);
