<template>
  <div>
    <Layout>
      <section class="top-filler">
        <div class="container">
          <div class="pb-xl">
            <h1 class="text-xxl mb-xl">Palvelut</h1>
            <div class="f-column-left">
              <h2>Verkkosivut</h2>
              <!-- <div>
                <h3>Luotettavuus</h3>
                <h3>Löydettävyys</h3>
              </div> -->
              <p>
                Verkkosivujen on tarkoitus tuoda sinut näkyväksi verkossa,
                rakentaa asiakkaidesi luottamusta yritystäsi ja palveluitasi
                kohtaan ja auttaa erottumaan kilpailijoista.
              </p>
              <p>
                Toteutan sivuja jotka ovat niin käytettävyydeltään, ulkoasultaan
                kun tekniikaltaan huippuluokkaa.
              </p>
              <p>
                Kun työskentelet kanssani, saat pitkäaikaisen ja luotettavan
                kumppanin jonka puoleen voit kääntyä aina kun sinulla tulee
                huolia tai ideoita digitaalisiin palveluihin ja verkkosivuihin
                liittyen.
              </p>
            </div>
            <div class="f-column-right">
              <h2>Tuotekonsultointi</h2>
              <p>
                Jos mielessäsi on mahtava idea, mutta ajattelet ettei sinulla
                ole osaamista toteuttaa sitä, olet oikeassa paikassa.
              </p>
              <p>
                Digitaalisen palvelun tuotekehitystä ei kannata aloittaa
                ensimmäisenä koodaamisesta. Pysähdytään hetkeksi ja määritellään
                tuotten idea, rakenne ja tarkoitus yhdessä. Näin pääset pienellä
                investoinnilla liikkeelle ja säästät valtavan määrän aikaa
                toteutusvaiheessa.
              </p>
              <p>
                Käytännössä tämä tarkoittaa sitä, että istutaan yhdessä alas
                noin puolen päivän ajaksi ja kerätään vastaukset mm. seuraaviin
                kysymyksiin.
              </p>
              <ul>
                <li>Kuka käyttää tuotettasi?</li>
                <li>Minkälaisen lisäarvon tuotteesi tarjoaa käyttäjälle?</li>
              </ul>
            </div>
            <p></p>
          </div>
          <div class="" id="website-project">
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
    </Layout>
  </div>
</template>
