import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Heart, List, Grid, Info } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';
import './CellPhonesPage.css';

function CellPhonesPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Attempt to fetch from backend, fallback to mock data
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => {
        console.error("Backend not running, using mock data", err);
        // Map mock products to include more fields for the list view
        const enhancedProducts = mockProducts.map(p => ({
          ...p,
          rating: (Math.random() * 2 + 3).toFixed(1),
          reviews: Math.floor(Math.random() * 500),
          watchers: Math.floor(Math.random() * 50),
          buyItNow: Math.random() > 0.3
        }));
        setProducts(enhancedProducts);
      });
  }, []);

  return (
    <div className="cellphones-container">
      <div className="breadcrumb">
        <Link to="/">eBay</Link> {' > '} 
        <Link to="/electronics">Electronics</Link> {' > '} 
        <Link to="/electronics/accessories">Cell Phones & Accessories</Link> {' > '} 
        <span>Cell Phones & Smartphones</span>
      </div>

      <h1 className="page-title">Cell Phones & Smartphones</h1>

      <div className="main-layout">
        <aside className="sidebar">
          <h3>Shop by category</h3>
          <ul>
            <li><Link to="/electronics/accessories">Cell Phones & Accessories</Link></li>
            <li className="active-cat">
              Cell Phones & Smartphones
              <ul className="sub-cats">
                <li>Cell Phone & Smartphone Parts</li>
                <li>Cell Phone Accessories</li>
                <li>Display Phones</li>
                <li>Mixed Lots</li>
                <li>PDA Accessories</li>
                <li>PDAs</li>
                <li>Phone Cards & SIM Cards</li>
                <li>Portable Audio & Headphones</li>
                <li>Smart Watch Accessories</li>
                <li>Smart Watches</li>
                <li>Vintage Cell Phones</li>
              </ul>
            </li>
          </ul>
        </aside>

        <div className="content-area">
          <div className="filters-bar">
            <button className="filter-btn">Network <ChevronDown size={14} /></button>
            <button className="filter-btn">Storage Capacity <ChevronDown size={14} /></button>
            <button className="filter-btn">Model <ChevronDown size={14} /></button>
            <button className="filter-btn">Brand <ChevronDown size={14} /></button>
            <button className="filter-btn">Lock Status <ChevronDown size={14} /></button>
            <button className="filter-btn">Condition <ChevronDown size={14} /></button>
            <button className="filter-btn">Price <ChevronDown size={14} /></button>
            <button className="filter-btn">Buying Format <ChevronDown size={14} /></button>
            <button className="filter-btn all-filters-btn">All Filters</button>
          </div>

          <div className="results-info-bar">
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span className="results-count">457,338 results</span>
              <div className="compare-toggle">
                <span>Compare</span>
                <div style={{width: '36px', height: '18px', background: '#e5e5e5', borderRadius: '10px', position: 'relative'}}>
                  <div style={{width: '16px', height: '16px', background: 'white', borderRadius: '50%', position: 'absolute', top: '1px', left: '1px'}}></div>
                </div>
              </div>
            </div>
            
            <div className="sort-view-controls">
              <div className="sort-dropdown">
                Sort: <strong>Best Match</strong> <ChevronDown size={14} />
              </div>
              <div className="view-toggle">
                <List size={20} style={{cursor: 'pointer', color: '#191919'}} />
                <Grid size={20} style={{cursor: 'pointer', color: '#767676'}} />
                <ChevronDown size={14} style={{alignSelf: 'center'}} />
              </div>
            </div>
          </div>

          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product-list-item" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="product-image-container">
                  <img src={product.image_url} alt={product.name} />
                  <div className="heart-icon">
                    <Heart size={18} />
                  </div>
                </div>
                
                <div className="product-details">
                  <h2>{product.name}</h2>
                  <div className="item-condition">{product.condition} · {product.brand || 'Samsung'}</div>
                  
                  <div className="item-rating">
                    <span className="stars">★★★★★</span>
                    <span>{product.reviews} product ratings</span>
                  </div>

                  <div className="item-price">
                    ${product.price.toFixed(2)} {Math.random() > 0.5 && `to $${(product.price + 60).toFixed(2)}`}
                  </div>
                  
                  <div className="item-buy-format">
                    {product.buyItNow ? 'Buy It Now' : 'or Best Offer'}
                  </div>

                  <div className="item-shipping">
                    {product.shipping_cost === 0 ? 'Free international shipping' : `+$${product.shipping_cost.toFixed(2)} shipping`}
                  </div>

                  {product.watchers > 0 && (
                    <div className="item-watchers">{product.watchers} watching</div>
                  )}
                  
                  {Math.random() > 0.7 && (
                    <div className="urgency-text">Only 2 left</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CellPhonesPage;

