<template>
  <div class="profile-card">
    <div class="profile-picture-container">
      <g-image
        src="~/assets/img/miika_profile_picture.jpg"
        alt="Picture of Miika Savela"
        class="profile-picture"
      />
    </div>
    <div class="">
      <div class="profile-content">
        <h2 class="profile-title">Miika Savela</h2>
        <h3 class="profile-subtitle">Web Developer</h3>
        <p class="profile-quote">
          "Aina voi oppia jotain uutta ja mielenkiintoista."
        </p>
      </div>
      <div class="profile-contact">
        <a class="contact-link" href="mailto:miika.a.savela@gmail.com"
          >miika.a.savela@gmail.com</a
        >
        <a class="contact-link" href="tel:+3585034895">050 3489 584</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.profile-card {
  background: var(--gray-700);
  animation-name: hover, pulse;
  animation-duration: 6s, 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, normal;
}

.profile-picture-container {
  border-bottom: 3px solid var(--white);
}

.profile-picture {
  width: 100%;
}

.profile-content {
  padding: var(--p-m);
  padding-top: var(--p-xs);
  text-align: center;
}

.profile-subtitle {
  font-size: var(--text-14);
  color: var(--gray-300);
}

.profile-quote {
  text-align: left;
  font-size: var(--text-14);
}

.profile-contact {
  padding: var(--p-m);
  display: flex;
  justify-content: space-between;
  font-size: var(--text-12);
}

.contact-link {
  color: var(--gray-300);
}
</style>
