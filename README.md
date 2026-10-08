# Retail Sales Performance Dashboard

## Overview

A professional interactive Power BI dashboard analyzing 3,200 retail sales transactions across five product categories, five regions, and 75 products over the full calendar year 2024. The dashboard answers key business questions about sales performance, regional differences, category trends, and product rankings.

## Objective

- Analyze overall retail sales performance
- Identify top-performing regions, categories, and products
- Track monthly sales trends
- Provide actionable business insights through interactive filtering

## Tools Used

- **Microsoft Excel** — Dataset creation and initial structure
- **Microsoft Power BI** — Dashboard development and visualization

## Dataset

- **Source:** Synthetic dataset created for portfolio demonstration
- **Records:** 3,200 orders
- **Columns:** 8 (Order ID, Order Date, Product, Category, Region, Quantity, Unit Price, Sales)
- **Date Range:** January 1, 2024 to December 31, 2024
- **Categories:** Electronics, Clothing, Home & Garden, Books, Sports
- **Regions:** North, South, East, West, Central
- **Products:** 75 unique products

## Data Preparation

Performed in Microsoft Excel:

1. Created structured dataset with 3,200 realistic sales transactions
2. Ensured consistent column naming and data types
3. Formatted Order Date as proper date values
4. Verified all Quantity, Unit Price, and Sales values are positive
5. Confirmed no duplicate Order IDs
6. Added professional header formatting with blue header row
7. Applied appropriate number formatting (currency for price/sales, integers for quantity)
8. Auto-adjusted column widths for readability
9. Enabled frozen top row for easy navigation

## Dashboard Features

### KPI Cards
- **Total Sales:** $386,597.00
- **Total Orders:** 3,200
- **Total Quantity Sold:** 12,042 units
- **Average Order Value:** $120.81

### Monthly Sales Trend
Line chart showing sales across all 12 months, identifying peak and low periods.

### Sales by Region
Horizontal bar chart ranking regions from highest to lowest sales.

### Sales by Category
Column chart showing revenue contribution by product category.

### Top 10 Products
Horizontal bar chart displaying the highest-revenue products.

### Interactive Slicers
- **Region** — Multi-select filter for geographic analysis
- **Category** — Multi-select filter for product category analysis
- **Date** — Date range filter for temporal analysis

All visuals respond dynamically to slicer selections.

## Business Questions Answered

1. What are the total sales? → **$386,597.00**
2. How many orders were placed? → **3,200 orders**
3. How many units were sold? → **12,042 units**
4. What is the average order value? → **$120.81**
5. Which month had the highest sales? → **May 2024 ($34,678.39)**
6. Which month had the lowest sales? → **September 2024 ($29,616.21)**
7. Which region generated the most sales? → **North ($97,599.01)**
8. Which region generated the least sales? → **Central ($60,801.49)**
9. Which product category generated the most sales? → **Electronics ($132,866.36)**
10. Which category generated the least sales? → **Books ($27,321.09)**
11. Which are the top 10 products by sales? → See dashboard visualization
12. How does performance change when filtering by region? → Interactive slicer
13. How does performance change when filtering by category? → Interactive slicer
14. How does performance change over different periods? → Date slicer

## Key Insights

### 1. Electronics Dominate Revenue
Electronics generated **$132,866.36** (34.4% of total sales), making it the strongest category by a significant margin. This suggests high customer demand for tech accessories and gadgets.

**Business Implication:** Consider expanding the Electronics product line and ensuring adequate inventory for high-demand items like Laptop Stands and Portable Chargers.

### 2. North Region Leads by 37%
The North region generated **$97,599.01** in sales, while the Central region generated only **$60,801.49** — a 37% gap. North accounts for 25.2% of total revenue.

**Business Implication:** Investigate why Central underperforms. Possible factors: lower marketing presence, fewer customers, or pricing issues. Consider targeted promotions or increased visibility in Central region stores.

### 3. Seasonal Sales Patterns
Sales peak in May ($34,678.39) and December ($34,204.47), with a notable dip in September ($29,616.21). The November–December period shows strong performance, likely driven by holiday shopping.

**Business Implication:** Increase inventory and marketing spend in Q4 (October–December) and plan promotional campaigns for low-performing months like September to boost revenue.

### 4. Top 10 Products Are All Electronics
All top 10 products by revenue belong to the Electronics category, with Laptop Stand ($10,613.61) leading. This reinforces Electronics as the primary revenue driver.

**Business Implication:** Prioritize stock levels and supplier relationships for Electronics products. Consider cross-selling Electronics with other categories to increase average order value.

### 5. Books Category Underperforms
Books generated only **$27,321.09** (7.1% of total sales), significantly lower than other categories. With 657 orders, the average order value in Books is just $41.57.

**Business Implication:** Evaluate the Books selection and pricing. Consider bundling books with higher-value items, offering discounts on bulk purchases, or expanding into higher-margin book categories.

### 6. Regional Category Mix Varies
While Electronics leads overall, the performance gap between regions suggests different customer preferences or market conditions across geographies.

**Business Implication:** Tailor product assortments and marketing strategies by region. North's success may provide a model for other regions to emulate.

## Dashboard Screenshot

![Dashboard](screenshots/dashboard.png)

## Skills Demonstrated

- Microsoft Excel
- Data Cleaning
- Data Analysis
- Microsoft Power BI
- Data Visualization
- Dashboard Development
- KPI Analysis
- Business Insights
- Sales Performance Analysis

## Project Structure

```
Retail-Sales-Performance-Dashboard/
├── data/
│   └── retail_sales.xlsx
├── powerbi/
│   └── retail_sales_dashboard.pbix
├── screenshots/
│   └── dashboard.png
└── README.md
```

## How to View

1. Open `data/retail_sales.xlsx` in Excel to explore the raw dataset
2. Open `powerbi/retail_sales_dashboard.pbix` in Power BI Desktop to interact with the dashboard
3. Use the slicers (Region, Category, Date) to filter the analysis
4. Hover over charts for detailed values

## Future Enhancements

- Add year-over-year comparison with 2023 data
- Include customer demographic analysis
- Add profit margin calculations
- Create additional dashboard pages for deep-dive analysis
- Implement drill-through functionality for product-level details

---

**Built with Microsoft Excel and Power BI**
