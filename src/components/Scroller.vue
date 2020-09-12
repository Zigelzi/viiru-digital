<template>
  <div>
    <div class="scroll-rails">
      <div class="scroller-item">
        <div class="scroller-img-container">
          <g-image
            src="~/assets/img/campfire.jpg"
            class="image scroller-image"
            alt="Picture of campfire"
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
  height: 95vw;
  justify-content: flex-start;
  margin-left: -5%; // Counter the text-content margin
  width: 110%; // Expand the container to full screen width
}

.scroller-item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80vw;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  margin-right: var(--mg-l);

  &:first-child {
    padding-left: 5%;
  }

  &:last-child {
    padding-right: 5%;
  }
}

.scroller-heading {
  margin-top: calc(var(--text-36) * -1.2 - 4px); // Height of the text - 4px
  margin-left: var(--mg-s);
}

.scroller-img-container {
  width: 100%;
}

.scroller-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}
</style>
