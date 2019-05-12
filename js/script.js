var loading = "<div class='spinner'><div class='rect1'></div> <div class='rect2'></div> <div class='rect3'></div> <div class='rect4'></div> <div class='rect5'></div></div>";

$(document).ready(function () {
    $(function(){
        $("#upload_link").on('click', function(e){
            e.preventDefault();
            $("#upload:hidden").trigger('click');
        });
    });

    $("body").on("touchstart click",function(){

    });

    $(".news_image").on("dblclick",function(){
        $(".like_comment img").attr("src","img/liked_post.png");
    })

    $(".like_comment").on("click",function(){
        $(".like_comment img").attr("src","img/liked_post.png");
    })

   
    var profile_other_content = document.querySelector(".profile_other_content");
    if(profile_other_content){
        if ($(window).width() >= 768 ) {
           
        }else{
            $span = $('.profile_left');
            $span.replaceWith($span.html());
            $spanright = $('.profile_right');
            $spanright.replaceWith($spanright.html());
        }
    }
   
   
    $(".content").css("min-height", $(window).height()-($(window).height()*0.1));

    /////qeydiyyat hissesi - girish hissesi///////
    $("#registration").click(function () {
        $(".login").hide();
        $(".registration").show();
    });

    $("#register_form").on("submit", function (event) {
        event.preventDefault();
        $("#btn_submit").html(loading);
        $("#btn_submit").attr('disabled', 'disabled');
        $.ajax({
            url: "registr.php",
            type: "post",
            data: $(this).serialize(),
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    });

    $("#login_form").on("submit", function (event) {
        event.preventDefault();
        $(".sign_in").html(loading);
        $(".sign_in").attr('disabled', 'disabled');
        $.ajax({
            url: "registr.php",
            type: "post",
            data: $(this).serialize(),
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    });
////////////////////////////////////////////////
    // $(".modal_checkbox").on("click",function() {
    //     if($(".modal_checkbox .modal_bottom_gifts_input_checkbox").is(':checked')){
    //         $(".modal_checkbox .modal_bottom_gifts_input_checkbox").show(); // unchecked
    //     }
    //     else{
    //           // checked
    //         $(".modal_checkbox .modal_bottom_gifts_input_checkbox").hide();
    //         console.log("false");
    //     }
    // });

    $(".profile_messages").click(function () {
        $(".messages_content").css("display", "none");
        $(".inside_messages").css("display", "inline-block");
    });

    $(".friend_search_filter_up").click(function () {
        if ($(".friend_search_filter").css("display") == "none") {
            $(".friend_search_filter").slideDown("slow");
            $(".friend_search_right img:nth-child(1)").css("display", "none");
            $(".friend_search_right img:nth-child(2)").css("display", "inline-block");

        } else {
            $(".friend_search_filter").slideUp("slow");
            $(".friend_search_right img:nth-child(1)").css("display", "inline-block");
            $(".friend_search_right img:nth-child(2)").css("display", "none");
              
        }
    });

    // MOBILE //////////////////////////////////////////////////////////////////////////////

    $("#dropdownclick").click(function () {
        if ($(window).width() <= 768 && $(window).width() >= 577 ) {

            if ($(".icons_content_mobile").css('display') == "none") {
                $(".icons_content_mobile").css("display", "flex");
                $(".icons_content_mobile").css("justify-content", "space-around");
                $(".inside_messages_top").css("top", "85px");
                $(".inside_messages_middle").css("padding-top", "85px");
                $(".search-container").css("top", "85px");
                $(".messages").css("padding-top", "60px");
                $(".news_content").css("padding-top", "80px");
                $("#dropdownclick").css("display", "none");
                $("#dropupclick").css("display", "inline-block");
                $(".navbar_dots-content").css("top", "72px");
                $(".notifications_top").css("top", "85px");
                $(".guests_top").css("top", "85px");
                $(".notifications_middle").css("padding-top", "110px");
                $(".guests_middle").css("padding-top", "70px");
                $(".dropdown span").css("display", "none");
                $(".content_profile").css("padding-top", "40px");
                $(".friends").css("padding-top", "85px");
                $(".guests").css("padding-top", "50px"); 
                $(".settings").css("padding-top", "55px"); 
                $(".photos").css("padding-top", "40px");  
                $(".inside_notifications_top").css("top", "90px");
                $(".inside_notifications_middle").css("padding-top", "80px");                                                                                                           
            }
        }
        if ($(window).width() <= 576 && $(window).width() >= 357) {
            if ($(".icons_content_mobile").css('display') == "none") {
                $(".icons_content_mobile").css("display", "flex");
                $(".icons_content_mobile").css("justify-content", "space-around");
                $(".inside_messages_top").css("top", "85px");
                $(".inside_messages_middle").css("padding-top", "70px");
                $(".search-container").css("top", "85px");
                $(".messages").css("padding-top", "45px");
                $(".news_content").css("padding-top", "65px");
                $("#dropdownclick").css("display", "none");
                $("#dropupclick").css("display", "inline-block");
                $(".navbar_dots-content").css("top", "72px");
                $(".notifications_top").css("top", "85px");
                $(".guests_top").css("top", "85px");
                $(".notifications_middle").css("padding-top", "85px");
                $(".guests_middle").css("padding-top", "65px");
                $(".dropdown span").css("display", "none");
                $(".content_profile").css("padding-top", "40px");
                $(".friends").css("padding-top", "70px");
                $(".guests").css("padding-top", "50px"); 
                $(".settings").css("padding-top", "55px"); 
                $(".photos").css("padding-top", "40px");  
                $(".inside_notifications_top").css("top", "90px");
                $(".inside_notifications_middle").css("padding-top", "80px");                                                                                                           
            }
        }
        if ($(window).width() <= 356) {
            if ($(".icons_content_mobile").css('display') == "none") {
                $(".icons_content_mobile").css("display", "flex");
                $(".icons_content_mobile").css("justify-content", "space-around");
                $(".inside_messages_top").css("top", "85px");
                $(".inside_messages_middle").css("padding-top", "70px");
                $(".search-container").css("top", "85px");
                $(".messages").css("padding-top", "65px");
                $(".news_content").css("padding-top", "65px");
                $("#dropdownclick").css("display", "none");
                $("#dropupclick").css("display", "inline-block");
                $(".navbar_dots-content").css("top", "72px");
                $(".notifications_top").css("top", "85px");
                $(".guests_top").css("top", "85px");
                $(".notifications_middle").css("padding-top", "85px");
                $(".guests_middle").css("padding-top", "65px");
                $(".dropdown span").css("display", "none");
                $(".content_profile").css("padding-top", "40px");
                $(".friends").css("padding-top", "70px");
                $(".guests").css("padding-top", "50px"); 
                $(".settings").css("padding-top", "55px"); 
                $(".photos").css("padding-top", "40px");  
                $(".inside_notifications_top").css("top", "90px");
                $(".inside_notifications_middle").css("padding-top", "80px");                                                                                
            }
        }
    });



    $("#dropupclick").click(function () {
        if ($(window).width() <= 768 && $(window).width() >= 577 ) {
            $("#dropupclick").css("display", "none");
            $("#dropdownclick").css("display", "inline-block");
            $(".icons_content_mobile").css("display", "none");
            $(".inside_messages_top").css("top", "45px");
            $(".inside_messages_middle").css("padding-top", "45px");
            $(".search-container").css("top", "45px");
            $(".messages").css("padding-top", "20px");
            $(".news_content").css("padding-top", "40px");
            $(".navbar_dots-content").css("top", "32px");
            $(".notifications_top").css("top", "45px");
            $(".guests_top").css("top", "45px");
            $(".notifications_middle").css("padding-top", "70px");
            $(".guests_middle").css("padding-top", "30px");
            $(".dropdown span").css("display", "block");
            $(".content_profile").css("padding-top", "0px");
            $(".friends").css("padding-top", "45px");
            $(".guests").css("padding-top", "10px");  
            $(".settings").css("padding-top", "15px"); 
            $(".photos").css("padding-top", "0px");
            $(".inside_notifications_top").css("top", "50px");
            $(".inside_notifications_middle").css("padding-top", "40px");                           
        }

        if ($(window).width() <= 576 && $(window).width() >= 357) {
            $("#dropupclick").css("display", "none");
            $("#dropdownclick").css("display", "inline-block");
            $(".icons_content_mobile").css("display", "none");
            $(".inside_messages_top").css("top", "45px");
            $(".inside_messages_middle").css("padding-top", "30px");
            $(".search-container").css("top", "45px");
            $(".messages").css("padding-top", "5px");
            $(".news_content").css("padding-top", "25px");
            $(".navbar_dots-content").css("top", "32px");
            $(".notifications_top").css("top", "45px");
            $(".guests_top").css("top", "45px");
            $(".notifications_middle").css("padding-top", "45px");
            $(".guests_middle").css("padding-top", "25px");
            $(".dropdown span").css("display", "block");
            $(".content_profile").css("padding-top", "0px");
            $(".friends").css("padding-top", "30px");
            $(".guests").css("padding-top", "10px");  
            $(".settings").css("padding-top", "15px"); 
            $(".photos").css("padding-top", "0px");
            $(".inside_notifications_top").css("top", "50px");
            $(".inside_notifications_middle").css("padding-top", "40px");                                     
        }
        if ($(window).width() <= 356) {
            $("#dropupclick").css("display", "none");
            $("#dropdownclick").css("display", "inline-block");
            $(".icons_content_mobile").css("display", "none");
            $(".inside_messages_top").css("top", "45px");
            $(".inside_messages_middle").css("padding-top", "30px");
            $(".search-container").css("top", "45px");
            $(".messages").css("padding-top", "25px");
            $(".news_content").css("padding-top", "25px");
            $(".navbar_dots-content").css("top", "32px");
            $(".notifications_top").css("top", "45px");
            $(".guests_top").css("top", "45px");
            $(".notifications_middle").css("padding-top", "45px");
            $(".guests_middle").css("padding-top", "25px");
            $(".dropdown span").css("display", "block");
            $(".content_profile").css("padding-top", "0px");
            $(".friends").css("padding-top", "30px");
            $(".guests").css("padding-top", "10px");  
            $(".settings").css("padding-top", "15px"); 
            $(".photos").css("padding-top", "0px");
            $(".inside_notifications_top").css("top", "50px");
            $(".inside_notifications_middle").css("padding-top", "40px");                      
        }
    });

    
    
   

    $("#menuclick").click(function () {
        if ($(window).width() <= 768) {
            $(".navbar img").hide();
            $(".sidebar").css("display", "block !important");
            $('.sidebar').attr('style','display: block !important')
            $(".col-md-6").css("display", "none !important");
            $('.col-md-6').attr('style','display: none !important')
            $(".col-md-3").css("display", "block !important");
            $('.col-md-3').attr('style','display: block !important')
            $(".inside_messages").css("display", "none");
            $(".navbar_geri").css("display", "none");
            $(".search-container").css("display", "none");
            $(".messages_bottom").css("display", "none");
            $(".navbar_mobile_right span").css("display", "none");
            $(".navbar_profile").css("display","none");
            $(".navbar_logo").css("display","block")
            $(".contain_shop .contain2").css("display","none");
        }
    });

    $(".help_ul li").on("click", function(){
        if($(window).width() <= 768){
            $(".help_ul li").css("display","none");
            $(".help_content").css("display","block");
            $(".a_menu").css("display","block");
            $(".a_next").css("display","block");
        }
    });

    $(".a_menu").click(function(){
        if($(window).width() <=768){
            $(".help_content").css("display","none");
            $(".help_ul li").css("display","block");
            $(".a_menu").css("display","none");
            $(".a_next").css("display","none");
        }
    });

    // MOBILE //////////////////////////////////////////////////////////////////////////////

  


    $('#navi li').click(function () {
        $('li').removeClass("active");
        $(this).addClass("active");
    });

    jQuery.each(jQuery('form textarea[data-autoresize]'), function () {
        var offset = this.offsetHeight - this.clientHeight;

        var resizeTextarea = function (el) {
            jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
        };
        jQuery(this).on('keyup input', function () {
            resizeTextarea(this);
        }).removeAttr('data-autoresize');
    });


    $(".friend_search_middle").scroll(function () {
        $("span").text(x += 1);
    });

  
    ////////////////////////////////////////////

        $(".dropdown-toggle").dropdown();

    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
        if ($("#flip #yuxari").css("display") == "inline-block") {
            $("#flip #yuxari").css("display", "none")
            $("#flip #ashagi").css("display", "inline-block")

        } else {
            $("#flip #yuxari").css("display", "inline-block")
            $("#flip #ashagi").css("display", "none")
        }
    });


});

$('.carousel').carousel({
    interval: false,
  })


$("#files").change(function() {
    filename = this.files[0].name
  });
/////////////FINISH///////////////////////////////

////////////// VIP Users //////////////////////////////////////
function owlCarouselInitVip() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1500,

        responsive: {
            0: {
                items: 4
            },
            356: {
                items: 6
            },
            456: {
                items: 7
            },
            576: {
                items: 9
            },
            768: {
                items: 5
            },
            991: {
                items: 7
            }
        }
    });
    ////////////////////////////////////////////////////////////////

}




