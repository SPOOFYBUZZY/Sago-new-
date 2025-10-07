import Hero from '../components/Hero';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Calendar, Clock, BarChart2, Megaphone, UserPlus, Gavel, Box } from 'lucide-react';

const ratesSample = [
  { name: 'Sago', value: '₹ 2,350', unit: '/100kg', change: '+1.2%' },
  { name: 'Starch', value: '₹ 1,980', unit: '/100kg', change: '-0.4%' },
  { name: 'Broken', value: '₹ 1,200', unit: '/100kg', change: '+0.8%' },
];

const holidaysSample = [
  { date: '2025-10-15', title: 'Regional Festival' },
  { date: '2025-12-25', title: 'Christmas Day' },
];

const newsSample = [
  { id: 1, title: 'Market opens steady after rains', time: '2 hrs ago' },
  { id: 2, title: 'New warehouse in Chennai becomes operational', time: '1 day ago' },
  { id: 3, title: 'Buyer interest rises for Broken grade', time: '2 days ago' },
];

const eventsSample = [
  { id: 1, title: 'Daily auction at 11:00 AM', time: 'Today' },
  { id: 2, title: 'Member training session - Online', time: 'Tomorrow' },
];

const HomePage = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els || els.length === 0) return;
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <style>{`
        /* reveal animations */
        .reveal { opacity: 0; transform: translateY(20px); transition: all 700ms cubic-bezier(.2,.8,.2,1); }
        .reveal.from-left { transform: translateX(-30px); }
        .reveal.from-right { transform: translateX(30px); }
        .reveal.from-bottom { transform: translateY(20px); }
        .reveal.reveal--visible { opacity: 1; transform: translateX(0) translateY(0); }

        /* marquee */
        .marquee-track { display: inline-block; white-space: nowrap; animation: marquee 20s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
      `}</style>
      <Hero />

      {/* Intro banner (overlapping hero) - tightened so it touches the fixed navbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="-mt-6 bg-white rounded-xl shadow-xl p-6 lg:p-10 transform transition-all duration-300 hover:scale-[1.002]">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome to SagoServe</h2>
              {/* looping messages moved outside the banner */}
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto lg:mx-0">Connecting producers, merchants and buyers through transparent e-auctions, live daily rates and dependable warehousing. Explore auctions, register, and stay updated with live market information.</p>
              <div className="mt-4 flex gap-3">
                <NavLink to="/registration" className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">Get Registered <UserPlus className="ml-2" size={16} /></NavLink>
                <NavLink to="/auction" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">View Auctions <Gavel className="ml-2" size={16} /></NavLink>
              </div>
            </div>

            <div className="w-full lg:w-96 mx-auto lg:mx-0">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-4 shadow-inner">
                <h4 className="text-sm font-medium text-gray-700 flex items-center"><BarChart2 className="mr-2" /> Live Average Rates</h4>
                <div className="mt-3 grid grid-cols-1 gap-3">
                  {ratesSample.map(r => (
                    <div key={r.name} className="flex items-center justify-between bg-white rounded-md p-3 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
                      <div>
                        <div className="text-sm text-gray-600">{r.name}</div>
                        <div className="text-lg font-semibold text-gray-900">{r.value} <span className="text-sm text-gray-500">{r.unit}</span></div>
                      </div>
                      <div className={`text-sm font-semibold ${r.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{r.change}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-gray-500">Updated: Just now • Source: Market floor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looping messages removed per request */}
      

    {/* Main grid: Working days, News & Events (card UI) */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Working Days & Holidays - cardified */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1 reveal from-left">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800 flex items-center"><Calendar className="mr-2 text-green-600" /> Working Days</h3>
              <span className="text-sm text-gray-500">Office Info</span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-green-50">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-700 rounded-full shadow-sm">
                  <Clock className="" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Office Hours</div>
                  <div className="font-semibold text-gray-900">Mon - Sat, 9:00 AM - 5:30 PM</div>
                </div>
                <div className="ml-auto">
                  <span className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-xs">Open</span>
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-500 mb-2">Upcoming Holidays</div>
                <div className="grid grid-cols-1 gap-3">
                  {holidaysSample.map(h => (
                    <div key={h.date} className="flex items-center justify-between px-4 py-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition">
                      <div className="text-sm font-medium text-gray-800">{h.title}</div>
                      <div className="text-xs text-gray-600">{h.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Latest News - card tiles with accent */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition reveal from-bottom">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800 flex items-center"><Megaphone className="mr-2 text-green-600" /> Latest News</h3>
              <NavLink to="/news" className="text-sm text-green-600 hover:underline">All news</NavLink>
            </div>

            <div className="mt-4 grid gap-4">
              {newsSample.map(n => (
                <article key={n.id} className="flex gap-4 items-start p-4 rounded-lg bg-gray-50 hover:bg-white transition transform hover:-translate-y-1">
                  <div className="w-3 h-12 rounded-full bg-gradient-to-b from-green-400 to-green-200" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-800">{n.title}</h4>
                    <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                  </div>
                  <div className="ml-2">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs">New</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Today's Events - card timeline style */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition reveal from-right">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800 flex items-center"><Clock className="mr-2 text-green-600" /> Today's Events</h3>
              <span className="text-sm text-gray-500">Schedule</span>
            </div>

      <div className="mt-4 flow-root">
              <ul className="-mb-8">
                {eventsSample.map((e) => (
                  <li key={e.id} className="mb-8 last:mb-0">
                    <div className="relative">
                      <div className="absolute left-0 -ml-3.5 mt-1">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-white border ${e.time === 'Today' ? 'ring-4 ring-green-100' : 'ring-0'}`}>
                          <span className={`h-2.5 w-2.5 rounded-full ${e.time === 'Today' ? 'bg-green-600 animate-pulse' : 'bg-gray-400'}`} />
                        </span>
                      </div>
                      <div className="ml-8 pl-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm font-semibold text-gray-800">{e.title}</div>
                            <div className="text-xs text-gray-500">{e.time}</div>
                          </div>
                          <div className="text-xs text-green-600">{e.time === 'Today' ? 'Happening' : ''}</div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links tiles - upgraded UI */}
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NavLink to="/registration" className="relative group block overflow-hidden rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white p-6 shadow-lg hover:shadow-2xl transform transition hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-md">
                <UserPlus className="text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold">Register</div>
                <div className="text-sm opacity-90">Create an account to join auctions and manage listings</div>
              </div>
            </div>
            <div className="absolute right-4 bottom-4 opacity-80 group-hover:opacity-100 transition">
              <ArrowRightIcon />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-20 transition" />
          </NavLink>

          <NavLink to="/auction" className="relative group block overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 shadow-lg hover:shadow-2xl transform transition hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-md">
                <Gavel className="text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold">Auctions</div>
                <div className="text-sm opacity-90">Live and scheduled auctions with transparent pricing</div>
              </div>
            </div>
            <div className="absolute right-4 bottom-4 opacity-80 group-hover:opacity-100 transition">
              <ArrowRightIcon />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-20 transition" />
          </NavLink>

          <NavLink to="/product" className="relative group block overflow-hidden rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 text-white p-6 shadow-lg hover:shadow-2xl transform transition hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white bg-opacity-10 rounded-md">
                <Box className="text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold">Products</div>
                <div className="text-sm opacity-90">Browse grades, stock and listings across categories</div>
              </div>
            </div>
            <div className="absolute right-4 bottom-4 opacity-80 group-hover:opacity-100 transition">
              <ArrowRightIcon />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-20 transition" />
          </NavLink>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">What our members say</h3>
        <Testimonials />
      </section>

      
    </div>
  );
};

