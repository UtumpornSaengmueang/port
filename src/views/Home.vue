<template>
    <!-- Floating Elements -->
    <div class="background-container">
    </div>

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
                  <span class="skill-tag">Illustrator</span>
                  <span class="skill-tag">Photoshop</span>
                </div>
              </div>
              <div class="skill-category">
                <h3>Development</h3>
                <div class="skill-tags">
                  <span class="skill-tag">HTML/CSS</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">Bootstrap</span>
                  <span class="skill-tag">Nuxt.js</span>
                </div>
              </div>
            </div>
          </section>

          <section class="content-section">
            <h2 class="section-title">QA / Tester</h2>
            <div class="section-decoration"></div>
            <Tester />
          </section>
        </div>
      </div>
    </main>
</template>

<script setup>
// import HelloWorld from "@/components/HelloWorld.vue";
import MyWork from "@/components/MyWork.vue";
import Experiences from "@/components/Experiences.vue";
import Education from "@/components/Education.vue";
import Resume from "@/components/Resume.vue";
import Tester from "@/components/Tester.vue";

// Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// });

// // Enhanced parallax effect for glass orbs
// let ticking = false;

// function updateParallax() {
//   const scrolled = window.pageYOffset;
//   const orbs = document.querySelectorAll(".glass-orb");

//   orbs.forEach((orb, index) => {
//     const speed = (index + 1) * 0.05;
//     const yPos = scrolled * speed;
//     orb.style.transform = `translateY(${yPos}px)`;
//   });

//   ticking = false;
// }

// window.addEventListener("scroll", () => {
//   if (!ticking) {
//     requestAnimationFrame(updateParallax);
//     ticking = true;
//   }
// });

// // Intersection Observer for fade-in animations
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -50px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.opacity = "1";
//       entry.target.style.transform = "translateY(0)";
//     }
//   });
// }, observerOptions);

// // Observe all content sections
// document.querySelectorAll(".content-section").forEach((section) => {
//   section.style.opacity = "0";
//   section.style.transform = "translateY(30px)";
//   section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
//   observer.observe(section);
// });

// // Enhanced mouse movement effect
// let mouseX = 0;
// let mouseY = 0;
// let isMouseMoving = false;

// document.addEventListener("mousemove", (e) => {
//   mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
//   mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
//   isMouseMoving = true;
// });

// function animateOrbs() {
//   if (isMouseMoving) {
//     document.querySelectorAll(".glass-orb").forEach((orb, index) => {
//       const speed = (index + 1) * 0.01;
//       const x = mouseX * 20 * speed;
//       const y = mouseY * 20 * speed;

//       orb.style.transform += ` translate(${x}px, ${y}px)`;
//     });
//     isMouseMoving = false;
//   }
//   requestAnimationFrame(animateOrbs);
// }

// animateOrbs();

// // Create floating particles
// function createParticle() {
//   const particle = document.createElement("div");
//   particle.className = "particle";
//   particle.style.left = Math.random() * 100 + "vw";
//   particle.style.animationDelay = Math.random() * 20 + "s";
//   particle.style.animationDuration = Math.random() * 10 + 15 + "s";
//   document.querySelector(".background-container").appendChild(particle);

//   // Remove particle after animation
//   setTimeout(() => {
//     particle.remove();
//   }, 25000);
// }

// // Create particles periodically
// setInterval(createParticle, 3000);

// // Create initial particles
// for (let i = 0; i < 10; i++) {
//   setTimeout(createParticle, i * 500);
// }
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

/* ========== HERO SECTION ========== */
/* .hero {
  padding: 10rem 2rem 0rem;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}

.hero-content {
  max-width: 1300px;
  display: grid;
  align-items: center;
} */

/* ========== MAIN CONTENT ========== */
.main-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 10rem 2rem 0rem;
  position: relative;
}

.content-grid {
  display: grid;
  align-items: start;
}

.content-section {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  /* margin-bottom: 1rem; */
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  text-align: start;
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
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-tag {
  background: rgb(165, 250, 246);
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 00;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  color: white;
}

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

}
</style>
