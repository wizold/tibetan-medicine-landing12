import { useState } from "react";

export default function Shop() {
  const products = [
    {
      name: "Пилюли для печени",
      description: "Устраняют жар, улучшают пищеварение, поддержка канала мчи.",
      price: 25,
      image: "/img/liver.jpg"
    },
    {
      name: "Пилюли для кожи",
      description: "Очищают кровь, уменьшают высыпания, балансируют три доши.",
      price: 22,
      image: "/img/skin.jpg"
    },
    {
      name: "Пилюли для женского здоровья",
      description: "Поддержка цикла, гармонизация гормональной системы, мягкое очищение.",
      price: 28,
      image: "/img/women.jpg"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Витрина пилюль</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map((p, idx) => (
          <div key={idx} className="border rounded-xl shadow p-4 bg-white">
            <img src={p.image} alt={p.name} className="rounded mb-4 h-40 w-full object-cover" />
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="mb-2 text-gray-700">{p.description}</p>
            <p className="font-bold text-lg mb-4">£{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              В корзину
            </button>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Корзина</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Корзина пуста</p>
        ) : (
          <>
            <ul className="mb-4">
              {cart.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item.name} — £{item.price}
                </li>
              ))}
            </ul>
            <p className="font-bold text-lg mb-4">Итого: £{total}</p>
            <a
              href={`https://t.me/yourtelegram?text=Я хочу заказать: ${cart.map(i => i.name).join(", ")} на сумму £${total}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Оформить в Telegram
            </a>
          </>
        )}
      </div>
    </div>
  );
}