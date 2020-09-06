<template>
  <div>
    <Layout>
      <div class="text-content pt-xl">
        <h1 class="mb-m">Äh, sivua ei löytynyt</h1>
        <p>Tässä kuitenkin kuva Viirusta!</p>
        <g-image
          src="~/assets/img/404_viiru.jpg"
          class="image mt-m mb-l"
          alt="Picture of Viiru the dog lying on the grass"
        />
        <div class="flex-container fja-center pb-l">
          <g-link class="btn" to="/">Takaisin etusivulle</g-link>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: 'Sivua ei löytynyt',
  },
}
</script>
