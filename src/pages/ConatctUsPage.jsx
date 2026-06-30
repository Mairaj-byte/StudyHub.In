import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const ContactUsPage = () => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Capture which course page the user came from originally
  const targetCourse = location.state?.fromCourse || "";

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(
        "service_wg5mjba", 
        "template_4jcnwer", 
        form.current,
        { publicKey: "emZRRpc_3TNMo6VIx" }
      )
      .then(
        () => {
          setStatus({ type: "success", message: "Message sent! Redirecting back to course content..." });
          form.current.reset();
          
          // Redirect back to the originating course with unlocked state flags active
          setTimeout(() => {
            if (targetCourse) {
              navigate(`/course/${targetCourse}`, { state: { unlocked: true } });
            } else {
              navigate("/"); // fallback safe option
            }
          }, 2000);
        },
        (error) => {
          console.error(error);
          setStatus({ type: "error", message: "Failed to send message. Please try again." });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full mx-auto space-y-8">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Connect With Our <span className="text-indigo-600">Team</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            {targetCourse 
              ? "Complete the quick form below to verify access and unlock full course blueprint blueprints." 
              : "Have questions? Fill out the details below and we will get right back to you."}
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-xl shadow-slate-100/70 border border-slate-200/60 rounded-3xl p-6 sm:p-10 space-y-5"
        >
          {/* Metadata tracking inputs */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          {targetCourse && <input type="hidden" name="requested_course" value={targetCourse} />}

          <div>
            <label className="block mb-1.5 text-sm font-semibold text-slate-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-slate-200 rounded-xl p-3.5 outline-none font-medium text-slate-800 transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-sm font-semibold text-slate-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-slate-200 rounded-xl p-3.5 outline-none font-medium text-slate-800 transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-sm font-semibold text-slate-700">Subject</label>
            <input
              type="text"
              name="title"
              required
              defaultValue={targetCourse ? `Inquiry regarding course: ${targetCourse}` : ""}
              className="w-full border border-slate-200 rounded-xl p-3.5 outline-none font-medium text-slate-800 transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              placeholder="What are you getting in touch about?"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-sm font-semibold text-slate-700">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-slate-200 rounded-xl p-3.5 outline-none font-medium text-slate-800 transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 resize-none"
              placeholder="Write your questions or notes here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading || status.type === "success"}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? (
              "Processing Transmission..."
            ) : (
              <>
                <Send size={18} /> Send Message & Unlock
              </>
            )}
          </button>

          {status.message && (
            <div className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-2.5 border ${
              status.type === "success" 
                ? "bg-emerald-50 border-emerald-100 text-emerald-800" 
                : "bg-rose-50 border-rose-100 text-rose-800"
            }`}>
              {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
              <p>{status.message}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;