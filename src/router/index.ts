import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import HistoricoView from "../views/HistoricoView.vue";
import CumeView from "../views/CumeView.vue";
import CadastroView from "../views/CadastroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/cadastros",
      name: "cadastros",
      component: CadastroView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
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
