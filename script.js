const toggle = document.querySelector('#accordion-toggle');
const content = document.querySelector('#accordionContainer');

function toggleContent(){
        content.classList.toggle('toggle-on');
}

toggle.addEventListener('click', toggleContent);