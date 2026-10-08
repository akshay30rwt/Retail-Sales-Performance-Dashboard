import openpyxl
import json
from datetime import datetime
from collections import Counter

# Load the Excel data
wb = openpyxl.load_workbook(r'C:\Users\Akshay  Rawat\OneDrive\Desktop\data-analysis\Retail-Sales-Performance-Dashboard\data\retail_sales.xlsx')
ws = wb.active

data = []
for row in ws.iter_rows(min_row=2, values_only=True):
    if row[0]:  # Skip empty rows
        data.append({
            'order_id': row[0],
            'date': row[1],
            'product': row[2],
            'category': row[3],
            'region': row[4],
            'quantity': int(row[5]) if row[5] else 0,
            'unit_price': float(row[6]) if row[6] else 0,
            'sales': float(row[7]) if row[7] else 0
        })

# Aggregate metrics
total_sales = sum(d['sales'] for d in data)
total_orders = len(data)
total_quantity = sum(d['quantity'] for d in data)
avg_order_value = total_sales / total_orders if total_orders > 0 else 0

# Monthly sales
monthly_sales = Counter()
for d in data:
    month = d['date'][:7]  # YYYY-MM
    monthly_sales[month] += d['sales']
monthly_sales_sorted = dict(sorted(monthly_sales.items()))

# Regional sales
regional_sales = Counter()
for d in data:
    regional_sales[d['region']] += d['sales']
regional_sales_sorted = dict(sorted(regional_sales.items(), key=lambda x: x[1], reverse=True))

# Category sales
category_sales = Counter()
for d in data:
    category_sales[d['category']] += d['sales']
category_sales_sorted = dict(sorted(category_sales.items(), key=lambda x: x[1], reverse=True))

# Top 10 products
product_sales = Counter()
for d in data:
    product_sales[d['product']] += d['sales']
top_10_products = dict(product_sales.most_common(10))

# Prepare data for JSON output
output = {
    'metrics': {
        'total_sales': total_sales,
        'total_orders': total_orders,
        'total_quantity': total_quantity,
        'avg_order_value': avg_order_value
    },
    'monthly_sales': monthly_sales_sorted,
    'regional_sales': regional_sales_sorted,
    'category_sales': category_sales_sorted,
    'top_products': top_10_products,
    'raw_data': data[:100]  # First 100 rows for table display
}

# Save as JSON
with open('dashboard_data.json', 'w') as f:
    json.dump(output, f, indent=2)

print('Dashboard data prepared successfully')
print(f'Total sales: ${total_sales:,.2f}')
print(f'Total orders: {total_orders}')
print(f'Total quantity: {total_quantity}')
print(f'Average order value: ${avg_order_value:.2f}')
