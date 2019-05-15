var n = 1
$('div').on('click', function(e) {
  setTimeout(function() {
    $(e.currentTarget).addClass('active')
  }, n * 500)
  n += 1
})