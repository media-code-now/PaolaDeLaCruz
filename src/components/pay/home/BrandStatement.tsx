export default function BrandStatement() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left - Decorative Quote Mark */}
          <div className="md:col-span-2">
            <div className="text-8xl md:text-9xl font-serif text-brand-gold opacity-20 leading-none">
              "
            </div>
          </div>
          
          {/* Right - Statement */}
          <div className="md:col-span-10">
            <blockquote className="space-y-8">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-black leading-tight">
                Real estate decisions deserve more than quick answers. 
                They require strategy, market intelligence, and a partner 
                who prioritizes your long-term success.
              </p>
              
              <footer className="flex items-center space-x-4 pt-4">
                <div className="h-px flex-1 bg-brand-gray-200"></div>
                <cite className="not-italic text-sm text-brand-gray-600 font-medium tracking-wide">
                  Paola "Pay" De La Cruz
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
        
        {/* Credibility Metrics */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-brand-gray-200">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-brand-black mb-2">
              12+
            </div>
            <div className="text-sm text-brand-gray-600 uppercase tracking-wider">
              Years Experience
            </div>
          </div>
          
          <div className="text-center border-x border-brand-gray-200">
            <div className="text-4xl md:text-5xl font-light text-brand-black mb-2">
              $180M+
            </div>
            <div className="text-sm text-brand-gray-600 uppercase tracking-wider">
              In Sales Volume
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-light text-brand-black mb-2">
              98%
            </div>
            <div className="text-sm text-brand-gray-600 uppercase tracking-wider">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
