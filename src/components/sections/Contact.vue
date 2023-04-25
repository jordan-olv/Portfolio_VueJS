<template>
  <section class="contact" data-aos="fade-right" id="contact">
    <TheTitle name="Me contacter" nb="04"></TheTitle>
    <form
      action="#"
      method="get"
      id="contact_mail"
      onsubmit="sendMail(); return false"
    >
      <input type="text" id="name" placeholder="Nom / Prénom" required />
      <input type="email" id="email" placeholder="Email" required />
      <textarea id="text" placeholder="Votre demande ?" required></textarea>
      <button type="submit" class="sendmail">Envoyer</button>
    </form>
    <div class="contact_success hidden" id="success">
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
</script>

<style lang="scss" scoped>
section.contact input,
section.contact textarea {
  padding: 0.8rem;
}
</style>
