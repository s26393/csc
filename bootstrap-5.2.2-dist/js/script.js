$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = '/webpages/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})