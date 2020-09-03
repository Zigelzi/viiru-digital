<template>
  <div>
    <div class="mb-xl">
      <h1>Toteutetaan ideasi!</h1>
      <p>
        Onko sinulla idea jonka haluaisit toteuttaa? Jutellaan siitä vaikka
        kahvikupin äärellä.
      </p>
      <p>
        Jätä yhteystietosi niin olen sinuun yhteydessä ja pistetään homma
        käyntiin!
      </p>
    </div>

    <form
      name="contact-form"
      id="contact-form"
      method="post"
      action="/formsuccess"
      data-netlify="true"
      data-netlify-honeypot="ropotti-field"
      @submit.prevent="sendForm"
    >
      <input class="ropotti" name="ropotti-field" value="ask-question" />
      <div class="input-container">
        <input
          type="text"
          placeholder=" "
          name="name"
          id="contact-name"
          class="form-input input-text"
          v-model="formData.name"
        />
        <label for="contact-name" class="form-label text-input-label">
          Nimesi
        </label>
      </div>
      <div class="contact-method input-container">
        <div class="text-m">Mikä yhteydenottotapa sopii sinulle parhaiten?</div>
        <input
          type="radio"
          name="contactMethod"
          id="contact-both"
          value="both"
          class="form-input input-radio-option"
          v-model="formData.contactMethod"
        />
        <label for="contact-both" class="form-label input-radio-label">
          Puhelin ja sähköposti
        </label>
        <input
          type="radio"
          name="contactMethod"
          id="contact-phone"
          value="phone"
          v-model="formData.contactMethod"
          class="form-input input-radio-option"
        />
        <label for="contact-phone" class="form-label input-radio-label">
          Puhelin
        </label>
        <input
          type="radio"
          name="contactMethod"
          id="contact-email"
          value="email"
          v-model="formData.contactMethod"
          class="form-input input-radio-option"
        />
        <label for="contact-email" class="form-label input-radio-label">
          Sähköposti
        </label>
      </div>
      <div id="contact-information">
        <div
          v-show="
            formData.contactMethod === 'email' ||
            formData.contactMethod === 'both'
          "
          class="input-container"
        >
          <input
            type="email"
            placeholder=" "
            name="email"
            id="email-field"
            class="form-input input-text"
            v-model="formData.email"
          />
          <label for="email-field" class="form-label text-input-label">
            Sähköpostiosoite
          </label>
        </div>
        <div
          v-show="
            formData.contactMethod === 'phone' ||
            formData.contactMethod === 'both'
          "
          class="input-container"
        >
          <input
            type="tel"
            name="phone"
            placeholder=" "
            id="phone-field"
            class="form-input input-text"
            v-model="formData.phone"
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
          name="additionalInformation"
          id="additional-information"
          class="form-input input-text input-textarea"
          v-model="formData.additionalInformation"
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
      formData: {
        name: '',
        contactMethod: '',
        phone: '',
        email: '',
        additionalInformation: '',
      },
      submitMessage: '',
    }
  },
  methods: {
    encodeFormData(formData) {
      return Object.keys(formData)
        .map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
        )
        .join('&')
    },
    sendForm(event) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encodeFormData({
          'form-name': event.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => {
          this.submitMessage = 'Mahtavaa, ollaan yhteydessä!'
          this.$emit('formSubmitted', this.submitMessage)
        })
        .catch((error) => {
          console.error(error)
          this.$emit('formSubmitted', this.submitMessage)
        })
    },
  },
}
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

.ropotti {
  display: none;
}
</style>
