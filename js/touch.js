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

