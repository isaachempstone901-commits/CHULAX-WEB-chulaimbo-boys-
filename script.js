// 1. Welcome Message (Optional)
// Displays a greeting when the page loads
window.onload = function() {
    console.log("Welcome to Chulaimbo Boys High School official website.");
};

// 2. Smooth Scrolling for Navigation
// Makes the page slide smoothly when clicking internal links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href') || '';
        // Let normal navigation happen for links to other pages or external URLs
        if (!href || href.includes('.html') || !href.startsWith('#')) {
            return;
        }
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Facebook Video Loader
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// 3. Image Hover Effect
// Log to console when an image is clicked (can be expanded for a Lightbox)
const images = document.querySelectorAll('main img');
images.forEach(img => {
    img.addEventListener('click', () => {
        console.log("Viewing: " + img.alt);
        // You could add code here to open the image in a larger view
    });
});