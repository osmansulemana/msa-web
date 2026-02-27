import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { FAQS } from '../data/constants';
import { SectionHeader } from './SectionHeader';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader subtitle="Got Questions?" title="Frequently Asked Questions" />

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl transition-colors duration-300 overflow-hidden ${openIndex === index ? 'border-msa-primary bg-slate-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ml-4 ${openIndex === index ? 'rotate-180 text-msa-primary' : ''}`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
