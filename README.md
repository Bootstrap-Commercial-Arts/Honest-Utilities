# Honest Utilities
### honest.css & honest.js
Created by *Bootstrap Commercial Arts, inc.* for *Honest Marketing & Business Development*

to use honest.css: `<link rel="stylesheet" href="https://honest-utilities.netlify.app/honest.css">`

to use honest.js: `<script type="text/javascript" src="https://honest-utilities.netlify.app/honest.js"></script>`



## CSS micro-framework
honest.css is created for creating websites with the highest fidelity to their mockups, while still allowing for rapid development.
- One breakpoint (680px).
- All elements scale perfectly with screen width, using REM units.
- Max width of 1200px keeps content centered & correctly sized on extra-wide screens.
- Simple row & column structure.
- Default classes for Flex, CSS grid, and block rows.
- Print @media query styling removes backgrounds and changes all text to black. Circumvent this behavior by adding the class "honest-print".

---

## Javascript functions
**displayToggle** shows/hides elements after mouse events. There are three parameters, the third which describes the function style & any additional options that style may include:
1. Control element ID - element that gets clicked on to initiate the function (most often the button element).
2. Target element ID - element that is shown/hidden by the function.
3. Function Settings (optional) - an object literal that has the following key pairs:
    funcStyle
    - easyHide: hide the display element when user clicks anywhere other than the display element.
    - rollover: shows the display element upon mouseover of the control element.
    - modal: adds a div behind the display element with the id "modal-overlay".
    
    In addition to the funcStyle, specific funcStyles have optional keys that may be added:
    - rollOff (rollover funcStyle): does the display element hide upon mouseleave of the control element (boolean value).
    

**modalOnLoad** loads a modal pop-up on page load, and creates two unstyled DOM elements with the IDs "modal-overlay" and "modal-close". The function also checks for a URL search param of 'popup=no' that prevents the function from executing. There are three parameters:
1. Display element ID - element that is shown by the function.
2. Delay (optional) - millisecond delay from page load until function executes. Default value is 0.
3. Close (optional) - text to display in the close button. Default value is 'close'.


**setHeight** sets the height of one element to match another. There are two parameters:
1. Control element ID - element which sets the height.
2. Target element ID - element which matches the height of the control element.


**setWidth** sets the width of one element to match another. There are two parameters:
1. Control element ID - element which sets the width.
2. Target element ID - element which matches the width of the control element.

