import { getFirestore } from "firebase/firestore"

export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('Global middleware')
    const db = getFirestore()
})