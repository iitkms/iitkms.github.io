var nav = document.getElementById('navbar');
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

window.onscroll = function(){reduceNav()};

function reduceNav(){
	if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
		nav.style.padding = "0px 0px";
		nav.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
		nav.style.backgroundColor = "#111111";
	}
	else {
		nav.style.padding = "20px 60px";
		nav.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.0)";
		nav.style.background = "none";
	}
}

