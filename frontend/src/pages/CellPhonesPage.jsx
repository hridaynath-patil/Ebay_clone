import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';

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
        setProducts(mockProducts);
      });
  }, []);

  return (
    <div className="container">
      <div style={{margin: '24px 0', fontSize: '12px', color: '#767676'}}>
        <Link to="/">eBay</Link> {'>'} <Link to="/electronics">Electronics</Link> {'>'} Cell Phones, Smart Watches & Accessories
      </div>
      
      <h1 style={{fontSize: '24px', marginBottom: '24px'}}>Cell Phones & Smartphones</h1>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.image_url} alt={product.name} className="product-image" />
            <div className="product-title">{product.name}</div>
            <div className="product-condition">{product.condition}</div>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <div className="product-shipping">
              {product.shipping_cost === 0 ? 'Free shipping' : `+$${product.shipping_cost.toFixed(2)} shipping`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CellPhonesPage;
