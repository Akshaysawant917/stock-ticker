import { FiClock, FiBarChart, FiShield } from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiClock className="text-4xl text-indigo-500 mb-4" />,
      title: "Real-Time Data",
      description: "Get live updates on stock prices and market trends instantly.",
    },
    {
      icon: <FiBarChart className="text-4xl text-indigo-500 mb-4" />,
      title: "In-Depth Analysis",
      description: "Access detailed reports and charts for smarter investment decisions.",
    },
    {
      icon: <FiShield className="text-4xl text-indigo-500 mb-4" />,
      title: "Secure & Reliable",
      description: "Your data and privacy are safe with our trusted platform.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-900 p-6 rounded-lg border-1 border-white shadow-lg hover:shadow-xl transition"
            >
              {feature.icon}
              <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
