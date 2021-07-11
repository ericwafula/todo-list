// UI Logic
$(document).ready(function(){
    // add to do button
    $(".btn-add-to-do").click(function(){
        $("#cards-container").prepend('<div class="cards">' + 
            '<div class ="card-head">' + 
                '<p id="card-title">Title</p>' +
                '<span class="material-icons-outlined">clear</span>' +
            '</div>' +
            '<p id="card-description">Brief description about the...</p>' +
            '</div>');
        $("#click-the").hide();
        $("#lp-heading").hide();
        $("#illustration-image").hide();

        // card
        // mouse over
        $("div#cards-container").children("div").first().mouseover(function(){
            $(".material-icons-outlined").show();
        });

        // mouse out
        $("div#cards-container").children("div").first().mouseout(function(){
            $(".material-icons-outlined").hide();
        });

        $(".cards").find(".material-icons-outlined").first().click(function(){
            $(this).parents(".cards").remove();
        });
    });

    
});
