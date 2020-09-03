<template>
  <Layout>
    <section id="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="logo-container">
            <img
              class="logo-m logo-bg-clip"
              src="/viiru_logo_band_head_opt.svg"
              alt="Logo of Viiru Digital"
            />
          </div>
          <v-hero-title />
        </div>
      </div>
    </section>
    <div class="">
      <section id="introduction" class="section pt-0">
        <div class="text-content pt-xxl">
          <h1 class="text-xl mb-l">
            Kaverisi joka auttaa tuomaan tuotteesi ja ideasi käytäntöön
          </h1>
          <div class="text-m text-light">
            <p>
              Päätähuimaavien ideoiden ja tuotteiden ei kuulu jäädä vain
              ajatuksisi pääsi sisällä.
            </p>
            <p>
              Voin auttaa sinua digitaalisen tuotteen määrittelyssä,
              suunnittelussa ja ensimmäisen version rakentamisessa.
            </p>
            <p>
              Jos tarvitset vain ideaa tai yritystäsi varten tyylikkäät ja
              helppokäyttöiset verkkosivut, se onnistuu myös!
            </p>
          </div>

          <a href="#contact-me" class="btn text-uppercase text-l"
            >Toteutetaan ideasi</a
          >
        </div>
      </section>
      <section id="website-project" class="section bg-white">
        <div class="">
          <div class="text-content">
            <h1 class="text-l">Puuttuvatko verkkosivut?</h1>
            <p>
              Jos sinulta puuttuvat verkkosivut joita asiakkaasi haluavat
              käyttää ja joilta he löytävät tarvitsemansa helposti, olet
              oikeassa paikassa.
            </p>
            <p>
              Haluan mahdollistaa pienellekkin yritykselle kotisivut joita on
              kiva käyttää. Työskennellessäsi kanssani voit unohtaa valmiit
              sivupohjat ja sivustogeneraattorit.
            </p>
            <p>
              Käydään yhdessä läpi minkälainen yritys tai idea sinulla on ja
              toteutetaan sille mahta
            </p>
          </div>
          <div class="text-content">
            <h3 class="text-xl mt-l mb-xl text-center">Projektin kulku</h3>
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
      <section id="contact-me" class="section">
        <div class="text-content pv-xl">
          <transition name="fade">
            <div v-if="formVisible">
              <v-contact-form @formSubmitted="updateFormVisibility" />
            </div>
            <div v-else>
              <p>{{ successMessage }}</p>
              <button class="btn" @click="resetFormVisibility">
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
import ProfileCard from '@/components/ProfileCard'
import Icon from '@/components/Icon'

export default {
  metaInfo: {
    title: 'Etusivu',
  },
  components: {
    'v-hero-title': HeroTitle,
    'v-contact-form': ContactForm,
    'v-profile-card': ProfileCard,
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
