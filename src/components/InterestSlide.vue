<template>
  <div>
    <div
      class="interest-slide"
      v-for="(interest, index) in interests"
      :key="index"
    >
      <h2 class="interest-title">{{ interest.title }}</h2>
      <video class="interest-video" playsinline autoplay muted loop>
        <source :src="interest.assetNameMp4" />
        <source :src="interest.assetNameWebm" />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interests: [
        {
          title: 'UI / UX Design',
          assetNameMp4: 'vd_ddesign.mp4',
          assetNameWebm: 'vd_design.webm',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.interest-slide {
  position: relative;
  height: 500px;
}
.interest-video {
  object-fit: cover;
  width: 100vw;
  // height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
