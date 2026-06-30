import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { coursesData } from '../components/CourseSelection'; 
import { ArrowLeft, Clock, Award, Star, ShieldCheck, Lock } from 'lucide-react';

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user successfully completed the contact form redirect
  const isUnlocked = location.state?.unlocked === true;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  const course = coursesData.find((c) => c.slug === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Course Not Found</h2>
        <p className="text-slate-500 mt-2 mb-6">The dynamic link you are seeking might have changed.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">
          <ArrowLeft size={18} /> Back to Courses
        </Link>
      </div>
    );
  }

  const handleUnlockClick = () => {
    // Pass the current course information so the contact form knows where to return
    navigate('/contact', { state: { fromCourse: courseId } });
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-16 relative">
      {/* Dynamic Sub-header Navigation Bar */}
      <div className="bg-white border-b border-slate-200/60 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            <ArrowLeft size={16} /> Back to Hub
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: MAIN DETAILS */}
          <div className="lg:col-span-8 space-y-8 relative">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-sm space-y-4">
              {course.badge && (
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${course.badgeColor || 'bg-indigo-600'}`}>
                  {course.badge}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm pt-1 text-slate-600">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star size={16} fill="currentColor" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 font-normal">({course.reviews} reviews)</span>
                </div>
                <span className="text-slate-300">•</span>
                <div>Lead Instructor: <span className="font-semibold text-slate-800">{course.instructor}</span></div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
                {course.description || "Take your strategic capabilities to the next level."}
              </p>
            </div>

            {/* CURRICULUM BLUEPRINT SECTION (Hidden/Blurred if locked) */}
            <div className={`transition-all duration-500 relative ${!isUnlocked ? 'max-h-[280px] overflow-hidden select-none pointer-events-none' : ''}`}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Program Core Blueprint</h3>
                <div className="grid grid-cols-1 gap-4">
                  {(course.modules || ["Foundations Core Blueprint", "Advanced Multi-Channel Scaling", "Data Optimization Analytics Logs", "Conversion Rate Automation Architectures"]).map((module, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                      <div className="bg-indigo-50 p-1.5 rounded-xl text-indigo-600 font-bold text-sm min-w-[32px] text-center mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-base">{module}</h4>
                        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">In-depth core strategy modules packed with downloadable system models.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blurry fade wrapper + Lock Overlay CTA */}
              {!isUnlocked && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent flex flex-col items-center justify-end pb-12 px-4">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200/80 text-center max-w-md w-full space-y-4 pointer-events-auto transform translate-y-4">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                      <Lock size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Syllabus & Material Locked</h4>
                      <p className="text-slate-500 text-sm mt-1">Please drop an inquiry to unlock full structural breakdowns instantly.</p>
                    </div>
                    <button 
                      onClick={handleUnlockClick}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md shadow-indigo-100"
                    >
                      Unlock Full Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANEL: PRICE / IMAGE STICKY ANCHOR */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-xl overflow-hidden">
              <div className="aspect-video w-full relative bg-slate-900">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Special Program Pricing</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">₹{course.price}</span>
                    <span className="text-base font-medium text-slate-400 line-through">₹{course.originalPrice}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-indigo-600" />
                    <span>{course.duration || "4 Weeks Duration"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award size={18} className="text-indigo-600" />
                    <span>Verifiable Career Certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-indigo-600" />
                    <span>Lifetime Asset Access Logistics</span>
                  </div>
                </div>

                {isUnlocked ? (
                  <button className="w-full inline-flex items-center justify-center bg-indigo-600 text-white font-bold px-6 py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg text-center text-base">
                    Instant Enrollment
                  </button>
                ) : (
                  <button 
                    onClick={handleUnlockClick}
                    className="w-full inline-flex items-center justify-center bg-slate-800 text-white font-bold px-6 py-4 rounded-xl hover:bg-slate-900 transition-all text-center text-base gap-2"
                  >
                    <Lock size={16} /> Contact to Enroll
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}