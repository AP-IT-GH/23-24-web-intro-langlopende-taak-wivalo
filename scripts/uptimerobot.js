document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'ur910134-d2160831e3affe87fdbdf1f9';
    const url = `https://corsproxy.io/?https://api.uptimerobot.com/v2/getMonitors`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'api_key=' + apiKey + '&format=json&logs=1'
    })
    .then(response => response.json())
    .then(data => {
        displayMonitors(data.monitors);
    })
    .catch(error => console.error('Error:', error));
});

function displayMonitors(monitors) {
    const container = document.getElementById('monitorContainer');
    container.innerHTML = ''; // Clear previous results

    monitors.forEach(monitor => {
        const monitorDiv = document.createElement('div');
        monitorDiv.className = 'monitor';

        const name = document.createElement('h2');
        name.textContent = monitor.friendly_name;

        const status = document.createElement('div');
        status.className = 'status ' + (monitor.status === 2 ? 'up' : 'down');
        status.textContent = monitor.status === 2 ? 'UP' : 'DOWN';

        monitorDiv.appendChild(name);
        monitorDiv.appendChild(status);
        container.appendChild(monitorDiv);
    });
}
