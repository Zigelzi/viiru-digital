<template>
  <div>
    <div class="scroll-rails">
      <div class="scroller-item">
        <div class="scroller-img-container">
          <g-image
            src="~/assets/img/campfire.jpg"
            class="image scroller-image"
            alt="Picture of campfire"
            width="500px"
          />
        </div>
        <h1 class="text-xl scroller-heading">
          <span class="text-pink">Verkkosivut</span> <br />
          puuttuvat
        </h1>
      </div>
      <div class="scroller-item">
        <div class="scroller-img-container">
          <g-image
            src="~/assets/img/hay.jpg"
            class="image scroller-image"
            alt="Picture of hay stick held by person"
            width="500px"
          />
        </div>
        <h1 class="text-xl scroller-heading">
          <span class="text-pink">Ideani</span> <br />
          kaipaa hiomista
        </h1>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.scroll-rails {
  overflow: scroll;
  display: flex;
  height: 60vh;
  justify-content: flex-start;
  margin-right: -5%; // Counter the text-content margin
}

.scroller-item {
  position: relative;
  width: 80vw;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  margin-right: var(--p-l);

  &:last-child {
    margin-right: 0;
  }
}

.scroller-heading {
  position: absolute;
  bottom: 4.5vh;
  left: var(--p-s);
}

.scroller-img-container {
  width: 100%;
  height: 50vh;
}

.scroller-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}
</style>
