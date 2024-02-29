const accordionContainer = document.getElementById('accordianModuleContainer');
const title = document.querySelectorAll('.accordion-title');
const toggle = document.querySelectorAll('.accordion-toggle');
const titleInput = document.getElementById('newAccordionTitle');
const contentInput = document.getElementById('newAccordionContent');
const submit = document.getElementById('submitButton');


const newAccordianElement = function createAccordianElement(){
    const newTitleContainer = document.createElement('div');
    const newTitle = document.createElement('div');
    const newToggle = document.createElement('div');
   
    // add classes to new elements
    newTitleContainer.classList.add('accordion-title-container');
    newTitle.classList.add('accordion-title');
    newToggle.classList.add('accordion-toggle');
    

    //build new element
    newTitleContainer.appendChild(newTitle);
    newTitle.innerText = "This Is The Accordion Title Or Faq Question.";
    newTitleContainer.appendChild(newToggle);
    newToggle.innerText = "X";

    return newTitleContainer;
}

function attachNewElement(){
    const newContentContainer = document.createElement('div');
    newContentContainer.classList.add('accordion-content-container');
    newContentContainer.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsa reiciendis et!Lorem ipsum dolor sit amet consectetur adipisicing elit";
    const newElement = newAccordianElement();
    accordionContainer.appendChild(newElement);
    accordionContainer.appendChild(newContentContainer);
}



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


submit.addEventListener('click', attachNewElement);
