<template>
  <section class="contact" data-aos="fade-right" id="contact">
    <TheTitle name="Me contacter" nb="04"></TheTitle>
    <form
      class="form"
      :class="{ hidden_contact: isSend }"
      ref="form"
      @submit.prevent="sendMail"
    >
      <input
        type="text"
        id="name"
        placeholder="Nom / Prénom"
        name="user_name"
        required
      />
      <input
        type="email"
        id="email"
        placeholder="Email"
        name="user_email"
        required
      />
      <textarea
        id="text"
        placeholder="Votre demande ?"
        name="message"
        required
      ></textarea>
      <button type="submit" class="sendmail">Envoyer</button>
    </form>
    <div
      class="contact_success"
      :class="{ hidden_contact: !isSend }"
      id="success"
    >
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
      <h2>Mail envoyé avec succès</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheTitle from "../utils/TheTitle.vue";
import { ref } from "vue";
import emailjs from "emailjs-com";

const form = ref();
const isSend = ref(false);

const sendMail = () => {
  emailjs
    .sendForm(
      "service_q6n1gh1",
      "template_46dumrs",
      form.value,
      "oXZfONv37VZum4fbr"
    )
    .then(
      () => {
        isSend.value = true;
      },
      (error) => {
        alert("Message not sent: " + error);
      }
    );
};
</script>

<style lang="scss" scoped>
.hidden_contact {
  display: none !important;
}
section.contact input,
section.contact textarea {
  padding: 0.8rem;
}
</style>
