document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.sidebar .category');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sidebarItems = document.querySelectorAll('.breadcrumbs li');

    sidebarItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.getElementById('icon-bar').addEventListener('click', function () {
    const breadcrumbElement = document.getElementById('breadcrumbs');
    if (breadcrumbElement) {
        if (breadcrumbElement.style.height === '0px' || breadcrumbElement.style.height === '') {
            breadcrumbElement.classList.toggle('show');
        } else {
            breadcrumbElement.style.height = '50px';
            breadcrumbElement.classList.remove('show');
        }
    }
});