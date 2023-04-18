import '../styles/main.scss';

document.addEventListener("DOMContentLoaded", function(event) {
	window.onscroll =  adjustHeader;
	document.getElementById("close_breaking").addEventListener("click", close);
	document.getElementById("cookies").addEventListener("click", openCookiePolicy);
});

function adjustHeader(){
	var header = document.getElementById("site_header");
	var navbar = document.getElementById("navbar");
	var trending = document.getElementById("trending");
	var shrinkHeader = 60;
	var scroll = getCurrentScroll();

	if ( scroll >= shrinkHeader ) {
		header.classList.add('small');
		navbar.classList.add('hidden');
		trending.classList.add('hidden');
	} else {
		header.classList.remove('small');
		navbar.classList.remove('hidden');
		trending.classList.remove('hidden');
	}
}

function getCurrentScroll() {
	return window.scrollY || document.documentElement.scrollTop;
}

function close(){
	document.getElementById("breaking_news").classList.add('hidden');
}

function openCookiePolicy(){
	// document.getElementById("cookie_policy").classList.remove('hidden');
}