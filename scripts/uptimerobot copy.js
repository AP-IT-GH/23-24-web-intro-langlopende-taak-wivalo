function displayMonitors(monitors) {
    const container = document.getElementById('monitorContainer');
    container.innerHTML = ''; // Clear previous results

    monitors.forEach(monitor => {
        const monitorDiv = document.createElement('div');
        monitorDiv.className = 'monitor';

        const name = document.createElement('h2');
        name.textContent = monitor.friendly_name;

        const status = document.createElement('div');
        const statusIndicator = document.createElement('span');
        statusIndicator.style.height = "10px";
        statusIndicator.style.width = "10px";
        statusIndicator.style.backgroundColor = monitor.status === 2 ? 'green' : 'red';
        statusIndicator.style.borderRadius = "50%";
        statusIndicator.style.display = "inline-block";
        status.textContent = monitor.status === 2 ? ' UP' : ' DOWN';
        status.prepend(statusIndicator);

        const details = document.createElement('ul');

        const last7Days = document.createElement('li');
        last7Days.textContent = `Last 7 days: 100%, 0 incidents, 0m down`;

        const last30Days = document.createElement('li');
        last30Days.textContent = `Last 30 days: 100%, 0 incidents, 0m down`;

        details.appendChild(last7Days);
        details.appendChild(last30Days);

        monitorDiv.appendChild(name);
        monitorDiv.appendChild(status);
        monitorDiv.appendChild(details);
        container.appendChild(monitorDiv);
    });
}
