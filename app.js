$(document).ready(function(){ 

  var FanReel = function(module){
    var _data,
      $fanReel;
    
    function _setUpDom(res){
      _data = res;
      $('body').append('<div class="page-wrap"><div id="fan-reel"></div></div>');
      $fanReel =  $('#fan-reel');
      
      for(var i =0; i < _data.items.length; i++){
        $fanReel.append('<span id="outer-modal no-display"><div class="inner-modal no-display"></div></span><div class="thumbnail" id=' + _data.items[i].id + '><img src=' + 'http:' + _data.items[i].photo.medium_square.url +
         '><div class="hover-overlay no-display">username: ' + _data.items[i].user.username + '<br />like count: ' + _data.items[i].like_count + 
         '</div><div class="triangle-overlay no-display"><img src="triangle.png">');
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

        for(var i=0; i<$('.triangle-overlay').length; i++){
          if (!$('.triangle-overlay').eq(i).hasClass('no-display')){
            $('.triangle-overlay').eq(i).addClass('no-display');
            break;
          } 
        }

        $(e.currentTarget).children().eq(2).removeClass('no-display');
        $(e.currentTarget).next('.outer-modal').removeClass('no-display');
        // $(e.currentTarget).next('.outer-modal').children().eq(0).removeClass('no-display');
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















