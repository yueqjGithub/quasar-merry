
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/module1', name: 'module1', component: () => import('pages/module1/index.vue') },
      { path: '/module2', name: 'module2', component: () => import('pages/module2/index.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
