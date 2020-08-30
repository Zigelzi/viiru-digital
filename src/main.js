// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@/assets/styles/main.scss';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: "Miika Savelan digitaalisten palveluiden ja verkkosivujen koti",
  });

  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: `${process.env.GRIDSOME_BASE_PATH}/viiru_favicon_192x192.png`,
  });

  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: "Miika Savelan digitaalisten palveluiden ja verkkosivujen koti",
  });

  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    content: `${process.env.GRIDSOME_BASE_PATH}/viiru_favicon_192x192.png`,
  });

  router.beforeEach((to, _from, next) => {
    // Build URL for every site automatically with Vue-Router
    head.meta.push({
      key: "og:url",
      name: "og:url",
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
}
