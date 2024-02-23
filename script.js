const open = document.querySelectorAll('.accordion-title');
const close = document.querySelectorAll('#accordion-toggle');
const content = document.querySelectorAll('#accordionContainer');

function openContent(){
        
        content.classList.add('toggle-on');
}
function closeContent(){
        content.classList.remove('toggle-on');
}

open.addEventListener('click', openContent);
close.addEventListener('click', closeContent);
