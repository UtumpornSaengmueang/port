<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router';

const isModalOpen = ref(false)
const selectedProject = ref(null)
const modalElement = ref(null)
const triggerElement = ref(null)
const router = useRouter();

const projects = [
  {
    id: 1,
    title: "Super Coconut (Super POS)",
    description: "UX/UI Designer Internship",
    image: "/Profile-Super-POS-scaled.jpg",
    fullDescription: "Super Coconut is a comprehensive Point of Sale system designed for modern businesses. This project involved creating an intuitive user interface that streamlines the checkout process, manages inventory, and provides detailed analytics for business owners.",
    technologies: ["Figma", "Canva", "Google Sheet"],
    features: [
      "Super Food ERP",
      "Mobile Staff",
      "Master Data and inventory",
      "Food Calculator",
      "CRM (Customer Relationship Managment)"
    ],
    challenges: "The challenge was that it felt like my first real work experience, which made me feel uncertain. Additionally, the tasks I was assigned had quite a few limitations, making it rather difficult at the beginning. The way I addressed this was by thoroughly understanding the product or task so that I could carry out the assigned work effectively.",
    outcome: "It looks more attractive and user-friendly, and after trying it out, found the UI to be easier to use."
  },
  {
    id: 2,
    title: "Mea Chan Hospital",
    description: "UX/UI Designer and Developer(fronend)",
    image: "/LandingSMLN.svg",
    fullDescription: "This is a system for managing stretcher staff within a hospital. It is designed to organize their workflow more systematically by using Line Notification for job assignment and completion updates, helping to prevent redundant tasks and improve overall efficiency.",
    technologies: ["Vue.js", "CSS", "Tailwind", "PHP", "Java Script", "Figma", "GitHub"],
    features: [
      "Line Notification",
      "Stretcher Managment",
      "job assignment and completion updates",
      "Stretcher Ranking",
      "Time Stamp"
    ],
    challenges: "The challenge is how to make notifications via LINE possible without incurring costs, while ensuring that all employees can use it without receiving duplicate tasks. The solution is to study other projects that use LINE as a communication tool and adapt those methods to our own project.",
    outcome: "Notifications via LINE are effective in practice and help reduce redundant tasks for employees."
  },
  {
    id: 3,
    title: "ECOFLOW Innovation",
    description: "UX/UI Designer and Documemtation",
    image: "/LogoECO.svg",
    fullDescription: "This project involves developing an application for managing smart devices within a home. It allows users to control devices remotely, calculates electricity usage, and displays the data by day, month, and year. The app also features an AI mode that can autonomously manage smart devices based on the analysis of the user's behavior.",
    technologies: ["Figma", "Google Document", "Flutter", "Node.js", "Express.js", "MongoDB", "GitLab"],
    features: [
      "Energy Usage Prediction",
      "Intelligent Energy Cost Estimator ",
      "AI-Optimized Temperature Management",
      "AI-Powered Energy-Saving Recommendations",
      "Automated Device Control on Room Occupancy",
      "Dynamic Solar Panel Optimization"
    ],
    challenges: "Challenge is Balancing the broad scope of  multiple smart devices. Solution is Built a flexible API layer to standardize device communication, ensuring compatibility",
    outcome: "Our product will change how people interact with their home energy systems, promoting more energy-conscious behaviors. By making AI-powered energy management mainstream, we aim to reduce household energy consumption and contribute to the fight against climate change."
  },
  {
    id: 4,
    title: "NexGen Home",
    description: "UX/UI Designer",
    image: "/NexgenHome.svg",
    fullDescription: "The concept of our company is a smart technology to assist in your accommodation for more convenience and energy efficiency. The “NexGen Home” specializes in providing professional installation services for smart home devices and systems. And our team also has an after-sale service that helps for updating software, etc..",
    technologies: ["Figma", "Google Document", "Vue.js", "GitHub"],
    features: [
      "Selling smart devices at affordable prices",
      "Bundle promotions for discounts",
      "Multiple payment options",
      "Experienced technicians for on-site installation",
      "A wide selection of products available"
    ],
    challenges: "The challenge is competing in the market with major players like Samsung and Xiaomi. The solution is to offer promotions and provide on-site installation services.",
    outcome: "Customers have started showing interest in the promotions and gained trust through trial usage, resulting in a 56% increase in customer numbers."
  }
]

const openModal = (project, event) => {
  selectedProject.value = project
  triggerElement.value = event.target.closest('.feature')
  isModalOpen.value = true
  
  // Add modal opening animation from the clicked card
  nextTick(() => {
    if (triggerElement.value && modalElement.value) {
      const rect = triggerElement.value.getBoundingClientRect()
      const modal = modalElement.value
      
      // Set initial position based on the clicked card
      modal.style.setProperty('--start-x', `${rect.left + rect.width/2}px`)
      modal.style.setProperty('--start-y', `${rect.top + rect.height/2}px`)
    }
  })
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  triggerElement.value = null
}

// Close modal when clicking outside
const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
}

const openProject = (project) => {
  // router.push('/task')
  console.log(project)
  if (project === 1) {
    router.push('/coco')
  }
  else if (project === 2) {
    router.push('/maejan')
  }
  else if (project === 3) {
    router.push('/eco')
  }
  else if (project === 4) {
    router.push('/nexgen')
  }
  else {
    console.log('false');
  }
} 

</script>

