document.getElementById('sos-button').addEventListener('click', function() {
    fetch('/send-sos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: 'Current Location Data' // Replace with actual location data
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('SOS alert sent successfully!');
    })
    .catch(error => {
        console.error('Error sending SOS:', error);
    });
});

function updatenumber() {
    // Get the element with class 'numberdiv'
    let nbtn = document.querySelector(".numberdiv");
    
    // Toggle display between 'none' and 'block'
    if (nbtn.style.display === 'none' || nbtn.style.display === '') {
        nbtn.style.display = 'block';
    } else {
        nbtn.style.display = 'none';
    }
}
function sendSOS() {
    alert("SOS alert sent!"); // Replace this with actual SOS sending logic
}
