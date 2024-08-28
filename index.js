// Navbar blir solid når du skroller forbi starten av siden
$(document).ready(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 1) {
			$(".navbar").addClass("solid-nav");

			document.getElementById("logo").style.backgroundImage =
				"url('./Bilder/Første\ logo\ desgin\ DD\ Elvebakken_transparent.png')";
			console.log("solid-nav");
			//$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent\ Hvit.png'); // Endre til solidt bilde når .navbar har .solid-nav
		} else {
			$(".navbar").removeClass("solid-nav");
			console.log("no-solid-nav");
			document.getElementById("logo").style.backgroundImage =
				"url('./Bilder/Første\ logo\ desgin\ DD\ Elvebakken_transparent.png')";

			//$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent.png'); // Endre tilbake til originalt bilde når .navbar ikke har .solid-nav
		}
	});
});

// Loading screen
$(window).on("load", function () {
	$(".data-loader").fadeOut("fast");
});
