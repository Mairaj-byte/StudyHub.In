import React, { useState } from 'react';
import { 
  Menu, X, CheckCircle, Star, BookOpen, Target, Award, 
  ArrowRight, Users, ChevronDown, ChevronUp, Zap, 
  TrendingUp, Globe, ShieldCheck, Play
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // FAQ Data
  const faqs = [
    {
      q: "Do I need prior marketing experience to join?",
      a: "Not at all. This course is designed from scratch, moving from fundamental concepts to advanced AI-driven digital marketing strategies."
    },
    {
      q: "Will I get practical experience?",
      a: "Yes, 70% of the curriculum is hands-on. You will work on 5+ live projects, manage real ad budgets, and build actual campaigns."
    },
    {
      q: "Is there placement assistance?",
      a: "Absolutely. We offer dedicated resume building sessions, mock interviews, and direct referrals to our 150+ hiring partners."
    },
    {
      q: "What is the duration of the masterclass?",
      a: "The comprehensive program spans over 12 weeks, featuring live weekend sessions and interactive weekday doubt-clearing labs."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <img src="https://tse1.mm.bing.net/th/id/OIP.dKiU1kUiu6rQ8dc4gWbOrQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="NovaNectar Logo" className="h-10 w-10 border-white rounded-full" />

              <span className="text-xl font-bold tracking-tight text-slate-900">
                NovaNectar<span className="text-indigo-600">.</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <a href="#features" className="hover:text-indigo-600 transition-colors">Curriculum</a>
              <a href="#roadmap" className="hover:text-indigo-600 transition-colors">Learning Path</a>
              <a href="#instructor" className="hover:text-indigo-600 transition-colors">Instructor</a>
              <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#pricing" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 text-sm">
                Enroll Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 absolute w-full left-0 shadow-xl animate-fadeIn">
            <a href="#features" onClick={()=>setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Curriculum</a>
            <a href="#roadmap" onClick={()=>setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Learning Path</a>
            <a href="#instructor" onClick={()=>setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Instructor</a>
            <a href="#pricing" onClick={()=>setIsMenuOpen(false)} className="block py-2 text-slate-600 font-medium">Pricing</a>
            <a href="#pricing" onClick={()=>setIsMenuOpen(false)} className="block text-center bg-indigo-600 text-white py-3 rounded-xl font-semibold">
              Enroll Now
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 -z-10 w-1/4 h-1/4 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                <Zap size={14} className="fill-indigo-600" /> Master Digital Marketing in 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Transform Into An Elite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Digital Marketer
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0 font-normal leading-relaxed">
                Learn end-to-end performance marketing, SEO, and AI automation tools directly from India's premium mentor, <strong className="text-slate-900 font-semibold">Shivanshu Sir</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <a href="#pricing" className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all hover:-translate-y-0.5">
                  Claim Your Seat <ArrowRight size={18} />
                </a>
                <a href="#instructor" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                  Meet Your Mentor
                </a>
              </div>
            </div>
            
            {/* Visual element / video placeholder */}
            <div className="md:col-span-5 relative">
              <div className="aspect-video md:aspect-square bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-slate-900/90 mix-blend-multiply z-10"></div> */}
                <img 
                  src="src/assets/heropic.webp"
                  alt="Digital Marketing Session"
                  className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>


          </div>
        </div>
      </header>

      {/* 3. TRUST & SOCIAL PROOF */}
<section className="bg-white border-y border-slate-100 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

      {/* Companies */}
      <div className="text-center lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Trusted By Professionals At
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-3 grayscale opacity-60 font-black text-lg sm:text-xl text-slate-600 tracking-tight">
          <span>GOOGLE</span>
          <span>AMAZON</span>
          <span>META</span>
          <span>ZOMATO</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-center">

        <div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900">
            15,000+
          </p>
          <p className="text-xs font-medium text-slate-500">
            Students Trained
          </p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-black text-indigo-600 flex items-center justify-center gap-1">
            4.9
            <Star
              size={18}
              className="fill-amber-400 text-amber-400"
            />
          </p>
          <p className="text-xs font-medium text-slate-500">
            Google Rating
          </p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900">
            94%
          </p>
          <p className="text-xs font-medium text-slate-500">
            Placement Rate
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* 4. COURSE HIGHLIGHTS */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Engineered for High-Impact Learning</h2>
            <p className="text-slate-600 mt-4 text-base">We don't do boring presentations. Get an immersive industry ecosystem experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="text-indigo-600" />, title: "Live Practical Labs", desc: "Access premium marketing frameworks and tools completely live with real case-studies." },
              { icon: <Target className="text-emerald-600" />, title: "$1,000 Ad Budget", desc: "Get practical hands-on budget managed by you to launch live test advertising campaigns." },
              { icon: <Award className="text-purple-600" />, title: "Dual Accreditation", desc: "Gain certifications recognized worldwide by leading blue-chip marketing agencies." },
              { icon: <Users className="text-amber-600" />, title: "1-on-1 Mentorship", desc: "Resolve errors instantly with our 24/7 dedicated support desk channels." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-slate-50 rounded-xl w-fit mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Why Choose NovaNectar?</h2>
              <p className="text-slate-600">Standard institutes teach outdated theories. NovaNectar adapts rapidly to algorithmic shifts, ensuring your marketing strategy remains ahead of the curve.</p>
              
              <div className="space-y-4 pt-2">
                {[
                  "AI Integration: Learn Prompting for Ad copies & Midjourney for Visuals",
                  "Direct access to Shivanshu Sir's secret growth hacking frameworks",
                  "Lifetime community membership access with weekly trends breakdown",
                  "Comprehensive career acceleration program with resume-building workshops"
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-sm sm:text-base">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <TrendingUp size={200} />
              </div>
              <p className="text-indigo-100 uppercase tracking-wider text-xs font-bold">The ROI Advantage</p>
              <h3 className="text-3xl font-bold mt-2 mb-6">Stop wasting years guessing algorithms.</h3>
              <p className="text-indigo-100 leading-relaxed mb-6">Our students don't just secure jobs; they lead digital execution operations across multi-million dollar direct-to-consumer businesses globally.</p>
              <div className="border-t border-indigo-400/30 pt-6 flex gap-6">
                <div>
                  <h4 className="text-2xl font-black">3.5x</h4>
                  <p className="text-xs text-indigo-200">Average Salary Hike</p>
                </div>
                <div>
                  <h4 className="text-2xl font-black">150+</h4>
                  <p className="text-xs text-indigo-200">Hiring Corporate Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED COURSE SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Flagship Program</span>
            <h2 className="text-3xl font-black text-slate-900 mt-3">The Ultimate Digital Marketing Blueprint</h2>
          </div>
          
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid md:grid-cols-12">
            <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex gap-1 mb-2 text-amber-400">
                  <Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" /><Star size={16} className="fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Next-Gen Growth Marketer Masterclass</h3>
                <p className="text-sm text-slate-500 mt-2">Become a complete T-shaped marketer covering Data Analytics, Paid Ads, Brand strategy, and Advanced Funnels.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg"><ClockIcon /> 12 Weeks Live</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg"><LayersIcon /> 14 Modules</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg"><UserIcon /> 1-on-1 Mentorship</div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg"><BriefcaseIcon /> Placement Guarantee</div>
              </div>
            </div>
            <div className="bg-slate-900 p-8 md:p-12 md:col-span-5 text-white flex flex-col justify-center items-center text-center relative">
              <p className="text-slate-400 text-sm font-medium line-through">₹29,999</p>
              <p className="text-5xl font-black tracking-tight text-white mt-1">₹9,999</p>
              <p className="text-emerald-400 text-xs font-bold tracking-wide mt-2">Save 66% Early Bird Discount</p>
              <a href="#pricing" className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/30">
                Secure Your Spot
              </a>
              <p className="text-[10px] text-slate-400 mt-3">⚡ Limited to next 15 students only</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEARNING PATH ROADMAP */}
      <section id="roadmap" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Your Structured 4-Step Roadmap</h2>
            <p className="text-slate-500 mt-2">Zero experience to working as a high-paid professional marketing expert.</p>
          </div>

          <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
            {[
              { step: "Phase 01", title: "Core Fundamentals & Copywriting", desc: "Master market psychology, consumer behavior, brand development patterns, and write killer high-converting text blueprints." },
              { step: "Phase 02", title: "Search Dominance & Optimization", desc: "Advanced On-page, Off-page SEO technicalities along with high-ranking algorithmic keyword strategy structures." },
              { step: "Phase 03", title: "Performance Engine Analytics", desc: "Scale Meta Ads, Google PPC campaigns, optimize custom pipelines, and handle real budget distribution matrix systems." },
              { step: "Phase 04", title: "AI-Growth Automation & Freelancing", desc: "Leverage modern automation plugins to maximize output, acquire corporate retainers, and land agency jobs easily." }
            ].map((phase, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-3 top-1 bg-white border-2 border-indigo-600 rounded-full h-6 w-6 flex items-center justify-center transition-colors group-hover:bg-indigo-600">
                  <div className="h-2 w-2 bg-indigo-600 rounded-full group-hover:bg-white"></div>
                </div>
                <div className="absolute -left-28 top-1 hidden md:block text-right w-20 text-xs font-bold text-indigo-600 tracking-wider uppercase">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{phase.title}</h3>
                <p className="text-slate-500 text-sm mt-2 max-w-2xl leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTRUCTOR SECTION */}
      <section id="instructor" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_45%)]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 max-w-sm mx-auto md:mx-0">
              <div className="aspect-[4/5] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 p-3 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
                  alt="Shivanshu Sir" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <span className="text-indigo-400 font-bold uppercase text-xs tracking-widest">Learn from the Practitioner</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Meet Shivanshu Sir</h2>
              <p className="text-slate-400 leading-relaxed">
                Shivanshu Sir is a seasoned growth strategist, consultant, and founder with over a decade of industry expertise building direct-to-consumer funnels. He has handled <strong>₹10Cr+ in ad spend</strong> and engineered scalable frameworks for top digital start-ups.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                <div>
                  <h4 className="text-2xl font-bold text-indigo-400">10+ Years</h4>
                  <p className="text-xs text-slate-400 mt-1">Industry Operations Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-indigo-400">₹10Cr+</h4>
                  <p className="text-xs text-slate-400 mt-1">Ad Budgets Managed</p>
                </div>
              </div>
              <blockquote className="border-l-4 border-indigo-500 pl-4 text-slate-300 italic text-sm">
                "My mission is simple: To bridge the massive gap between traditional college education and modern algorithmic market standards."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SUCCESS STORIES (TESTIMONIALS) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Real People, Proof & Outcomes</h2>
            <p className="text-slate-500 mt-2">Hear directly from students who changed their career paths completely.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ananya Mehta", role: "Growth Specialist, Nykaa", text: "Shivanshu Sir's performance marketing matrix completely changed how I look at ads. I got hired even before finishing module 8!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
              { name: "Rahul Deshmukh", role: "Freelance Agency Founder", text: "From charging pennies to managing retainer contracts worth ₹1.5 Lakhs/month. The freelancing framework inside phase 4 is pure gold.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
              { name: "Kabir Verma", role: "SEO Lead, Razorpay", text: "The technical deep-dives into core algorithms helped me clear complex multi-tier interviews smoothly. Highly recommended masterclass.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" }
            ].map((story, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <p className="text-slate-600 text-sm leading-relaxed italic">"{story.text}"</p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-50">
                  <img src={story.img} alt={story.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{story.name}</h4>
                    <p className="text-[11px] text-slate-400 font-medium">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CERTIFICATION SHOWCASE */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">Industry Validation</span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Earn Verified Industry Credentials</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Stand out globally with verified dual certificates from NovaNectar, signed directly by Shivanshu Sir, mapping your specialized knowledge expertise instantly.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <span className="flex items-center gap-1.5 text-xs bg-slate-100 px-3 py-1.5 rounded-md font-medium text-slate-600"><ShieldCheck size={14} /> Verifiable ID</span>
                <span className="flex items-center gap-1.5 text-xs bg-slate-100 px-3 py-1.5 rounded-md font-medium text-slate-600"><Globe size={14} /> LinkedIn shareable</span>
              </div>
            </div>
            
            {/* Visual Certificate Mockup */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/60 relative shadow-inner">
              <div className="bg-white p-6 sm:p-8 rounded-xl border-4 border-double border-slate-200 aspect-[1.4/1] flex flex-col justify-between shadow-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-black tracking-tight text-slate-800">NovaNectar.</h4>
                    <p className="text-[9px] text-indigo-600 uppercase tracking-widest font-bold">Digital Academy Certificate</p>
                  </div>
                  <Award className="text-indigo-600" size={32} />
                </div>
                
                <div className="text-center my-4">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400">This credential certifies that</p>
                  <h3 className="text-xl sm:text-2xl font-serif text-slate-900 my-1 font-bold">Your Professional Name</h3>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">has masterfully completed all modules of the advanced performance marketing & automation ecosystem curriculum.</p>
                </div>

                <div className="flex justify-between items-end border-t border-slate-100 pt-4">
                  <div className="text-left">
                    <p className="text-[8px] uppercase font-bold text-slate-400">Instructor Signature</p>
                    <p className="text-xs font-serif font-bold text-slate-800 mt-1 italic">Shivanshu</p>
                  </div>
                  <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-mono text-slate-400 border border-slate-200">SEAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. PRICING SECTION */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Invest in High-Income Skills</h2>
            <p className="text-slate-500 mt-2">Transparent custom pricing plan structure with absolute zero hidden parameters.</p>
          </div>

          <div className="bg-white rounded-3xl border-2 border-indigo-600 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold tracking-widest px-6 py-2 uppercase rounded-bl-xl shadow-md">
              Most Popular
            </div>
            
            <div className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">All-In-One Pro Pass</h3>
                  <p className="text-sm text-slate-500 mt-1">Complete live cohort access including career tool suite upgrades.</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-slate-900">₹9,999</span>
                    <span className="text-sm font-medium text-slate-400 line-through">₹29,999</span>
                  </div>
                  <p className="text-xs text-indigo-600 font-bold mt-1">One-time payment. Lifetime access.</p>
                </div>
              </div>

              <hr className="my-8 border-slate-100" />

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Complete 12-Week Live Program Access",
                  "Direct Weekend Live Sessions with Shivanshu Sir",
                  "₹85,000+ Premium Growth Marketing Tool Suite",
                  "Personalized Resume & Interview Mentorship",
                  "Verified Shareable Professional Credentials",
                  "Guaranteed Live Placement Referrals"
                ].map((feature, index) => (
                  <div key={index} className="flex gap-3 items-center text-sm font-medium text-slate-700">
                    <CheckCircle size={16} className="text-indigo-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-center shadow-lg shadow-indigo-200 transition-all text-base">
                  Enroll Now & Secure Access
                </button>
                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1.5">
                  🔒 Secure 256-bit encrypted checkout payment network systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Queries</h2>
            <p className="text-slate-500 mt-2">Have questions? We have compiled the answers to help you navigate transparently.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all bg-slate-50/50">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  {activeFaq === index ? <ChevronUp size={18} className="text-indigo-600" /> : <ChevronDown size={18} />}
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-500 leading-relaxed bg-white border-t border-slate-100 animate-slideDown">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-base">N</div>
                <span className="text-lg font-bold text-white tracking-tight">NovaNectar.</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Empowering modern professionals with elite practical digital marketing frameworks globally.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Curriculum</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#features" className="hover:text-white transition-colors">Performance Marketing</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Advanced SEO Blueprint</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">AI Content Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#instructor" className="hover:text-white transition-colors">About Mentor</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Options</a></li>
                <li><span className="text-slate-600">Careers (Hiring)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Support</h4>
              <p className="text-xs text-slate-500 mb-2">Have issues? Reach out instantly:</p>
              <p className="text-xs font-semibold text-slate-300">support@novanectar.com</p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>© 2026 NovaNectar Inc. Directed by Shivanshu Sir. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

/* Micro-icons used in Featured Card */
const ClockIcon = () => <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const LayersIcon = () => <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const UserIcon = () => <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BriefcaseIcon = () => <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;

export default LandingPage;