var images = $(".carousel-item").children();
var parent = $("#carouselExampleControls")
var checking = false;

function setImgWidth() {
    for (var i = 0; i < images.length; i++) {
        $($(images[i])[0]).removeAttr("style")
    }
    if (checking) {
        for (var i = 0; i < images.length; i++) {
            var parentWidth = parent.innerWidth();
            var childWidth = $(images[i])[0].width;
        }
    }
    checking = true;
}

$(window).click(function () {
    setImgWidth();
});


    
    function showDetails(modal) {
        var modalType = modal.getAttribute("data-modal-type");
        
            var modalCropId = document.querySelectorAll(".modalCrop");
            for (const item of modalCropId) {
                if(modalType == item.id){
                    var closeMini = document.querySelector(`#${item.id} .closePhoto`);
                    document.getElementById(item.id).style.display = "block";
                    if (closeMini) {
                        closeMini.addEventListener("click",function(){
                            document.getElementById(item.id).style.display = "none";
                        })
                    }
                    if (true) {
                        window.onclick = function(event) {
                            if (event.target == document.getElementById(item.id)) {
                            document.getElementById(item.id).style.display = "none";
                            }
                        }
                    }
                } 
            }



            var modalPhotoId = document.querySelectorAll(".modalPhoto");
            for (const item of modalPhotoId) {
                if(modalType == item.id){
                    var closeMini = document.querySelector(`#${item.id} .closePhoto`);
                    document.getElementById(item.id).style.display = "block";
                    if (closeMini) {
                        closeMini.addEventListener("click",function(){
                            document.getElementById(item.id).style.display = "none";
                        })
                    }
                    if (true) {
                        window.onclick = function(event) {
                            if (event.target == document.getElementById(item.id)) {
                            document.getElementById(item.id).style.display = "none";
                            }
                        }
                    }
                } 
            }
            var modalMiniId = document.querySelectorAll(".modalMini");
            for (const item of modalMiniId) {
                if(modalType == item.id){
                    var closeMini = document.querySelector(`#${item.id} .closeMini`);
                    document.getElementById(item.id).style.display = "block";
                    if (closeMini) {
                        closeMini.addEventListener("click",function(){
                            document.getElementById(item.id).style.display = "none";
                        })
                    }
                    if (true) {
                        window.onclick = function(event) {
                            if (event.target == document.getElementById(item.id)) {
                            document.getElementById(item.id).style.display = "none";
                            }
                        }
                    }
                } 
            }
            var modalMiniMessageId = document.querySelectorAll(".modalMiniMessage");
            for (const item of modalMiniMessageId) {
                if(modalType == item.id){
                    var closeMini = document.querySelector(`#${item.id} .closeMini`);
                    document.getElementById(item.id).style.display = "block";
                    if (closeMini) {
                        closeMini.addEventListener("click",function(){
                            document.getElementById(item.id).style.display = "none";
                        })
                    }
                    if (true) {
                        window.onclick = function(event) {
                            if (event.target == document.getElementById(item.id)) {
                            document.getElementById(item.id).style.display = "none";
                            }
                        }
                    }
                } 
            }
            var modalMiniMoreId = document.querySelectorAll(".modalMiniMore");
            for (const item of modalMiniMoreId) {
                if(modalType == item.id){
                    var closeMini = document.querySelector(`#${item.id} .closeMini`);
                    document.getElementById(item.id).style.display = "block";
                    if (closeMini) {
                        closeMini.addEventListener("click",function(){
                            document.getElementById(item.id).style.display = "none";
                        })
                    }
                    if (true) {
                        window.onclick = function(event) {
                            if (event.target == document.getElementById(item.id)) {
                            document.getElementById(item.id).style.display = "none";
                            }
                        }
                    }
                } 
            }


            var modalPhotoManyId = document.querySelectorAll(".modalPhotoMany");
            for (const item of modalPhotoManyId) {
                if(modalType == item.id){
                    var closeMini = document.querySelector(`#${item.id} .closeMini`);
                    document.getElementById(item.id).style.display = "block";
                    if (closeMini) {
                        closeMini.addEventListener("click",function(){
                            document.getElementById(item.id).style.display = "none";
                        })
                    }
                    if (true) {
                        window.onclick = function(event) {
                            if (event.target == document.getElementById(item.id)) {
                            document.getElementById(item.id).style.display = "none";
                            }
                        }
                    }
                } 
            }
      }

      //////////////--------------------------------------------------------///////////////

      var item_slider = document.querySelector(".item_slider");
      if(item_slider){
        var slideIndex = 1;
        showSlides(slideIndex);
    
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
    
        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("item_slider");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "flex";  
        }
    
      }
   
   
