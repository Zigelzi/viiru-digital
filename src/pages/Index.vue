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
            <div class="pv-m">
              <h1>Verkkosivut</h1>
              <p>
                Hyvin toimivat ja helposti käytettävät verkkosivut ovat
                nykypäivänä perusoletus, eivät poikkeus.
              </p>
              <g-link class="content-link" to="/tuotteet/"
                >Tehdään sinulle sellaiset</g-link
              >
            </div>
            <div class="pv-m">
              <h1>Tuotekonsultointi</h1>
              <p>
                Ennakoi hidasteet ja nopeuta ideasi tuomista käytäntöön.
                Käytössäsi on yli 15 000 tuntia tuoteosaamisen kokemusta,
                designistä julkaisuun.
              </p>
              <g-link class="content-link" to="/tuotteet/">Lue lisää...</g-link>
            </div>
          </div>
          <div class="">
            <h3 class="text-xl mt-l mb-xl">Verkkosivujen toteutus</h3>
            <div class="project-step" v-vpshow>
              <v-icon
                :iconName="'phone'"
                :iconSize="'l'"
                class="flex-container fja-center"
              ></v-icon>
              <h4 class="text-center">Ollaan yhteyksissä</h4>
              <p>
                Ota minuun yhteyttä ja jutellaan minkälainen projekti sinulla
                olisi mielessä. Katsotaan yhdessä toteutuksen kokonaisuus ja
                arvioidaan kustannukset.
              </p>
            </div>
            <div class="project-step" v-vpshow>
              <v-icon
                :iconName="'planning'"
                :iconSize="'l'"
                class="flex-container fja-center"
              ></v-icon>
              <h4 class="text-center">Suunnittelu</h4>
              <p>
                Hahmottelen ensivedoksen projektista Figmalla ja käydään se
                yhdessä läpi. Katsotaan että kaikki tarvittavat elementit
                löytyvät ja että sivun asettelu on haluamasi mukainen.
              </p>
            </div>

            <div class="project-step" v-vpshow>
              <v-icon
                :iconName="'coding'"
                :iconSize="'l'"
                class="flex-container fja-center"
              ></v-icon>
              <h4 class="text-center">Toteutus</h4>
              <p>
                Pistetään näppäimistö sauhuamaan! Toteutan ensimmäisen
                käytettävän prototyypin (MVP) ja testataan toimivuus yhdessä.
              </p>
            </div>
            <div class="project-step" v-vpshow>
              <v-icon
                :iconName="'review'"
                :iconSize="'l'"
                class="flex-container fja-center"
              ></v-icon>
              <h4 class="text-center">Viimeistely</h4>
              <p>
                Hiotaan lopullinen ulkoasu ja sen yksityiskohdat paikalleen.
                Tarkastan että ulkoasu ja käytettävyys ovat huippuluokkaa niin
                mobiililaitteilla kuin pöytäkoneillakin.
              </p>
            </div>
            <div class="project-step" v-vpshow>
              <v-icon
                :iconName="'launch'"
                :iconSize="'l'"
                class="flex-container fja-center"
              ></v-icon>
              <h4 class="text-center">Julkaisu</h4>
              <p>
                Hankitaan viimeistään tässä vaiheessa sinulle palvelintila ja
                verkkotunnus josta verkkosivusi löytyvät. Autan ja opastan
                kaikissa vaiheissa.
              </p>
            </div>
            <div class="project-step" v-vpshow>
              <v-icon
                :iconName="'followup'"
                :iconSize="'l'"
                class="flex-container fja-center"
              ></v-icon>
              <h4 class="text-center">Ylläpito ja seuranta</h4>
              <p>
                Takaisinmaksun aika! Nyt verkkosivusi ovat koko maailman
                löydettävissä ja pidetään huoli että ne myös löytyvät.
                Halutessasi voimme lisätä projektiin analytiikkaa jonka avulla
                toimintaa ja sisältöä voidaan kehittää.
              </p>
            </div>
          </div>
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
