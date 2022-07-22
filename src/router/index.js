import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Projects from "../views/Projects.vue";
import Testimonials from "../views/Testimonials.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/About",
    name: "about",
    component: About,
  },
  {
    path: "/Resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/Projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/Testimonials",
    name: "testimonials",
    component: Testimonials,
  },
  {
    path: "/Contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
