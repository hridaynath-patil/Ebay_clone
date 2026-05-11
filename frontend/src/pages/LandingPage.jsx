import { useState, useEffect } from 'react';
import { PlayCircle, ChevronLeft, ChevronRight, Pause, Play, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import '../components/Footer.css';

const heroSlides = [
  {
    title: "Score 10% off overlanding gear",
    desc: "Prepare for your next adventure with the right equipment.",
    btn: "Get the coupon",
    footer: "Ends 6/2, P&C. Max $50 off. Terms apply.",
    bgClass: "teal-banner",
    imgClass: "placeholder-jeeps"
  },
  {
    title: "Up to 50% off Refurbished tech",
    desc: "Get top brands for less, backed by warranty.",
    btn: "Shop now",
    footer: "Limited time offer. While supplies last.",
    bgClass: "blue-banner",
    imgClass: "placeholder-tech"
  },
  {
    title: "Discover rare collectibles",
    desc: "Find the missing piece to your collection.",
    btn: "Start exploring",
    footer: "New items added daily.",
    bgClass: "red-banner",
    imgClass: "placeholder-collect"
  }
];

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  const liveScrollRef = useState(null);

  const scrollDeals = (direction) => {
    const container = document.querySelector('.deals-scroll');
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = document.querySelector('.deals-scroll');
    const handle = document.getElementById('deals-scroll-handle');
    
    if (!container || !handle) return;

    const updateIndicator = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.offsetWidth;
      const progress = (scrollLeft / scrollWidth) * 100;
      handle.style.left = `${progress * 0.75}%`; // 0.75 to account for handle width in 400px bar
    };

    container.addEventListener('scroll', updateIndicator);
    return () => container.removeEventListener('scroll', updateIndicator);
  }, []);

  const scroll = (direction) => {
    const container = document.querySelector('.live-scroll');
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container landing-page">
      {/* Top Mobile Nav - Horizontal Scroll */}
      <div className="mobile-top-nav">
        <a href="#" className="active">Home</a>
        <a href="#">Saved</a>
        <a href="#">Motors</a>
        <a href="#">Electronics</a>
        <a href="#">Collectibles</a>
        <a href="#" className="nav-more">More <ChevronDown size={14} /></a>
      </div>

      {/* 1. Your recently viewed items */}
      <div className="section-header">
        <h2>Your recently viewed items</h2>
      </div>
      <div className="horizontal-scroll recently-viewed">
        {[
          { id: 101, name: "Apple Watch Series SE 2nd Gen 40mm GPS + WiFi + Cellular...", price: "$112.99", img: "https://i.ebayimg.com/images/g/wfkAAOSwOWNkUu9T/s-l500.webp" },
          { id: 102, name: "Bose Solo Soundbar 2 Home Theater, Certified Refurbished", price: "$129.00", oldPrice: "$199.00", img: "https://i.ebayimg.com/images/g/dpYAAeSwrmRp-h3e/s-l500.webp" }
        ].map(item => (
          <div key={item.id} className="recent-item-card">
            <div className="recent-img-wrap">
              <div className="heart-icon-small"><Heart size={14} /></div>
              <img src={item.img} alt={item.name} />
            </div>
            <div className="recent-info">
              <div className="recent-title">{item.name}</div>
              <div className="recent-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Hero Banner */}
      <div className={`hero-banner ${slide.bgClass}`}>
        <div className="hero-content">
          <div className="hero-badge">NEW!</div>
          <h1>{slide.title}</h1>
          <p>{slide.desc}</p>
          <button className="btn-white">Sign in</button>
        </div>
        <div className="hero-image">
          <div className={slide.imgClass}></div>
        </div>
        <div className="hero-indicators">
          {heroSlides.map((_, idx) => (
            <div 
              key={idx} 
              className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            ></div>
          ))}
        </div>
        <div className="hero-controls">
          <button className="control-btn" onClick={prevSlide}><ChevronLeft size={16} /></button>
          <button className="control-btn" onClick={nextSlide}><ChevronRight size={16} /></button>
          <button className="control-btn" onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
      </div>

      {/* 3. Home Speakers & Subwoofers */}
      <div className="section-header">
        <div>
          <h2>Home Speakers & Subwoofers</h2>
          <p className="sub-text">Recommended for you</p>
        </div>
        <a href="#" className="see-all">See all</a>
      </div>
      <div className="horizontal-scroll">
        {[
          { id: 201, name: "Bose Solo Soundbar 2 Home Theater, Brand New, Latest Factory Sealed", price: "$129.47", oldPrice: "$199.00", img: "https://i.ebayimg.com/images/g/dpYAAeSwrmRp-h3e/s-l500.webp" },
          { id: 202, name: "Bose Solo Soundbar Series II - Compact Design, Bluetooth, Clear Voice", price: "$129.95", img: "https://i.ebayimg.com/images/g/dpYAAeSwrmRp-h3e/s-l500.webp" },
          { id: 203, name: "Bose Solo Soundbar Series II Bluetooth Speaker Compact Black", price: "$129.99", img: "https://i.ebayimg.com/images/g/dpYAAeSwrmRp-h3e/s-l500.webp" }
        ].map(item => (
          <div key={item.id} className="deal-card">
            <div className="deal-image-wrap">
              <div className="deal-heart"><Heart size={18} /></div>
              <img src={item.img} alt={item.name} className="deal-img-placeholder" />
            </div>
            <div className="deal-title">{item.name}</div>
            <div className="deal-price-row">
              <span className="deal-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Shopping made easy */}
      <div className="shopping-made-easy">
        <div className="shopping-text">
          <h2>Shopping made easy</h2>
          <p>Enjoy reliability, secure deliveries and hassle-free returns.</p>
        </div>
        <button className="btn-black">Start now</button>
      </div>

      {/* 5. eBay Live */}
      <div className="section-header">
        <div>
          <h2>eBay Live</h2>
          <p className="sub-text">Tune in and shop curated experiences</p>
        </div>
        <a href="#" className="see-all">See all</a>
      </div>

      
      <div className="scroll-wrapper">
        <button className="scroll-arrow prev" onClick={() => scroll('left')}><ChevronLeft size={20} /></button>
        <div className="horizontal-scroll live-scroll">
          {[
            {
              id: 1,
              viewers: "135",
              user: "primetimesportsframing",
              title: "Tuesday Evening Memorabilia & Cards",
              img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80",
              avatar: "https://i.pravatar.cc/150?u=1"
            },
            {
              id: 2,
              viewers: "78",
              user: "slabbiepatty",
              title: "JP $1 START SINGLES & RR Full Sets",
              img: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&q=80",
              avatar: "https://i.pravatar.cc/150?u=2"
            },
            {
              id: 3,
              viewers: "65",
              user: "heimeisport",
              title: "DENA 🔥 CRAZY $2 AUCTION 💥 FREE shipping CRYSTAL live show !!!",
              img: "https://images.unsplash.com/photo-1581557991964-125469da3b8a?w=400&q=80",
              avatar: "https://i.pravatar.cc/150?u=3"
            },
            {
              id: 4,
              viewers: "51",
              user: "cravecollect",
              title: "Pokemon Singles/Slabs/Sealed and more! w/Crave Crew!",
              img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=400&q=80",
              avatar: "https://i.pravatar.cc/150?u=4"
            },
            {
              id: 5,
              viewers: "48",
              user: "pcbhobby",
              title: "COINS & CURRENCY WITH PCB HOBBY - FREE SHIPPING!! 5/6 D (P...",
              img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80",
              avatar: "https://i.pravatar.cc/150?u=5"
            },
            {
              id: 6,
              viewers: "36",
              user: "pfootballpete4dhx",
              title: "💛$1 START POKEMON + WORLD RECORDS! 💛 W/ HEATHER",
              img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
              avatar: "https://i.pravatar.cc/150?u=6"
            }
          ].map((event) => (
            <div key={event.id} className="live-item">
              <div className="live-card-v2">
                <div className="live-card-img" style={{backgroundImage: `url(${event.img})`}}></div>
                <div className="live-badge-v2">LIVE</div>
                <div className="live-viewers"><span className="red-dot-live"></span> {event.viewers}</div>
                <div className="live-card-overlay">
                  <div className="live-card-user">
                    <img src={event.avatar} alt={event.user} className="live-user-avatar" />
                    <span>{event.user}</span>
                  </div>
                  <div className="live-play-icon">
                    <Play size={10} fill="white" color="white" />
                  </div>
                </div>
              </div>
              <div className="live-event-title">{event.title}</div>
            </div>
          ))}
        </div>
        <button className="scroll-arrow next" onClick={() => scroll('right')}><ChevronRight size={20} /></button>
      </div>

      {/* 6. Time for a spring refresh */}
      <div className="section-header">
        <h2>Time for a spring refresh</h2>
      </div>
      <div className="refresh-grid">
        {[
          { name: 'Vacuums', img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=200&q=80' },
          { name: 'Home décor', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=200&q=80' },
          { name: 'Home improvement', img: 'https://images.unsplash.com/photo-1581141849291-1110b9c1d30a?w=200&q=80' },
          { name: 'Air purifiers', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=80' }
        ].map((item, i) => (
          <div key={i} className="refresh-item">
            <div className="refresh-img-box">
              <img src={item.img} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* 7. Find your hidden gem (Yellow banner) */}
      <div className="promo-yellow">
        <div className="promo-yellow-content">
          <h2>Find your hidden gem</h2>
          <p>Rare collectibles and one-of-a-kind finds. Deals up to 20% off with code PARS2024</p>
          <button className="btn-black">Start hunting</button>
          <div className="promo-yellow-small">Ends 5/19. Max discount $100. Terms.</div>
        </div>
        <div className="promo-yellow-images">
          <img src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=400&q=80" alt="Collectibles" />
        </div>
      </div>


      {/* 7. Today's Deals */}
      <div className="section-header" style={{marginTop: '40px'}}>
        <div>
          <h2>Today's Deals</h2>
          <p>All with free shipping</p>
        </div>
      </div>
      
      <div className="scroll-wrapper">
        <button className="scroll-arrow prev" onClick={() => scrollDeals('left')}><ChevronLeft size={20} /></button>
        <div className="horizontal-scroll deals-scroll" id="deals-scroll-container">
          {[
            {
              name: "Bose Solo Soundbar 2 Home Theater, Certified Refurbished",
              price: "$129.00",
              oldPrice: "$199.00",
              tag: "",
              img: "https://i.ebayimg.com/images/g/dpYAAeSwrmRp-h3e/s-l500.webp"
            },
            {
              name: "Apple iPhone 15 Pro Max A2849 256GB Unlocked Very Good",
              price: "$609.47",
              img: "https://i.ebayimg.com/images/g/zJoAAeSw6g5pJIvk/s-l500.webp"
            },
            {
              name: "Dyson V8 Origin Extra Cordless Vacuum | Blue | Refurbished",
              price: "$209.99",
              oldPrice: "$419.99",
              tag: "20% OFF: BRANDS4YOU",
              img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300&q=80"
            },
            {
              name: "EcoFlow River 2 Plus 286Wh Wireless Boost Combo & 5000mAh RAPID...",
              price: "$212.86",
              oldPrice: "$459.00",
              img: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=300&q=80"
            },
            {
              name: "COACH NEW YORK by Coach cologne for men EDT 6.7 oz New In Box",
              price: "$63.84",
              oldPrice: "$134.00",
              img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&q=80"
            },
            {
              name: "Apple Watch S 40mm GPS + Y",
              price: "$112.99",
              img: "https://i.ebayimg.com/images/g/wfkAAOSwOWNkUu9T/s-l500.webp"
            }
          ].map((deal, i) => (
            <div key={i} className="deal-card">
              <div className="deal-image-wrap">
                <div className="deal-heart">
                  <Heart size={18} />
                </div>
                <img src={deal.img} alt={deal.name} className="deal-img-placeholder" />
                {deal.tag && <div className="deal-promo-tag">{deal.tag}</div>}
              </div>
              <div className="deal-title">{deal.name}</div>
              <div className="deal-price-row">
                <span className="deal-price">{deal.price}</span>
                {deal.oldPrice && <span className="deal-old-price">{deal.oldPrice}</span>}
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-arrow next" onClick={() => scrollDeals('right')}><ChevronRight size={20} /></button>
      </div>
      
      <div className="scroll-indicator-container">
        <div className="scroll-indicator-bar">
          <div className="scroll-indicator-handle" id="deals-scroll-handle"></div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer-full">
        <div className="container">
          <div className="footer-cols">
            <div className="footer-col">
              <h4>Buy</h4>
              <a href="#">Registration</a>
              <a href="#">Bidding & buying help</a>
              <a href="#">Stores</a>
              <a href="#">Creator Collections</a>
              <a href="#">eBay for Charity</a>
              <a href="#">Charity Shop</a>
              <a href="#">Seasonal Sales and events</a>
              <a href="#">eBay Gift Cards</a>
            </div>
            
            <div className="footer-col">
              <h4>Sell</h4>
              <a href="#">Start selling</a>
              <a href="#">How to sell</a>
              <a href="#">Business sellers</a>
              <a href="#">Affiliates</a>
              
              <h4 className="footer-subheading">Tools & apps</h4>
              <a href="#">Developers</a>
              <a href="#">Security center</a>
              <a href="#">Site map</a>
            </div>
            
            <div className="footer-col">
              <h4>eBay companies</h4>
              <a href="#">TCGplayer</a>
              
              <h4 className="footer-subheading">Stay connected</h4>
              <a href="#" className="footer-social"><span className="social-icon facebook-icon">f</span> Facebook</a>
              <a href="#" className="footer-social"><span className="social-icon twitter-icon">𝕏</span> X (Twitter)</a>
            </div>
            
            <div className="footer-col">
              <h4>About eBay</h4>
              <a href="#">Company info</a>
              <a href="#">News</a>
              <a href="#">Deferred Prosecution Agreement with<br/>District of Massachusetts</a>
              <a href="#">Investors</a>
              <a href="#">Careers</a>
              <a href="#">Diversity & Inclusion</a>
              <a href="#">Global Impact</a>
              <a href="#">Government relations</a>
              <a href="#">Advertise with us</a>
              <a href="#">Policies</a>
              <a href="#">Verified Rights Owner (VeRO) Program</a>
              <a href="#">eCI Licenses</a>
              <a href="#">Product Safety Tips</a>
            </div>
            
            <div className="footer-col">
              <h4>Help & Contact</h4>
              <a href="#">Seller Center</a>
              <a href="#">Contact Us</a>
              <a href="#">eBay Returns</a>
              <a href="#">eBay Money Back Guarantee</a>
              
              <h4 className="footer-subheading">Community</h4>
              <a href="#">Announcements</a>
              <a href="#">eBay Community</a>
              <a href="#">eBay for Business Podcast</a>
              
              <h4 className="footer-subheading">eBay Sites</h4>
              <div className="region-selector">
                <span className="flag-icon">🇺🇸</span>
                <span>United States</span>
                <ChevronDown size={14} className="region-chevron" />
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>Copyright © 1995-2024 eBay Inc. All Rights Reserved. <a href="#">Accessibility</a>, <a href="#">User Agreement</a>, <a href="#">Privacy</a>, <a href="#">Consumer Health Data</a>, <a href="#">Payments Terms of Use</a>, <a href="#">Cookies</a>, <a href="#">CA Privacy Notice</a>, <a href="#">Your Privacy Choices</a> and <a href="#">AdChoice</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
