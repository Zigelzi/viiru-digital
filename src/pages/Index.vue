<template>
  <Layout>
    <section id="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <v-hero-title />
        </div>
      </div>
    </section>
    <div class="">
      <section id="introduction" class="pt-0">
        <div class="pt-xxl container">
          <h1 class="text-xl mb-l">
            Verkkosivut ja tuotteet ideasta käytäntöön
          </h1>
          <div class="pb-l">
            <p>
              Päätähuimaavien ideoiden ja tuotteiden ei kuulu jäädä vain
              päähäsi.
            </p>
            <p>
              Toteutan sinulle verkkosivut, jotka parantavat tunnettuvuuttasi ja
              luotettavuuttasi verkossa.
            </p>
            <p>
              Voin myös auttaa sinua digitaalisen tuotteen määrittelyssä,
              suunnittelussa ja ensimmäisen version rakentamisessa.
            </p>
          </div>

          <a href="#contact-me" class="btn btn-outline text-uppercase text-l"
            >Toteutetaan ideasi</a
          >
        </div>
      </section>
      <section id="products" class="bg-white">
        <div class="container">
          <div class="">
            <div class="pv-m product-tile">
              <div class="img-container">
                <g-image
                  src="@/assets/img/phone_google.jpg"
                  alt="Closeup picture of keyboard"
                  class="image"
                />
              </div>
              <div class="product-tile-content">
                <h2>Verkkosivut</h2>
                <p>
                  Paranna yrityksesi tunnettavuutta ja löydettävyyttä nopeasti
                  toimivilla ja helposti löydettävillä verkkosivuilla.
                </p>
                <g-link class="btn btn-solid" to="/palvelut/">Lue lisää</g-link>
              </div>
            </div>
            <div class="pv-m product-tile">
              <div class="img-container">
                <g-image
                  src="@/assets/img/computer_keyboard.jpg"
                  alt="Closeup picture of keyboard"
                  class="image"
                />
              </div>
              <div class="product-tile-content">
                <h2 class="product-tile-text">Tuotekonsultointi</h2>
                <p class="product-tile-text">
                  Hyödynnä yli 15 000 tunnin osaaminen digitaalisten palveluiden
                  kehittämisen parissa, designista julkaisuun.
                </p>
                <g-link class="btn btn-solid" to="/palvelut/">Lue lisää</g-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div class="container">
          <h2 class="mb-l">Kenen kanssa työskentelet?</h2>
          <div class="image-container">
            <g-image
              src="@/assets/img/miika_profile_picture.jpg"
              alt="Picture of Miika Savela"
              class="image"
            />
          </div>
          <h3 class="mt-l">Moi!</h3>
          <p>
            Olen Miika Savela, kaveri
            <span class="text-pink">Viiru Digitalin</span> takana. Olen
            harrastanut ja työskennellyt tietotekniikan kanssa lähes koko ikäni.
          </p>
          <p>
            Haluan auttaa sinua hyödyntämään digitaalisia palveluita yrityksesi
            kasvun tukemiseksi. Voit keskittyä siihen mitä osaat parhaiten ja
            pyytää apua kun törmäät ongelmiin nykyajan palveluissa tai kun
            tunnet ettet tiedä mistä aloittaa.
          </p>
          <g-link class="btn btn-solid" to="/minusta"
            >Tutustu osaamiseen</g-link
          >
        </div>
      </section>

      <section id="contact-me" class="">
        <div class="pv-xl container">
          <transition name="fade">
            <div v-if="formVisible">
              <v-contact-form @formSubmitted="updateFormVisibility" />
            </div>
            <div v-else>
              <p>{{ successMessage }}</p>
              <button class="btn btn-solid" @click="resetFormVisibility">
                Uusi yhteydenottopyyntö
              </button>
            </div>
          </transition>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import HeroTitle from '@/components/HeroTitle'
import ContactForm from '@/components/ContactForm'
import Icon from '@/components/Icon'

export default {
  metaInfo: {
    title: 'Etusivu',
  },
  components: {
    'v-hero-title': HeroTitle,
    'v-contact-form': ContactForm,
    'v-icon': Icon,
  },
  data() {
    return {
      formVisible: true,
      successMessage: '',
    }
  },
  methods: {
    updateFormVisibility(updateMessage) {
      this.successMessage = updateMessage
      this.showForm = false
    },
    resetFormVisibility() {
      this.showForm = true
    },
  },
}
</script>

<style></style>
