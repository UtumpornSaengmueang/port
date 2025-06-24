<template>
  <section class="hero">
    <div class="hero-content">
      <h1>NexGen Home</h1>
      <h2 style="font-weight: 100">
        The ultimate platform that brings together all kinds of smart devices in one place.
      </h2>
      <span>UX/UI Designer</span>
    </div>
    <!-- Desktop Mockup -->
    <div class="desktop-mockup">
      <div class="desktop">
        <div class="desktop-screen">
          <img
            src="../public/NexgenHome.svg"
            style="width: 600px; height: 100%; margin-bottom: -10px"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features">
    <h1 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #333">
      Key Features
    </h1>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3 style="margin-bottom: 0.5rem">Latest Smart Devices</h3>
        <p>
          Explore a wide range of smartphones, smartwatches, and home tech gadgets at your
          fingertips.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h3 style="margin-bottom: 0.5rem">Expert Product Recommendations</h3>
        <p>Get personalized advice and product suggestions based on your needs and preferences.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">💳</div>
        <h3 style="margin-bottom: 0.5rem">Secure Payment Options</h3>
        <p>Enjoy seamless and secure checkout with multiple trusted payment methods.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🚚</div>
        <h3 style="margin-bottom: 0.5rem">Fast & Reliable Delivery</h3>
        <p>Receive your smart devices quickly with nationwide shipping and order tracking.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔧</div>
        <h3 style="margin-bottom: 0.5rem">Warranty & Support</h3>
        <p>Shop with confidence with guaranteed warranty and responsive after-sales service.</p>
      </div>
    </div>
  </section>

  <!-- Productivity Section -->
  <section class="projectoverview">
    <div class="projectoverview-content">
      <div>
        <h2>Project Overview</h2>
        <p>
          The concept of our company is a smart technology to assist in your accommodation for more
          convenience and energy efficiency. The “NexGen Home” specializes in providing professional
          installation services for smart home devices and systems. And our team also has an
          after-sale service that helps for updating software, etc..
        </p>
      </div>
      <div class="productivity-visual">
        <div class="desktop-mockup">
          <div class="desktop">
            <div class="desktop-screen">
              <img
                src="../public/LandingNGH.svg"
                style="width: 600px; height: 100%; margin-bottom: -10px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services">
    <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #333">
      Technologies Used
    </h2>
    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">🎨</div>
        <h4>Figma</h4>
      </div>
      <div class="service-card">
        <div class="service-icon">📝</div>
        <h4>Google Document</h4>
      </div>
      <div class="service-card">
        <div class="service-icon">🖌️</div>
        <h4>Vue.js</h4>
      </div>
      <div class="service-card">
        <div class="service-icon">🐙</div>
        <h4>GitHub</h4>
      </div>
    </div>
  </section>

  <section class="picture-example">
    <div class="overview">
      <h2>Partial design</h2>
    </div>
    <div class="picture">
      <img src="../public/Product.svg" style="width: 100%; height: 100%" />
      <img src="../public/Product2NGH.svg" style="width: 100%; height: 100%" />
      <img src="../public/PromotionNGH.svg" style="width: 100%; height: 100%" />
      <img src="../public/Basket.svg" style="width: 100%; height: 100%" />
    </div>
  </section>

  <section class="how-it-works">
    <div class="productivity-content">
      <div>
        <h2>Challenges & Solutions</h2>
        <p>
          The challenge is competing in the market with major players like Samsung and Xiaomi. The
          solution is to offer promotions and provide on-site installation services.
        </p>
      </div>
      <div>
        <h2>Results & Impact</h2>
        <p>
          Customers have started showing interest in the promotions and gained trust through trial
          usage, resulting in a 56% increase in customer numbers.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add parallax effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  const speed = scrolled * 0.5;
  parallax.style.transform = `translateY(${speed}px)`;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".feature-card, .service-card, .step").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
    background: linear-gradient(135deg, #f6eeaa 0%, #f9f9f9 100%);
  } */

/* Hero Section */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0ffff 0%, #f9f9f9 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>')
    repeat;
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
  color: #111111;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

/* Desktop Mockup */
.desktop-mockup {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.desktop {
  width: fit-content;
  height: fit-content;
  background: #1f1f1f;
  border: 16px solid black;
  border-radius: 10px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  animation: desktopFloat 6s ease-in-out infinite;
}

@keyframes desktopFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.desktop-screen {
  width: 100%;
  height: 100%;
  background: #ffffff;
  overflow: hidden;
}

/* Features Section */
.features {
  background: white;
  padding: 100px 5%;
  position: relative;
}

.features::before {
  content: "";
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(45deg, #66ccff, #f9f9f9);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #99ffff, #f9f9f9);
  border-radius: 20px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #111111;
}

.projectoverview {
  background: linear-gradient(45deg, #66ccff, #f9f9f9);
  padding: 3rem 5%;
  color: #111111;
  position: relative;
}

.projectoverview-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.projectoverview h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.projectoverview p {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
}

/* Productivity Section */
.productivity {
  background: linear-gradient(45deg, #99ffff, #f9f9f9);
  padding: 100px 5%;
  color: white;
  position: relative;
}

.productivity-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.productivity h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.productivity p {
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;
}

.productivity-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Service Cards */
.services {
  background: white;
  padding: 100px 5%;
}

.services-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem 1rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #99ffff, #f9f9f9);
  border-radius: 15px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111111;
  font-size: 1.5rem;
}

/* How It Works */
.how-it-works {
  /* background: #f8f9fa; */
  padding: 100px 5%;
  text-align: center;
}

.how-it-works h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.picture-example {
  background: linear-gradient(135deg, #66ccff 0%, #f9f9f9 100%);
  padding: 2rem 2rem;
  justify-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.picture-example h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.overview {
  display: flex;
  text-align: center;
}

.picture {
  justify-content: center;
  gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.picture-example:hover {
  transform: translateY(-5px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .productivity-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .steps {
    grid-template-columns: 1fr;
  }

  /* .picture {
    flex-direction: column;
    text-align: center;
  } */
}
</style>
