$(".card-container .card").hover(
    function(){
        var classList = $(this).attr('class').split(/\s+/);
        $.each(classList, function(index, item){
            $(".card-skills ." + item).addClass('highlight');
        })
    },
    function(){
        var classList = $(this).attr('class').split(/\s+/);
        $.each(classList, function(index, item){
            $(".card-skills ." + item + ":not(.active)").removeClass('highlight');
        })
    }
)

$(".card-skills li").hover(
    function(){
        var classList = $(this).attr('class').split(/\s+/);
        $.each(classList, function(index, item){
            if (!(item.indexOf("skills") == -1 && item.indexOf("expertise") == -1 && item.indexOf("type") == -1 )){
                $(".card-container .card:not(." + item + ")").addClass('invalid');
            }
        })
    },
    function(){
        var classList = $(this).attr('class').split(/\s+/);
        $.each(classList, function(index, item){
            if (!(item.indexOf("skills") == -1 && item.indexOf("expertise") == -1 && item.indexOf("type") == -1 )){
                $(".card-container .card:not(." + item + ")").removeClass('invalid');
            }
        })
    }
)

$(".card-skills li").click(
    function(){
        if ($(this).hasClass("highlight")){
            var classList = $(this).attr('class').split(/\s+/);
            $.each(classList, function(index, item){
                if (!(item.indexOf("skills") == -1 && item.indexOf("expertise") == -1 && item.indexOf("type") == -1 )){
                    $(".card-container .card:not(." + item + ")").removeClass('hidden-card');
                }
            })
            $(this).removeClass("highlight").removeClass("active");
            if ($(".card-skills li.active").size() == 0) {
                $("#clear").addClass("hidden-card").addClass("hidden");
            }
        }
        else {
            var classList = $(this).attr('class').split(/\s+/);
            $.each(classList, function(index, item){
                if (!(item.indexOf("skills") == -1 && item.indexOf("expertise") == -1 && item.indexOf("type") == -1 )){
                    $(".card-container .card:not(." + item + ")").addClass('hidden-card');
                }
            })
            $(this).addClass("highlight").addClass("active");
            $("#clear").removeClass("hidden-card").removeClass("hidden");
        }
    }
)

$("#clear").click(
    function(){
        $(".card-container .card.hidden-card").removeClass("hidden-card");
        $(".skills-container li").removeClass("highlight").removeClass("active");
        $("#clear").addClass("hidden-card").addClass("hidden");
    }
)

$(".show-more").click(
    function(){
        if ($(this).hasClass("close")){
            $(".card-container").removeClass("expanded");
            $(".card-skills").removeClass("expanded");
            $(this).removeClass("close");
            $(".card-container .card").removeClass("expanded-card");
        }
        else {
            $(".card-container").addClass("expanded");
            $(".card-skills").addClass("expanded");
            $(this).addClass("close");
            $(".card-container .card").addClass("expanded-card");
        }
    }
)