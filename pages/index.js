import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Тибетская медицина | Таня</title>
        <meta name="description" content="Landing page for Tibetan medicine by Tanya" />
      </Head>

      <Navbar />

      <section style={{ background: 'url(/tibet.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className="text-white py-20 px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
          Помогаю исцеляться через знания тибетской медицины
        </motion.h1>
        <p className="text-lg mb-6">
          Диагностика, питание, чудлены, пилюли и мантры — по линии доктора Ниды Ченагцанга
        </p>
        <button style={{ padding: '12px 24px', background: '#fff', color: '#000', borderRadius: '12px' }}>Записаться на консультацию</button>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="text-3xl font-bold mb-6">Кто я</h2>
          <p className="text-lg">
            Меня зовут Таня. Я практик тибетской медицины, обучалась у доктора Ниды Ченагцанга, практикую в Лондоне и онлайн.
            В моей практике — аутентичные знания Сова Ригпа: травы, питание, диагностика по пульсу, чудлены и мантры.
          </p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '14px', padding: '30px', background: '#eee' }}>
        © 2025 Таня | Тибетская медицина<br />
        <i>«Слушай пульс — он знает больше, чем ум»</i>
      </footer>
    </div>
  )
}