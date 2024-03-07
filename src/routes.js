import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/notFound";
import StartQuestionPage from "./pages/questionStart";
import QuestionPage from "./pages/question";
import JsonPage from "./pages/json.vue";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/json",
      name: "json",
      components: {
        json: JsonPage
      },
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/question",
      name: "question-start",
      component: StartQuestionPage,
    },
    {
      path: "/question/:id",
      name: "question",
      component: QuestionPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default routers;
