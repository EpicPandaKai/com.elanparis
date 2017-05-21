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
$(document).on('click', '.nav-justified > li > a#nav-home', function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadHome();
});

$(document).on('click', '.nav-justified > li > a#nav-about', function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadAbout();
});

$(document).on('click', '.nav-justified > li > a#nav-courses', function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadCourses();
});

$(document).on('click', '.nav-justified > li > a#nav-contact', function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
    loadContact();
});