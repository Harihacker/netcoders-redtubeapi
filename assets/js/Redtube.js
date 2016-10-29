"use strict";
var Redtube = (function($){
  var _public = {},
      _private = {
        apiPath : {
          proxy: 'https:/crossorigin.me/',
          getVideo : "http://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search="
        }
      };

      _public.getVideo = function(query, callback){
        var query = encodeURI(query);
        $.ajax({
            url: _private.apiPath.proxy+_private.apiPath.getVideo+query,
            method: 'GET',
            success: function (data) {
              callback(data);
            },
          }).fail(function(){
            callback(false);
          });
        ;
      };

  return _public;
}(jQuery || $));
