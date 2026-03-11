const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Industry-Specific Expertise',
    desc: 'Deep domain knowledge in finance, healthcare, retail, and fitness — we understand your workflow, not just the code.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    desc: 'Agile sprints and transparent timelines. We ship MVPs quickly and iterate with your feedback every step of the way.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Clear contracts, milestone-based payments, and honest estimates before we write a single line of code.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '24/7 Support',
    desc: 'Post-launch support, maintenance, and updates. Your software keeps running smoothly — always.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure & Scalable',
    desc: 'Enterprise-grade security, role-based access controls, and cloud-ready architecture that grows with your business.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Local Understanding',
    desc: 'Based in Tamil Nadu, we understand GST compliance, local business needs, and regional nuances better than anyone.',
  },
];

export default function WhyUs() {
  return (
    <section className="section bg-surface" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="tag mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              The Right Partner for Your{' '}
              <span className="gradient-text">Digital Journey</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We don&apos;t just write code — we become your technology partner. From initial
              requirements to post-launch growth, Rise Again Web Technologies is with you every step.
            </p>

            {/* Highlight box */}
            <div className="p-6 rounded-2xl border border-brand-100 bg-gradient-soft">
              <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Tamil Nadu&apos;s Trusted Software Partner</div>
                  <div className="text-sm text-slate-600">
                    Serving businesses in Chennai, Coimbatore, Madurai, Salem, Tirunelveli, Trichy, and across Tamil Nadu.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - feature grid */}
          <div className="grid sm:grid-cols-2 gap-5 stagger">
            {features.map((f) => (
              <div
                key={f.title}
                className="animate-on-scroll p-5 bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
