document.addEventListener('DOMContentLoaded', () => {
    // Get navigation links and sections
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Function to handle section visibility
    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const sectionId = link.getAttribute('id').replace('-nav', '');
            showSection(sectionId);
        });
    });

    // Initialize with the "Home" section visible
    showSection('home');
});
