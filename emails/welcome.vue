<template>
  <EContainer>
    <EHeading class="mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black">
      Confirmação de Registro
    </EHeading>
    <EText class="text-black">
      Olá, {{ name }}! Seu registro foi realizado com sucesso no nosso sistema. 
    </EText>
  </EContainer>
</template>

<script setup lang="ts">
import { EContainer, EHeading, EText } from 'vue-email'

// Definir props diretamente com script setup
defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})
</script>
