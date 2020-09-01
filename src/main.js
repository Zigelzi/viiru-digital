// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '@/assets/styles/main.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.directive('vpshow', {
    // Fade the element in when it's scrolled to viewport.
    elementInViewport(element) {
      const bufferSize = 200 // Buffer to ensure the element is properly in view

      // Define what is the elements position
      const elementBoundaries = element.getBoundingClientRect()
      const elementTopPosition = elementBoundaries.top
      const elementBottomPosition = elementBoundaries.bottom

      // Check if it's in the viewport
      const isInView =
        elementTopPosition + bufferSize < window.innerHeight &&
        elementBottomPosition > 0
      return isInView
    },
    bind(element, binding) {
      // When the directive is attached to element, bind the initial class and eventlistener
      element.classList.add('vp-fade-before-enter')
      element.$onScroll = () => {
        if (binding.def.elementInViewport(element)) {
          element.classList.add('vp-fade-enter')
          element.classList.remove('vp-fade-before-enter')
          binding.def.unbind(element, binding)
        }
      }
      document.addEventListener('scroll', element.$onScroll)
    },

    inserted(element, binding) {
      element.$onScroll()
    },

    unbind(element, binding) {
      document.removeEventListener('scroll', element.$onScroll)
      delete element.$onScroll
    },
  })

  head.meta.push({
    // Facebook SoMe sharing
    key: 'og:description',
    name: 'og:description',
    content: 'Miika Savelan digitaalisten palveluiden ja verkkosivujen koti',

    key: 'og:image',
    name: 'og:image',
    content: `https://viiru.fi/viiru_favicon_192x192.png`,

    key: 'og:url',
    name: 'og:url',
    content: 'Digitaalisia palveluita ja verkkosivuja',

    // Twitter SoMe sharing

    key: 'twitter:description',
    name: 'twitter:description',
    content: 'Miika Savelan digitaalisten palveluiden ja verkkosivujen koti',

    key: 'twitter:image',
    name: 'twitter:image',
    content: `https://viiru.fi/viiru_favicon_192x192.png`,
  })

  // router.beforeEach((to, _from, next) => {
  //   // Build URL for every site automatically with Vue-Router
  //   head.meta.push({
  //     key: 'og:url',
  //     name: 'og:url',
  //     content: config.siteName + to.path,
  //   })
  //   next()
  // })
}
