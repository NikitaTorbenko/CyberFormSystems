import { Home } from "@/pages/Home";

export const routes = [
  { path: "/", component: Home, name: "Home" },
  {
    path: "/post/:id",
    name: "PostDetail",
    component: () => import("@/pages/PostDetail/ui/PostDetail.vue"),
  },
];
