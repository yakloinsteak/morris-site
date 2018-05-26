$('document').ready(function() {
  $('a[data-modal-src]').click(function() {
    var $this = $(this)
    var src = $this.data('modal-src');
    var title = $this.html()

    $('.modal-title').html(title)

    if (src.match(/html/)) {
      console.log("fetching "+src);
      $.get(src, function(content) {
        $('.modal-body').html(content);
        $('#myModal').modal();
      });
    } else {
      var content = $('<img>').attr('src', src);
      $('.modal-body').html(content);
      $('#myModal').modal();
    }
  });
});
