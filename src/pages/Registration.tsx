import React, { useState } from 'react';
import { Button } from '../components/Button';
import { IMAGES } from '../data/constants';

export const Registration = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    playerName: '',
    email: '',
    phone: '',
    program: 'junior',
    experience: 'beginner'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form and close after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        parentName: '',
        playerName: '',
        email: '',
        phone: '',
        program: 'junior',
        experience: 'beginner'
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50">

      {/* Main Content Card — Sharp full bleed width box */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col lg:flex-row bg-white border border-slate-200 shadow-2xl">

        {/* Left side Image/Text */}
        <div className="hidden lg:flex lg:w-5/12 relative bg-msa-midnight overflow-hidden">
          <img
            src={IMAGES.training}
            alt="Soccer training"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-2 bg-msa-primary"></div>

          <div className="relative z-20 flex flex-col justify-between p-12 text-white h-full bg-linear-to-t from-msa-midnight/90 to-transparent">
            <div>
              <img src="/msalogo.png" alt="MSA Logo" className="w-12 h-12 mb-8" />
            </div>
            <div>
              <div className="w-10 h-1 bg-msa-primary mb-6"></div>
              <h1 className="heading-editorial text-5xl md:text-6xl xl:text-7xl mb-6 tracking-wide leading-none">
                START YOUR<br />
                <span className="text-msa-primary">JOURNEY</span>
              </h1>
              <p className="text-slate-300 font-medium uppercase tracking-widest text-sm mb-4">
                Join the Legacy &bull; Train like a pro
              </p>
              <p className="text-slate-400 leading-relaxed font-light mt-4">
                Take the first step towards excellence. Our world-class facilities and UEFA-licensed coaching staff are waiting to unlock your potential.
              </p>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-7/12 flex items-center justify-center p-8 sm:p-16 bg-white relative">
          {/* Accent subtle background texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

          <div className="w-full max-w-lg relative z-10">
            <div className="mb-12">
              <h2 className="heading-editorial text-5xl text-slate-900 mb-2">REGISTRATION</h2>
              <div className="w-12 h-1 bg-msa-primary mb-4"></div>
              <p className="text-slate-500 font-medium tracking-wide">Secure your spot for the upcoming season or book a trial session today.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16 bg-slate-50 border border-slate-200 animate-fade-in-up">
                <div className="w-16 h-16 bg-msa-primary text-white flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="heading-editorial text-4xl text-slate-900 mb-3 tracking-wide">APPLICATION RECEIVED</h4>
                <p className="text-slate-600 max-w-xs mx-auto mb-6">
                  Our coaching staff will review your application and contact you within 48 hours.
                </p>
                <Button variant="outline" className="text-sm">BACK TO HOME</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-widest">Parent / Guardian</label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 focus:border-msa-primary focus:ring-0 transition-colors bg-white font-medium placeholder:text-slate-300 placeholder:font-normal"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-widest">Player Name</label>
                    <input
                      type="text"
                      name="playerName"
                      required
                      value={formData.playerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 focus:border-msa-primary focus:ring-0 transition-colors bg-white font-medium placeholder:text-slate-300 placeholder:font-normal"
                      placeholder="Jimmy Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-widest">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 focus:border-msa-primary focus:ring-0 transition-colors bg-white font-medium placeholder:text-slate-300 placeholder:font-normal"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-widest">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 focus:border-msa-primary focus:ring-0 transition-colors bg-white font-medium placeholder:text-slate-300 placeholder:font-normal"
                      placeholder="+1 (555) 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-widest">Program of Interest</label>
                  <div className="relative">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 focus:border-msa-primary focus:ring-0 transition-colors bg-white appearance-none cursor-pointer font-medium"
                    >
                      <option value="junior">Junior Academy (Ages 6-10)</option>
                      <option value="elite">Elite Development (Ages 11-16)</option>
                      <option value="keeper">Goalkeeper Union</option>
                      <option value="summer">Summer Camps</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-msa-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold max-w-xs">
                    By submitting, you agree to our <a href="#" className="text-slate-900 hover:text-msa-primary underline underline-offset-4 pointer-events-none">Terms</a>
                  </p>
                  <Button type="submit" variant="primary" className="w-full sm:w-auto px-10 py-4 text-sm whitespace-nowrap">
                    Submit Application
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
