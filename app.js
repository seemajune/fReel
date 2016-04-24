$(document).ready(function(){ 

  var FanReel = function(module){
    var _data,
      $fanReel;
    
    function _setUpDom(res){
      _data = res;
      $('body').append('<div class="page-wrap"><div id="fan-reel"></div></div>');
      $fanReel =  $('#fan-reel');
      
      for(var i =0; i < _data.items.length; i++){
        $fanReel.append('<div class="thumbnail" id=' + _data.items[i].id + '><img src=' + 'http:' + _data.items[i].photo.medium_square.url +
         '><div class="hover-overlay no-display">username: ' + _data.items[i].user.username + '<br />like count: ' + _data.items[i].like_count);
      }

      var $thumbnail = $('.thumbnail');

      $thumbnail.on('mouseover', function(e){
        e.preventDefault();
        $(e.currentTarget).children().eq(1).removeClass('no-display');
      });

      $thumbnail.on('mouseout', function(e){
        e.preventDefault();
        $(e.currentTarget).children().eq(1).addClass('no-display');
      });

      $thumbnail.on('click', function(e){
        e.preventDefault();
        $(e.currentTarget).children().eq(1).addClass('no-display');
      });

    }

    module.init = function(){

      $.ajax({
        url: "http://api.curalate.com/v1/reels/uogallery.jsonp",
        dataType: "jsonp",
        success: function(res){
          _setUpDom(res);
        }
      });

    }
    return module;

  }(FanReel || {});

  FanReel.init();

});

