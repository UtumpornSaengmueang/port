<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Super Coconut</h1>
      <h2 style="font-weight: 100;">Revolution POS into the point of success.</h2>
      <span>UX/UI Internship Position</span>
    </div>
    <div class="phone-mockup">
      <div class="phone">
        <div class="phone-screen">
          <div class="phone-content">
            <img src="../public/ระบุเบอร์โทร.svg" style="width: 100%; height: 100%; margin-top: 48%;">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features">
    <h1 style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; color: #333">Key Features</h1>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">💳</div>
        <h3 style="margin-bottom: 0.5rem;">POS Sales Entry System</h3>
        <p>Make sales and payments smooth, fast, accurate and most efficient.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3 style="margin-bottom: 0.5rem;">Dashboard</h3>
        <p>An intelligent dashboard that combines all important information in one place,</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">👥</div>
        <h3 style="margin-bottom: 0.5rem;">Employee Management System HRM</h3>
        <p>A complete employee management system that helps reduce the burden of human resource management to be easy.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📦</div>
        <h3 style="margin-bottom: 0.5rem;">Inventory</h3>
        <p>A helper to solve the problem of complicated stock management to be easy.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3 style="margin-bottom: 0.5rem;">Mobile Staff</h3>
        <p>Mobile Staff System that allows restaurant staff to manage the restaurant via their own mobile devices.</p>
      </div>
    <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3 style="margin-bottom: 0.5rem;">QR Ordering</h3>
        <p>Customers can easily order food by themselves by scanning the “QR Code” with their smartphones.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🤝</div>
        <h3 style="margin-bottom: 0.5rem;">CRM (Customer Relationship Managment)</h3>
        <p>Help record and store accurate customer data, increase opportunities for your restaurant to grow sustainably.</p>
      </div>
    </div>
  </section>

  <!-- Productivity Section -->
  <section class="projectoverview">
    <div class="projectoverview-content">
      <div>
        <h2>Project Overview</h2>
        <p>
          Super Coconut is a comprehensive Point of Sale (POS) system designed for modern businesses. 
          This project involved creating an intuitive user interface that streamlines the checkout process, 
          manages inventory, and provides detailed analytics for business owners.
        </p>
      </div>
      <div class="productivity-visual">
          <div class="progress-text">
            <img src="../public/landingCOCO.png" style="width: 300px; height: 100%; margin-left: 2rem;">
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
        <div class="service-icon">💻</div>
        <h4>Canva</h4>
      </div>
      <div class="service-card">
        <div class="service-icon">📄</div>
        <h4>Google Sheet</h4>
      </div>
    </div>
  </section>

  <section class="picture-example">
    <div>
      <h2>Partial design</h2>
    </div>
    <div class="picture">
      <img src="../public/TierMemberPOS.svg" style="width: 300px; height: 100%;">
      <img src="../public/TierMemberPOS1.svg" style="width: 300px; height: 100%;">
      <img src="../public/Master Menu - V.svg" style="width: 300px; height: 100%;">
      <img src="../public/Master Menu - VI.svg" style="width: 300px; height: 100%;">
    </div>
  </section>
  <!-- How It Works Section -->
  <!-- <section class="how-it-works">
    <h2>Let's See How It Work</h2>
    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <h3>Setup Your Account</h3>
        <p>Quick and easy registration process to get you started in minutes</p>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <h3>Configure Your Business</h3>
        <p>Customize the system to match your specific business needs and workflow</p>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <h3>Start Managing</h3>
        <p>Begin processing orders, managing inventory, and growing your business</p>
      </div>
    </div>
  </section> -->
  
  <section class="how-it-works">
    <div class="productivity-content">
      <div>
        <h2>Challenges & Solutions</h2>
        <p>
          The challenge was that it felt like my first real work experience, 
          which made me feel uncertain. Additionally, the tasks I was assigned had quite a few limitations, 
          making it rather difficult at the beginning. The way I addressed this was by thoroughly understanding the product or task so that I could carry out the assigned work effectively.
        </p>
      </div>
      <div>
        <h2>Results & Impact</h2>
        <p>
          It looks more attractive and user-friendly, and after trying it out, found the UI to be easier to use.
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

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f6eeaa 0%, #f9f9f9 100%);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff173 0%, #f9f9f9 100%);
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
  animation: float 20s ease-in-out infinite;
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
  color: #111111
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

/* .btn {
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  color: white;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
} */

/* Phone Mockup */
.phone-mockup {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.phone {
  width: 300px;
  height: 600px;
  background: black;
  border-radius: 40px;
  padding: 20px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  animation: phoneFloat 6s ease-in-out infinite;
}

@keyframes phoneFloat {
  0%,
  100% {
    transform: translateY(0px) rotateY(-5deg);
  }
  50% {
    transform: translateY(-15px) rotateY(5deg);
  }
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #4F4F4F;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
}

.phone-content {
  /* padding: 40px 20px; */
  text-align: center;
  color: white;
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
  background: linear-gradient(45deg, #FFD700, #f9f9f9);
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
  background: linear-gradient(45deg, #FFD700, #f9f9f9);
  border-radius: 20px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #111111;
}

.projectoverview{
  background: linear-gradient(45deg, #FFD700, #f9f9f9);
  padding: 3rem 5%;
  color: #111111;
  position: relative;
}

.projectoverview-content{
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
  background: linear-gradient(45deg, #FFD700, #f9f9f9);
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

/* .circular-progress {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #ff6b6b 0deg,
    #feca57 120deg,
    #48dbfb 240deg,
    #ff6b6b 360deg
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: rotate 10s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.circular-progress::before {
  content: "";
  width: 200px;
  height: 200px;
  background: #1a1a2e;
  border-radius: 50%;
  position: absolute;
}

.progress-text {
  z-index: 1;
  text-align: center;
  color: white;
} */

/* Service Cards */
.services {
  background: white;
  padding: 100px 5%;
}

.services-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  background: linear-gradient(45deg, #FFD700, #f9f9f9);
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

/* .steps {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.step {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
} */

.picture-example{
  background: linear-gradient(135deg, #FFCC33 0%, #f9f9f9 100%);
  padding: 4rem 1rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.picture-example h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.picture {
  display: flex;
  justify-content: center;
  gap: 2rem;
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

  .phone {
    width: 250px;
    height: 500px;
    margin-top: 2rem;
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

  .picture{
    flex-direction: column;
  }
}
</style>
