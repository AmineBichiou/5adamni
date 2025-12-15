// include.js - UPDATED VERSION
async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        
        // Re-initialize any dynamic content if needed
        console.log(`Loaded: ${filePath}`);
    } catch (error) {
        console.error('Error loading HTML:', error);
    }
}

// Load header and footer with root-relative paths
document.addEventListener('DOMContentLoaded', function() {
    // Use root paths starting with /
    loadHTML('header', '/partials/header.html');
    loadHTML('footer', '/partials/footer.html');
});