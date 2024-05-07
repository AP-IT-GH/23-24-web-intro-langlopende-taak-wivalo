document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://corsproxy.io/?http://adguard.wivalolighting.com/control/querylog'; // Adjust to your AdGuard Home's IP and exposed port
    // No API key required by default, use basic auth if you have set it up
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log data to console or process it
        const logsContainer = document.getElementById('logs');
        if (data.data && data.data.length) {
            data.data.forEach(query => {
                const item = document.createElement('div');
                item.textContent = `Time: ${query.time}, Query: ${query.query}, Answer: ${query.answer}`;
                logsContainer.appendChild(item);
            });
        }
    })
    .catch(error => console.error('Error fetching DNS queries:', error));
});
