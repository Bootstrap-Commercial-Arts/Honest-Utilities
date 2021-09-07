function displayToggle(controlElement, targetElement, funcStyle) {
    const buttonElement = document.getElementById(controlElement);
    const displayElement = document.getElementById(targetElement);
    const isEasyHidden = funcStyle.easyHide || false;
    const isModal = funcStyle.modal || false;

    if (isEasyHidden === true) {
        document.addEventListener('click', function (event) {
            if(displayElement.style.display === 'block' && !(displayElement.contains(event.target))) {
                    displayElement.style.display = 'none';
                }
            else if(displayElement.style.display === 'none' && event.target === buttonElement){
                displayElement.style.display = 'block';
            }
        
        });      
    }

    if (isModal === true) {
        buttonElement.addEventListener('click', function () {
            if(displayElement.style.display === 'none') {
                displayElement.style.display = 'block';
                
                // create a new div element
                const modalOverlay = document.createElement("div");
                modalOverlay.id = "modal-overlay"

                // add the newly created element and its content into the DOM
                const currentDiv = document.getElementById(displayElement);
                document.body.insertBefore(modalOverlay, currentDiv);
                

            } else {
                displayElement.style.display = 'none';
                modalOverlay.style.display = 'none';
            }
        });
    }



    else {
        buttonElement.addEventListener('click', function () {
            if(displayElement.style.display === 'none') {
                displayElement.style.display = 'block';
            } else {
                displayElement.style.display = 'none';
            }
        });
    }
};