<template>
  <Layout>
    <section id="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="logo-container">
            <img
              class="logo-svg logo-bg-clip"
              src="/viiru_logo_band_head_opt.svg"
              alt="Logo of Viiru Digital"
            />
          </div>
          <v-hero-title />
        </div>
      </div>
    </section>
    <div class="">
      <section id="introduction">
        <div class="text-content ph-xl">
          <h1 class="text-l">Digitaalisten palveluiden moniosaaja</h1>
          <p>Moi!</p>
          <p>
            Olen Miika Savela, digitaalisten tuotteiden ja tekniikan kanssa
            peuhaamista rakastava kaveri Lohjalta.
          </p>
          <p>
            <span class="text-pink">Viiru Digital</span> on yksi
            harrasteprojekteistani, jonka puitteissa kehitän osaamistani
            verkkosivujen ja digitaalisten tuotteiden suunnittelun toteuttamisen
            parissa.
          </p>
          <p>
            Teen itselleni ja asiakkailleni täysin kustomoituja verkkosivuja
            käyttäen nykyaikaisia teknologioita.
          </p>
          <p>
            Päivätöikseni toimin
            <span class="text-bold">Product Ownerina</span> huippuluokan
            rekrytointiohjelmistoa toimittavassa yrityksessa nimeltä
            <a class="text-jobilla" href="https://jobilla.com/">Jobilla</a>
          </p>
        </div>
      </section>
      <section id="website-project">
        <div class="ph-xl bg-white">
          <div class="text-content">
            <h1 class="text-l">Haluatko verkkosivut?</h1>
            <p>
              Toteutan sivutoimisesti verkkosivuja ja voin auttaa digitaalisten
              palveluiden prototyyppaamisessa. Henkilökohtainen oppimisen
              ollessa yksi osa palkastani, pystyn toteutaamaan projektisi kohtuu
              kustannuksin.
            </p>
            <button class="btn">Aloitetaan projekti yhdessä!</button>
          </div>
          <div class="text-content">
            <h3 class="text-l mh-l">Projektin kulku</h3>
            <div class="project-step">
              <h4>Ollaan yhteyksissä</h4>
              <p>
                Ota minuun yhteyttä ja jutellaan minkälainen projekti sinulla
                olisi mielessä. Katsotaan yhdessä toteutuksen kokonaisuus ja
                arvioidaan kustannukset.
              </p>
            </div>
            <div class="project-step">
              <h4>Suunnittelu</h4>
              <p>
                Hahmottelen ensivedoksen projektista Figmalla ja käydään se
                yhdessä läpi. Katsotaan että kaikki tarvittavat elementit
                löytyvät ja että sivun asettelu on haluamasi mukainen.
              </p>
            </div>

            <div class="project-step">
              <h4>Toteutus</h4>
              <p>
                Pistetään näppäimistö sauhuamaan! Toteutan ensimmäisen
                käytettävän prototyypin (MVP) ja testataan toimivuus yhdessä.
              </p>
            </div>
            <div class="project-step">
              <h4>Viimeistely</h4>
              <p>
                Hiotaan lopullinen ulkoasu ja sen yksityiskohdat paikalleen.
                Tarkastan että ulkoasu ja käytettävyys ovat huippuluokkaa niin
                mobiililaitteilla kuin pöytäkoneillakin.
              </p>
            </div>
            <div class="project-step">
              <h4>Julkaisu</h4>
              <p>
                Hankitaan viimeistään tässä vaiheessa sinulle palvelintila ja
                verkkotunnus josta verkkosivusi löytyvät. Autan ja opastan
                kaikissa vaiheissa.
              </p>
            </div>
            <div class="project-step">
              <h4>Ylläpito ja seuranta</h4>
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
      <!-- TODO - Contact Form here -->
      <section id="contact-me">
        <div class="text-content ph-xl">
          <v-contact-form />
        </div>
      </section>
    </div>

    <footer>
      <div>
        <p>Footer text</p>
      </div>
    </footer>
  </Layout>
</template>

<script>
import HeroTitle from '@/components/HeroTitle';
import ContactForm from '@/components/ContactForm';

export default {
  metaInfo: {
    title: 'Index',
  },
  components: {
    'v-hero-title': HeroTitle,
    "v-contact-form": ContactForm,
  },
};
</script>

<style></style>
