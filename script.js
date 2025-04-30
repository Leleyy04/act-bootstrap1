document.addEventListener('DOMContentLoaded', function() {
    
    const ctx = document.getElementById('dashboardChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', ],
            datasets: [{
                label: 'Users',
                data: [1000, 1500, 2100, 4000, 4500, 5500, 6099
                ],
                borderColor: '#8a2be2',
                backgroundColor: 'rgba(138, 43, 226, 0.1)',
                tension: 0.3,
                fill: true
            }, {
                label: 'Sales',
                data: [300, 690, 650, 780, 820, 870, 940],
                borderColor: '#4bc0c0',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Menu click alerts
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const menuName = this.getAttribute('data-menu');
            alert(`You clicked on ${menuName.charAt(0).toUpperCase() + menuName.slice(1)} boss`);// alert muna tsyaka na yung buo ag marunong nako
            
            // Set active menu
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Toggle sidebar on sa cp 
    const navbarToggler = document.querySelector('.navbar-toggler');
    const sidebar = document.getElementById('sidebar');
    
    navbarToggler.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });
});