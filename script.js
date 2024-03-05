const submit = document.getElementById('submitButton');
let title = document.querySelectorAll('.accordion-title');
let titleInput = document.getElementById('newAccordionTitle');
let contentInput = document.getElementById('newAccordionContent');



const newAccordianElement = function createAccordianElement(){
   if(titleInput.value == ""){alert('You must add a title first, thanks.');}else{
    let titleInput = document.getElementById('newAccordionTitle');
    const newTitleContainer = document.createElement('div');
    const newTitle = document.createElement('div');
    const newToggle = document.createElement('div');
   
    // add classes to new elements
    newTitleContainer.classList.add('accordion-title-container');
    newTitle.classList.add('accordion-title');
    newToggle.classList.add('accordion-toggle');
    

    //build new element
    newTitleContainer.appendChild(newTitle);
    newTitle.innerText = titleInput.value;
    newTitleContainer.appendChild(newToggle);
    newToggle.innerText = "X";

    return newTitleContainer;
   }
}

function attachNewElement(){
    if(contentInput.value == ""){alert('You must add new content first, thanks.');}else{
    let contentInput = document.getElementById('newAccordionContent');
    const accordionContainer = document.getElementById('accordianModuleContainer');
    const newContentContainer = document.createElement('div');
    newContentContainer.classList.add('accordion-content-container');
    newContentContainer.innerText = contentInput.value;
    const newElement = newAccordianElement();

    accordionContainer.appendChild(newElement);
    accordionContainer.appendChild(newContentContainer);
    }
}

function toggleElement() {
    let title = document.querySelectorAll('.accordion-title');
    let toggle = document.querySelectorAll('.accordion-toggle');

    for(let i = 0; i < title.length; i++){
        title[i].addEventListener('click', function(e){
            let content = e.target.parentElement.nextElementSibling;
            content.classList.add('toggle-on');
        });
    }

    for(let i = 0; i < toggle.length; i++){
        toggle[i].addEventListener('click', function(e){
            let content = e.target.parentElement.nextElementSibling;
            content.classList.remove('toggle-on');
        });
    }
}

function clearInputs(){
    if(!titleInput.value == "" && contentInput.value == "" ){
        titleInput.value = titleInput.value;
    }else if(!contentInput.value == "" && titleInput.value == ""){
        contentInput.value = contentInput.value;
    } else{
    titleInput.value = "";
    contentInput.value = "";
    }
}

if(title.length <= 1){
    toggleElement();
}


submit.addEventListener('click', attachNewElement);
submit.addEventListener('click', toggleElement);
submit.addEventListener('click', clearInputs);






