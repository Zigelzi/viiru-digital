// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@/assets/styles/main.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    // Facebook SoMe sharing
    key: 'og:description',
    name: 'og:description',
    content: 'Miika Savelan digitaalisten palveluiden ja verkkosivujen koti',

    key: 'og:image',
    name: 'og:image',
    content: `${config.siteName}/viiru_favicon_192x192.png`,

    // Twitter SoMe sharing

    key: 'twitter:description',
    name: 'twitter:description',
    content: 'Miika Savelan digitaalisten palveluiden ja verkkosivujen koti',

    key: 'twitter:image',
    name: 'twitter:image',
    content: `${config.siteName}/viiru_favicon_192x192.png`,
  })

  router.beforeEach((to, _from, next) => {
    // Build URL for every site automatically with Vue-Router
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: config.siteName + to.path,
    })
    next()
  })
}
