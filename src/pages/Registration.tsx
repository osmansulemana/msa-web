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
      // Here you might redirect, e.g. using useNavigate()
      // navigate('/');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center pt-32 pb-12 px-4 sm:px-8">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-10"></div>
        <img
          src={IMAGES.training}
          alt="Soccer training"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Main Content Card */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* Left side Image/Text */}
        <div className="hidden lg:flex lg:w-5/12 relative bg-slate-900">
          <img
            src={IMAGES.training}
            alt="Soccer training"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-20 flex flex-col justify-end p-12 text-white h-full">
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 font-bold mb-6 text-sm">
              Join the Legacy
            </div>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-black leading-none mb-6 tracking-tight">
              START YOUR <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-msa-primary to-blue-400">
                JOURNEY
              </span>
            </h1>
            <p className="text-lg text-slate-200 font-light leading-relaxed">
              Take the first step towards excellence. Our world-class facilities and UEFA-licensed coaching staff are waiting to unlock your potential.
            </p>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full lg:w-7/12 flex items-center justify-center p-8 sm:p-12 bg-white">
          <div className="w-full max-w-lg">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Registration</h2>
              <p className="text-slate-500 text-lg">Secure your spot for the upcoming season or book a trial session today.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16 bg-white rounded-3xl shadow-xl border border-slate-100 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Received!</h4>
                <p className="text-slate-600 max-w-xs mx-auto text-lg leading-relaxed">
                  Our coaching staff will review your application and contact you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white  rounded-3xl border-slate-100 animate-fade-in-up">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Parent / Guardian</label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-msa-primary focus:ring-0 transition-colors bg-slate-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Player Name</label>
                    <input
                      type="text"
                      name="playerName"
                      required
                      value={formData.playerName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-msa-primary focus:ring-0 transition-colors bg-slate-50 focus:bg-white"
                      placeholder="Jimmy Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-msa-primary focus:ring-0 transition-colors bg-slate-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-msa-primary focus:ring-0 transition-colors bg-slate-50 focus:bg-white"
                      placeholder="+1 (555) 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Program of Interest</label>
                  <div className="relative">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 focus:border-msa-primary focus:ring-0 transition-colors bg-slate-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="junior">Junior Academy (Ages 6-10)</option>
                      <option value="elite">Elite Development (Ages 11-16)</option>
                      <option value="keeper">Goalkeeper Union</option>
                      <option value="summer">Summer Camps</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button type="submit" className="w-full py-5 text-lg shadow-xl shadow-msa-primary/20 hover:shadow-2xl hover:shadow-msa-primary/30 transition-all">
                    Submit Application
                  </Button>
                  <p className="text-sm text-center text-slate-400 mt-6 max-w-xs mx-auto">
                    By submitting, you agree to our Terms of Service & Privacy Policy.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
