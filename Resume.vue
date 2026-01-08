<script setup>
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = 'UtumpornSaengmueang_Resume.pdf' // ไฟล์ใน public folder (ไม่ต้องใส่ /public/)
  link.download = 'UtumpornSaengmueang_Resume.pdf' // ชื่อไฟล์ที่จะดาวน์โหลด
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
    <!-- CTA -->
    <section class="cta glass-card">
      <h1>Download Here</h1>
      <button @click="downloadResume"> Download! </button>
    </section>
</template>

<style scoped>
/* ========== GLASS EFFECT ========== */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  /* border: 1px solid #4ecdc4; */
  border-radius: 20px;
}

.cta {
  margin: 1rem auto 1rem;
  max-width: 100%;
  text-align: center;
  padding: 1rem;
}

button {
  background-color: white;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 20px;
  color: black;
  margin-top: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  /* transition: all 0.3s ease; */
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

button:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  color: white;
}

h1{
  color: white;
  font-size: 1.5rem;
}
</style>