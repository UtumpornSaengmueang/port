<script setup>
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/Resume_Utumporn.pdf' // ไฟล์ใน public folder (ไม่ต้องใส่ /public/)
  link.download = 'Resume_Utumporn.pdf' // ชื่อไฟล์ที่จะดาวน์โหลด
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
    <!-- CTA -->
    <section class="cta glass-card">
      <h2>Download Here</h2>
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
  background-color: rgba(255, 255, 255, 0.1);;
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

button:hover {
  background: white;
  color: black;
}

h2{
  color: white;
}
</style>