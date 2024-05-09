// Functie voor het ophalen en weergeven van monitorgegevens
document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'ur910134-d2160831e3affe87fdbdf1f9';
    const url = 'https://corsproxy.io/?https://api.uptimerobot.com/v2/getMonitors';

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            api_key: apiKey,
            format: 'json'
        },
        success: function(data) {
            displayMonitors(data.monitors);
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
});

// Functie voor het weergeven van monitorgegevens
function displayMonitors(monitors) {
    const table = document.querySelector('.table');
    const caption = document.createElement('caption');
    caption.textContent = "DNS Monitors";

    monitors.forEach((monitor, index) => {
        const monitorRow = document.createElement('tr');

        const monitorTitle = document.createElement('td');
        monitorTitle.textContent = monitor.friendly_name; // Gebruik de monitor titel uit Uptime Robot

        const monitorStatus = document.createElement('td');
        const statusIndicator = document.createElement('span');
        statusIndicator.style.height = "10px";
        statusIndicator.style.width = "10px";
        statusIndicator.style.backgroundColor = monitor.status === 2 ? 'green' : 'red';
        statusIndicator.style.borderRadius = "50%";
        statusIndicator.style.display = "inline-block";
        monitorStatus.appendChild(statusIndicator);

        monitorRow.appendChild(monitorTitle);
        monitorRow.appendChild(monitorStatus);

        table.appendChild(monitorRow);
    });

    table.appendChild(caption);
}
