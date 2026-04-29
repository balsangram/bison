import React, { useState, useEffect } from 'react';
import { ITPARKS_VIDEO_URL } from '@/App';
import heroVideo from '@/assets/hero-water-treatment.mp4';
import bgVideo from '@/assets/background video.mp4';
import itParkVideo from '@/assets/it park video.mp4';
import step100Micron from '@/assets/step-100micron.jpg';
import benefitZeroCapex from '@/assets/benefit-zero-capex.jpg';
import benefitChemicalReduction from '@/assets/benefit-chemical-reduction.jpg';
import benefitMonitoring from '@/assets/benefit-monitoring.jpg';
import benefitAssetLife from '@/assets/benefit-asset-life.jpg';
import benefitZld from '@/assets/benefit-zld.jpg';
import benefitBlowdown from '@/assets/benefit-blowdown.jpg';
import stepClinoptilolite from '@/assets/step-clinoptilolite.jpg';
import stepAluminosilicate from '@/assets/step-aluminosilicate.jpg';
import stepPhCorrection from '@/assets/step-ph-correction.jpg';
import stepAntiscalant from '@/assets/step-antiscalant.jpg';
import stepMicron1 from '@/assets/step-micron1.jpg';
import stepMicron2 from '@/assets/step-micron2.jpg';
import stepXfrMembrane from '@/assets/step-xfr-membrane.jpg';
import stepFinalPh from '@/assets/step-final-ph.jpg';
import stepDisinfection from '@/assets/step-disinfection.jpg';
import stepOdourReduction from '@/assets/12.png';
import plasticExtrusionImg from '@/assets/robotic-arms-packaging-process.jpg';
import waterTankImg from '@/assets/warertank.png';
import itParksImg from '@/assets/modern-architecture-reflective-glass-building-with-cityscape.jpg';
import luluLogoImg from '@/assets/Online Shopping For Grocery, Fresh Food, Electronics, Mobiles, Home & Living appliances with Fast Delivery | LuLu Oman.jpg';
import rmzLogoImg from '@/assets/RMZ_LOGO.png';
import logo9Img from '@/assets/logo9.png';
import adobeLogoImg from '@/assets/Adobe-Logo.jpg';
import goyalLogoImg from '@/assets/goyal.png';
import kalyaniLogoImg from '@/assets/kalyani.png';
import mercedesBenzLogoImg from '@/assets/Mercedes_Benz_Logo_11.jpg';
import logo1Img from '@/assets/logo1.png';
import logo2Img from '@/assets/logo2.png';
import logo5Img from '@/assets/logo5.png';
import logo6Img from '@/assets/logo6.png';
import logo8Img from '@/assets/logo8.png';
import dropLogoSvg from '@/assets/drop-logo.svg';
import logo10Img from '@/assets/logo10.png';
import logo11Img from '@/assets/logo11.png';
import logo3Img from '@/assets/logo3.png';
import logo4Img from '@/assets/logo4.png';
import logo7Img from '@/assets/logo7.png';
import waterFlowDiagramImg from '@/assets/water-flow-diagram.png';
import iotMonitoringImg from '@/assets/IOT.png';
import industrialWaterImg from '@/assets/pexels-life-of-pix-2391.jpg';
import bosonLogo from '@/assets/boson logo.svg';
import {
  Droplet, Leaf, ShieldCheck, CheckCircle2, Menu, X, ArrowRight, Settings,
  Star, Quote, Mail, Activity, Filter, Layers, ThermometerSun, Droplets, TestTube,
  ArrowDownRight, ChevronRight, Wind, BatteryCharging, Building, Briefcase,
  Factory, PiggyBank, Clock, MapPin, Phone, Linkedin, Twitter, Facebook,
  ArrowUpRight, CheckCircle, Send, MessageSquare, Truck, Youtube, Video, ImageIcon,
  Target, Globe, ShoppingBag, Zap, Gauge, Beaker, ChevronDown, Wrench, Users,
  FlaskConical, TrendingUp, Warehouse, Package, MessageCircle,
  Building2
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Faq from '@/pages/Faq';


const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string) => {
  const target = e.target as HTMLImageElement;
  target.src = `https://placehold.co/800x450/1e293b/38bdf8?text=${encodeURIComponent(fallbackText)}`;
};


