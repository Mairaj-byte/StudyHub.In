import React, { useEffect, useRef, useState } from 'react';
// 1. Your imports are correct!
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

// Custom intersection observer hook for scroll animations
function useScrollReveal() {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target); // Reveal only once
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [elementRef, isRevealed];
}

// Reusable Course Card Component
function CourseCard({ id, title, rating, reviews, instructor, price, originalPrice, badge, badgeColor, link, index, image }) {
  const [cardRef, isRevealed] = useScrollReveal();
  
  // Alternate entry direction based on index (even = left side, odd = right side)
  const entryDirectionClass = index % 2 === 0 
    ? (isRevealed ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0')
    : (isRevealed ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0');

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-0.5 ${entryDirectionClass}`}
    >
      {/* Left Side: Thumbnail Media */}
      <div className="md:col-span-5 relative min-h-[240px] bg-slate-900 overflow-hidden flex items-center justify-center">
        
        {/* Dynamic Course Image */}
        <img
          src={image} // This now receives the actual imported asset object/URL
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Right Side: Content Details */}
      <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 font-bold">★★★★★</span>
              <span className="text-slate-500 font-medium">{rating} ({reviews} ratings)</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-slate-500 font-medium">{instructor}</span>
          </div>
          <div className="flex items-baseline gap-3 pt-2">
            <span className="text-2xl font-black text-indigo-600">₹{price}</span>
            <span className="text-sm font-medium text-slate-400 line-through">₹{originalPrice}</span>
          </div>
        </div>
        <a href={link} className="w-full inline-flex items-center justify-center bg-indigo-600 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 text-center">
          View Details
        </a>
      </div>
    </div>
  );
}

export default function CourseSelection() {
  // 2. Updated the image keys here to reference the actual imported variables without quotes.
  const courses = [
    {
      title: "Complete Digital Marketing Mastermind (All-in-One Blueprint)",
      rating: "4.9",
      reviews: "245",
      instructor: "Shivanshu Sir",
      price: "6,999",
      originalPrice: "12,000",
      badge: "Live + Recorded",
      badgeColor: "bg-emerald-600",
      link: "#digital-marketing-details",
      image: image1
    },
    {
      title: "Advanced SEO & Link Building Course (Rank #1 on Google)",
      rating: "4.8",
      reviews: "112",
      instructor: "Shivanshu Sir",
      price: "3,499",
      originalPrice: "5,500",
      badgeColor: "bg-red-600",
      link: "#seo-details",
      image: image2
    },
    {
      title: "Google Ads Masterclass with AI Automation (2026 Edition)",
      rating: "5.0",
      reviews: "189",
      instructor: "Shivanshu Sir",
      price: "4,499",
      originalPrice: "8,000",
      badge: "Recorded Version",
      badgeColor: "bg-red-600",
      link: "#google-ads-details",
      image: image3
    },
    {
      title: "Meta Ads (Facebook & Instagram) Framework with AI Targeting",
      rating: "4.9",
      reviews: "164",
      instructor: "Shivanshu Sir",
      price: "4,299",
      originalPrice: "7,500",
      badge: "Live Workshop",
      badgeColor: "bg-emerald-600",
      link: "#meta-ads-details",
      image: image4
    },
    {
      title: "Social Media Marketing Bootcamp: Content to Conversions",
      rating: "4.7",
      reviews: "98",
      instructor: "Shivanshu Sir",
      price: "2,999",
      originalPrice: "5,000",
      badge: "Recorded Version",
      badgeColor: "bg-red-600",
      link: "#smm-details",
      image: image5
    },
    {
      title: "Social Media Management & Agency Growth Suite",
      rating: "4.8",
      reviews: "83",
      instructor: "Shivanshu Sir",
      price: "3,799",
      originalPrice: "6,500",
      badge: "Live + Recorded",
      badgeColor: "bg-emerald-600",
      link: "#smm-management-details",
      image: image6
    },
    {
      title: "Google My Business & Local SEO Domination Course",
      rating: "4.9",
      reviews: "136",
      instructor: "Shivanshu Sir",
      price: "2,499",
      originalPrice: "4,000",
      badge: "Recorded Version",
      badgeColor: "bg-red-600",
      link: "#gmb-details",
      image: image7
    }
  ];

  return (
    <section className="bg-slate-50/50 py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Flagship <span className="text-indigo-600">Programs/Courses</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal">
            In-depth, result-driven learning experiences designed to transform your career and business growth.
          </p>
        </div>

        {/* Course Cards Container */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard 
              key={index} 
              index={index} 
              {...course} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}