//////////////--------------------------------------------------------///////////////




    /////////////--------------/////////////
        $('.modal-body textarea').keyup(function() {
        var length = $(this).val().length;
        $('.modal-footer span').text(length);
        });
    /////////////--------------/////////////
    
    $(".smails").click(function(){
        if ($(".smails-content").css("display")== "none") {
            $(".smails-content").css("display","block");
            $(this).removeClass("smails-loading_prev");
            $(this).addClass("smails-loading_next");
            $(".smails").attr("src","img/delete-smiley.png");
            
        }else{
            $(".smails-content").css("display","none")
            $(this).removeClass("smails-loading_next");
            $(this).addClass("smails-loading_prev");
            setTimeout(function() {
                $(".smails").attr("src","img/smiley/8.png");
            }, 200);  
        }
      });

      var smails_content = document.querySelector(".smails-content");
      if (smails_content) {
        $(document).click(function() {
            target = document.getElementById("smiles");
            flag = event.path.some(function(el, i, arr) {
              return (el == target)
            })
            if (!flag) {
                $(".smails-content").css("display","none")
                $(".smails").removeClass("smails-loading_next");
                $(".smails").addClass("smails-loading_prev");
                setTimeout(function() {
                    $(".smails").attr("src","img/smiley/8.png");
                }, 200);  
            }
          });
      }



      
      

      

   

    



