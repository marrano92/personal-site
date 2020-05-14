// $(document).ready(function(){
//     $('#nav-icon').click(function(){
//         $(this).toggleClass('open');
//     });
// });

document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('#nav-icon')) return;
    
    event.target.classList.toggle('open');
}, false);