<template>
  <section class="features">
    <div 
      v-for="project in projects" 
      :key="project.id"
      class="feature glass-card"
    >
      <img class="PictureCover" :src="project.image" :alt="project.title" />
      <div class="workinfo">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <button 
          class="cta-button" 
          @click="openProject(project.id)"
        > 
          Read more 
        </button>
      </div>
    </div>
  </section>

  <!-- Modal Overlay -->
  <Teleport to="body">
    <div 
      v-if="isModalOpen" 
      class="modal-overlay"
      @click="handleBackdropClick"
    >
      <div 
        ref="modalElement"
        class="modal-content"
        :class="{ 'modal-enter': isModalOpen }"
      >
        <div class="modal-header">
          <h2>{{ selectedProject?.title }}</h2>
          <button class="close-button" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div class="modal-body">
          <div class="modal-image">
            <img :src="selectedProject?.image" :alt="selectedProject?.title" />
          </div>

          <div class="modal-details">
            <div class="detail-section">
              <h3>Project Overview</h3>
              <p>{{ selectedProject?.fullDescription }}</p>
              <!-- <img class="imagemore" src="/public/LandingPage.svg"> -->
              <img :src="selectedProject?.images" :alt="selectedProject?.title"
                style=" width: 220px; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem; margin-right: 16px; " />
              <img :src="selectedProject?.images2" :alt="selectedProject?.title"
                style=" width: 220px; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem; margin-right: 16px; "/>
              <!-- <img :src="selectedProject?.images8" :alt="selectedProject?.title"
                style=" width: 220px; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem; margin-right: 16px; "/>
              <img :src="selectedProject?.images9" :alt="selectedProject?.title"
                style=" width: 220px; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem; margin-right: 16px; "/> -->
            </div>
            
            <div class="detail-section">
              <h3>Technologies Used</h3>
              <div class="tech-tags">
                <span 
                  v-for="tech in selectedProject?.technologies" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="detail-section">
              <h3>Key Features</h3>
              <ul class="features-list">
                <li v-for="feature in selectedProject?.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>

              <img :src="selectedProject?.images3" :alt="selectedProject?.title"
                style=" width: 220px; height: 100%; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem; margin-right: 16px; "/>
              <img :src="selectedProject?.images4" :alt="selectedProject?.title"
                style=" width: 220px; height: 100%; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem; margin-right: 16px; "/>
              <!-- <img :src="selectedProject?.images6" :alt="selectedProject?.title"
                style=" width: 220px; height: 100%; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem; margin-right: 16px; "/>
              <img :src="selectedProject?.images7" :alt="selectedProject?.title"
                style=" width: 220px; height: 100%; border-radius: 16px; object-fit: cover; margin-top: 2rem; margin-bottom: 2rem;"/> -->

            </div>
            <div class="detail-section">
              <h3>Challenges & Solutions</h3>
              <p>{{ selectedProject?.challenges }}</p>
            </div>
            
            <div class="detail-section">
              <h3>Results & Impact</h3>
              <p>{{ selectedProject?.outcome }}</p>
            </div>
          </div>
        </div>
        
        <!-- <div class="modal-footer">
          <button class="demo-button">View Live Demo</button>
          <button class="github-button">View Source Code</button>
        </div> -->
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* .mywork{
  text-align: center;
  font-weight: bolder;
} */

/* ========== FEATURES ========== */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  gap: 1.5rem;
  padding: 1rem;
  max-width: 100%;
  color: white;
  /* margin: 0 auto; */
}

/* ========== GLASS EFFECT ========== */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(74, 72, 72, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  padding: 0rem;
  transition: transform 0.5s ease;
  cursor: pointer;
}

.glass-card:hover {
  transform: translateY(-5px);
}

.cta-button {
  background: rgba(255, 255, 255, 0.1);
  /* animation: gradientMove 5s ease infinite; */
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 20px;
  color: white;
  margin-top: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  /* transition: all 0.3s ease; */
  font-weight: 400;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.cta-button:hover {
  background: white;
  color: black;
}

.PictureCover{
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  height: 200px;
  display: block;
  object-fit: cover;
}

.workinfo{
  padding: 1rem;
  justify-items: center;
  /* font-family: monospace; */
}

/* .section-divider {
  border-bottom: 1px solid #B5B5B5;
  margin: 0.5rem 2rem;
} */

/* ========== MODAL STYLES ========== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 2rem;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background: white;
  border-radius: 24px;
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  transform-origin: var(--start-x, center) var(--start-y, center);
  animation: modalSlideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 700;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #7f8c8d;
}

.close-button:hover {
  background: #f8f9fa;
  color: #2c3e50;
}

.modal-body {
  padding: 2rem;
}

.modal-image {
  margin-bottom: 2rem;
}

.modal-image img {
  width: 80%;
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 16px;
}


/* .imagemore{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  margin-top: 2rem;
  margin-bottom: 2rem;
} */

.detail-section h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.detail-section h3::before {
  content: '';
  width: 4px;
  height: 20px;
  background:#555 ;
  background-size: 300% 100%;
  border-radius: 2px;
  margin-right: 0.75rem;
}

.detail-section p {
  color: #555;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #555;
  background-size: 300% 100%;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.5rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ecdc4;
  font-weight: bold;
}

.modal-footer {
  padding: 1rem 2rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  border-top: 1px solid #eee;
}


/* ========== ANIMATIONS ========== */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: scale(0.3) translateY(100px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ========== RESPONSIVE DESIGN ========== */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }
  
  .modal-content {
    max-height: 95vh;
  }
  
  .modal-header, .modal-body, .modal-footer {
    padding: 1.5rem 1rem;
  }
  
  .modal-header h2 {
    font-size: 1.5rem;
  }
  
  .modal-footer {
    flex-direction: column;
  }
  
  .features {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .modal-image img {
    height: 200px;
  }
  
  .tech-tags {
    justify-content: center;
  }
}
</style>