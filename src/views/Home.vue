<template>
  <div class="page-container">
    <!-- Floating Elements -->
    <div class="background-container">
      <div class="glass-orb orb-1"></div>
      <div class="glass-orb orb-2"></div>
      <div class="glass-orb orb-3"></div>
      <div class="glass-orb orb-4"></div>
      <div class="glass-orb orb-5"></div>
      <div class="glass-orb orb-6"></div>
    </div>

    <!-- NAVBAR -->
    <!-- <nav class="navbar">
      <div class="navbar-brand">
        <h1 class="name">Utumporn Saengmueang</h1>
        <p class="role">UX/UI Designer</p>
      </div>
      <div class="navbar-menu">
        <a href="#home">Home</a>
        <a href="#mywork">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav> -->

    <!-- HERO SECTION - Now with side-by-side layout -->
    <section class="hero" id="home">
      <div class="hero-content">
        <div class="hero-text">
          <h2>Hi, I'm Utumporn Saengmueang</h2>
          <HelloWorld />
        </div>
        <div class="hero-visual">
          <div class="profile-card">
            <img class="profile-picture" src="../assets/Profile.jpg" alt="Utumporn Saengmueang" />
          </div>
        </div>
      </div>
    </section>

    <!-- MAIN CONTENT - Now in a two-column grid layout -->
    <main class="main-content">
      <div class="content-grid">
        <!-- Left Column -->
        <div class="content-column left-column">
          <!-- MY WORK -->
          <section class="content-section" id="mywork">
            <h2 class="section-title">My Work</h2>
            <div class="section-decoration"></div>
            <MyWork />
          </section>

          <!-- EDUCATION -->
          <section class="content-section">
            <h2 class="section-title">Education</h2>
            <div class="section-decoration"></div>
            <Education />
          </section>
        </div>

        <!-- Right Column -->
        <div class="content-column">
          <!-- EXPERIENCES -->
          <section class="content-section">
            <h2 class="section-title">Experience</h2>
            <div class="section-decoration"></div>
            <Experiences />
            <br />
            <h2 class="section-title">Resume</h2>
            <div class="section-decoration"></div>
            <Resume />
          </section>

          <!-- SKILLS SECTION (New addition) -->
          <section class="content-section">
            <h2 class="section-title">Skills & Tools</h2>
            <div class="section-decoration"></div>

            <div class="skills-grid">
              <div class="skill-category">
                <h3>Design</h3>
                <div class="skill-tags">
                  <span class="skill-tag">Figma</span>
                  <span class="skill-tag">Sketchup</span>
                  <span class="skill-tag">Canva</span>
                  <span class="skill-tag">Justinmind</span>
                </div>
              </div>
              <div class="skill-category">
                <h3>Development</h3>
                <div class="skill-tags">
                  <span class="skill-tag">HTML/CSS</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">React</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import MyWork from "@/components/MyWork.vue";
import Experiences from "@/components/Experiences.vue";
import Education from "@/components/Education.vue";
import Resume from "@/components/Resume.vue";

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced parallax effect for glass orbs
let ticking = false;

