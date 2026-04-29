import React, { useState } from 'react';
import { ChevronDown, Droplet } from 'lucide-react';
import { cn } from '@/lib/utils';
import tankerImg from '@/assets/tanker.png';

const faqItems = [
  {
    q: 'We have an STP of 150 KLD, what is the quantity of potable Water we can recover?',
    a: 'Boson WhiteWater system can recover anywhere between 50-75% of potable water from the STP, however the remaining water is sent back to the STP and the system does not send any water to the drain.',
  },
  {
    q: 'Does the Boson Whitewater system have Waste Water?',
    a: 'The system has a waste water, however the waste water is sent back to the STP inlet at the Bar screen.',
  },
  {
    q: 'Is there any specific technology STP required to install Boson whitewater system?',
    a: 'No, as long as the STP treated water is meeting the government norms of disposal, our system can take that as input and process the same.',
  },
  {
    q: 'How much space does the system need?',
    a: 'For a 100 KLD recovery we need a space of 18 Feet x 11 Feet X 12 feet (Height)',
  },
  {
    q: 'What are the economics and agreement conditions?',
    a: (
      <>
        <p className="mb-2"><strong>A.</strong> We need to be given space required for the size of the system.</p>
        <p><strong>B.</strong> Inlet (1 Line), Outlet (2-Line) plumbing lines to our system</p>
      </>
    ),
  },
  {
    q: 'What is the minimum volume of BOSON White Water can be ordered?',
    a: 'In Bangalore, BOSON White Water comes in 12 KL water tanker, hence the minimum quantity to be ordered is 12,000 Litres.',
  },
  {
    q: "Can BOSON White Water System replace the existing STP's?",
    a: 'No, BOSON White Water system is a tertiary treatment system designed to improve the quality of the existing STP treated water to meet the BIS 10500:2012 standards. Hence the existing STP needs to be operated to meet the PCB disposal water standards.',
  },
  {
    q: 'Can BOSON White Water System be installed in Independent homes?',
    a: "No. Since Independent homes or smaller apartments won't have the Sewage Treatment Plant (STP), setting up BOSON Whitewater System is not viable for independent homes or smaller apartments which doesn't have STP's.",
  },
  {
    q: 'Which Cities do you operate in?',
    a: 'Currently we are operational in Bangalore, Hyderabad, Pune, Chennai & Coimbatore.',
  },
  {
    q: 'Can BOSON White Water system installed in all the apartments?',
    a: 'BOSON White Water System can be installed in any apartment where there are 200+ families living in, which has a functional Sewage Treatment Plant (STP).',
  },
  {
    q: 'How much Space required does the system need?',
    a: 'In case of an apartment, for 200 - 300 family apartment, BOSON White Water system requires approx. 200 square feet. For 300+ family apartment, space required will be 300 square feet. In case of a commercial building/ Industries, to produce 50 KLD of BOSON White Water from STP treated water, space needed will be 150 - 200 Square feet, and it requires approx. 300 square feet to produce 100 KLD of BOSON White Water.',
  },
  {
    q: 'How much power required to operate the plant?',
    a: 'To produce 50 KLD of BOSON White Water, approx. 15-18 KWh is needed, however this may vary based on the site conditions.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(4); // 5th item (economics) expanded by default

  return (
    <div className="relative min-h-screen overflow-hidden pt-16 sm:pt-20 font-sans">
      {/* Background: tanker image with overlay for readability */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/tanker.png" alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* FAQS heading + droplet */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-tight drop-shadow-lg">
            FAQs
          </h1>
          <div className="mt-4 flex justify-center">
            <div className="w-10 h-10 rounded-full bg-cyan-400/30 backdrop-blur-sm border border-cyan-300/40 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Droplet className="w-5 h-5 text-cyan-200" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Accordion: separate glass cards with gap */}
        <div className="space-y-3 sm:space-y-4">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                'rounded-2xl overflow-hidden border border-white/20 shadow-xl transition-all duration-300',
                openIndex === idx
                  ? 'bg-slate-800/40 backdrop-blur-xl ring-1 ring-cyan-400/20'
                  : 'bg-slate-800/25 backdrop-blur-lg hover:bg-slate-800/35 hover:border-white/30'
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className={cn(
                  'w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 transition-colors',
                  openIndex === idx && 'bg-white/5'
                )}
              >
                <span className="font-semibold text-sm sm:text-base pr-4 text-white/95">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-cyan-300/90 transition-transform duration-200',
                    openIndex === idx && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === idx && (
                <div className="px-5 sm:px-6 pb-5 pt-5 text-slate-900 text-sm sm:text-base leading-relaxed font-medium bg-white">
                  {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
