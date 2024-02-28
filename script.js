const title = document.querySelectorAll('.accordion-title');
const toggle = document.querySelectorAll('.accordion-toggle');

// function openContent(){
//         content.classList.add('toggle-on');
// }
// function closeContent(){
//         content.classList.remove('toggle-on');
// }
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