//Light Switch
$(document).ready(function(){
    $("#lightswitch").click(function(){
        $("body").css("background-color", "grey");
    });
});

//text reveal
$(document).ready(function(){
    $(".mouseover1").mouseover(function(){
        $(".edp").html($("<p>We specialize in start-to-finish editorial. Whether it's episodic television series, feature films, or commercials, we have talent, technicians, and technology to help tell your story.</p>"))
    });
    $(".mouseover1").mouseleave(function(){
        $(".edp").html($())
    });
});

$(document).ready(function(){
    $(".mouseover2").mouseover(function(){
        $(".ccp").html($("<p>We provide color correcting and DI done with black magic design, to give your project the tone and look it deserves.</p>"))
    });
    $(".mouseover2").mouseleave(function(){
        $(".ccp").html($())
    });
});

$(document).ready(function(){
    $(".mouseover3").mouseover(function(){
        $(".adrp").html($("<p>Equipped with mixing studios, we provide ADR live recording and sound design.</p>"))
    });
    $(".mouseover3").mouseleave(function(){
        $(".adrp").html($())
    });
});