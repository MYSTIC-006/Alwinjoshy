document.getElementById('sidebarToggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        mainContent.style.marginLeft = '250px';
    } else {
        sidebar.style.left = '-250px';
        mainContent.style.marginLeft= '0';
    }
});