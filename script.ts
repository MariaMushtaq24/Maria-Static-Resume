const toggleExpertiseButton = document.getElementById('toggle-expertise') as HTMLButtonElement;
const expertiseSection = document.getElementById('expertise') as HTMLElement;

toggleExpertiseButton.addEventListener('click', ()=> {
    if (expertiseSection.style.display === 'none') {
        expertiseSection.style.display = 'block';
    } else {
        expertiseSection.style.display = 'none';
    }
});