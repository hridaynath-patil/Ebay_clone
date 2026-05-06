import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Bell, ChevronDown, Search } from 'lucide-react';

function Header({ cartCount, cartItems = [] }) {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div className="top-nav">
          <div className="top-nav-links">
            <span style={{marginRight: '8px'}}>Hi! <a href="#" className="greeting-link" style={{textDecoration: 'underline', color: '#0064d2'}}>Sign in</a> or <a href="#" className="greeting-link" style={{textDecoration: 'underline', color: '#0064d2'}}>register</a></span>
            <a href="#">Deals</a>
            <a href="#">Brand Outlet</a>
            <a href="#">Gift Cards</a>
            <a href="#">Help & Contact</a>
          </div>
          <div className="top-nav-links">
            <a href="#" style={{marginLeft: '3px', marginRight: '10px'}}>Ship to</a>
            <a href="#" style={{marginLeft: '3px', marginRight: '20px'}}>Sell</a>
            <span className="nav-dropdown" style={{marginLeft: '3px', marginRight: '3px'}} >Watchlist <ChevronDown size={14} style={{marginLeft: '3px', opacity: 0.7}}/></span>
            <div className="nav-dropdown hover-menu-container">
              <span style={{marginLeft: '3px', marginRight: '3px'}}>My eBay <ChevronDown size={14} style={{marginLeft: '3px', opacity: 0.7, verticalAlign: 'middle'}}/></span>
              <div className="hover-menu">
                <ul>
                  <li><a href="#">Summary</a></li>
                  <li><a href="#">Recently Viewed</a></li>
                  <li><a href="#">Bids/Offers</a></li>
                  <li><a href="#">Watchlist</a></li>
                  <li><a href="#">Purchase History</a></li>
                  <li><a href="#">Buy Again</a></li>
                  <li><a href="#">Selling</a></li>
                  <li><a href="#">Saved Feed</a></li>
                  <li><a href="#">Saved Searches</a></li>
                  <li><a href="#">Saved Sellers</a></li>
                  <li><a href="#">Payments</a></li>
                  <li><a href="#">My Garage</a></li>
                  <li><a href="#">Preferences</a></li>
                  <li><a href="#">My Collection</a></li>
                  <li><a href="#">Messages</a></li>
                  <li><a href="#">PSA Vault</a></li>
                  <li><a href="#">Issue Resolution Center</a></li>
                </ul>
              </div>
            </div>
            <Bell style={{marginLeft: '8px', marginRight: '8px'}} size={20} />
            <div className="cart-icon-wrapper" onClick={() => navigate('/cart')}>
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              
              <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
                <div className="cart-dropdown-header">
                  <h2>Shopping cart</h2>
                </div>
                {cartItems && cartItems.length > 0 ? (
                  <div className="cart-dropdown-items">
                    {cartItems.map((item, index) => (
                      <div key={index} className="cart-dropdown-item">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-dropdown-item-details">
                          <span className="cart-item-title">{item.name}</span>
                          <span className="cart-item-price">${item.price}</span>
                        </div>
                      </div>
                    ))}
                    <button className="cart-dropdown-checkout" onClick={() => navigate('/cart')}>Checkout</button>
                  </div>
                ) : (
                  <div className="cart-dropdown-empty">
                    <p style={{fontSize: '16px', fontWeight: 'bold', marginBottom: '8px'}}>Your cart is empty</p>
                    <p style={{fontSize: '13px', color: '#767676'}}>Time to start shopping!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="main-header">
          <Link to="/" className="logo" style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" alt="eBay" style={{height: '44px'}} />
          </Link>

          <div style={{display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '10px', color: '#555', lineHeight: 1.2}}>
            <span>Shop by<br/>category</span> <ChevronDown size={16} style={{opacity: 0.7}} />
          </div>

          <div style={{display: 'flex', flexGrow: 1, alignItems: 'center', gap: '8px'}}>
            <div className="search-container">
              <Search size={20} color="#767676" style={{marginLeft: '14px', minWidth: '20px'}} />
              <input type="text" className="search-input" placeholder="Search for anything" />
              <select className="search-category">
                <option>All Categories</option>
              </select>
            </div>
            
            <button className="search-btn">Search</button>
            <span style={{fontSize: '10px', color: '#555', cursor: 'pointer', marginLeft: '5px', marginRight: '25px'}}>Advanced</span>
          </div>
        </div>
      </div>
      
      <div className="category-nav">
        <div className="container">
          <ul>
            <li><a href="#">eBay Live</a></li>
            <li><a href="#">Saved</a></li>
            <li><a href="#">Motors</a></li>
            <li><Link to="/electronics">Electronics</Link></li>
            <li><a href="#">Collectibles</a></li>
            <li><a href="#">Home and garden</a></li>
            <li><a href="#">Clothing, shoes and accessories</a></li>
            <li><a href="#">Toys</a></li>
            <li><a href="#">Sporting goods</a></li>
            <li><a href="#">Business and industrial</a></li>
            <li className="nav-dropdown hover-menu-container" style={{marginLeft: 'auto'}}>
              <span>More <ChevronDown size={14} style={{marginRight: '125px', verticalAlign: 'middle'}}/></span>
              <div className="hover-menu" style={{right: 0, left: 'auto', top: '100%'}}>
                <ul>
                  <li><a href="#">Jewelry and watches</a></li>
                  <li><a href="#">Refurbished</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