// --- IT Parks Page ---
const ITParksPage = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
    <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={ITPARKS_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <Building2 size={14} className="text-cyan-400" />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Commercial</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight uppercase leading-tight">IT Parks</h1>
        <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">Transform your IT park's water infrastructure with zero capital investment and maintenance-free operations.</p>
      </div>
    </div>
    <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 uppercase tracking-tight">The IT Park Water Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">IT parks have become integral hubs today, observing a significant influx of workers who often remain unaware of the intricate water management systems operating within these facilities.</p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">At Boson, here's how we can contribute to IT parks: Utilize STP treated water from IT parks, processing it through our Boson Whitewater System to generate high-quality water for cooling towers and fountains.</p>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
            <img src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/modern-architecture-reflective-glass-building-with-cityscape.jpg" className="w-full h-full object-cover" onError={(e) => handleImgError(e, 'IT+Park')} />
          </div>
        </div>
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 uppercase tracking-tight">Key Benefits</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: PiggyBank, title: "No Upfront Capital", desc: "No upfront capital investment required for equipment — we handle the investment and charge for the water supplied." },
              { icon: Wrench, title: "Maintenance-Free", desc: "Maintenance-free operation for customers; our team manages all equipment maintenance and upkeep." },
              { icon: Droplets, title: "Consistent Water Supply", desc: "Ensure consistent and stable water availability for cooling towers, ensuring uninterrupted operations." },
              { icon: FlaskConical, title: "Chemical Reduction", desc: "Significant reduction in the need for cooling tower chemicals, leading to cost savings." },
              { icon: Clock, title: "Extended Equipment Life", desc: "Prolonged lifespan of cooling towers and chillers due to the use of high-quality water." },
              { icon: TrendingUp, title: "Lower Water Costs", desc: "Lower water purchase costs for cooling tower operations." },
              { icon: Leaf, title: "Water Conservation", desc: "Contribute to water conservation efforts, benefiting both your operations and the environment." },
              { icon: Globe, title: "Sustainability", desc: "Many IT parks track water positive goals and water neutrality. Boson helps them achieve those targets." },
              { icon: CheckCircle, title: "Cost-Effective", desc: "The cost ranges between 7–10 paise per litre of treated water." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-sm mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-50 rounded-[2rem] p-8 sm:p-12 border border-slate-200 shadow-sm mb-20">
          <h3 className="text-2xl font-extrabold text-center mb-8 uppercase tracking-tight">Requirements from IT Parks</h3>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: MapPin, title: "Space Near STP", desc: "Sufficient space near the STP for installation." },
              { icon: Settings, title: "Plumbing Lines", desc: "Plumbing lines for inlet, outlet, and reject water." },
              { icon: Zap, title: "3-Phase Power", desc: "Access to 3-phase power for the system's operation." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-sm">
                  <item.icon size={24} className="text-blue-600" />
                </div>
                <h4 className="font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 font-medium leading-relaxed mt-8 max-w-2xl mx-auto">Through this collaboration, IT parks can enhance operational efficiency, reduce costs, and play a role in sustainable water management practices.</p>
        </div>
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-10 uppercase tracking-tight">Current Clients</h3>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex items-center gap-10 py-4 w-max animate-itparks-scroll">
              {(() => {
                const clientLogos = [
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/RMZ_LOGO.png", alt: 'RMZ' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo9.png", alt: 'Puravankara' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Adobe-Logo.jpg", alt: 'Adobe' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/goyal.png", alt: 'Goyal & Co.' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/kalyani.png", alt: 'Kalyani' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Mercedes_Benz_Logo_11.jpg", alt: 'Mercedes-Benz' },
                ];
                return [...clientLogos, ...clientLogos].map((item, i) => (
                  <div key={i} className="flex-shrink-0 px-8 py-6 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center w-[220px] h-[120px]">
                    <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                  </div>
                ));
              })()}
            </div>
          </div>
          <style>{`
            @keyframes itparks-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-itparks-scroll { animation: itparks-scroll 30s linear infinite; }
          `}</style>
        </div>
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-10 uppercase tracking-tight text-center">Videos</h3>
          {(() => {
            const pageVideos = [
              { id: '-tN0hj4fg9E', title: 'BOSON White Water Video 1' },
              { id: '-IBsrj7KHCs', title: 'BOSON White Water Video 2' },
            ];

            return (
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {pageVideos.map((video) => (
                  <div key={video.id} className="rounded-[1.5rem] overflow-hidden border border-slate-200 shadow-xl bg-white">
                    <div className="relative aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
        <div className="text-center">
          <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }} className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] inline-flex items-center">
            Schedule a Site Visit <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ITParksPage;
