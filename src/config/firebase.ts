import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB3SxfdWvOC2hQlb1brf6DAD9BwHIuLsKc',
  authDomain: 'api-potyguara-verse.firebaseapp.com',
  projectId: 'api-potyguara-verse',
  storageBucket: 'api-potyguara-verse.firebasestorage.app',
  messagingSenderId: '993268007262',
  appId: '1:993268007262:web:74c6fb861f98d369c0cfcf',
  measurementId: 'G-XCMZVFJCSN',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
