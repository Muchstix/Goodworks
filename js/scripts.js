/* Template: Aria - Business HTML Landing Page Template
   Author: Inovatik
   Created: Jul 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});

	
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });
    

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });

    
    /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });	
    });
    

    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Call Me Form */
    $("#callMeForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            lformError();
            lsubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            lsubmitForm();
        }
    });

    function lsubmitForm() {
        // initiate variables with form content
		var name = $("#lname").val();
		var phone = $("#lphone").val();
		var email = $("#lemail").val();
		var select = $("#lselect").val();
        var terms = $("#lterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/callmeform-process.php",
            data: "name=" + name + "&phone=" + phone + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    lformSuccess();
                } else {
                    lformError();
                    lsubmitMSG(false, text);
                }
            }
        });
	}

    function lformSuccess() {
        $("#callMeForm")[0].reset();
        lsubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function lformError() {
        $("#callMeForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function lsubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#lmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

    /* Asset Finding Application Form */
$("#assetFiningForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        aformError();
        asubmitMSG(false, "Please fill all fields!");
    } else {
        // everything looks good!
        event.preventDefault();
        asubmitForm();
    }
});

function asubmitForm() {
    // initiate variables with form content
    var name = $("#aname").val();
    var phone = $("#aphone").val();
    var nin = $("#anin").val();
    var nationality = $("#anation").val();
    var address = $("#aaddress").val();
    var email = $("#aemail").val();
    var select = $("#aselect").val();
    var terms = $("#aterms").val();
    
    $.ajax({
        type: "POST",
        url: "php/assetfinding-process.php",
        data: "name=" + name + "&phone=" + phone + "&nin=" + nin + "&nationality=" + nationality + "&address=" + address + "&email=" + email + "&select=" + select + "&terms=" + terms, 
        success: function(text) {
            if (text == "success") {
                aformSuccess();
            } else {
                aformError();
                asubmitMSG(false, text);
            }
        }
    });
}

function aformSuccess() {
    $("#assetFindingForm")[0].reset();
    asubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
}

function aformError() {
    $("#assetFindingForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function asubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#amsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* Financial Literacy Form */
$("#financialLiteracyForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        fformError();
        fsubmitMSG(false, "Please fill all fields!");
    } else {
        // everything looks good!
        event.preventDefault();
        fsubmitForm();
    }
});

function fsubmitForm() {
    // initiate variables with form content
    var name = $("#fname").val();
    var phone = $("#fphone").val();
    var nin = $("#fnin").val();
    var nationality = $("#fnation").val();
    var address = $("#faddress").val();
    var email = $("#femail").val();
    var select = $("#fselect").val();
    var terms = $("#fterms").val();
    
    $.ajax({
        type: "POST",
        url: "php/financialliteracy-process.php",
        data: "name=" + name + "&phone=" + phone + "&nin=" + nin + "&nationality=" + nationality + "&address=" + address + "&email=" + email + "&select=" + select + "&terms=" + terms, 
        success: function(text) {
            if (text == "success") {
                fformSuccess();
            } else {
                fformError();
                fsubmitMSG(false, text);
            }
        }
    });
}

function fformSuccess() {
    $("#financialLiteracyForm")[0].reset();
    asubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
}

function fformError() {
    $("#financialLiteracyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function fsubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#fmsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* Group Loan Form */
$("#groupLoanForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        gformError();
        gsubmitMSG(false, "Please fill all fields!");
    } else {
        // everything looks good!
        event.preventDefault();
        gsubmitForm();
    }
});

function gsubmitForm() {
    // initiate variables with form content
    var name = $("#gname").val();
    var phone = $("#gphone").val();
    var nin = $("#gnin").val();
    var nationality = $("#gnation").val();
    var address = $("#gaddress").val();
    var email = $("#gemail").val();
    var select = $("#gselect").val();
    var terms = $("#gterms").val();
    
    $.ajax({
        type: "POST",
        url: "php/grouploan-process.php",
        data: "name=" + name + "&phone=" + phone + "&nin=" + nin + "&nationality=" + nationality + "&address=" + address + "&email=" + email + "&select=" + select + "&terms=" + terms, 
        success: function(text) {
            if (text == "success") {
                gformSuccess();
            } else {
                gformError();
                gsubmitMSG(false, text);
            }
        }
    });
}

function gformSuccess() {
    $("#groupLoanForm")[0].reset();
    gsubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
}

function gformError() {
    $("#groupLoanForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function gsubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#gmsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* Home Improvement Loan Form */
$("#homeImprovementLoanForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        hformError();
        hsubmitMSG(false, "Please fill all fields!");
    } else {
        // everything looks good!
        event.preventDefault();
        hsubmitForm();
    }
});

function hsubmitForm() {
    // initiate variables with form content
    var name = $("#hname").val();
    var phone = $("#hphone").val();
    var nin = $("#hnin").val();
    var nationality = $("#hnation").val();
    var address = $("#haddress").val();
    var email = $("#hemail").val();
    var select = $("#hselect").val();
    var terms = $("#hterms").val();
    
    $.ajax({
        type: "POST",
        url: "php/homeimprovement-process.php",
        data: "name=" + name + "&phone=" + phone + "&nin=" + nin + "&nationality=" + nationality + "&address=" + address + "&email=" + email + "&select=" + select + "&terms=" + terms, 
        success: function(text) {
            if (text == "success") {
                hformSuccess();
            } else {
                hformError();
                hsubmitMSG(false, text);
            }
        }
    });
}

function hformSuccess() {
    $("#homeImprovementLoanForm")[0].reset();
    hsubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
}

function hformError() {
    $("#homeImprovementLoanForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function hsubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#hmsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* Individual Loan Application Form */
$("#individualLoanForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        iformError();
        isubmitMSG(false, "Please fill all fields!");
    } else {
        // everything looks good!
        event.preventDefault();
        isubmitForm();
    }
});

function isubmitForm() {
    // initiate variables with form content
    var name = $("#iname").val();
    var phone = $("#iphone").val();
    var nin = $("#inin").val();
    var nationality = $("#ination").val();
    var address = $("#iaddress").val();
    var email = $("#iemail").val();
    var select = $("#iselect").val();
    var terms = $("#iterms").val();
    
    $.ajax({
        type: "POST",
        url: "php/individualloans-process.php",
        data: "name=" + name + "&phone=" + phone + "&nin=" + nin + "&nationality=" + nationality + "&address=" + address + "&email=" + email + "&select=" + select + "&terms=" + terms, 
        success: function(text) {
            if (text == "success") {
                iformSuccess();
            } else {
                iformError();
                isubmitMSG(false, text);
            }
        }
    });
}

function iformSuccess() {
    $("#individualLoanForm")[0].reset();
    isubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
}

function iformError() {
    $("#individualLoanForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function isubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#imsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* Savings Account Application Form */
$("#savingsAccountForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        sformError();
        ssubmitMSG(false, "Please fill all fields!");
    } else {
        // everything looks good!
        event.preventDefault();
        ssubmitForm();
    }
});

function ssubmitForm() {
    // initiate variables with form content
    var name = $("#sname").val();
    var phone = $("#sphone").val();
    var nin = $("#snin").val();
    var nationality = $("#snation").val();
    var address = $("#saddress").val();
    var email = $("#semail").val();
    var select = $("#sselect").val();
    var terms = $("#sterms").val();
    
    $.ajax({
        type: "POST",
        url: "php/savings-process.php",
        data: "name=" + name + "&phone=" + phone + "&nin=" + nin + "&nationality=" + nationality + "&address=" + address + "&email=" + email + "&select=" + select + "&terms=" + terms, 
        success: function(text) {
            if (text == "success") {
                sformSuccess();
            } else {
                sformError();
                ssubmitMSG(false, text);
            }
        }
    });
}

function sformSuccess() {
    $("#savingsAccountForm")[0].reset();
    ssubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
}

function sformError() {
    $("#savingsAccountForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function ssubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#smsgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* School Fees Loan Application Form */
$("#schoolLoanForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        eformError();
        esubmitMSG(false, "Please fill all fields!");
    } else {
        // everything looks good!
        event.preventDefault();
        esubmitForm();
    }
});

function esubmitForm() {
    // initiate variables with form content
    var name = $("#ename").val();
    var phone = $("#ephone").val();
    var nin = $("#enin").val();
    var nationality = $("#enation").val();
    var address = $("#eaddress").val();
    var email = $("#eemail").val();
    var select = $("#eselect").val();
    var terms = $("#eterms").val();
    
    $.ajax({
        type: "POST",
        url: "php/schoolfees-process.php",
        data: "name=" + name + "&phone=" + phone + "&nin=" + nin + "&nationality=" + nationality + "&address=" + address + "&email=" + email + "&select=" + select + "&terms=" + terms, 
        success: function(text) {
            if (text == "success") {
                eformSuccess();
            } else {
                eformError();
                esubmitMSG(false, text);
            }
        }
    });
}

function aformSuccess() {
    $("#schoolLoanForm")[0].reset();
    esubmitMSG(true, "Request Submitted!");
    $("input").removeClass('notEmpty'); // resets the field label after submission
}

function aformError() {
    $("#schoolLoanForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function esubmitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated";
    } else {
        var msgClasses = "h3 text-center";
    }
    $("#emsgSubmit").removeClass().addClass(msgClasses).text(msg);
}


    /* Contact Form */
    $("#contactForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
        }
    });

    function csubmitForm() {
        // initiate variables with form content
		var name = $("#cname").val();
		var email = $("#cemail").val();
        var message = $("#cmessage").val();
        var terms = $("#cterms").val();
        $.ajax({
            type: "POST",
            url: "php/contactform-process.php",
            data: "name=" + name + "&email=" + email + "&message=" + message + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    cformSuccess();
                } else {
                    cformError();
                    csubmitMSG(false, text);
                }
            }
        });
	}

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


    /* Privacy Form */
    $("#privacyForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            pformError();
            psubmitMSG(false, "Please fill all fields!");
        } else {
            // everything looks good!
            event.preventDefault();
            psubmitForm();
        }
    });

    function psubmitForm() {
        // initiate variables with form content
		var name = $("#pname").val();
		var email = $("#pemail").val();
        var select = $("#pselect").val();
        var terms = $("#pterms").val();
        
        $.ajax({
            type: "POST",
            url: "php/privacyform-process.php",
            data: "name=" + name + "&email=" + email + "&select=" + select + "&terms=" + terms, 
            success: function(text) {
                if (text == "success") {
                    pformSuccess();
                } else {
                    pformError();
                    psubmitMSG(false, text);
                }
            }
        });
	}

    function pformSuccess() {
        $("#privacyForm")[0].reset();
        psubmitMSG(true, "Request Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
    }

    function pformError() {
        $("#privacyForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function psubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#pmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
    

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);