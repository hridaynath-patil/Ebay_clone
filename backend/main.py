from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import mysql.connector

app = FastAPI()

# Allow CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL connection details
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root', # Replace with your MySQL username
    'password': '', # Replace with your MySQL password
    'database': 'ebay_clone'
}

def get_db_connection():
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        return connection
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

class Product(BaseModel):
    id: int
    name: str
    price: float
    description: str
    image_url: str
    condition: str
    shipping_cost: float

@app.get("/api/products")
def get_products():
    conn = get_db_connection()
    if not conn:
        return _get_mock_products() # Fallback to mock data if DB fails
    
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return products

@app.get("/api/products/{product_id}")
def get_product(product_id: int):
    conn = get_db_connection()
    if not conn:
        mock_products = _get_mock_products()
        for p in mock_products:
            if p["id"] == product_id:
                return p
        raise HTTPException(status_code=404, detail="Product not found")

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products WHERE id = %s", (product_id,))
    product = cursor.fetchone()
    cursor.close()
    conn.close()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

def _get_mock_products():
    return [
        {"id": 1, "name": "Apple iPhone 15 Pro - 256GB - Natural Titanium (Unlocked)", "price": 999.00, "description": "Brand new, sealed. Factory unlocked for all carriers.", "image_url": "https://i.ebayimg.com/images/g/dp8AAeSwUoNpJNPZ/s-l1600.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 2, "name": "Samsung Galaxy S24 Ultra - 512GB - Titanium Black", "price": 1199.99, "description": "Latest Samsung flagship. Includes S Pen.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 3, "name": "Google Pixel 8 Pro - 128GB - Obsidian (Unlocked)", "price": 749.00, "description": "Excellent condition, barely used.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Open Box", "shipping_cost": 5.99},
        {"id": 4, "name": "Apple iPhone 14 - 128GB - Midnight (Unlocked)", "price": 599.99, "description": "Refurbished in excellent condition. Battery health 100%.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Refurbished", "shipping_cost": 0.00},
        {"id": 5, "name": "OnePlus 12 - 512GB - Flowy Emerald (Unlocked)", "price": 899.99, "description": "Global version, supports all bands.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 6, "name": "Samsung Galaxy Z Fold 5 - 256GB - Phantom Black", "price": 1299.00, "description": "Like new foldable phone.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Used", "shipping_cost": 15.00},
        {"id": 7, "name": "Apple iPhone 13 Pro Max - 256GB - Sierra Blue", "price": 650.00, "description": "Minor scratches on screen, otherwise perfect.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Used", "shipping_cost": 10.00},
        {"id": 8, "name": "Motorola Edge+ (2023) - 512GB - Interstellar Black", "price": 499.00, "description": "Great value flagship. Factory unlocked.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 9, "name": "Sony Xperia 1 V - 256GB - Black (Unlocked)", "price": 1099.00, "description": "For photography enthusiasts. 4K OLED display.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 25.00},
        {"id": 10, "name": "ASUS ROG Phone 8 Pro - 1TB - Phantom Black", "price": 1499.00, "description": "Ultimate gaming phone. Includes AeroActive Cooler.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 11, "name": "Apple iPhone SE (3rd Gen) - 64GB - Starlight", "price": 299.99, "description": "Compact and powerful.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Refurbished", "shipping_cost": 0.00},
        {"id": 12, "name": "Samsung Galaxy A54 5G - 128GB - Awesome Graphite", "price": 349.00, "description": "Best mid-range phone of the year.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 13, "name": "Google Pixel 7a - 128GB - Sea (Unlocked)", "price": 399.00, "description": "Incredible camera for the price.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 5.00},
        {"id": 14, "name": "Nothing Phone (2) - 256GB - White (Unlocked)", "price": 649.00, "description": "Unique transparent design with Glyph interface.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 15, "name": "Apple iPhone 12 - 64GB - Blue (Unlocked)", "price": 320.00, "description": "Good condition, some wear and tear.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Used", "shipping_cost": 8.00},
        {"id": 16, "name": "Samsung Galaxy S23 Ultra - 256GB - Green", "price": 850.00, "description": "Excellent condition, comes with box and accessories.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Used", "shipping_cost": 12.00},
        {"id": 17, "name": "Xiaomi 14 Ultra - 512GB - Black (Global ROM)", "price": 1150.00, "description": "Leica optics, insane camera performance.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 30.00},
        {"id": 18, "name": "OnePlus Open - 512GB - Emerald Dusk", "price": 1399.00, "description": "Best foldable phone on the market right now.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "New", "shipping_cost": 0.00},
        {"id": 19, "name": "Motorola Razr+ (2023) - 256GB - Viva Magenta", "price": 699.99, "description": "Stylish flip phone.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Open Box", "shipping_cost": 0.00},
        {"id": 20, "name": "Apple iPhone 11 - 128GB - Black (Unlocked)", "price": 220.00, "description": "Works perfectly, crack on the back glass.", "image_url": "https://i.ebayimg.com/images/g/bJ0AAOSwjJdlD-o3/s-l500.webp", "condition": "Used", "shipping_cost": 5.00}
    ]
