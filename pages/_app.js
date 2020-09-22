import '../styles/globals.css'
import './App.css'
import AppContextProvider from '../componets/Context/UserContext';


function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}

export default MyApp
