import { LotteryProvider } from '../context/LotteryContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LotteryProvider>
      <Component {...pageProps} />
    </LotteryProvider>
  )
}

export default MyApp
