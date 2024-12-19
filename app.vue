<!-- pages/index.vue -->
<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">📝 Cadastro de Usuário</h1>
    
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          Nome Completo
        </label>
        <input 
          v-model="name" 
          type="text" 
          id="name" 
          required 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input 
          v-model="email" 
          type="email" 
          id="email" 
          required 
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <button 
        type="submit" 
        :disabled="isSubmitting"
        class="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
      >
        {{ isSubmitting ? 'Enviando...' : 'Cadastrar' }}
      </button>
    </form>

    <div v-if="submitSuccess" class="mt-4 text-green-600 text-center">
      ✅ Cadastro realizado com sucesso!
    </div>

    <div v-if="errorMessage" class="mt-4 text-red-600 text-center">
      ⚠️ {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const { addDocument } = useFirestoreActions()

// Estado do formulário
const name = ref('')
const email = ref('')
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  // Validações básicas
  if (!name.value || !email.value) {
    errorMessage.value = 'Por favor, preencha todos os campos'
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''
  submitSuccess.value = false

  try {
    // Adicionar documento no Firestore
    const firestoreResult = await addDocument('usuarios', {
      nome: name.value,
      email: email.value
    })

    if (!firestoreResult.success) {
      throw new Error(firestoreResult.error || 'Erro ao salvar no Firestore')
    }
    console.log('Attempting to send email to:', email.value);

     //Enviar email de confirmação usando Axios
     const emailResult = await axios.post('api/send', {
       email: email.value,
       name: name.value
     })

    // Se chegou até aqui, sucesso
    submitSuccess.value = true
    name.value = ''
    email.value = ''

    // Log opcional
    console.log('Documento criado com ID:', firestoreResult.id)
     console.log('Resultado do envio de email:', emailResult.data)
  } catch (error) {
    // Tratamento de erro mais detalhado
    errorMessage.value = error.response?.data?.message || 
      error.message || 
      'Ocorreu um erro no registro. Tente novamente.'
    console.error('Erro no registro:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>