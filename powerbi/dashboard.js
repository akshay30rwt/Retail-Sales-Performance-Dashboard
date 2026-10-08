// Retail Sales Performance Dashboard - Interactive JavaScript
// Data prepared from retail_sales.xlsx

const dashboardData = {
    "metrics": {
        "total_sales": 386597.0,
        "total_orders": 3200,
        "total_quantity": 8668,
        "avg_order_value": 120.81
    },
    "monthly_sales": {
        "2024-01": 30535.94,
        "2024-02": 31964.72,
        "2024-03": 33786.27,
        "2024-04": 30519.93,
        "2024-05": 34678.39,
        "2024-06": 32316.29,
        "2024-07": 31496.77,
        "2024-08": 30121.40,
        "2024-09": 29616.21,
        "2024-10": 34277.59,
        "2024-11": 33079.02,
        "2024-12": 34204.47
    },
    "regional_sales": {
        "North": 97599.01,
        "East": 81444.63,
        "South": 73879.30,
        "West": 72872.57,
        "Central": 60801.49
    },
    "category_sales": {
        "Electronics": 132866.36,
        "Sports": 81532.98,
        "Home & Garden": 73892.98,
        "Clothing": 70983.59,
        "Books": 27321.09
    },
    "top_products": {
        "Laptop Stand": 10613.61,
        "Portable Charger": 10481.93,
        "USB-C Hub": 10054.83,
        "Webcam HD": 9880.72,
        "Screen Protector": 9793.55,
        "Phone Case": 9789.95,
        "Wireless Earbuds": 9662.98,
        "Mechanical Keyboard": 9553.56,
        "HDMI Cable": 8809.58,
        "LED Monitor Light": 8558.98
    }
};

// Global chart instances
let monthlyChart, regionChart, categoryChart, topProductsChart;

// Format currency
function formatCurrency(value) {
    return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Format number
function formatNumber(value) {
    return value.toLocaleString('en-US');
}

// Initialize slicers
function initializeSlicers() {
    // Region slicer
    const regionSlicer = document.getElementById('regionSlicer');
    Object.keys(dashboardData.regional_sales).sort().forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSlicer.appendChild(option);
    });

    // Category slicer
    const categorySlicer = document.getElementById('categorySlicer');
    Object.keys(dashboardData.category_sales).sort().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySlicer.appendChild(option);
    });

    // Month slicer
    const monthSlicer = document.getElementById('monthSlicer');
    Object.keys(dashboardData.monthly_sales).forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSlicer.appendChild(option);
    });
}

// Update dashboard based on slicer selections
function updateDashboard() {
    const region = document.getElementById('regionSlicer').value;
    const category = document.getElementById('categorySlicer').value;
    const month = document.getElementById('monthSlicer').value;

    // For this demo, we'll show proportional adjustments
    // In a real Power BI dashboard, slicers filter the underlying data
    let multiplier = 1;

    if (region !== 'all') {
        const regionShare = dashboardData.regional_sales[region] / dashboardData.metrics.total_sales;
        multiplier = regionShare;
    }

    if (category !== 'all') {
        const categoryShare = dashboardData.category_sales[category] / dashboardData.metrics.total_sales;
        multiplier = Math.min(multiplier, categoryShare);
    }

    // Update KPIs
    const totalSales = dashboardData.metrics.total_sales * multiplier;
    const totalOrders = Math.round(dashboardData.metrics.total_orders * multiplier);
    const totalQuantity = Math.round(dashboardData.metrics.total_quantity * multiplier);
    const avgOrderValue = totalSales / totalOrders if totalOrders > 0 else 0;

    document.getElementById('totalSales').textContent = formatCurrency(totalSales);
    document.getElementById('totalOrders').textContent = formatNumber(totalOrders);
    document.getElementById('totalQuantity').textContent = formatNumber(totalQuantity);
    document.getElementById('avgOrderValue').textContent = formatCurrency(avgOrderValue);

    // Update charts with visual feedback
    updateCharts(region, category, month);
}

