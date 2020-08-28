<template>
  <div>
    <h1>Ota yhteyttä</h1>
    <p class="mb-l">Yhteinen projekti alkaa jättämällä yhteystietosi.</p>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <div class="input-container">
        <input
          type="text"
          placeholder=" "
          name="contact-name"
          id="contact-name"
          class="form-input input-text"
        />
        <label for="contact-name" class="form-label text-input-label">
          Nimi
        </label>
      </div>
      <div class="contact-method input-container">
        <div class="text-bold">Yhteydenottotapa</div>
        <input
          type="radio"
          name="contact-both"
          id="contact-both"
          value="both"
          v-model="selectedContactMethod"
          class="form-input input-radio-option"
        />
        <label for="contact-both" class="form-label input-radio-label">
          Puhelin ja sähköposti
        </label>
        <input
          type="radio"
          name="contact-phone"
          id="contact-phone"
          value="phone"
          v-model="selectedContactMethod"
          class="form-input input-radio-option"
        />
        <label for="contact-phone" class="form-label input-radio-label">
          Puhelin
        </label>
        <input
          type="radio"
          name="contact-email"
          id="contact-email"
          value="email"
          v-model="selectedContactMethod"
          class="form-input input-radio-option"
        />
        <label for="contact-email" class="form-label input-radio-label">
          Sähköposti
        </label>
      </div>
      <div id="contact-information">
        <div
          v-show="
            selectedContactMethod === 'email' ||
            selectedContactMethod === 'both'
          "
          class="input-container"
        >
          <input
            type="email"
            placeholder=" "
            name="email"
            id="email-field"
            class="form-input input-text"
          />
          <label for="email-field" class="form-label text-input-label">
            Sähköpostiosoite
          </label>
        </div>
        <div
          v-show="
            selectedContactMethod === 'phone' ||
            selectedContactMethod === 'both'
          "
          class="input-container"
        >
          <input
            type="phone"
            name="phone"
            placeholder=" "
            id="phone-field"
            class="form-input input-text"
          />
          <label for="phone-field" class="form-label text-input-label">
            Puhelinnumero
          </label>
        </div>
      </div>
      <div class="input-container">
        <textarea
          type="textarea"
          placeholder=" "
          name="additional-information"
          id="additional-information"
          class="form-input input-text input-textarea"
        />
        <label
          for="additional-information"
          class="form-label text-input-label textarea-input-label"
        >
          Lisätietoja
        </label>
      </div>
      <input type="submit" class="btn" value="Ota yhteyttä" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedContactMethod: null,
    };
  },
};
</script>

<style lang="scss">
.input-container {
  position: relative;
  display: inline-block;
  width: 100%;
  margin: var(--mg-s) 0 var(--mg-l) 0;
}
.form-label {
  display: block;
}

.text-input-label {
  position: absolute;

  // Center the text vertically
  top: 50%;
  transform: translateY(-50%);

  left: var(--p-s);
  color: var(--black);
  transition: transform 0.2s ease-in-out;
  transform-origin: 0 0;
  color: var(--white);
}

.textarea-input-label {
  top: 20px;
}

.input-text {
  display: block;
  box-sizing: border-box;
  padding: var(--p-s);
  width: 100%;
  border: none;
  box-shadow: 0px 0px 0px 2px white;
  transition: box-shadow 0.2s;
  background: var(--gray-600);
  color: var(--white);

  &:focus {
    box-shadow: 0px 0px 0px 5px var(--primary-400);
  }

  &:focus + .text-input-label {
    // Move labels above the inputs when input is focused
    color: var(--primary-400);
    transform: translateY(-45px) scale(0.85);
  }

  &:not(:placeholder-shown) {
    + .text-input-label {
      color: var(--primary-400);
      transform: translateY(-45px) scale(0.85);
    }
  }
}

.input-textarea {
  resize: vertical;
}

.input-radio-label {
  display: block;
  padding: var(--p-m);
  margin: var(--mg-m) 0;
  background: var(--gray-400);
  text-align: center;
  color: var(--black);
  transition: all 0.2s ease-in-out;
}

.input-radio-option {
  opacity: 0;
  position: absolute;

  &:focus + .input-radio-label,
  &:hover + .input-radio-label {
    background: var(--primary-600);
    transform: scale(1.01);
  }

  &:checked + .input-radio-label {
    background: var(--primary-700);
    color: var(--gray-300);
  }

  &:active + .input-radio-label {
    transform: scale(0.98);
  }
}
</style>
