$('document').ready(function() {
  $('a[data-modal-src]').click(function() {
    var src = $(this).data('modal-src');
    var image = $('<img>').attr('src', src);
    var title = $(this).html()
    $('.modal-body').html(image);
    $('.modal-title').html(title)
    $('#myModal').modal();
  });
});
