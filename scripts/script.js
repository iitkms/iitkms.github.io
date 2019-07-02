// Pre Loader
window.onload = function () {
    setTimeout(() => {
        var loader = document.getElementById('preloader');
        loader.style.display = 'none';
        loader.innerHTML = ' '; // Remove content to save memory
    }, 500);
};


// Navbar
var nav = document.getElementById('navbar');
var navxs = document.getElementById('nav-row-xs');
var isNavOpen = false;

function toggleNav() {
	if (isNavOpen){
		nav.style.right = "-250px";
		isNavOpen = false;
	}
	else {
		nav.style.right = "0px";
		isNavOpen = true;
	}
}


// Onscroll on Window
window.onscroll = function(){reduceNav()};

function reduceNav(){
	if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
		if(isMobile()){
			navxs.style.backgroundColor = "#111111";
			navxs.style.padding = "2px 5px 2px 15px";
		}
		else {
			nav.style.padding = "0px 0px";
			nav.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
			nav.style.backgroundColor = "#111111";
		}
	}
	else {
		if(isMobile()){
			navxs.style.background = "none";
			navxs.style.padding = "2px 5px 2px 15px";
		}
		else {
			nav.style.padding = "20px 60px";
			nav.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.0)";
			nav.style.background = "none";
		}
	}
}

function isMobile() {
	if(window.innerWidth > 980){
		return false;
	}
	else return true;
}


