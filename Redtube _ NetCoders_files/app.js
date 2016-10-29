var APP = APP || {};

(function(e){
  var formSearch = $('#form'),
      querySearch = formSearch.find('.form-control'),
      btnSearch = formSearch.find('.btn');

  formSearch.on('submit', function(e){
    e.preventDefault();
    formSearch.trigger('loading');
    return false;
  });

  formSearch.bind('loading', function(){
    btnSearch.attr('disabled', 'disabled').find('.fa').removeClass('fa-search').addClass('fa-refresh fa-spin');
    querySearch.attr('disabled', 'disabled');
  });

  formSearch.bind('loaded', function(){
    btnSearch.find('.fa').addClass('fa-search').removeClass('fa-refresh fa-spin').removeAttr('disabled');
    querySearch.removeAttr('disabled');
  });

}(jQuery || $));
