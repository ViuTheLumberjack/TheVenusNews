import '../styles/main.scss';

document.addEventListener("DOMContentLoaded", function(event) {
	window.onscroll = adjustHeader;
	document.getElementById("close_breaking").addEventListener("click", close);
	document.getElementById("cookies").addEventListener("click", openCookiePolicy);
	document.getElementById("menu").addEventListener("click", openMenu);
	document.getElementById("search").addEventListener("click", openSearchBar);

	document.getElementById("accordion_like").childNodes.forEach(function(element){
		// check if element has an i tag
		element.childNodes.forEach(function(child){
			if(child.nodeName == "I"){
				element.addEventListener("click", showAccordion);
			}
		});

		
		
	});
});

function showAccordion(){
	var itag = this as HTMLElement;
	var ul = null;
	for(var i = 0; i < itag.childNodes.length; i++){
		if(itag.childNodes[i].nodeName == "UL"){
			ul = itag.childNodes[i] as HTMLElement;
			break;
		}
	}

	ul.style.display = "block";

	itag.removeEventListener("click", showAccordion);
	itag.addEventListener("click", closeAccordion);
}

function closeAccordion(){
	var itag = this as HTMLElement;
	var ul = null;
	for(var i = 0; i < itag.childNodes.length; i++){
		if(itag.childNodes[i].nodeName == "UL"){
			ul = itag.childNodes[i] as HTMLElement;
			break;
		}
	}

	ul.style.display = "none";

	itag.addEventListener("click", showAccordion);
	itag.removeEventListener("click", closeAccordion);
}

function adjustHeader(){
	var header = document.getElementById("header_wrapper");
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
	var page = document.getElementById("page");
	document.body.classList.add('shadow');
	document.body.classList.add('noscroll');
	document.getElementById("cookie_policy").classList.remove('hidden');
	page.addEventListener("click", closeCookiePolicy);
	document.getElementById("cookie_button").addEventListener("click", closeCookiePolicy);
}

function closeCookiePolicy(){
	var page = document.getElementById("page");
	document.body.classList.remove('shadow');
	document.getElementById("site_header").classList.remove('shadow');
	document.body.classList.remove('noscroll');
	page.removeEventListener("click", closeCookiePolicy);
	document.getElementById("cookie_policy").classList.add('hidden');
}

function openMenu(){
	var navbar = document.getElementById("navbar");
	var page = document.getElementById("page");
	document.getElementById("header_wrapper").classList.add("small");
	navbar.classList.add('vertical');
	navbar.classList.remove('hidden');
	document.body.classList.add('shadow');
	document.body.classList.add('noscroll');
	page.addEventListener("click", closeMenu);
	document.getElementById("menu").addEventListener("click", closeMenu);
	document.getElementById("menu").removeEventListener("click", openMenu);
	consumeEvent(window.event);
}

function closeMenu(){
	var navbar = document.getElementById("navbar");
	var page = document.getElementById("page");
	document.getElementById("header_wrapper").classList.remove("small");
	navbar.classList.remove('vertical');
	document.body.classList.remove('shadow');
	document.body.classList.remove('noscroll');
	page.removeEventListener("click", closeMenu);
	document.getElementById("menu").removeEventListener("click", closeMenu);
	document.getElementById("menu").addEventListener("click", openMenu);
}

function openSearchBar(){
	var navbar = document.getElementById("navbar");
	var searchbar = document.getElementById("searchbar");
	var page = document.getElementById("page");
	document.getElementById("header_wrapper").classList.add("small");
	navbar.classList.add('hidden');
	searchbar.classList.remove('hidden');
	document.body.classList.add('shadow');
	document.body.classList.add('noscroll');
	page.addEventListener("click", closeSearchBar);
	document.getElementById("search").addEventListener("click", closeSearchBar);
	document.getElementById("search").removeEventListener("click", openSearchBar);
	consumeEvent(window.event);
}

function closeSearchBar(){
	var navbar = document.getElementById("navbar");
	var searchbar = document.getElementById("searchbar");
	var page = document.getElementById("page");
	document.getElementById("header_wrapper").classList.remove("small");
	navbar.classList.remove('hidden');
	searchbar.classList.add('hidden');
	document.body.classList.remove('shadow');
	document.body.classList.remove('noscroll');
	page.removeEventListener("click", closeSearchBar);
	document.getElementById("search").removeEventListener("click", closeSearchBar);
	document.getElementById("search").addEventListener("click", openSearchBar);
}

function consumeEvent(event: Event) {
	event.stopImmediatePropagation();
	event.stopPropagation();
	event.preventDefault();
}