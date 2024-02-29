const title = document.querySelectorAll('.accordion-title');
const toggle = document.querySelectorAll('.accordion-toggle');
const accordionContainer = document.getElementById('accordianModuleContainer');
const titleInput = document.getElementById('newAccordionTitle');
const contentInput = document.getElementById('newAccordionContent');
const submit = document.getElementById('submitButton');


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




// submit.addEventListener('click', function(){
//     let newTitle = titleInput.value;
//     console.log(newTitle);
// });