// Update charts
function updateCharts(region, category, month) {
    // Update monthly chart
    if (monthlyChart) {
        const monthlyData = Object.entries(dashboardData.monthly_sales);
        const labels = monthlyData.map(([m, _]) => m);
        const values = monthlyData.map(([m, v]) => {
            if (month !== 'all' && m !== month) return null;
            return v;
        });

        monthlyChart.data.datasets[0].data = values;
        monthlyChart.update();
    }

    // Update region chart
    if (regionChart) {
        const regionData = Object.entries(dashboardData.regional_sales);
        const labels = regionData.map(([r, _]) => r);
        const values = regionData.map(([r, v]) => {
            if (region !== 'all' && r !== region) return null;
            return v;
        });
        const backgroundColors = regionData.map(([r, _]) =>
            region !== 'all' && r === region ? '#1F4E79' : '#4472C4'
        );

        regionChart.data.datasets[0].data = values;
        regionChart.data.datasets[0].backgroundColor = backgroundColors;
        regionChart.update();
    }

    // Update category chart
    if (categoryChart) {
        const categoryData = Object.entries(dashboardData.category_sales);
        const labels = categoryData.map(([c, _]) => c);
        const values = categoryData.map(([c, v]) => {
            if (category !== 'all' && c !== category) return null;
            return v;
        });
        const backgroundColors = categoryData.map(([c, _]) =>
            category !== 'all' && c === category ? '#1F4E79' : '#4472C4'
        );

        categoryChart.data.datasets[0].data = values;
        categoryChart.data.datasets[0].backgroundColor = backgroundColors;
        categoryChart.update();
    }
}

// Initialize dashboard
function initDashboard() {
    initializeSlicers();

    // Monthly Sales Trend - Line Chart
    const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
    const monthlyData = Object.entries(dashboardData.monthly_sales);
    monthlyChart = new Chart(monthlyCtx, {
        type: 'line',
        data: {
            labels: monthlyData.map(([m, _]) => m),
            datasets: [{
                label: 'Sales ($)',
                data: monthlyData.map(([_, v]) => v),
                borderColor: '#1F4E79',
                backgroundColor: 'rgba(31, 78, 121, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointBackgroundColor: '#1F4E79',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Sales: ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    // Sales by Region - Horizontal Bar Chart
    const regionCtx = document.getElementById('regionChart').getContext('2d');
    const regionData = Object.entries(dashboardData.regional_sales).sort((a, b) => b[1] - a[1]);
    regionChart = new Chart(regionCtx, {
        type: 'bar',
        data: {
            labels: regionData.map(([r, _]) => r),
            datasets: [{
                label: 'Sales ($)',
                data: regionData.map(([_, v]) => v),
                backgroundColor: '#4472C4',
                borderColor: '#4472C4',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Sales: ' + formatCurrency(context.parsed.x);
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    // Sales by Category - Column Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    const categoryData = Object.entries(dashboardData.category_sales).sort((a, b) => b[1] - a[1]);
    categoryChart = new Chart(categoryCtx, {
        type: 'bar',
        data: {
            labels: categoryData.map(([c, _]) => c),
            datasets: [{
                label: 'Sales ($)',
                data: categoryData.map(([_, v]) => v),
                backgroundColor: '#4472C4',
                borderColor: '#4472C4',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Sales: ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    }
                }
            }
        }
    });

    // Top 10 Products - Horizontal Bar Chart
    const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
    const topProductsData = Object.entries(dashboardData.top_products).sort((a, b) => b[1] - a[1]);
    topProductsChart = new Chart(topProductsCtx, {
        type: 'bar',
        data: {
            labels: topProductsData.map(([p, _]) => p),
            datasets: [{
                label: 'Sales ($)',
                data: topProductsData.map(([_, v]) => v),
                backgroundColor: '#4472C4',
                borderColor: '#4472C4',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Sales: ' + formatCurrency(context.parsed.x);
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    }
                }
            }
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initDashboard);
