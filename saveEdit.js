function saveEdits() {
    var editedElement = document.getElementById("editTitle"); //get the editable element
    var userVersion = editedElement.innerHTML; //get the edited element content
    localStorage.userEdit = userVersion; //save the content to local storage
}

function checkEdits() {

    //find out if the user has previously saved edits
    if (localStorage.userEdit != null)
        document.getElementById("editTitle").innerHTML = localStorage.userEdit;
}

$(document).ready(function() {
    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({ 'width': maskWidth, 'height': maskHeight });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function(e) {
        e.preventDefault();
        $('#mask').hide();
        $('.window').hide();
    });
    $('#mask').click(function() {
        $(this).hide();
        $('.window').hide();
    });

});