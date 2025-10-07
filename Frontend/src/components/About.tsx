import React, { useState, useEffect } from 'react';

// Static sample data - replace or extend from your backend later
const teamSample = [
  { id: 1, name: 'R. Kumar', role: 'Chairman', photo: '/1.png', bio: 'Over 20 years in commodity trade and cooperative management.' },
  { id: 2, name: 'M. Priya', role: 'General Manager', photo: '/2.png', bio: 'Operations lead with deep experience in logistics and warehousing.' },
  { id: 3, name: 'A. Johnson', role: 'Head - Auctions', photo: '/3.png', bio: 'Responsible for auction operations and lot management.' }
];

const certsSample = [
  { id: 1, title: 'FSSAI Certificate', image: '/fsi.jpg', details: 'FSSAI registration and license copy.' },
  { id: 2, title: 'NABL Accreditation', image: '/nabl.png', details: 'NABL accredited laboratory certification.' },
  // GI Tag removed by request
];

const gallerySample = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png'];

const testimonialsSample = [
  { id: 1, name: 'K. Patel', role: 'Merchant', text: 'Transparent auctions and quick settlements.' },
  { id: 2, name: 'S. Rao', role: 'Producer', text: 'Good support during registration and fair pricing.' },
];

const About: React.FC = () => {
  // Team carousel state (responsive portrait boxes)
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Testimonials carousel
  const [testIndex, setTestIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTestIndex(i => (i + 1) % testimonialsSample.length), 5000);
    return () => clearInterval(t);
  }, []);

  // (no modal) Certifications are shown as a looping badge carousel
  const marqueeRef = React.useRef<HTMLDivElement | null>(null);
  const [repCerts, setRepCerts] = useState(() => [...certsSample, ...certsSample]);

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    const resize = () => {
      const containerWidth = container.clientWidth || 800;
      // estimate item width from first cert or fallback
      const item = container.querySelector('.cert-item') as HTMLElement | null;
      const itemWidth = item ? item.getBoundingClientRect().width : 240;
      const needed = Math.max(4, Math.ceil((containerWidth * 2) / itemWidth));
      const list: typeof certsSample = [];
      for (let i = 0; i < needed; i++) list.push(certsSample[i % certsSample.length]);
      setRepCerts([...list, ...list]);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="about" className="py-16 bg-gray-50 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header / Overview */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About SAGOSERVE</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">A cooperative society committed to serving producers, merchants and buyers through transparent auctions, reliable warehousing and market intelligence.</p>
        </div>

        {/* Detailed Overview - alternating image/text rows */}
        <div className="space-y-12 mb-12">
          {/* History - image left */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center gap-6">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5f4d3b7dfd7a2b2b8a2f3b7b8d1c9a9f" alt="history" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold mb-3">History</h4>
              <p className="text-gray-700">Established to organise producers and provide market access through cooperative auctions and shared infrastructure. Over the years, SAGOSERVE has expanded its reach and services to support local economies.</p>
            </div>
          </div>

          {/* Mission - image right */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center gap-6">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h4 className="text-xl font-semibold mb-3">Mission</h4>
              <p className="text-gray-700">To create transparent, fair and efficient marketplaces for agricultural commodities while uplifting members’ livelihoods through training, quality control, and digital auction platforms.</p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2c9c3b4b6a1a3f4c5b6b7c8d9e0f1a2b" alt="mission" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
          </div>

          {/* Vision - image left */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row items-center gap-6">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c6d5b4a3e2f1d0c9b8a7e6f5d4c3b2a" alt="vision" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div className="lg:w-1/2">
              <h4 className="text-xl font-semibold mb-3">Vision</h4>
              <p className="text-gray-700">Be the leading cooperative platform that connects local producers to national buyers with integrity, quality assurance and sustainable growth strategies.</p>
            </div>
          </div>
        </div>

        {/* Management Team - responsive portrait boxes */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Management Team</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setStartIndex((s) => (s - 1 + teamSample.length) % teamSample.length)}
                className="px-3 py-1 bg-white border rounded shadow"
                aria-label="Previous team"
              >
                ‹
              </button>
              <button
                onClick={() => setStartIndex((s) => (s + 1) % teamSample.length)}
                className="px-3 py-1 bg-white border rounded shadow"
                aria-label="Next team"
              >
                ›
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="flex gap-4 p-6 transition-all duration-500 items-stretch justify-center">
                {Array.from({ length: visibleCount }).map((_, idx) => {
                  const m = teamSample[(startIndex + idx) % teamSample.length];
                  return (
                    <div key={m.id} className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
                      <img src={m.photo} alt={m.name} className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-md mb-4" />
                      <div className="text-lg font-semibold text-gray-800">{m.name}</div>
                      <div className="text-sm text-green-700 mb-3">{m.role}</div>
                      <p className="text-gray-600">{m.bio}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications - looping badge carousel (no click-to-view) */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Certifications & Quality</h3>
          <div className="relative bg-white rounded-lg shadow p-4 overflow-hidden">
            <div ref={marqueeRef} className="flex items-center gap-6 animate-marquee will-change-transform">
              {repCerts.map((cert, idx) => (
                <div key={idx} className="cert-item flex items-center gap-4 px-6 py-4 min-w-[220px]">
                  <div className="w-24 h-24 flex items-center justify-center rounded-md bg-gray-100 overflow-hidden">
                    <img src={cert.image} alt={cert.title} className="max-h-20 object-contain" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-base">{cert.title}</div>
                    <div className="text-sm text-gray-500">Verified Credential</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marqueeAnim { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { display: inline-flex; gap: 1rem; animation: marqueeAnim 16s linear infinite; align-items: center; }
            .animate-marquee:hover { animation-play-state: paused; }
          `}</style>
        </div>

        {/* Testimonials carousel */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Testimonials</h3>
          <div className="overflow-hidden rounded-lg bg-white shadow p-6">
            <div className="flex transition-transform duration-600" style={{ width: `${testimonialsSample.length * 100}%`, transform: `translateX(-${testIndex * (100 / testimonialsSample.length)}%)` }}>
              {testimonialsSample.map(t => (
                <div key={t.id} className="w-full flex-shrink-0 p-4">
                  <blockquote className="text-gray-800 italic text-lg">“{t.text}”</blockquote>
                  <div className="mt-3 font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery (preview 3 images) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Photo & Media Gallery</h3>
            <a href="/gallery" className="text-green-600 hover:underline">View More</a>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 items-stretch">
              {gallerySample.slice(0,3).map((g, i) => (
                <div key={i} className="w-full h-56 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img src={g} alt={`gallery-${i}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;