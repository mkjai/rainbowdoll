<script setup>
import { reactive, ref } from 'vue'

// Get a free access key at https://web3forms.com/ (just sign up with an
// email, verify it, and copy the key — no credit card, no coding needed)
// then paste it here in place of the placeholder below.
// their email is prod@rainbowdollla.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

const form = reactive({
  name: '',
  company: '',
  email: '',
  message: '',
})

const status = ref('idle') // idle | sending | success | error
const statusMessage = ref('')

async function handleSubmit() {
  status.value = 'sending'
  statusMessage.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'New quote request — Rainbow Doll website',
        name: form.name,
        company: form.company,
        email: form.email,
        message: form.message,
      }),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      status.value = 'success'
      statusMessage.value = "Thanks — we've received your request and will be in touch shortly."
      form.name = ''
      form.company = ''
      form.email = ''
      form.message = ''
    } else {
      status.value = 'error'
      statusMessage.value = result.message || 'Something went wrong. Please try again.'
    }
  } catch (err) {
    status.value = 'error'
    statusMessage.value = 'Something went wrong. Please check your connection and try again.'
  }
}
</script>

<template>
  <main class="page">
    <section class="section">
      <div class="eyebrow">Contact</div>
      <h1 class="section-title">Contact us</h1>
      <p class="section-text">
        Tell us about your project and a member of our team will follow up with next steps.
      </p>

      <form class="form-grid" @submit.prevent="handleSubmit">
        <div class="form-field">
          <input
            id="name"
            v-model="form.name"
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Name"
            required
          />
        </div>

        <div class="form-field">
          <input
            id="company"
            v-model="form.company"
            type="text"
            name="company"
            placeholder="Company"
            aria-label="Company"
            required
          />
        </div>

        <div class="form-field">
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            required
          />
        </div>

        <div class="form-field">
          <textarea
            id="message"
            v-model="form.message"
            name="message"
            rows="5"
            placeholder="Message"
            aria-label="Message"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending...' : 'Send' }}
        </button>

        <p v-if="status === 'success'" class="form-status success">{{ statusMessage }}</p>
        <p v-if="status === 'error'" class="form-status error">{{ statusMessage }}</p>
      </form>
    </section>
  </main>
</template>
