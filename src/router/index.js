// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import MyWork from "@/components/MyWork.vue";
import CoCo from "@/CoCo.vue";
import MaeHos from "@/MaeHos.vue";
import EcoFlow from "@/EcoFlow.vue";
import NexGen from "@/NexGen.vue";


const routes = [
  {
    path: "/maejan",
    name: "maejan",
    component: MaeHos,
  },
  {
    path: "/coco",
    name: "coco",
    component: CoCo,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/mywork",
    name: "mywork",
    component: MyWork,
  },
  {
    path: "/eco",
    name: "eco",
    component: EcoFlow,
  },
  {
    path: "/nexgen",
    name: "nexgen",
    component: NexGen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; // <-- กลับไปด้านบนสุดเสมอ
  },
});

export default router;
