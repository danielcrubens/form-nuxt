<template>
  <ETailwind>
    <EHtml>
      <EHead />
      <EBody class="h-auto py-12">
        <EContainer class="max-w-2xl mx-auto p-8">
          <ESection class="rounded-lg overflow-hidden shadow-sm p-8">
            <ESection class="text-center mb-8">
              <EText class="text-lg text-gray-800">
                Olá, <span class="font-bold">{{ name }}</span>! Cadastro realizado com sucesso.
              </EText>
            </ESection>

            <ESection class="flex flex-col items-center justify-center space-y-1">
              <EImg 
                src="https://i.postimg.cc/J7kXrJyW/bg.png" 
                alt="Logo" 
                class="w-32 h-auto py-1"
              />
              
              <EText class="text-lg text-gray-800 text-center">
                Em breve entraremos em contato com você.
              </EText>
            </ESection>
          </ESection>

          <!-- Footer -->
          <ESection class="mt-8 text-center">
            <EText class="text-sm text-gray-500">
              © 2024
              <ELink href="https://danielcrubens.github.io/">danielcrubens</ELink>
            </EText>
          </ESection>
        </EContainer>
      </EBody>
    </EHtml>
  </ETailwind>
</template>

<script setup lang="ts">
//import { ETailwind, EHtml, EHead, EBody, EContainer, EText, EImg, ESection, ELink } from 'vue-email'

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
