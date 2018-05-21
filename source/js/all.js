$('document').ready(function() {
  $('a[data-modal-src]').click(function() {
    var $this = $(this)
    var src = $this.data('modal-src');

    if (src.match(/html/)) {
      $.get(src, function(content) {
        $('.modal-body').html(content);
      });
    } else {
      var content = $('<img>').attr('src', src);
      $('.modal-body').html(content);
    }
    var title = $this.html()

    $('.modal-title').html(title)
    $('#myModal').modal();
  });
});
