$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = '/csc/webpages/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})
