document.addEventListener('DOMContentLoaded', function() {
    var dashboardUid = '5_omrT7Zz';
    var dashboardUrl = 'https://grafana.wivalolighting.com/d/' + dashboardUid;
    var iframe = document.createElement('iframe');
    iframe.src = dashboardUrl;
    iframe.width = '100%';
    iframe.height = '600px';
    iframe.frameBorder = '0';
    document.getElementById('grafana-dashboard-container').appendChild(iframe);
});
