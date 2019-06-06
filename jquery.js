$(document).ready(function ($) {
	var cont = 0;
	// read the keyboard input
	$(window).keydown(function (e) {
		// verify the sequence of buttons (38 38 40 40 37 39 37 39 66 65)
		switch (e.which) {
			case 38:
				if (cont == 0 || cont == 1) {
					cont++;
				}
				else cont = 0;
				break;
			case 40:
				if (cont == 2 || cont == 3) {
					cont++;
				}
				else cont = 0;
				break;
			case 37:
				if (cont == 4 || cont == 6) {
					cont++;
				}
				else cont = 0;
				break;
			case 39:
				if (cont == 5 || cont == 7) {
					cont++;
				}
				else cont = 0;
				break;
			case 66:
				if (cont == 8) {
					cont++;
				}
				else cont = 0;
				break;
			case 65:
				if (cont == 9) {
					egg();
				}
				else cont = 0;
				break;
			default:
				cont = 0;
		}
	});
	// Easter Egg function
	var egg = function () {
		$("h3:first").replaceWith("<b><h3 style='display: none;'>Your Easter Egg</h3></b>");
		$("h3").fadeIn(3000);
		$("h3").fadeOut(3000);
		setTimeout(function () { $("h3:first").replaceWith("<h3>↑ ↑ ↓ ↓ ← → ← → B A</h3>") }, 6000);
	}
});