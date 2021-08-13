 function isMobileFunc() {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))
            || window.innerWidth < 1150 )
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}



$(document).ready(function(){

    $(document).on('click', '.site-form-submit-js', function(e){
        e.preventDefault();
        /*validation start*/

        if($(this).closest('form').find('input[type="tel"]').length != 0) {
            var inputTel = $(this).closest('form').find('input[type="tel"]');
            if (inputTel.val().indexOf('_') === -1 && inputTel.val() != 0) {
                $(inputTel).closest('.site-form__row').addClass('correct');
                $(inputTel).closest('.site-form__row').removeClass('error-field');
            } else {
                $(inputTel).closest('.site-form__row').addClass('error-field');
                $(inputTel).closest('.site-form__row').removeClass('correct');
            }
        }

        if($(this).closest('form').find('input[type="email"].required').length != 0) {
            var reg = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

            var input = $(this).closest('form').find('input[type="email"].required');
            var email = $(this).closest('form').find('input[type="email"].required').length > 0
                ? $(this).closest('form').find('input[type="email"].required')
                : false;


            if (email.val() == "" && email !== false) {
                email.closest('.site-form__row').addClass('error-field');

            } else {
                if (reg.test(email.val()) == false) {
                    email.closest('.site-form__row').addClass('error-field');
                    email.closest('.site-form__row').removeClass('correct');

                } else {
                    email.closest('.site-form__row').addClass('correct');
                    email.closest('.site-form__row').removeClass('error-field');
                }
            }
        }

        $(this).closest('form').find('input[type="text"].required').each(function () {
            if($(this).val() === ''){
                $(this).closest('.site-form__row').addClass('error-field');
                $(this).closest('.site-form__row').removeClass('correct');
            } else {
                $(this).closest('.site-form__row').addClass('correct');
                $(this).closest('.site-form__row').removeClass('error-field');
            }
        });

        $(this).closest('form').find('textarea.required').each(function () {
            if($(this).val() === ''){
                $(this).closest('.site-form__row').addClass('error-field');
                $(this).closest('.site-form__row').removeClass('correct');
            } else {
                $(this).closest('.site-form__row').addClass('correct');
                $(this).closest('.site-form__row').removeClass('error-field');
            }
        });

        if($(this).closest('form').find('.error-field').length == 0 && ($(this).closest('form').find('.required').length === 0 || $(this).closest('form').find('.correct').length > 0)){
            $(this).closest('form').find('.correct').removeClass('correct');
            $(this).siblings('input[type="submit"]').click();
        }

    });


    Splitting({
        // target: "[data-split]",
        // by: 'words',
        // target: "[data-splitting]",
        // by: "chars",
        // key: null
    });

    if($(window).width() > 1150) {
        $('#fullpage').fullpage({
            //options here
            anchors: ['firstPage', 'secondPage', 'threePage', 'fourPage', 'fivePage'],
            navigation: true,
            slidesNavigation: true,
            licenseKey: true,
            sectionSelector: '.section',
            scrollOverflow: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            menu: '#fullpage-menu',
            scrollingSpeed: 400,

            // onLeave: function(index, nextIndex, direction){
            //     var idx = Math.abs(index - nextIndex)*.1;
            //     $.fn.fullpage.setScrollingSpeed(idx*700);
            // },

            onLeave: function (anchorLink, index, nextIndex, destination) {
                var sectionCount = $('#fullpage .section').length;
                // console.log(index.index + 1);
                if (index.index > 0) {
                    $('body').addClass('notFirstDisplay')
                } else {
                    $('body').removeClass('notFirstDisplay')
                }

                $('.fullpage-menu__top').html('0' + (index.index + 1));
                $('.fullpage-menu__body-fill').css('height', ((index.index + 1) / sectionCount * 100) + '%');




                if (nextIndex === 'down') {
                    // $('.section div:not(.slick-slider) [data-aos]').each(function () {
                    //     $(this).removeClass("aos-animate")
                    // });

                    setTimeout(function () {
                        $('.section[data-anchor=' + anchorLink.anchor + ']').next('.section').find('[data-aos]').each(function () {
                            $(this).addClass("aos-animate");
                        });
                    }, 50);
                }

                if  (nextIndex === 'up' && index.index === 0){
                    $('.section .slick-slider [data-aos]').each(function () {
                        $(this).addClass("aos-animate");
                    });
                }

            },


            // onSlideLeave: function(){
            //     $('.slide [data-aos]').each(function(){
            //         $(this).removeClass("aos-animate")
            //     });
            // },

            // afterSlideLoad: function(){
            //     $('.slide.active [data-aos]').each(function(){
            //         $(this).addClass("aos-animate")
            //     });
            // },

            afterLoad: function () {

                $('.section.active:not(.first-section) [data-aos]').each(function () {
                    $(this).addClass("aos-animate")
                });

            },

        });
        $('.fullpage-menu__bottom').html('0' + $('#fullpage .section').length);
    }




    // if(isMobileFunc()){
    //     fullpage_api.destroy('all');
    //     setTimeout(function () {
    //         AOS.init();
    //         alert(21223)
    //     },1)
    // }

    if($(window).width() < 1150){
        // fullpage_api.destroy('all');
        setTimeout(function () {
            AOS.init();
        }, 150)
    }




    // $(window).scroll(function(){
    //     var ratio = $(document).scrollTop()/(($(document).height() - $(window).height()) / 100);
    //     $("#progress").height(ratio+"%");
    // });


    $('.custom-slick-slider').slick({
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
        dots: false,
        arrows: false,
    });

    $('.fade').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        draggable: 'false',
        swipe: 'false',
        swipeToSlide: 'false',
        touchMove: 'false',
        accessibility: 'false',
    });

    // $('.fade').on('init', function(event, slick){
    //
    // });

    if($(window).width() > 1150) {
        setTimeout(() => {
            $('.section.active .slick-slider .first-slide [data-aos]').each(function () {
                $(this).addClass("aos-animate")
            });
            // alert(23)
        }, 400)
    }

    $('.fade').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // alert(23)
        $(document).find('[data-slick-index] .main-top-block__title').removeClass("aos-animate");
        setTimeout(function () {
            $(document).find('[data-slick-index=' + nextSlide + '] .main-top-block__title').addClass("aos-animate");
        }, 300);
        $(document).find('[data-slick-index] .main-top-block__text').removeClass("aos-animate");
        setTimeout(function () {
            $(document).find('[data-slick-index=' + nextSlide + '] .main-top-block__text').addClass("aos-animate");
        }, 300);
        $(document).find('[data-slick-index] .main-top-block__arrow').removeClass("aos-animate");
        setTimeout(function () {
            $(document).find('[data-slick-index=' + nextSlide + '] .main-top-block__arrow').addClass("aos-animate");
        }, 200);
        $(document).find('.main-top-block__title').removeClass("splitting");
        setTimeout(function () {
            $(document).find('.main-top-block__title').addClass("splitting");
        }, 100);
    });

    $(document).on('click', '.mobile-menu-ico', function (e) {
        $('.header-mobile').addClass('active');
    });

    $(document).on('click', '.header-mobile__close', function (e) {
        $('.header-mobile').removeClass('active');
    });

    if(isMobileFunc()){
        //var h = $('.main-top-block').height();

        $(document).scroll(function(){
            var top = $(document).scrollTop();

            if(top > 100) {
                $('body').addClass('notFirstDisplay')
            } else {
                $('body').removeClass('notFirstDisplay')
            }
        });
    }

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 ) {
            $('body').addClass('notFirstDisplay');
        } else {
            $('body').removeClass('notFirstDisplay');
        }
    });

    // $(document).on('click', '.header__contact-i', function (e) {
    //     e.preventDefault();
    //     window.scrollTo('#fivePage');
    // });

});

