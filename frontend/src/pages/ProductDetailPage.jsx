import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';

function ProductDetailPage({ addToCart }) {
  const [product, setProduct] = useState(null);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const navigate = useNavigate();
  
  // Extract id from path (simple routing approach for single file)
  const id = window.location.pathname.split('/').pop();

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => {
        const found = mockProducts.find(p => p.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <div className="container">Loading...</div>;

  const handleBuyNow = () => {
    setShowBuyNowModal(true);
  };

  const handleCheckoutGuest = () => {
    setShowBuyNowModal(false);
    alert("Checkout completed successfully as a guest!");
  };

  return (
    <div className="container">
      <div style={{margin: '24px 0', fontSize: '12px', color: '#767676'}}>
        <Link to="/">eBay</Link> {'>'} <Link to="/electronics">Electronics</Link> {'>'} <Link to="/electronics">Cell Phones & Smartphones</Link> {'>'} {product.name}
      </div>

      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image_url} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.name}</h1>
          <div className="product-detail-condition">Condition: <strong>{product.condition}</strong></div>
          <div className="product-detail-price">US ${product.price.toFixed(2)}</div>
          
          <div style={{background: '#f7f7f7', padding: '16px', borderRadius: '8px', marginBottom: '24px'}}>
            <p style={{marginBottom: '8px'}}>Returns: 30 days returns. Buyer pays for return shipping</p>
            <p>Shipping: {product.shipping_cost === 0 ? 'Free standard shipping' : `$${product.shipping_cost.toFixed(2)} standard shipping`}</p>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary" onClick={handleBuyNow}>Buy It Now</button>
            <button className="btn btn-secondary" onClick={() => {
              addToCart(product);
              navigate('/cart');
            }}>Add to cart</button>
            <button className="btn btn-secondary" style={{border: '1px solid #191919', color: '#191919'}}>Add to Watchlist</button>
          </div>
        </div>
      </div>

      {showBuyNowModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Checkout</h2>
            <p style={{marginBottom: '24px'}}>How would you like to proceed with your purchase of <strong>{product.name}</strong>?</p>
            <div className="modal-buttons">
              <button className="btn btn-primary" onClick={() => alert("Please sign in first.")}>Sign In to Checkout</button>
              <button className="btn btn-secondary" onClick={handleCheckoutGuest}>Check Out as Guest</button>
              <button className="btn" style={{marginTop: '12px', textDecoration: 'underline', background: 'transparent'}} onClick={() => setShowBuyNowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
