import React from 'react';
import bgVideo from '@/assets/background video.mp4';
import rainmatterInvestorImg from '@/assets/invister company.png';
import ianInvestorImg from '@/assets/invister company 2.png';

// --- Investors ---
const Investors = () => {
  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
      <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/background%20video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 md:w-[600px] h-64 md:h-[600px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-cyan-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase">
            Investors
          </h1>
        </div>
      </div>

      <div className="bg-slate-100 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="bg-white border border-slate-200 shadow-md p-6 sm:p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <p className="text-xl sm:text-2xl leading-relaxed">
                  &quot;Rainmatter by Zerodha&quot; has a mission to support organizations and projects related
                  to climate action, environmental health, and livelihoods.
                </p>
                <a
                  href="https://rainmatter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Read More
                </a>
              </div>

              <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
                <img
                  src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/invister%20company%202.png"
                  alt="Rainmatter by Zerodha"
                  className="w-full max-w-[560px] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-md p-6 sm:p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/invister%20company.png"
                  alt="Indian Angel Network"
                  className="w-full max-w-[560px] h-auto object-contain"
                />
              </div>

              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl leading-relaxed">
                  IAN has invested in startups over 19 sectors at an early stage and have helped them scale
                  to become successful enterprises.
                </p>
                <a
                  href="https://iangroup.vc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-6 bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
