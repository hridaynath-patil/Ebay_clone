import { Link } from 'react-router-dom';

function CartPage({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container cart-page">
      <h1 style={{fontSize: '32px', marginBottom: '24px'}}>Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div style={{padding: '40px', textAlign: 'center', background: '#f7f7f7', borderRadius: '8px'}}>
          <h2>Your cart is empty</h2>
          <p style={{marginTop: '16px'}}><Link to="/electronics" style={{color: '#0064d2', textDecoration: 'underline'}}>Start shopping</Link></p>
        </div>
      ) : (
        <div style={{display: 'flex', gap: '32px'}}>
          <div style={{flex: 2}}>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image_url} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.name}</div>
                  <div style={{color: '#767676', marginBottom: '8px'}}>Condition: {item.condition}</div>
                  <div style={{fontWeight: 'bold', fontSize: '18px'}}>US ${item.price.toFixed(2)}</div>
                  <div style={{marginTop: '16px'}}>
                    <button 
                      style={{background: 'none', border: 'none', color: '#0064d2', cursor: 'pointer', textDecoration: 'underline'}}
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{flex: 1}}>
            <div className="cart-summary">
              <h2 style={{fontSize: '20px', marginBottom: '24px'}}>Order summary</h2>
              <div className="summary-row">
                <span>Items ({cartItems.length})</span>
                <span>US ${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row summary-total">
                <span>Subtotal</span>
                <span>US ${total.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary" style={{width: '100%', marginTop: '24px'}}>Go to checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
