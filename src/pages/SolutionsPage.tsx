import React, { useState, useEffect } from 'react';
import heroVideo from '@/assets/hero-water-treatment.mp4';
import bgVideo from '@/assets/background video.mp4';
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
import logo1Img from '@/assets/logo1.png';
import logo2Img from '@/assets/logo2.png';
import logo5Img from '@/assets/logo5.png';
import logo6Img from '@/assets/logo6.png';
import logo8Img from '@/assets/logo8.png';
import dropLogoSvg from '@/assets/drop-logo.svg';
import logo9Img from '@/assets/logo9.png';
import logo10Img from '@/assets/logo10.png';
import logo11Img from '@/assets/logo11.png';
import logo3Img from '@/assets/logo3.png';
import logo4Img from '@/assets/logo4.png';
import logo7Img from '@/assets/logo7.png';
import waterFlowDiagramImg from '@/assets/water-flow-diagram.png';
import iotMonitoringImg from '@/assets/IOT.png';
import industrialWaterImg from '@/assets/pexels-life-of-pix-2391.jpg';
import bosonLogo from '@/assets/boson logo.svg';
import digramWater from '@/assets/digram water.png';
import overview1Img from '@/assets/overview 1.jpeg';
import overview2Img from '@/assets/overview 2.jpeg';
import overview3Img from '@/assets/overview 3.jpeg';
import overview4Img from '@/assets/overview 4.jpeg';
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


