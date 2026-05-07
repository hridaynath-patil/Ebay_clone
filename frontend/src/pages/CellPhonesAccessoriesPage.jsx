import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CellPhonesAccessoriesPage.css';

const accessoryProducts = [
  {
    id: 101,
    name: "Apple MagSafe Charger - Wireless Charging Pad",
    price: 39.00,
    image_url: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&q=80",
    condition: "New",
    shipping_cost: 0.00,
    category: "Chargers"
  },
  {
    id: 102,
    name: "iPhone 15 Pro Silicone Case with MagSafe - Storm Blue",
    price: 49.00,
    image_url: "https://i.ebayimg.com/images/g/mE8AAOSwE~thomM8/s-l960.webp",
    condition: "New",
    shipping_cost: 0.00,
    category: "Cases"
  },
  {
    id: 103,
    name: "Samsung Galaxy Buds2 Pro - Graphite",
    price: 189.99,
    image_url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80",
    condition: "New",
    shipping_cost: 0.00,
    category: "Audio"
  },
  {
    id: 104,
    name: "Anker USB-C to Lightning Cable (6ft, 2-Pack)",
    price: 24.99,
    image_url: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&q=80",
    condition: "New",
    shipping_cost: 5.49,
    category: "Cables"
  },
  {
    id: 105,
    name: "Spigen Tempered Glass Screen Protector for S24 Ultra",
    price: 15.99,
    image_url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&q=80",
    condition: "New",
    shipping_cost: 0.00,
    category: "Screen Protectors"
  },
  {
    id: 106,
    name: "Belkin BoostCharge Pro 3-in-1 Wireless Charger",
    price: 149.00,
    image_url: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=300&q=80",
    condition: "New",
    shipping_cost: 0.00,
    category: "Chargers"
  },
  {
    id: 107,
    name: "Sony WH-1000XM5 Noise Canceling Headphones",
    price: 348.00,
    image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    condition: "New",
    shipping_cost: 0.00,
    category: "Audio"
  },
  {
    id: 108,
    name: "UAG Monarch Case for iPhone 14 Pro Max",
    price: 59.95,
    image_url: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&q=80",
    condition: "New",
    shipping_cost: 0.00,
    category: "Cases"
  }
];

const topBrands = [
  { name: "Apple", logo: "https://i.ebayimg.com/thumbs/images/g/FUIAAeSwBZVoyBOj/s-l960.webp" },
  { name: "Samsung", logo: "https://i.ebayimg.com/thumbs/images/g/E~gAAeSwfKdoyBOj/s-l960.webp" },
  { name: "LG", logo: "https://i.ebayimg.com/thumbs/images/g/Z28AAeSwOCxoyBOj/s-l960.webp" },
  { name: "Xiaomi", logo: "https://i.ebayimg.com/thumbs/images/g/arkAAeSwpkFoyBOj/s-l960.webp" },
  { name: "Google", logo: "https://i.ebayimg.com/thumbs/images/g/9-gAAeSw4z5oyBOj/s-l960.webp" },
  { name: "Huawei", logo: "https://i.ebayimg.com/thumbs/images/g/Z2kAAeSw7aVoyBP9/s-l960.webp" },
  { name: "OPPO", logo: "https://i.ebayimg.com/thumbs/images/g/XxUAAeSwcGtoyBP9/s-l960.webp" },
  { name: "OnePlus", logo: "https://i.ebayimg.com/thumbs/images/g/eUAAAeSw9fxoyBP9/s-l960.webp" },
  { name: "Motorola", logo: "https://i.ebayimg.com/thumbs/images/g/9-gAAeSw4z5oyBOj/s-l960.webp" },
  { name: "HTC", logo: "https://i.ebayimg.com/thumbs/images/g/U9sAAeSw8PVoyBP9/s-l960.webp" }
];

function CellPhonesAccessoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="accessories-container">
      <div className="breadcrumb">
        <Link to="/">eBay</Link> {' > '} 
        <Link to="/electronics">Electronics</Link> {' > '} 
        <span>Cell Phones & Accessories</span>
      </div>

      <header className="accessories-header">
        <h1>Cell Phones, Smart Watches & Accessories</h1>
      </header>

      <div className="accessories-layout">
        <aside className="accessories-sidebar">
          <div className="sidebar-section">
            <h3 className="underlined-heading">Top categories</h3>
            <ul>
              <li><Link to="/electronics">Smartphones</Link></li>
              <li><Link to="/electronics/accessories">Cell phone accessories</Link></li>
              <li><a href="#">Smartphone parts</a></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Shop by top brand</h3>
            <ul>
              <li><a href="#">Apple</a></li>
              <li><a href="#">Blackberry</a></li>
              <li><a href="#">BLU</a></li>
              <li><a href="#">Google</a></li>
              <li><a href="#">HTC</a></li>
              <li><a href="#">Huawei</a></li>
              <li><a href="#">LG</a></li>
              <li><a href="#">Motorola</a></li>
              <li><a href="#">Nokia</a></li>
              <li><a href="#">OnePlus</a></li>
              <li><a href="#">PopSockets</a></li>
              <li><a href="#">Samsung</a></li>
              <li><a href="#">Xiaomi</a></li>
              <li><a href="#">OPPO</a></li>
              <li><a href="#">Sony</a></li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3 className="underlined-heading">Unique and smart</h3>
            <ul>
              <li><a href="#">Smartwatches</a></li>
              <li><a href="#">Smartwatch accessories</a></li>
            </ul>
          </div>
        </aside>

        <main className="accessories-main">
          <section className="top-categories-section">
            <h2 className="underlined-heading">Top categories</h2>
            <div className="top-categories-grid">
              <div className="category-card-large" onClick={() => navigate('/electronics')}>
                <h3>.</h3>
                <img src="https://i.ebayimg.com/images/g/VAIAAeSww2tox-PC/s-l960.webp" alt="Smartphones" />
              </div>
              <div className="category-card-large">
                <h3>..</h3>
                <img src="https://i.ebayimg.com/images/g/nSQAAeSwPohox-PH/s-l960.webp" alt="Accessories" />
              </div>
              <div className="category-card-large">
                <h3>...</h3>
                <img src="https://i.ebayimg.com/images/g/sw4AAeSw~~Box-PJ/s-l960.webp" alt="Smartphone parts" />
              </div>
            </div>
          </section>

          <section className="brands-section" style={{marginTop: '40px'}}>
            <h2 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '20px'}}>Shop by top brand</h2>
            <div className="brands-grid">
              {topBrands.map((brand, index) => (
                <div key={index} className="brand-card">
                  <div className="brand-logo-box">
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="promo-section">
            <h2>Make your wrist unique and smart</h2>
            <div className="grid-2-col">
              <div className="category-card-large">
                <h3></h3>
                <img src="https://i.ebayimg.com/images/g/vtsAAeSwgCJox-hY/s-l960.webp" alt="Smartwatches" />
              </div>
              <div className="category-card-large">
                <h3></h3>
                <img src="https://i.ebayimg.com/images/g/xhkAAeSw1JRox-hb/s-l960.webp" alt="Smartwatch accessories" />
              </div>
            </div>
          </section>

          <section className="promo-section">
            <h2>Additional tools to pair with</h2>
            <div className="grid-3-col">
              <div className="category-card-large">
                <h3></h3>
                <img src="https://i.ebayimg.com/images/g/2lAAAeSweZlox-w4/s-l960.webp" alt="SIM cards" />
              </div>
              <div className="category-card-large">
                <h3></h3>
                <img src="https://i.ebayimg.com/images/g/32oAAeSwUgNox-w5/s-l960.webp" alt="Phone headsets" />
              </div>
              <div className="category-card-large">
                <h3></h3>
                <img src="https://i.ebayimg.com/images/g/3KgAAeSwZxVox-w7/s-l960.webp" alt="Cases and covers" />
              </div>
            </div>
          </section>

          <section className="promo-section">
            <h2>Give them a second chance</h2>
            <div className="grid-2-col">
              <div className="category-card-large">
                <h3></h3>
                <img src="https://i.ebayimg.com/images/g/A84AAeSwT45ox~PI/s-l960.webp" alt="Refurbished phones" />
              </div>
              <div className="category-card-large">
                <h3></h3>
                <img src="https://i.ebayimg.com/images/g/7QQAAeSwtoVox~PO/s-l960.webp" alt="Vintage phones" />
              </div>
            </div>
          </section>

          <div className="accessory-grid">
            {accessoryProducts.map(product => (
              <div 
                key={product.id} 
                className="accessory-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="accessory-image-wrapper">
                  <img src={product.image_url} alt={product.name} />
                </div>
                <div className="accessory-info">
                  <h4>{product.name}</h4>
                  <div className="accessory-price">${product.price.toFixed(2)}</div>
                  <div className="accessory-meta">{product.condition}</div>
                  <div className="accessory-shipping">
                    {product.shipping_cost === 0 ? 'Free Shipping' : `+$${product.shipping_cost.toFixed(2)} shipping`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <section className="info-section">
        <div className="info-content">
          <p><strong>Your home of phones and accessories</strong> Buying a new cell phone or smartphone may seem complicated, but eBay makes the process simple and painless. Our wide collection includes a wide variety of phones from Apple, Samsung, LG and other major brands. We also have phones from all major cell phone companies including Verizon, AT&T and Sprint, as well as unlocked cell phones. When in doubt, check out some of our previous cell phone buying guides for some tips on how to make the best selection for your needs and budget.</p>
          
          <p><strong>Enjoy the latest smartphones at affordable prices.</strong> Today's cell phones do more than make calls. Smartphones work as a messaging service, a web browser, a camera, a music player and a GPS navigation unit, all in one device. Generally speaking, the more features a cell phone has and the more storage it has integrated, the higher the cost of the phone. Buy a best-selling Apple smartphone, such as the iPhone 7 and iPhone 7 Plus, and check out the latest versions of Samsung, the Galaxy Note 8, S8 +, and S8 or its successors, the Samsung Galaxy S9 and S9 +, available now.</p>
          
          <p>If the budget is a concern, consider looking at used cell phones or buying last year's model like the Samsung Galaxy S7 or iPhone 6s — it should work well with this year's applications. In addition to used phones, eBay has a large number of phones restored by the seller and the manufacturer that often come with warranty. You will also find unlocked and prepaid phones. And many of our sellers offer free shipping. If you still don't have funds, you can sell your current phone on eBay to help finance the purchase of your new cell phone.</p>
          
          <p><strong>Customize your smartphone</strong> Do not forget to customize! Our collection of cell phone accessories includes: cases, screen protectors, chargers, headphones and all kinds of items to personalize your phone and improve its functionality. We also offer cell phone batteries, replacement screens and other cell phone repair parts.</p>
          
          <p><strong>Check out the latest Smart Watches</strong> Is your smartphone connected in an apparent and permanent way to your hand? You may want to consider adding a smart watch with style to your technology line. We offer the latest from Apple, Motorola, Samsung, Pebble and other major brands. In addition, we provide plenty of accessories for smart watches such as cases, docking stations and screen protectors to make sure you can protect your smart watch at all times. With a smart watch, one of the newest and most popular mobile devices, you can access the latest applications, games and much more without putting your hand in your pocket or purse. No matter what your preference, you'll save on the latest and most popular mobile phones.</p>
          
          <p><strong>Available now...</strong> The long-awaited iPhone 8 and iPhone X have arrived, which means that one of the most exciting iPhone lines achieved a radical transformation. Although the latest iPhones have dazzled consumers, these phones offer even more impressive specifications. With an efficient, solid and fingerprint-resistant OLED display - not to mention the super fast processor - the new iPhones have extended battery life and performance much faster than the iPhone 4. The iPhone 8 comes in two sizes, with screens measuring 4.7 inches and 5.5 inches, while the iPhone X has a top-to-bottom screen that increases the entire series features the patented Super Retina display for crisp and clear images, as well as intense and bright colors. Other impressive features of the 8 and X include dust, water and fingerprint resistant exteriors made of precious solid glass; 12 megapixel cameras with digital zoom, autofocus and Live Photos; 4K video recording for the sharpest and clearest images and videos. Accessories like Apple's Bluetooth headphones do not even need cables and can tell when they have been removed from the ears, and the iPhone 8 and X are charged quickly and wirelessly, so chargers and cables are a thing of the past. Newer iPhones even include a high-tech facial recognition feature, called Face ID, which improves smartphone security and modernizes your phone. Should you switch to the latest additions to the Apple smartphone family? The choice is yours, but an iPhone 8 or iPhone X is almost future proof; Not to mention luxurious and extremely powerful.</p>
        </div>
      </section>

      <section className="related-searches">
        <h2>Related searches</h2>
        <div className="tag-grid">
          <a href="#" className="tag">Smart Watch with Phone</a>
          <a href="#" className="tag">Relojes Inteligentes Para Android</a>
          <a href="#" className="tag">Android Smartwatch</a>
          <a href="#" className="tag">Smart Devices</a>
          <a href="#" className="tag">Apple Watch Phone</a>
          <a href="#" className="tag">Watch Phone</a>
          <a href="#" className="tag">Android Smart Watch for Men</a>
          <a href="#" className="tag">Smart Watch iPhone</a>
          <a href="#" className="tag">Smartwatch with Sim Card</a>
          <a href="#" className="tag">Phone Warranty</a>
          <a href="#" className="tag">Smart Watch with Sim Card Slot</a>
          <a href="#" className="tag">Phone Apps</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-links">
          <a href="#">About eBay</a>
          <a href="#">Announcements</a>
          <a href="#">Community</a>
          <a href="#">Security Center</a>
          <a href="#">Seller Center</a>
          <a href="#">Policies</a>
          <a href="#">Affiliates</a>
          <a href="#">Product Safety Tips</a>
          <a href="#">Help & Contact</a>
          <a href="#">Site Map</a>
        </div>
        <div className="copyright">
          Copyright © 1995-2026 eBay Inc. All Rights Reserved. <a href="#">Accessibility</a>, <a href="#">User Agreement</a>, <a href="#">Privacy</a>, <a href="#">Consumer Health Data</a>, <a href="#">Payments Terms of Use</a>, <a href="#">Cookies</a>, <a href="#">CA Privacy Notice</a>, <a href="#">Your Privacy Choices</a> and <a href="#">AdChoice</a>
        </div>
      </footer>
    </div>
  );
}

export default CellPhonesAccessoriesPage;
