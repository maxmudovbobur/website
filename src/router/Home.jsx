import React, { useState, useEffect } from "react";
import '../components/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { addLike } from '../router/LikeBos';
import Photo from '../assets/Frame 560.png';
import frame from '../assets/Frame 694.png'
import place from '../assets/place.png'
import opa from '../assets/Opa.png'
import kalonka from '../assets/Kalonka.png'
import atir from '../assets/Atir.png'
import googleLogo from '../assets/google-play.png'
import appleLogo from '../assets/app-store.png'
import qrCode from '../assets/qr.png'




function Home() {
  const [data, setData] = useState([]);


  const discounts = ['-10%', '-20%', '-30%', '-40%', '-50%', '-60%', '-70%', '-80%'];


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.log('xatolik ', err));
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeLeft({
        days: now.getDate(), // bugungi sana (1–31)
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    updateClock(); // birinchi renderda ham ishlasin
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);




  const [visibleCount, setVisibleCount] = useState(5);
  const [startIndex, setStartIndex] = useState(0);


  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5);
  };


  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(prev => prev - 1);
  };


  const handleNext = () => {
    if (startIndex + visibleCount < data.length) setStartIndex(prev => prev + 1);
  };




  const [clickCounts, setClickCounts] = useState({});
  const [redButtons, setRedButtons] = useState({});
  const [selectedCardId, setSelectedCardId] = useState(null);


  const handleButtonClick = (id) => {
    setClickCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setRedButtons(prev => ({ ...prev, [id]: true }));
  };


  const handleLike2Click = (id) => {
    if (selectedCardId === id) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id);
    }
  };


  const handleLike3Click =(id) => {
    if (selectedCardId === id) {
      setSelectedCardId(null)
    }else{
      setSelectedCardId(id);
    }
  };


  const handleBackClick = () => {
    setSelectedCardId(null);
  };


  const visibleCards = selectedCardId
    ? data.filter(item => item.id === selectedCardId)
    : data.slice(startIndex, startIndex + visibleCount);




  const [selectedCategory, setSelectedCategory] = useState(null);
  const [catStartIndex, setCatStartIndex] = useState(0);


  const handleCategoryPrev = () => {
    if (catStartIndex > 0) setCatStartIndex(prev => prev - 1);
  };


  const handleCategoryNext = (filtered) => {
    if (catStartIndex + 4 < filtered.length) setCatStartIndex(prev => prev + 1);
  };


  const filteredData = selectedCategory
    ? data.filter(item => item.category === selectedCategory)
    : [];


  const categoryCards = filteredData.slice(catStartIndex, catStartIndex + 4);



  const [showAllBest, setShowAllBest] = useState(false);

  

  return (
    <>
      {!selectedCardId && (
        <div className="Home">
          <div className="home">
            <p>Woman’s Fashion </p>
            <p>xaaa</p>
            <p>Men’s Fashion</p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
          <div className="home1">
            <Slider {...settings}>
              {[...Array(5)].map((_, i) => (
                <div className="card" key={i}>
                  <img src={Photo} alt="banner" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      {!selectedCardId && (
        <div className="juft">
        <div className="soat">
      <div className="time-box" style={{ textAlign: "center" }}>
        <p>Day</p>
        <span>{String(timeLeft.days).padStart(2, "0")}:</span>
      </div>
      <div className="time-box" style={{ textAlign: "center" }}>
        <p>Hour</p>
        <span>{String(timeLeft.hours).padStart(2, "0")}:</span>
      </div>
      <div className="time-box" style={{ textAlign: "center" }}>
        <p>Minute</p>
        <span>{String(timeLeft.minutes).padStart(2, "0")}:</span>
      </div>
      <div className="time-box" style={{ textAlign: "center" }}>
        <p>Second</p>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  

          <div className="strelka">
            <button onClick={handlePrev}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </button>
            <button onClick={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>
      )}


      
      <div className="container">
  {visibleCards.map((item, index) => (
    <div
      className="cards"
      key={item.id}
      style={
        selectedCardId === item.id
          ? { width: '80%', margin: '0 auto', transform: 'scale(1.1)', transition: 'all 0.3s ease' }
          : {}
      }
    >
      <div className="discount-badge">
        {discounts[index % discounts.length]}
      </div>
      <div className="lake">
        <img src={item.image} alt={item.title} />
        <div className="like">
          <div className="like1">
            {clickCounts[item.id] > 0 && <div>{clickCounts[item.id]}</div>}
            <button onClick={addLike}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            </button>
          </div>
          <div className="like3">
            <button onClick={() => handleLike3Click(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h1>{item.id}</h1>
      <p>{item.title}</p>
      <p>{item.price}$</p>
    </div>
  ))}
  
        {!selectedCardId && visibleCount < data.length && (
          <center>
            <button className="view-btn" onClick={handleLoadMore}>
              View All Products
            </button>
          </center>
        )}
      </div>

      {!selectedCardId && (
        <>
          <div className="containerr2">
            <h1>Browse By Category</h1>
            <div className="butt">
              <button onClick={() => setSelectedCategory(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/></svg>
              </button>
              <button onClick={handleCategoryPrev}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                  <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                </svg>
              </button>
              <button onClick={() => handleCategoryNext(filteredData)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </button>
            </div>
          </div>


          {!selectedCategory && (
            <div className="category">
              <div className="bir">
                <center>
                  <button onClick={() => setSelectedCategory("men's clothing")}>
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?cs=srgb&dl=pexels-solliefoto-298863.jpg&fm=jpg" alt="" />
                    <p>Men's Clothing</p>
                  </button>
                </center>
              </div>
              <div className="bir">
                <center>
                  <button onClick={() => setSelectedCategory("jewelery")}>
                    <img src="https://image.made-in-china.com/202f0j00pNshieEJyduK/Female-Male-Pattern-Rings-Accessories-Retro-Square-Oval-Black-Stone-Men-Women-Ring-Luxury-Party-Wedding-Ring-Jewelry.webp" alt="" />
                    <p>Jewelery</p>
                  </button>
                </center>
              </div>
              <div className="bir">
                <center>
                  <button onClick={() => setSelectedCategory("electronics")}>
                    <img src="https://cgu-odisha.ac.in/wp-content/uploads/2023/05/electronic-engineering-1-1024x682.jpg" alt="" />
                    <p>Electronics</p>
                  </button>
                </center>
              </div>
              <div className="bir">
                <center>
                  <button onClick={() => setSelectedCategory("women's clothing")}>
                    <img src="https://thumbs.dreamstime.com/b/womens-clothes-set-isolated-female-clothing-collage-accessories-130694655.jpg" alt="" />
                    <p>Women's Clothing</p>
                  </button>
                </center>
              </div>
            </div>
          )}

          {selectedCategory && (
            <div className="container">
              {categoryCards.map((item, index) => (
                <div className="cards" key={item.id}>
                  <div className="discount-badge">
                    {discounts[index % discounts.length]}
                  </div>
                  <div className="lake">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h1>{item.id}</h1>
                  <p>{item.title}</p>
                  <p>{item.price}$</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {!selectedCardId && (
        <>
          <div className="component">
            <h1>Best Selling Products</h1>
            <div className="btn1">
              <button onClick={() => setShowAllBest(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                  <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 
                  240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/>
                </svg>
              </button>
            </div>
            <div className="btn">
              <button onClick={() => setShowAllBest(true)}>View All</button>
            </div>
          </div>


          <div className="container2">
            {(showAllBest ? data : data.slice(0, 4)).map((item, index) => (
              <div className="cards" key={item.id}>
                <div className="discount-badge">
                  {discounts[index % discounts.length]}
                </div>
                <div className="lake">
                  <img src={item.image} alt={item.title} />
                  <div className="like">
                    <div className="like1">
                      {clickCounts[item.id] > 0 && <div>{clickCounts[item.id]}</div>}
                      <button onClick={addLike}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                          viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                          <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 
                          95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 
                          81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 
                          705-329T538-172l-58 52Zm0-108q96-86 158-147.
                          5t98-107q36-45.5 
                          50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76
                          q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 
                          70.5t50 81q36 45.5 98 107T480-228Z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="like3">
                      <button onClick={() => handleLike3Click(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                          viewBox="0 -960 960 960" width="24px" fill="#000000">
                          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680
                          q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72
                          q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 
                          76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 
                          192q-146 0-266-81.5T40-500q54-137 
                          174-218.5T480-800q146 0 266 81.5T920-500
                          q-54 137-174 218.5T480-200Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <h1>{item.id}</h1>
                <p>{item.title}</p>
                <p>{item.price}$</p>
              </div>
            ))}
          </div>
        </>
      )}


       {!selectedCardId && (
        <>
           <div className="speaker">
                 <div className="text-speak">
                    <h4>Categories</h4>
                    <h1>Enhance Your Music Experience</h1>
                    <div className="numbers">
                      <div className="first">
                        <h1>23</h1>
                        <p>hours</p>
                      </div>
                      <div className="second">
                        <h1>05</h1>
                        <p>days</p>
                      </div>
                      <div className="third">
                        <h1>59</h1>
                        <p>minutes</p>
                      </div>
                      <div className="fourth">
                        <h1>35</h1>
                        <p>seconds</p>
                      </div>
        
                    </div>
                      <button>Buy Now</button>
                  </div>
                  <div className="img-speak">
                    <img src={frame} alt="" />
                 </div>
                </div>


                <div className="sigmaa">
                <div className="sigma">        
        <h1>Explore Our Products</h1>
        </div>
        <div className="strelka">
            <button onClick={handlePrev}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </button>
            <button onClick={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
          </div>

</>
       )}

{!selectedCardId && (
        <>
  <div className="container">
  {visibleCards.map((item, index) => (
    <div
      className="cards"
      key={item.id}
      style={
        selectedCardId === item.id
          ? { width: '80%', margin: '0 auto', transform: 'scale(1.1)', transition: 'all 0.3s ease' }
          : {}
      }
    >
      <div className="discount-badge">
        {discounts[index % discounts.length]}
      </div>
      <div className="lake">
        <img src={item.image} alt={item.title} />
        <div className="like">
          <div className="like1">
            {clickCounts[item.id] > 0 && <div>{clickCounts[item.id]}</div>}
            <button onClick={addLike}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323">
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            </button>
          </div>
          <div className="like3">
            <button onClick={() => handleLike3Click(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h1>{item.id}</h1>
      <p>{item.title}</p>
      <p>{item.price}$</p>
    </div>
  ))}



        {!selectedCardId && visibleCount < data.length && (
          <center>
            <button className="view-btn" onClick={handleLoadMore}>
              View All Products
            </button>
          </center>
        )}
      </div>
</>
       )}



{!selectedCardId && (
        <>
    <div className="newarrival-container">
      <h2 className="title">New Arrival</h2>

      <div className="newarrival-grid">
        <div className="big-card">

          <img src={place} alt="" />

          <div className="overlay">
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now</button>
          </div>
        </div>

        <div className="side-cards">
          <div className="small-card">
          
          <img src={opa} alt="" />

            <div className="overlay">
              <h3>Women's Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <button>Shop Now</button>
            </div>
          </div>


          <div className="small-cards-row">
            <div className="small-card">
              
              <img src={kalonka} alt="" />

              <div className="overlay">
                <h3>Speakers</h3>
                <p>Amazon wireless speakers</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="small-card">

              <img src={atir} alt="" />

              <div className="overlay">
                <h3>Perfume</h3>
                <p>GUCCI INTENSE-OUD EDP</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-boxes">
        <div className="info">
          <span>🚚</span>
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="info">
          <span>📞</span>
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="info">
          <span>💳</span>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>

</>
)}
    <footer>
              <div className="footer-container">
                <div className="footer-col">
                  <h3>Exclusive</h3>
                  <p>Subscribe</p>
                  <span>Get 10% off your first order</span>
                  <div className="subscribe-box">
                    <input type="email" placeholder="Enter your email" />
                    <button>&#10140;</button>
                  </div>
                </div>
                <div className="footer-col">
                  <h4>Support</h4>
                  <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                  <p><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></p>
                  <p><a href="tel:+8801588889999">+88015-8888-9999</a></p>
                </div>
                <div className="footer-col">
                  <h4>Account</h4>
                  <ul>
                    <li>My Account</li>
                    <li>Login / Register</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Quick Link</h4>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>Download App</h4>
                  <p>Save $3 with App New User Only</p>
                  <div className="app-links">
                    <img src={googleLogo} alt="Google Play" />
                    <img src={appleLogo} alt="App Store" />
                  </div>
                  <div className="qr-section">
                    <img src={qrCode} alt="QR code" />
                  </div>
                  <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-240v-80h62l105-120-105-120h-66l-64 344q-8 45-37 70.5T221-120q-45 0-73-24t-28-64q0-32 17-51.5t43-19.5q25 0 42.5 17t17.5 41q0 5-.5 9t-1.5 9q5-1 8.5-5.5T252-221l62-339H200v-80h129l21-114q7-38 37.5-62t72.5-24q44 0 72 26t28 65q0 30-17 49.5T500-680q-25 0-42.5-17T440-739q0-5 .5-9t1.5-9q-6 2-9 6t-5 12l-17 99h189v80h-32l52 59 52-59h-32v-80h200v80h-62L673-440l105 120h62v80H640v-80h32l-52-60-52 60h32v80H400Z"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m334-80-74-30 58-141q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l238 97-160 60v60l440 280 40 200h-80l-40-80H560v160h-80v-160h-80L334-80Zm66-240h353l-63-40H400q-66 0-113-47t-47-113h80q0 33 23.5 56.5T400-440h165L320-596v-124q0-33-23.5-56.5T240-800q-33 0-56.5 23.5T160-720v160q0 100 70 170t170 70ZM240-680q-17 0-28.5-11.5T200-720q0-17 11.5-28.5T240-760q17 0 28.5 11.5T280-720q0 17-11.5 28.5T240-680Zm160 320Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-440Zm346-240q0-78-54-132t-132-54v-54q100 0 170 70t70 170h-54Zm-106 0q0-33-23.5-56.5T640-760v-54q55 0 93.5 39t40.5 95h-54ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240v80H395l-73 80H160v480h640v-440h80v440q0 33-23.5 56.5T800-120H160Zm320-140q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg>
                    <p>in</p>
                  </div>
                </div>
              </div>
            </footer>
    </>
  );
}

export default Home;
