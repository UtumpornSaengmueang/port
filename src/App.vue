<template>
  <router-view />
  <!-- NAVBAR -->
  <nav class="navbar">
    <div class="navbar-brand">
      <h1 class="name">Utumporn Saengmueang</h1>
      <p class="role">UX/UI Designer</p>
    </div>
    <div class="navbar-menu">
      <router-link to="/" href="#home">Home</router-link>
      <router-link to="/" href="#mywork">Work</router-link>
      <!-- <a href="#mywork">Work</a> -->
      <a href="#contact" onclick="scrollToContact(event)">Contact</a>
    </div>
  </nav>

  <button class="back-to-top" @click="scrollToTop" v-show="showBackToTop">↑</button>

  <footer class="footer" id="contact">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">Let's Connect</h3>
        <p class="footer-subtitle">Ready to bring your next project to life?</p>
      </div>

      <div class="footer-contacts">
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <div class="contact-info">
            <span class="contact-label">Phone</span>
            <span class="contact-text">0623671059</span>
          </div>
        </div>

        <div class="contact-item">
          <span class="contact-icon">💬</span>
          <div class="contact-info">
            <span class="contact-label">Line</span>
            <span class="contact-text">pon1907</span>
          </div>
        </div>

        <div class="contact-item">
          <span class="contact-icon">✉️</span>
          <div class="contact-info">
            <span class="contact-label">Email</span>
            <span class="contact-text">sae.utumporn@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
function scrollToContact(event) {
  event.preventDefault();
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
export default {
  data() {
    return {
      showBackToTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
/* ========== NAVBAR ========== */
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: white; /* สีขาวโปร่ง */
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  min-width: 800px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.navbar-brand .name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #111111;
  margin-bottom: 0.2rem;
}

.navbar-brand .role {
  font-size: 0.9rem;
  color: #111111;
  font-weight: 500;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.navbar-menu a {
  text-decoration: none;
  color: #111111;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.navbar-menu a:hover {
  color: black;
  background: rgba(255, 255, 255, 0.1);
}

/* ========== FOOTER ========== */
.footer {
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
}

/* ========== RESPONSIVE DESIGN ========== */
@media (max-width: 1024px) {
  .navbar {
    min-width: 600px;
  }
}

@media (max-width: 768px) {
  .navbar {
    min-width: 90%;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
}

.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: linear-gradient(45deg, #D3D3D3, #f9f9f9);
  color: #111111;

  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-4px);
  background: linear-gradient(135deg, #fffacd 0%, #f9f9f9 100%);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}
</style>
