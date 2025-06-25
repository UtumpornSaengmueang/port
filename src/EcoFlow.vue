<template>
  <section class="hero">
    <div class="hero-content" style="margin-top: 9rem;">
      <h1>ECOFLOW Innovation</h1>
      <h2 style="font-weight: 100">Create an organized and energy-saving smart home with us.</h2>
      <span>UX/UI Designer and Documemtation</span>
    </div>
    <div class="phone-mockup" style="margin-top: 3rem;">
      <div class="phone">
        <div class="phone-screen">
          <div class="phone-content">
            <img src="/Start2.svg" style="width: 100%; height: 100%" />
          </div>
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
        <div class="feature-icon">🔋</div>
        <h3 style="margin-bottom: 0.5rem">Energy Usage Prediction</h3>
        <p>Forecast energy consumption using AI models to help optimize usage and reduce costs.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">💡</div>
        <h3 style="margin-bottom: 0.5rem">Intelligent Energy Cost Estimator</h3>
        <p>Automatically estimate monthly energy expenses based on usage patterns and tariffs.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🌡️</div>
        <h3 style="margin-bottom: 0.5rem">AI-Optimized Temperature Management</h3>
        <p>Maintain ideal room temperatures efficiently with intelligent sensor-driven controls.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3 style="margin-bottom: 0.5rem">AI-Powered Energy-Saving Recommendations</h3>
        <p>Get personalized suggestions on how to reduce energy consumption in real-time.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🏠</div>
        <h3 style="margin-bottom: 0.5rem">Automated Device Control</h3>
        <p>Smart home system that turns devices on/off based on room occupancy detection.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">☀️</div>
        <h3 style="margin-bottom: 0.5rem">Dynamic Solar Panel Optimization</h3>
        <p>Maximize energy generation through AI-based tracking of sunlight and efficiency.</p>
      </div>
    </div>
  </section>

  <!-- Productivity Section -->
  <section class="projectoverview">
    <div class="projectoverview-content">
      <div>
        <h2>Project Overview</h2>
        <p>
          This project involves developing an application for managing smart devices within a home.
          It allows users to control devices remotely, calculates electricity usage, and displays
          the data by day, month, and year. The app also features an AI mode that can autonomously
          manage smart devices based on the analysis of the user's behavior.
        </p>
      </div>
      <div class="phone-mockup">
        <div class="phone" style="width: 252px; height: 500px">
          <div class="phone-screen">
            <div class="phone-content">
              <img src="/LandingECO.svg" style="width: 100%; height: 100%" />
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
        <div class="service-icon">📱</div>
        <h4>Flutter</h4>
      </div>
      <div class="service-card">
        <div class="service-icon">🟢</div>
        <h4>Node.js</h4>
      </div>
      <div class="service-card">
        <div class="service-icon">🍃</div>
        <h4>MongoDB</h4>
      </div>
      <div class="service-card">
        <div class="service-icon">🚀</div>
        <h4>Express.js</h4>
      </div>
    </div>
  </section>

  <section class="picture-example">
    <div>
      <h2>Partial design</h2>
    </div>
    <div class="picture">
      <img src="/Home control.svg" style="width: 250px; height: 100%" />
      <img src="/Home control 2.svg" style="width: 250px; height: 100%" />
      <img src="/Manage Device.svg" style="width: 250px; height: 100%" />
      <img src="/Nofication.svg" style="width: 250px; height: 100%" />
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
          Challenge is Balancing the broad scope of multiple smart devices. Solution is Built a
          flexible API layer to standardize device communication, ensuring compatibility.
        </p>
      </div>
      <div>
        <h2>Results & Impact</h2>
        <p>
          Our product will change how people interact with their home energy systems, promoting more
          energy-conscious behaviors. By making AI-powered energy management mainstream, we aim to
          reduce household energy consumption and contribute to the fight against climate change.
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

/* Hero Section */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff 0%, #ffbbff 100%);
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

/* Phone Mockup */
.phone-mockup {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.phone {
  width: 280px;
  height: 560px;
  background: black;
  border-radius: 44px;
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
  background: #4f4f4f;
  border-radius: 32px;
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
  background: linear-gradient(45deg, #ff7eb9, #caa8f5);
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
  background: linear-gradient(135deg, #caa8f5, #f9f9f9);
  border-radius: 20px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #111111;
}

.projectoverview {
  background: linear-gradient(45deg, #caa8f5, #6c63ff);
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
  background: linear-gradient(45deg, #ff7eb9, #6c63ff);
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
  background: linear-gradient(135deg, #caa8f5, #f9f9f9);
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
  background: linear-gradient(135deg, #ff7eb9 0%, #6c63ff 100%);
  padding: 4rem 1rem;
  justify-items: center;
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
  text-align: center;
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

  .picture {
    flex-direction: column;
    text-align: center;
  }
}
</style>
