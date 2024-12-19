// composables/useFirestore.ts
import { 
  addDoc, 
  collection 
} from 'firebase/firestore'
import { useFirestore } from 'vuefire'

export const useFirestoreActions = () => {
  // Obtém a instância do Firestore usando VueFire
  const db = useFirestore()

  // Função genérica para adicionar documento
  const addDocument = async (
    collectionName: string, 
    data: Record<string, any>
  ) => {
    try {
      const docRef = await addDoc(
        collection(db, collectionName), 
        {
          ...data,
          criadoEm: new Date()
        }
      )
      
      return {
        success: true,
        id: docRef.id
      }
    } catch (error) {
      console.error('Erro ao adicionar documento:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      }
    }
  }

  return {
    addDocument
  }
}