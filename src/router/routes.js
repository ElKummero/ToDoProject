
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/PageTaches.vue') },
      { path: 'taches', component: () => import('pages/PageTaches') },
      { path: 'params', component: () => import('pages/PageParams') },
      { path: 'connexion', component: () => import('pages/PageConnexion') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
