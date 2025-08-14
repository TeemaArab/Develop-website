// FAQ Accordion

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

   faqContainer.addEventListener('click', (event) => {
    const groupHeader = event.target.closest('.faq-group-header');
    
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    

    //toggle icon 
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');


// Toggle visibility 
    groupBody.classList.toggle('open');


    // close other open FAQ bodies
   const otherGroups = faqContainer.querySelectorAll('.faq-group');
   otherGroups.forEach((otherGroup) => {
       if (otherGroup !== group) {
           const otherGroupBody = otherGroup.querySelector('.faq-group-body');
           otherGroupBody.classList.remove('open');
           const otherIcon = otherGroup.querySelector('i');
           otherIcon.classList.remove('fa-minus');
           otherIcon.classList.add('fa-plus');
       }
   });
});

});
