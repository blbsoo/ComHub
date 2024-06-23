// JavaScript to handle the popup
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the popup
    var popup = document.getElementById("popup");

    // Get the <span> element that closes the popup
    var closeButton = document.getElementsByClassName("close-button")[0];

    // Get the buttons that trigger the popup
    var comedianButton = document.getElementById("comedian-btn");
    var organiserButton = document.getElementById("organiser-btn");
    var audienceButton = document.getElementById("audience-register-btn");

    // When the user clicks on the buttons, open the popup and set the message
    comedianButton.onclick = function() {
        popup.style.display = "block";
        document.getElementById("popup-message").innerText = "Thank you for your interest in joining as a comedian! Our platform is launching soon. Stay tuned for more updates.";
    }
    organiserButton.onclick = function() {
        popup.style.display = "block";
        document.getElementById("popup-message").innerText = "Thank you for your interest in joining as an organiser! Our platform is launching soon. Stay tuned for more updates.";
    }
    audienceButton.onclick = function() {
        popup.style.display = "block";
        document.getElementById("popup-message").innerText = "Thank you for your interest in exploring comedy events! Our platform is launching soon. Stay tuned for more updates.";
    }

    // When the user clicks on <span> (x), close the popup
    closeButton.onclick = function() {
        popup.style.display = "none";
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the join now popup
    var joinNowPopup = document.getElementById("join-now-popup");

    // Get the close button for the join now popup
    var joinNowCloseButton = document.getElementsByClassName("join-now-close-button")[0];

    // Get the join now button
    var joinNowButton = document.querySelector(".joinnow-button");

    // When the user clicks the join now button, open the popup and set the message
    joinNowButton.onclick = function() {
        joinNowPopup.style.display = "block";
        document.getElementById("join-now-popup-message").innerText = "Thank you for your interest in joining us! We are working on it and it will be available soon.";
    }

    // When the user clicks on <span> (x), close the join now popup
    joinNowCloseButton.onclick = function() {
        joinNowPopup.style.display = "none";
    }

    // When the user clicks anywhere outside of the join now popup, close it
    window.onclick = function(event) {
        if (event.target == joinNowPopup) {
            joinNowPopup.style.display = "none";
        }
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the start now popup
    var startNowPopup = document.getElementById("start-now-popup");

    // Get the close button for the start now popup
    var startNowCloseButton = document.getElementsByClassName("start-now-close-button")[0];

    // Get the start now button
    var startNowButton = document.querySelector(".subscribe-button");

    // When the user clicks the start now button, open the popup and set the message
    startNowButton.onclick = function() {
        startNowPopup.style.display = "block";
        document.getElementById("start-now-popup-message").innerText = "Thank you for your interest! Our platform is launching soon. Stay tuned for more updates.";
    }

    // When the user clicks on <span> (x), close the start now popup
    startNowCloseButton.onclick = function() {
        startNowPopup.style.display = "none";
    }

    // When the user clicks anywhere outside of the start now popup, close it
    window.onclick = function(event) {
        if (event.target == startNowPopup) {
            startNowPopup.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the subscribe popup
    var subscribePopup = document.getElementById("subscribe-popup");

    // Get the close button for the subscribe popup
    var subscribeCloseButton = document.getElementsByClassName("subscribe-close-button")[0];

    // Get the subscribe button
    var subscribeButton = document.querySelector("#subscribe-form button");

    // When the user clicks the subscribe button, open the popup and set the message
    subscribeButton.onclick = function(event) {
        event.preventDefault(); // Prevent the form from submitting
        subscribePopup.style.display = "block";
        document.getElementById("subscribe-popup-message").innerText = "Thank you for subscribing! We'll keep you updated with the latest comedy events and opportunities.";
    }

    // When the user clicks on <span> (x), close the subscribe popup
    subscribeCloseButton.onclick = function() {
        subscribePopup.style.display = "none";
    }

    // When the user clicks anywhere outside of the subscribe popup, close it
    window.onclick = function(event) {
        if (event.target == subscribePopup) {
            subscribePopup.style.display = "none";
        }
    }
});


