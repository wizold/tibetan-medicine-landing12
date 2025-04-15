import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-100 px-6 py-4 shadow text-lg">
      <ul className="flex flex-wrap justify-center gap-6">
        <li><Link href="/">Главная</Link></li>
        <li><Link href="/about">Обо мне</Link></li>
        <li><Link href="/services">Услуги</Link></li>
        <li><Link href="/blog">Блог</Link></li>
        <li><Link href="/shop">Магазин</Link></li>
        <li><Link href="/contact">Контакты</Link></li>
      </ul>
    </nav>
  )
}