function updateParallax() {
  const scrolled = window.pageYOffset;
  const orbs = document.querySelectorAll(".glass-orb");

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.05;
    const yPos = scrolled * speed;
    orb.style.transform = `translateY(${yPos}px)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
});

// Intersection Observer for fade-in animations
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

// Observe all content sections
document.querySelectorAll(".content-section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(section);
});

// Enhanced mouse movement effect
let mouseX = 0;
let mouseY = 0;
let isMouseMoving = false;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  isMouseMoving = true;
});

function animateOrbs() {
  if (isMouseMoving) {
    document.querySelectorAll(".glass-orb").forEach((orb, index) => {
      const speed = (index + 1) * 0.01;
      const x = mouseX * 20 * speed;
      const y = mouseY * 20 * speed;

      orb.style.transform += ` translate(${x}px, ${y}px)`;
    });
    isMouseMoving = false;
  }
  requestAnimationFrame(animateOrbs);
}

animateOrbs();

// Create floating particles
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDelay = Math.random() * 20 + "s";
  particle.style.animationDuration = Math.random() * 10 + 15 + "s";
  document.querySelector(".background-container").appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 25000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// Create initial particles
for (let i = 0; i < 10; i++) {
  setTimeout(createParticle, i * 500);
}
</script>

<style scoped>
/* ========== BASE STYLES ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========== ENHANCED 3D GLASSMORPHISM BACKGROUND ========== */
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: #000000;
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.glass-orb {
  position: absolute;
  border-radius: 50%;
  backdrop-filter: blur(120px);
  filter: blur(1px);
  animation: float 12s ease-in-out infinite;
  opacity: 0.9;
  mix-blend-mode: screen;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 179, 71, 0.8) 0%,
    rgba(255, 107, 107, 0.6) 30%,
    rgba(78, 84, 200, 0.4) 70%,
    transparent 100%
  );
  top: -250px;
  right: -250px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle at 60% 40%,
    rgba(168, 85, 247, 0.7) 0%,
    rgba(59, 130, 246, 0.5) 40%,
    rgba(16, 185, 129, 0.3) 80%,
    transparent 100%
  );
  top: 15%;
  left: -200px;
  animation-delay: -3s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(
    circle at 70% 70%,
    rgba(34, 197, 94, 0.6) 0%,
    rgba(59, 130, 246, 0.5) 50%,
    rgba(147, 51, 234, 0.3) 100%
  );
  bottom: 25%;
  right: 5%;
  animation-delay: -6s;
}

.orb-4 {
  width: 450px;
  height: 450px;
  background: radial-gradient(
    circle at 40% 60%,
    rgba(248, 113, 113, 0.7) 0%,
    rgba(251, 146, 60, 0.5) 40%,
    rgba(245, 158, 11, 0.3) 80%,
    transparent 100%
  );
  bottom: -200px;
  left: 15%;
  animation-delay: -9s;
}

.orb-5 {
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(139, 92, 246, 0.6) 0%,
    rgba(219, 39, 119, 0.4) 60%,
    transparent 100%
  );
  top: 50%;
  right: 25%;
  animation-delay: -4s;
}

.orb-6 {
  width: 280px;
  height: 280px;
  background: radial-gradient(
    circle at 30% 70%,
    rgba(6, 182, 212, 0.6) 0%,
    rgba(8, 145, 178, 0.4) 50%,
    transparent 100%
  );
  top: 70%;
  left: 40%;
  animation-delay: -7s;
}
/* Floating particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: particle-float 20s linear infinite;
}

@keyframes particle-float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
  }
  25% {
    transform: translateY(-50px) translateX(30px) scale(1.1) rotate(5deg);
  }
  50% {
    transform: translateY(-80px) translateX(-20px) scale(0.9) rotate(-3deg);
  }
  75% {
    transform: translateY(-40px) translateX(-30px) scale(1.05) rotate(3deg);
  }
}

/* Enhanced glassmorphism with depth */
.glass-element {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* ========== NAVBAR ========== */
/* .navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1rem 2rem;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  min-width: 800px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.navbar-brand .name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.2rem;
}

.navbar-brand .role {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.navbar-menu a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.navbar-menu a:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
} */

/* ========== HERO SECTION ========== */
.hero {
  padding: 12rem 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: center;
}

.hero-text h2 {
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
  white-space: nowrap;
  /* overflow-x: auto; */
}

.hero-text .subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.6;
}

.hero-visual {
  display: flex;
  justify-content: center;
  position: relative;
}

.profile-card {
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  /* transition: transform 0.3s ease; */
}

/* .profile-card:hover {
    transform: translateY(-10px);
  } */

.profile-picture {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 20px;
  /* transition: transform 0.3s ease; */
}

/* ========== MAIN CONTENT ========== */
.main-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  align-items: start;
}

.content-section {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  /* transition: all 0.3s ease; */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* .artpic{
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  } */

/* .content-section:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  } */

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.section-decoration {
  width: 50px;
  height: 3px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 300% 100%;
  animation: gradientMove 5s ease infinite;
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* ========== WORK SECTION ========== */
.work-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.work-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.work-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* ========== SKILLS SECTION ========== */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category h3 {
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* ========== FOOTER ========== */
/* .footer {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: center;
}

.footer-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.footer-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  margin: 12px;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.contact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
}

.contact-text {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
} */

/* ========== RESPONSIVE DESIGN ========== */
@media (max-width: 1024px) {
  /* .navbar {
    min-width: 600px;
  } */

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  /* .navbar {
    min-width: 90%;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  } */

  .hero-text h2 {
    font-size: 2.5rem;
  }

  .hero {
    padding: 10rem 1rem 3rem;
  }

  .profile-picture {
    width: 200px;
    height: 200px;
  }

  .main-content {
    padding: 1rem;
  }

  .content-section {
    padding: 1.5rem;
  }

  /* .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  } */
}
</style>
