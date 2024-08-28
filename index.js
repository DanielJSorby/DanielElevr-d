// Navbar blir solid når du skroller forbi starten av siden
$(document).ready(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 1) {
			$(".navbar").addClass("solid-nav");

			document.getElementById("logo").style.backgroundImage =
				"url('./Bilder/D design logo hot og bright pink.png')";
			console.log("solid-nav");
			//$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent\ Hvit.png'); // Endre til solidt bilde når .navbar har .solid-nav
		} else {
			$(".navbar").removeClass("solid-nav");
			console.log("no-solid-nav");
			document.getElementById("logo").style.backgroundImage =
				"url('./Bilder/D design logo hot og bright pink.png')";

			//$('#navbar-logo').attr('src', './Bilder/Oslo\ Kommune\ Logo\ Transparent.png'); // Endre tilbake til originalt bilde når .navbar ikke har .solid-nav
		}
	});
});

/* Loading Screen */
$(window).on("load", function () {
	const loader = $("#loader");
	const tekst = "Stem Daniel";
	const fargetBokstaver = 5;
	const fart = 100; // Definerer farten. 1000 er ett sekund.

	let output = "";
	for (let i = 0; i < tekst.length; i++) {
		output += `<span class="gjennomsiktig">${tekst[i]}</span>`;
	}

	loader.html(output);

	let index = 0;
	const interval = setInterval(() => {
		const chars = loader.find("span");
		for (let i = 0; i < chars.length; i++) {
			const modIndex = (index + i) % tekst.length;
			if (i < fargetBokstaver) {
				$(chars[modIndex])
					.removeClass("gjennomsiktig")
					.addClass("farget");
			} else {
				$(chars[modIndex])
					.removeClass("farget")
					.addClass("gjennomsiktig");
			}
		}
		index = (index + 1) % tekst.length;
	}, fart);

	// Fader ut hele lasteskjermen gradvis etter å ha scroll ned til #splash
	setTimeout(function () {
		// Ruller ned til element med ID 'splash'
		$("html, body").animate(
			{
				scrollTop: $("#splash").offset().top,
			},
			500,
			function () {
				// Varighet på 1000ms (1 sekund)
				// Når scroll-animasjonen er ferdig, fader vi ut lasteskjermen
				$(".loading").fadeOut(0, function () {
					// Varighet på 1500ms (1.5 sekunder)
					$(this).remove(); // Fjerner hele lasteskjerm-elementet etter fadeOut
				});
			}
		);
	}, 5000); // Juster varigheten til ønsket tid
});
