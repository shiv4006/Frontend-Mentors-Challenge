/*
 * Handle navbar section for various screen sizes
 */

function navbarSection() {
    let mobileMenu = document.querySelector(".mobile-menu");
    let openMenu = document.querySelector(".open-menu");
    let closeMenu = document.querySelector(".close-menu");

    openMenu.addEventListener("click", (e) => {
        openMenu.style.display = "none";
        mobileMenu.style.display = "flex";
    });

    closeMenu.addEventListener("click", (e) => {
        openMenu.style.display = "flex";
        mobileMenu.style.display = "none";
    });
}
navbarSection();


/**
 *  Adding data to the list of past links
 */
const longUrlInput = document.querySelector('.long-url');
const shortenBtn = document.querySelector('.shorten-btn');
let display = document.querySelector(".display");

async function shortenURL() {
    const longUrl = longUrlInput.value.trim();
    console.log(longUrl);

    if (!longUrl) {
        // shortUrlDisplay.textContent = "Please enter a valid URL.";
        return;
    }

    try {
        // Make the POST request to CleanURI API
        const response = await fetch('https://cleanuri.com/api/v1/shorten', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `url=${encodeURIComponent(longUrl)}`
          });

        const data = await response.json(); // Parse the response as JSON

        if (response.ok) {
            // Display the shortened URL
            // shortUrlDisplay.innerHTML = `Shortened URL: <a href="${data.result_url}" target="_blank">${data.result_url}</a>`;
            console.log(result_url);
            display.innerHTML +=
            `<div class="display-content">
                <p class="old-link">${longUrl}</p>
                <div class="new-link-section">
                  <p class="new-link">${result_url}</p>
                  <button class="btn">Copy</button>
                </div>`;
        } else {
            // Handle errors from the API
            // shortUrlDisplay.textContent = `Error: ${data.error || 'Failed to shorten the URL.'}`;
            ;
        }
    } catch (error) {
        // Handle network or unexpected errors
        // shortUrlDisplay.textContent = `Error: ${error.message}`;
        ;
    }
}

shortenBtn.addEventListener('click', (e) => {
    e.preventDefault();
    shortenURL();
});