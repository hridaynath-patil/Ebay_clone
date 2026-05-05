import { useState, useEffect } from 'react';
import { PlayCircle, ChevronLeft, ChevronRight, Pause, Play, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    title: "20% off top picks this season",
    desc: "Upgrade your home, tech, ride, and more.",
    btn: "Get the coupon",
    footer: "Ends 5/10 PDT. Max $350 off. 2x use.",
    bgClass: "lime-banner",
    imgClass: "placeholder-lime"
  },
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

  return (
    <div className="landing-page">
      {/* 1. Hero Banner */}
      <div className={`hero-banner ${slide.bgClass}`}>
        <div className="container hero-container">
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <button className="btn-white">{slide.btn}</button>
            <div className="hero-footer-text">{slide.footer}</div>
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
      </div>

      <div className="container">
        {/* 2. Shopping made easy */}
        <div className="shopping-made-easy">
          <div>
            <h2>Shopping made easy</h2>
            <p>Enjoy reliability, secure deliveries and hassle-free returns.</p>
          </div>
          <button className="btn-black">Get closer</button>
        </div>

        {/* 3. eBay Live */}
        <div className="section-header">
          <div>
            <h2>eBay Live</h2>
            <p>Tune in and shop curated experiences</p>
          </div>
          <a href="#" className="see-all">See all</a>
        </div>
        <div className="horizontal-scroll">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="live-card">
              <div className="live-badge">LIVE . {10 * item}</div>
              <div className="live-image-placeholder placeholder-live-{item}"></div>
              <div className="live-footer">
                <div className="live-title">Live event {item} description here</div>
                <PlayCircle className="play-icon" />
              </div>
            </div>
          ))}
        </div>

        {/* 4. Up to 60% off stylish finds for Mom */}
        <div className="section-header" style={{marginTop: '40px'}}>
          <h2>Up to 60% off stylish finds for Mom</h2>
        </div>
        <div className="categories-round">
          {['Watches', 'Handbags', 'Jewelry', 'Pre-loved fashion', 'Sneakers', 'Fragrances', 'Health and beauty'].map((cat, i) => (
            <div key={i} className="cat-round-item">
              <div className="cat-round-icon"></div>
              <span>{cat}</span>
            </div>
          ))}
        </div>

        {/* 5. Shop the world. Ship for free. (Purple banner) */}
        <div className="promo-purple">
          <div className="promo-purple-text">
            <h2>Shop the world. Ship for free.</h2>
            <p>Discover international finds with free shipping included.</p>
            <button className="btn-white">Shop now</button>
          </div>
          <div className="promo-purple-images">
            <div className="img-box img-shoes"></div>
            <div className="img-box img-bag"></div>
            <div className="img-box img-lady"></div>
            <div className="img-box img-gengar"></div>
            <div className="img-box img-wolverine"></div>
            <div className="img-box img-phone"></div>
          </div>
        </div>

        {/* 6. 20% off top picks this season (Lime Green banner) */}
        <div className="promo-green">
          <div className="promo-green-text">
            <h2>20% off top picks this season</h2>
            <p>Upgrade your home, tech, ride, and more.</p>
            <button className="btn-dark-green">Get the coupon</button>
            <div className="promo-green-footer">Ends 6/2, P&C. Max $100 off. Terms.</div>
          </div>
          <div className="promo-green-images">
            <div className="img-float img-vacuum"></div>
            <div className="img-float img-battery"></div>
            <div className="img-float img-monitor"></div>
          </div>
        </div>

        {/* 7. Today's Deals */}
        <div className="section-header" style={{marginTop: '40px'}}>
          <div>
            <h2>Today's Deals</h2>
            <p>All with free shipping</p>
          </div>
        </div>
        <div className="horizontal-scroll deals-scroll">
          {[
            {name: "Roborock Q Revo Robot Vacuum", price: "$1,099.99"},
            {name: "Makita Circular Saw", price: "$249.00"},
            {name: "Citizen Men's Watch", price: "$147.99"},
            {name: "CLINIQUE Happy Men", price: "$29.99"},
            {name: "Nike Women's Top", price: "$30.00"}
          ].map((deal, i) => (
            <div key={i} className="deal-card">
              <div className="deal-image-wrap">
                <Heart className="deal-heart" size={16} />
                <div className="deal-img-placeholder"></div>
              </div>
              <div className="deal-title">{deal.name}</div>
              <div className="deal-price">{deal.price}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Mock */}
      <footer className="mock-footer">
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Buy</h4>
            <a href="#">Registration</a>
            <a href="#">Bidding & buying help</a>
            <a href="#">Stores</a>
          </div>
          <div className="footer-col">
            <h4>Sell</h4>
            <a href="#">Start selling</a>
            <a href="#">How to sell</a>
            <a href="#">Business sellers</a>
          </div>
          <div className="footer-col">
            <h4>About eBay</h4>
            <a href="#">Company info</a>
            <a href="#">News</a>
            <a href="#">Investors</a>
          </div>
          <div className="footer-col">
            <h4>Help & Contact</h4>
            <a href="#">Seller Center</a>
            <a href="#">Contact Us</a>
            <a href="#">eBay Returns</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