// --- Solutions Page ---
const SolutionsPage = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => {
  const systemImages = [
    { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lwvvgpa0e9drpxkzw3l-lsyfvny13hdv5noja2r-BosonWhitewaterSystem-Post-STP.webp", alt: "Boson System Post-STP" },
    { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lwvvgpf7jmrjm1rpjap-lsyfvo3m0xzdhwbwaol-WhatsApp-Image-2023-04-24-at-20.48.36.webp", alt: "System Installation" },
    { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/overview%201.jpeg", alt: "System Overview 1" },
    { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/overview%202.jpeg", alt: "System Overview 2" },
    { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/overview%202.jpeg", alt: "System Overview 3" },
    { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/overview%204.jpeg", alt: "System Overview 4" },
  ];
  const loopingSystemImages = [...systemImages, ...systemImages];

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
      {/* Hero */}
      <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/background%20video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <Target size={14} className="text-cyan-400" />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Our Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Sustainable Water Solutions</h1>
        <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">Custom-engineered water recycling solutions for buildings with Sewage Treatment Plants (STPs). We convert your treated wastewater into potable-grade water.</p>
      </div>
    </div>

    {/* Intro */}
    <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 uppercase tracking-tight">The Water Cycle Reimagined</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">Every building with an STP generates treated water that's typically drained or underutilized. Boson White Water intercepts this waste stream and transforms it into a valuable resource — potable water at a fraction of the cost.</p>
        </div>

        {/* Flowcharts - both fit in one screen */}
        <div className="grid lg:grid-cols-1 gap-4 sm:gap-6 mb-16">
          {/* Flowchart 1: Water Flow Cycle (compact) */}
          {/* <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm">
            <h3 className="text-base sm:text-lg font-extrabold text-center mb-4 uppercase tracking-tight">Water Flow Cycle</h3>
            <div className="mb-4">
              <p className="text-[10px] sm:text-xs font-bold text-red-500 uppercase tracking-widest mb-2 text-center">Current Scenario (Without Boson)</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 sm:gap-2">
                <div className="bg-white px-3 py-2.5 rounded-xl border border-slate-200 shadow-sm text-center min-w-[100px] sm:min-w-[120px]">
                  <Building size={18} className="text-slate-500 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-xs font-bold text-slate-700">Apartment / Mall / Industry</p>
                </div>
                <ArrowRight className="text-slate-400 shrink-0 rotate-90 md:rotate-0" size={14} />
                <div className="bg-white px-3 py-2.5 rounded-xl border border-slate-200 shadow-sm text-center min-w-[100px] sm:min-w-[120px]">
                  <Settings size={18} className="text-slate-500 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-xs font-bold text-slate-700">STP Treatment</p>
                </div>
                <ArrowRight className="text-slate-400 shrink-0 rotate-90 md:rotate-0" size={14} />
                <div className="bg-red-50 px-3 py-2.5 rounded-xl border border-red-200 shadow-sm text-center min-w-[100px] sm:min-w-[120px]">
                  <X size={18} className="text-red-500 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-xs font-bold text-red-600">80% Water Drained</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">Only 20% for Flushing & Garden</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-cyan-600 uppercase tracking-widest mb-2 text-center">With Boson White Water</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 sm:gap-2">
                <div className="bg-white px-3 py-2.5 rounded-xl border border-slate-200 shadow-sm text-center min-w-[100px] sm:min-w-[120px]">
                  <Droplets size={18} className="text-blue-500 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-xs font-bold text-slate-700">STP Treated Water</p>
                </div>
                <ArrowRight className="text-cyan-500 shrink-0 rotate-90 md:rotate-0" size={14} />
                <div className="bg-cyan-50 px-3 py-2.5 rounded-xl border border-cyan-200 shadow-sm text-center min-w-[100px] sm:min-w-[120px]">
                  <Zap size={18} className="text-cyan-600 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-xs font-bold text-cyan-700">Boson 11-Stage System</p>
                </div>
                <ArrowRight className="text-cyan-500 shrink-0 rotate-90 md:rotate-0" size={14} />
                <div className="bg-blue-50 px-3 py-2.5 rounded-xl border border-blue-200 shadow-sm text-center min-w-[100px] sm:min-w-[120px]">
                  <CheckCircle size={18} className="text-blue-600 mx-auto mb-1" />
                  <p className="text-[10px] sm:text-xs font-bold text-blue-700">Potable Water</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">Back to Building Use</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Flowchart 2: Complete diagram image */}
          <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col max-w-3xl mx-auto w-full">
            <h3 className="text-base sm:text-lg font-extrabold text-center mb-3 uppercase tracking-tight">Integrated Water Flow Diagram with Boson</h3>
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white flex-1 min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
              <img
                src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/digram%20water.png"
                alt="Integrated water flow diagram showing Boson Whitewater process"
                className="w-full h-full object-contain max-h-[380px] sm:max-h-[440px]"
              />
            </div>
          </div>
        </div>

        {/* Monitoring — two-column: text + data left, laptop/mobile image right (full image visible) */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16">
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-5 uppercase tracking-tight text-slate-900">Real-Time IoT Monitoring</h3>
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed font-semibold mb-6">Every Boson Whitewater system uses real-time IoT sensors to monitor water quality parameters remotely through digital dashboards.</p>
            <div className="grid grid-cols-2 gap-4 items-stretch">
              {[
                { label: "TDS", value: "< 100 ppm", icon: Gauge },
                { label: "Flow Rate", value: "Real-time", icon: Activity },
                { label: "pH Level", value: "6.5 - 8.5", icon: Beaker },
                { label: "Turbidity", value: "< 1 NTU", icon: Droplet },
                { label: "Hardness", value: "Monitored", icon: Layers },
                { label: "ORP", value: "Oxidation Reduction", icon: Zap },
              ].map((param, i) => (
                <div key={i} className="bg-slate-900 text-white py-5 px-4 rounded-2xl border-2 border-slate-700 text-center flex flex-col items-center justify-between min-h-[120px] shadow-lg">
                  <param.icon size={24} className="text-cyan-400 shrink-0" />
                  <p className="text-sm font-extrabold uppercase tracking-widest text-slate-300">{param.label}</p>
                  <p className="text-base sm:text-lg font-extrabold text-cyan-300">{param.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 bg-slate-100 flex items-center justify-center w-full min-h-[280px] max-h-[400px] lg:max-h-[420px]">
            <img
              src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/IOT.png"
              alt="IoT Monitoring Dashboard — laptop and mobile displays"
              className="w-full h-full max-h-[400px] lg:max-h-[420px] object-contain object-center"
              onError={(e) => handleImgError(e, 'IoT+Monitoring')}
            />
          </div>
        </div>

        {/* System Images */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 uppercase tracking-tight">Our Systems in Action</h3>
          <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="system-gallery-track flex items-center gap-6 w-max">
              {loopingSystemImages.map((img, i) => (
                <div key={`${img.alt}-${i}`} className="w-[280px] sm:w-[330px] lg:w-[360px] shrink-0 rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-video">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" onError={(e) => handleImgError(e, 'Boson+System')} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Cards */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 uppercase tracking-tight">Solutions by Segment</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'apartments', title: "Apartments", desc: "Boson helps apartments manage wastewater efficiently where wastewater is treated to potable-quality water.", Icon: Building, img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
              { key: 'malls', title: "Shopping Malls", desc: "Zero capital investment, maintenance-free operation, improved cooling tower efficiency.", Icon: ShoppingBag, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
              { key: 'industries', title: "Industries", desc: "White Water and DM Water grades for cooling, boilers, manufacturing processes.", Icon: Factory, img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" },
              { key: 'it-parks', title: "IT Parks", desc: "Zero capital investment, maintenance-free operation, improved cooling tower efficiency.", Icon: Building2, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
            ].map((card, idx) => (
              <div key={idx} onClick={() => { setCurrentPage(card.key); window.scrollTo(0, 0); }} className="cursor-pointer group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="aspect-video overflow-hidden relative">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => handleImgError(e, card.title)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <card.Icon size={20} />
                    <span className="font-bold uppercase tracking-tight">{card.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">{card.desc}</p>
                  <span className="text-blue-600 font-bold text-sm flex items-center gap-2 uppercase tracking-widest group-hover:gap-3 transition-all">Learn More <ArrowRight size={14} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SolutionsPage;
