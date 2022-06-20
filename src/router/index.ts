import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CadastroView from "../views/CadastroView.vue";
import HistoricoView from "../views/HistoricoView.vue";
import CumeView from "../views/CumeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cadastros",
      name: "times",
      component: CadastroView,
    },
    {
      path: "/historico",
      name: "historico",
      component: HistoricoView,
    },
    {
      path: "/cume",
      name: "cume",
      component: CumeView,
    },
  ],
});

export default router;
