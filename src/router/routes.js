const routes = [
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "camera",
        component: () => import("components/utils/CameraForm.vue"),
      },
      {
        path: "product",
        component: () => import("pages/ProductPage.vue"),
      },
      {
        path: "cart",
        component: () => import("pages/CartPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("components/auth/LoginForm.vue"),
  },
  {
    path: "/camera",
    component: () => import("components/utils/CameraForm.vue"),
  },
  {
    path: "/register",
    component: () => import("components/auth/RegisterForm.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
