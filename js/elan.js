/* Initialization */
$(document).ready(function(){
    $("#elan-header").load("html/headers/header.html");
    $("#elan-header-xs").load("html/headers/header-xs.html");
    $("#elan-content-home").load("html/contents/home.html");
    $("#elan-footer").load("html/footer.html");
});

/* Loaders */
var loadHome = function() {
	$('section').addClass('hidden');
	$('#elan-content-home').removeClass('hidden');
	$("#elan-content-home").load("html/contents/home.html");
}

var loadAbout = function() {
	$('section').addClass('hidden');
	$('#elan-content-about').removeClass('hidden');
    $("#elan-content-about").load("html/contents/about.html");
};

var loadCourses = function() {
    $('section').addClass('hidden');
    $('#elan-content-courses').removeClass('hidden');
    $('#elan-content-courses').load("html/contents/courses.html");
}

var loadContact = function() {
    $('section').addClass('hidden');
    $('#elan-content-contact').removeClass('hidden');
    $("#elan-content-contact").load("html/contents/contact.html");
}

/* Navigation */
$(document).on('click', 'a.elan-nav-home', function(e) {
    $('#elan-navbar-collapse').collapse("hide");
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadHome();
});

$(document).on('click', 'a.elan-nav-about', function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadAbout();
    $('#elan-navbar-collapse').collapse("hide");
});

$(document).on('click', 'a.elan-nav-courses', function(e) {
    $('#elan-navbar-collapse').collapse("hide");
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadCourses();
});

$(document).on('click', 'a.elan-nav-contact', function(e) {
    $('#elan-navbar-collapse').collapse("hide");
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadContact();
});

/* Email form */

    var form = document.getElementsByTagName('form')[0];
    if (form != undefined)
    form.addEventListener('submit',contact,false);
    function contact(e) {
        // Prevent Default Form Submission
        e.preventDefault();

        var target = e.target || e.srcElement;
        var i = 0;
        var message = '';

        // Loop Through All Input Fields
        for(i = 0; i < target.length; ++i) {
         // Check to make sure it's a value. Don't need to include Buttons
         if(target[i].type != 'text' && target[i].type != 'textarea') {
                // Skip to next input since this one doesn't match our rules
            continue;
         }

         // Add Input Name and value followed by a line break
         message += target[i].name + ': ' + target[i].value + "\r\n";
        }
        // Modify the hidden body input field that is required for the mailto: scheme
        target.elements["body"].value = message;

        // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
        this.submit();
    }