// small local arrow component (keeps lucide usage minimal)
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
    <path d="M5 12h14M13 5l7 7-7 7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default HomePage;

// --- Testimonials component (local) ---
const testimonialsData = [
  { id: 1, name: 'R. Kumar', role: 'Merchant', text: 'SagoServe helped me find buyers quickly — transparent auctions and timely payments.', photo: '/1.png' },
  { id: 2, name: 'M. Priya', role: 'Producer', text: 'Easy registration and consistent daily rates made planning my harvest sales simple.', photo: '/2.png' },
  { id: 3, name: 'A. Johnson', role: 'Buyer', text: 'Reliable warehouse listings and clear lot details. Bidding felt fair and efficient.', photo: '/3.png' },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex(i => (i + 1) % testimonialsData.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setIndex(i => (i - 1 + testimonialsData.length) % testimonialsData.length);
  const next = () => setIndex(i => (i + 1) % testimonialsData.length);

  return (
    <div
      className="relative bg-white rounded-lg shadow p-6 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)`, width: `${testimonialsData.length * 100}%` }}
        >
          {testimonialsData.map((t) => (
            <div key={t.id} className="w-full flex-shrink-0 flex items-center gap-6 px-6 py-4">
              <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full object-cover shadow-md" />
              <div className="flex-1">
                <blockquote className="text-gray-800 text-lg md:text-xl italic">“{t.text}”</blockquote>
                <div className="mt-3 font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
        <button onClick={prev} aria-label="Previous testimonial" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow">‹</button>
        <button onClick={next} aria-label="Next testimonial" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow">›</button>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-green-600' : 'bg-gray-300'} transition`}
          />
        ))}
      </div>
    </div>
  );
}

// Looping messages removed
