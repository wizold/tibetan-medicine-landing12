
export default function Services() {
  const services = [
    "Диагностика по пульсу и языку",
    "Подбор тибетских пилюль",
    "Диетологические консультации по дошам",
    "Чудлены и дыхательные практики",
    "Работа с мантрами",
    "Тибетский массаж и самомассаж"
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Мои услуги</h1>
      <ul className="space-y-4 list-disc list-inside text-lg">
        {services.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
