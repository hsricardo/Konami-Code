# Konami-Code

This repository contains a simple website Konami code using jQuery.

- [Definition](#definition)
- [jQuery](#jquery)
- [Screenshots](#screenshots)

---
### Definition

[Konami Code](https://en.wikipedia.org/wiki/Konami_Code) is a sequence of buttons used to enable a cheat in many games or revealing easter eggs on websites.

The correct sequence of buttons to be pressed is:

**`↑` `↑` `↓` `↓` `←` `→` `←` `→` `B` `A`**

---
### jQuery

When the konami code is pressed, the [jquery.js](jquery.js) code can be used to change anything in the [index.html](index.html) file. In this example it changes the text contained in the `<h3>` tag.

Read the keyboard input
``` javascript
$(window).keydown(function (e) { });
```

Checks if the pressed key matches the expected sequence of value. Otherwise, reset the reading.

**`38` `38` `40` `40` `37` `39` `37` `39` `66` `65`**
``` javascript
switch (e.which) {
	case value:
		if (cont == position) {
			cont++;
		}
		else cont = 0;
		break;
	default:
		cont = 0;
}
```

If the sequence is complete, execute the Easter Egg function.
``` javascript
var egg = function () { }
```

---
### Screenshots

Original HTML screenshot:
![HTML Screenshot (1)]( assets/screenshots(1).jpg)

HTML screenshot after running the egg() function:
![HTML Screenshot (2)]( assets/screenshots(2).jpg)
