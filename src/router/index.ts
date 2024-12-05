import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test.vue"),
  },
  {
    path: "/el-dropdown",
    name: "ElDropdown",
    component: () => import("@/views/ElDropdown.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.MODE === "development" ? "/" : "/vue-memory-leak"
  ),
  routes,
});

export default router;
