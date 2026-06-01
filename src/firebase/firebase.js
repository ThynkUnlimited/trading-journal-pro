// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"

import { getAuth }
from "firebase/auth"

import { getFirestore }
from "firebase/firestore"

import { getStorage }
from "firebase/storage"

const firebaseConfig = {

  apiKey:
    "AIzaSyCi3VCSrIHpZ1ZZqlCAfeSnkfLME8TWLnI",

  authDomain:
    "trading-journal-pro-3e6ef.firebaseapp.com",

  projectId:
    "trading-journal-pro-3e6ef",

  storageBucket:
    "trading-journal-pro-3e6ef.appspot.com",

  messagingSenderId:
    "948643881451",

  appId:
    "1:948643881451:web:339ab02166bcb9a1ab79ae"
}

const app =
  initializeApp(firebaseConfig)

export const auth =
  getAuth(app)

export const db =
  getFirestore(app)

export const storage =
  getStorage(app)

export default app