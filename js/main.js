// UI Logic
$(document).ready(function(){
    $(".btn-add-to-do").click(function(){
        $("#cards-container").prepend('<div class=cards></div>');
    });
});