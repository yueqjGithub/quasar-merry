
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/module1', name: 'module1', component: () => import('pages/module1/index.vue') },
      { path: '/module2', name: 'module2', component: () => import('pages/module2/index.vue') },
      { path: '/module3', name: 'module3', component: () => import('pages/module3/index.vue') },
      { path: '/module4', name: 'module4', component: () => import('pages/module4/index.vue') },
      { path: '/module5', name: 'module5', component: () => import('pages/module5/index.vue') },
      { path: '/module6', name: 'module6', component: () => import('pages/module6/index.vue') },
      { path: '/module7', name: 'module7', component: () => import('pages/module7/index.vue') },
      { path: '/module8', name: 'module8', component: () => import('pages/module8/index.vue') }
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
