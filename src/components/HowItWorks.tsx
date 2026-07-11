export const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Choose a service',
      description: 'Select the home service you need and share the basic job details.',
    },
    {
      number: '2',
      title: 'Pick a time',
      description: 'Schedule a slot that works for your household.',
    },
    {
      number: '3',
      title: 'Manage in app',
      description: 'Track the request, get updates, and keep the service record in one place.',
    },
  ];

  return (
    <section className="py-24 bg-primary text-on-primary" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-20 text-center">Booking made effortless</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-primary-container z-0 rounded-full" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center md:text-left">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0 shadow-xl">
                <span className="text-3xl font-black text-primary font-headline">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-on-primary-container text-lg opacity-80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
