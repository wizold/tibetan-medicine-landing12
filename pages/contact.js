
export default function Contact() {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Связаться со мной</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Ваше имя" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Сообщение" className="w-full border p-2 rounded h-32"></textarea>
        <button type="submit" className="w-full bg-black text-white p-2 rounded">Отправить</button>
      </form>
      <div className="mt-6 text-lg">
        <p>Telegram: @твойник</p>
        <p>Email: hello@tibetan-medicine.com</p>
      </div>
    </div>
  );
}
