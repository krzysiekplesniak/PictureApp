import { ImagesProvider } from '@/context/ImagesContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ImagesProvider>
      <Component {...pageProps} /> 
    </ImagesProvider>
  )
    
}

export default MyApp




    




  
  

    
