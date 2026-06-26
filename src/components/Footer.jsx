import React from 'react'

const Footer = () => {
  return (
    <>
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

  <div className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
    ✨ Made by <span className="font-bold tracking-wide">Mohd Mairaj</span>
  </div>

  <div className="flex gap-4">
    <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
    <span>•</span>
    <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
  </div>
</div>

        </div>
      </footer>
    </>
  )
}

export default Footer