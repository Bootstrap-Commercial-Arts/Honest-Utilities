// HONEST.JS is created by Bootstrap Commercial Arts for Honest Marketing & Business Development
// Go to https://github.com/Bootstrap-Commercial-Arts/Honest-Utilities for documentation


//Create objects from query parameters
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());





// Display toggle function (show/hide elements from mouse events)
function displayToggle(controlElement, targetElement, funcSettings = {}) {
    //control & target element params
    const buttonElement = document.getElementById(controlElement);
    const displayElement = document.getElementById(targetElement);
    //funcSettings params
    const funcStyle = funcSettings.funcStyle;
    const isRollOff = funcSettings.rolloff || false;
    const closeText = funcSettings.closeText || 'close'

    // Easy Hide style
    if (funcStyle === 'easyHide') {
        document.addEventListener('click', function(event) {
            if(displayElement.style.display === 'block' && !(displayElement.contains(event.target))) {
                    displayElement.style.display = 'none';
                }
            else if(displayElement.style.display === 'none' && event.target === buttonElement){
                displayElement.style.display = 'block';
            }
        
        });      
    }

    // Modal style
    else if (funcStyle === 'modal') {
        buttonElement.addEventListener('click', function() {
            if(displayElement.style.display === 'none') {
                displayElement.style.display = 'block';
                
                // check if modalOverlay exists
                let doesOverlayExist = document.getElementById('modal-overlay'); 
                if(doesOverlayExist === null) {
                    // create a new overlay element
                    var modalOverlay = document.createElement("div");
                    modalOverlay.id = 'modal-overlay';
                    var modalClose = document.createElement("div");
                    modalClose.id = 'modal-close';
                    modalClose.innerHTML = `<p>${closeText}</p>`;

                    // add the newly created overlay and its content into the DOM
                    const parentDiv = displayElement.parentNode;
                    const currentDiv = displayElement;
                    parentDiv.appendChild(modalOverlay);
                    currentDiv.prepend(modalClose);
                } else {
                    // if the elements have already been created, change the display to 'block' instead
                    let modalOverlay = document.getElementById('modal-overlay');
                    let modalClose = document.getElementById('modal-close');
                    modalOverlay.style.display = 'block';
                    modalClose.style.display = 'block';
                    displayElement.style.display = 'block';

                }

                // close the modal
                modalOverlay = document.getElementById('modal-overlay');
                modalClose = document.getElementById('modal-close');
                modalOverlay.addEventListener('click', closeModal);
                modalClose.addEventListener('click', closeModal);
                document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                  closeModal();
                }
              });

            function closeModal() {
                displayElement.style.display = 'none';
                modalOverlay.style.display = 'none';
                modalClose.style.display = 'none';
            }
            }
        });
        
    }

    // Rollover style
    else if (funcStyle === 'rollover') {
        buttonElement.addEventListener('mouseenter', function() {
                displayElement.style.display = 'block';
        });
        if (isRollOff === true) {
            buttonElement.addEventListener('mouseleave', function() {
                displayElement.style.display = 'none';
            });
        }
        
    }
    

    // Default style
    else {
        buttonElement.addEventListener('click', function() {
            if(displayElement.style.display === 'none') {
                displayElement.style.display = 'block';
            } else {
                displayElement.style.display = 'none';
            }
        });
    }
};



// Modal window on page-load
function modalOnLoad(targetElement, delay, close) {
    //save parameters as constants
    const displayElement = document.getElementById(targetElement);
    const modalDelay = delay || 0;
    const closeText = close || 'close'

    if(params.popup != 'no') {
        window.addEventListener("load", function() {
        setTimeout(function() {
            displayElement.style.display = 'block';

            // create a new overlay & close button elements
            var modalOverlay = document.createElement("div");
            modalOverlay.id = 'modal-overlay';
            var modalClose = document.createElement("div");
            modalClose.id = 'modal-close';
            modalClose.innerHTML = `<p>${closeText}</p>`;

            // add the newly created overlay and its content into the DOM
            const parentDiv = displayElement.parentNode;
            const currentDiv = displayElement;
            parentDiv.appendChild(modalOverlay);
            currentDiv.prepend(modalClose);

            // close the modal
            modalOverlay.addEventListener('click', closeModal);
            modalClose.addEventListener('click', closeModal);
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                  closeModal();
                }
              });

            function closeModal() {
                displayElement.style.display = 'none';
                modalOverlay.style.display = 'none';
                modalClose.style.display = 'none';
            }

          }, modalDelay);
        
        });
    }
}


// Set element's height equal to another element's height
function setHeight(controlElement, targetElement) {
    window.addEventListener("load", function() {
        //control & target element params
        const setter = document.getElementById(controlElement);
        const target = document.getElementById(targetElement);
        const height = setter.offsetHeight;
        target.style.height = `${height}px`;
    });
}

// Set element's width equal to another element's width
function setWidth(controlElement, targetElement) {
    window.addEventListener("load", function() {
        //control & target element params
        const setter = document.getElementById(controlElement);
        const target = document.getElementById(targetElement);
        const width = setter.offsetWidth;
        target.style.width = `${width}px`;
        console.log(width)
    });
}
