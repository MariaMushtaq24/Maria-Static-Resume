var toggleExpertiseButton = document.getElementById('toggle-expertise');
var expertiseSection = document.getElementById('expertise');
toggleExpertiseButton.addEventListener('click', function () {
    if (expertiseSection.style.display === 'none') {
        expertiseSection.style.display = 'block';
    }
    else {
        expertiseSection.style.display = 'none';
    }
});
