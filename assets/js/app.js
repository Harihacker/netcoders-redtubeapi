var APP = APP || {};

(function(e){
  "use strict";
  var formSearch = $('#form'),
      contentWrap = $('#content .container'),
      preloader = $('#preloader'),
      inputSearch = formSearch.find('.form-control'),
      btnSearch = formSearch.find('.btn'),
      openVideo = function(e){
        console.log($(e.currentTarget).attr('data-video'), $(e.currentTarget).attr('data-title'));
        $('#modalVideo iframe').attr('src', $(e.currentTarget).attr('data-video'));
        $('#modalVideo .modal-title').text($(e.currentTarget).attr('data-title'));
      }
      ;

  formSearch.on('submit', function(e){
    e.preventDefault();
    formSearch.trigger('loading');
    contentWrap.html('');

    Redtube.getVideo(inputSearch.val(), function(res){
      if(!res || !res.count){
        contentWrap
          .html('<div class="col-lg-12"><p class="alert alert-danger text-center">Nenhum vídeo encontrado, tente novamente...</p></div>')
        ;
        formSearch.trigger('loaded');
        return;
      }
      $('#tpl-video').tmpl(res.videos).appendTo(contentWrap);
      formSearch.trigger('loaded');
      contentWrap.find('a').bind('click', openVideo)
    });
    return;
  });

  formSearch.bind('loading', function(){
    btnSearch.attr('disabled', 'disabled')
      .find('.fa')
      .removeClass('fa-search')
      .addClass('fa-refresh fa-spin')
    ;
    inputSearch.attr('disabled', 'disabled');
    preloader.show();
  });

  formSearch.bind('loaded', function(){
    btnSearch
      .removeAttr('disabled')
      .find('.fa')
      .addClass('fa-search')
      .removeClass('fa-refresh fa-spin')
    ;
    preloader.hide();
    inputSearch.removeAttr('disabled');
  });

}(jQuery || $));
