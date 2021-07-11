// UI Logic
$(document).ready(function(){
    $(".btn-add-to-do").click(function(){
        $("#cards-container").prepend('<div class="cards"><p id="card-title">Title</p>' + 
        '<p id="card-description">Brief description about the...</p>' +
        '</div>');
        $("#click-the").remove();
    });
});