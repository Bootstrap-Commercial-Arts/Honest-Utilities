# Honest Utilities
### honest.css & honest.js
Created by *Bootstrap Commercial Arts, inc.* for *Honest Marketing & Business Development*

to use honest.css: `<link rel="stylesheet" href="https://honest-utilities.netlify.app/honest.css">`

to use honest.js: `<script type="text/javascript" src="https://honest-utilities.netlify.app/honest.js"></script>`



## CSS micro-framework
honest.css is created for creating websites with the highest fidelity to their mockups, while still allowing for rapid development.
- One breakpoint (680px)
- All elements scale perfectly with screen width, using REM units.
- Max width of 1200px keeps content centered & correctly sized on extra-wide screens
- Simple row & column structure
- Default classes for Flex, CSS grid, and block rows
- Print @media query styling removes backgrounds and changes all text to black. Circumvent this behavior by adding the class "honest-print"

---

## Javascript functions
**displayToggle** has three parameters:
1. Control element ID - element that gets clicked on to initiate the function (most often the button element)
2. Display element ID - element that is shown/hidden by the function
3. Function style - an object literal that has the following key pairs:
    - easyHide (boolean): hide the display element when user clicks anywhere other than the display element.
    - modal (boolean): adds a div behind the display element with the id "modal-overlay". Default styling for the overlay is set within *honest.css*, but you can override those styles in your own css if you choose. No styling for the modal pop-up itself is included.
