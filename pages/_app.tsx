// import '../styles/globals.css'
import '../styles/index.css';
import type { AppProps } from 'next/app'
import Nav from '../components/Nav/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return 
  <div className='app_wrapper'>
    <Nav />
    <Component {...pageProps} />
  </div>
}
