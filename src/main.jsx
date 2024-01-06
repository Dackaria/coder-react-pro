import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CartProvider } from './components/CartContext.jsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxWH7pmubumbC8IUJWsQTA6oqhFeN8QiQ",
  authDomain: "tienda-caelesti.firebaseapp.com",
  projectId: "tienda-caelesti",
  storageBucket: "tienda-caelesti.appspot.com",
  messagingSenderId: "478466000588",
  appId: "1:478466000588:web:b32d09de5aff58fba06469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider>
        <CartProvider>
          <App />
       </CartProvider>
    </ChakraProvider>
   
  
)
