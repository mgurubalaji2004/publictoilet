let userCount = 0;
let cleanedCount = 0;
let toiletUsed = 0;
let urinalUsed = 0;
let cleaning = false;

document.addEventListener("DOMContentLoaded", function() {
    // Initialize all fields to 0
    document.getElementById("user-count").innerText = userCount;
    document.getElementById("cleaned-count").innerText = cleanedCount;
    document.getElementById("toilet-used").innerText = toiletUsed;
    document.getElementById("urinal-used").innerText = urinalUsed;
    document.getElementById("air-quality").innerText = "Good"; // Default air quality
});

function startCleaning() {
    cleaning = true;
    document.getElementById("cleaning-status").innerText = "Cleaning...";
    document.getElementById("cleaning-status").style.color = "green";
}

function stopCleaning() {
    if (cleaning) {
        cleanedCount++;
        document.getElementById("cleaned-count").innerText = cleanedCount;
    }
    cleaning = false;
    document.getElementById("cleaning-status").innerText = "Not Cleaning";
    document.getElementById("cleaning-status").style.color = "red";
}

// Simulating user activity every 3 seconds
setInterval(() => {
    userCount++;
    document.getElementById("user-count").innerText = userCount;

    // Randomly assign usage
    if (Math.random() > 0.5) {
        toiletUsed++;
        document.getElementById("toilet-used").innerText = toiletUsed;
    } else {
        urinalUsed++;
        document.getElementById("urinal-used").innerText = urinalUsed;
    }

    // Change air quality randomly
    let airQualityLevels = ["Good", "Moderate", "Bad"];
    let randomQuality = airQualityLevels[Math.floor(Math.random() * airQualityLevels.length)];
    document.getElementById("air-quality").innerText = randomQuality;
}, 3000);
