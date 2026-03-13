export default function Philosophy() {
  return (
    <section className="py-24 bg-brand-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Quote Side */}
          <div className="space-y-8">
            <div className="text-6xl text-brand-gold font-serif">"</div>
            <blockquote className="font-serif text-3xl md:text-4xl font-light text-brand-black leading-tight">
              Real estate isn't about pushing properties. It's about understanding people, 
              markets, and timing.
            </blockquote>
            <div className="h-px w-16 bg-brand-gold"></div>
            <p className="text-brand-gray-600 text-lg">
              — Paola De La Cruz
            </p>
          </div>

          {/* Philosophy Points */}
          <div className="space-y-6">
            <div className="border-l-2 border-brand-gold pl-6">
              <h3 className="font-semibold text-brand-black mb-2 uppercase tracking-wide text-sm">
                Strategy First
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                Every decision is backed by data, market intelligence, and a clear understanding of your objectives.
              </p>
            </div>

            <div className="border-l-2 border-brand-gold pl-6">
              <h3 className="font-semibold text-brand-black mb-2 uppercase tracking-wide text-sm">
                No Pressure, Just Clarity
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                I provide the insights you need to make confident decisions on your timeline—never mine.
              </p>
            </div>

            <div className="border-l-2 border-brand-gold pl-6">
              <h3 className="font-semibold text-brand-black mb-2 uppercase tracking-wide text-sm">
                Tailored, Not Templated
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                Your situation is unique. My approach adapts to your needs, not the other way around.
              </p>
            </div>

            <div className="border-l-2 border-brand-gold pl-6">
              <h3 className="font-semibold text-brand-black mb-2 uppercase tracking-wide text-sm">
                Long-Term Partnership
              </h3>
              <p className="text-brand-gray-600 leading-relaxed">
                Real estate is a journey. I'm here for strategic counsel today, tomorrow, and beyond the closing table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
