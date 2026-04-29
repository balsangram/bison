import React, { useState, useEffect, useRef } from 'react';
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
import coolingTowerImg from '@/assets/colling tower.png';
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

import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';


import MethodologyPage from './MethodologyPage';
import About from './About';
import MediaPage from './MediaPage';
import CaseStudiesPage from './CaseStudiesPage';
import BookingPage from './BookingPage';
import ContactPage from './ContactPage';
import SolutionsPage from './SolutionsPage';
import ApartmentsPage from './ApartmentsPage';
import MallsPage from './MallsPage';
import ITParksPage from './ITParksPage';
import IndustriesPage from './IndustriesPage';
import Investors from './Investors';



// --- ErrorBoundary ---
class ErrorBoundary extends React.Component<any, { hasError: boolean; error: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      const errorMsg = this.state.error?.stack || this.state.error?.toString() || "Unknown error occurred";
      return (
        <div className="p-10 text-center bg-slate-50 min-h-screen flex flex-col items-center justify-center font-sans text-slate-900">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6"><X size={32} /></div>
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="text-slate-600 mb-6 max-w-md">The application encountered an unexpected error. Please try refreshing the page.</p>
          <div className="text-left w-full max-w-2xl bg-slate-900 text-slate-300 p-6 rounded-xl overflow-auto border border-slate-800 shadow-2xl">
            <p className="text-cyan-400 font-mono text-xs mb-2 uppercase tracking-widest">Error Details:</p>
            <pre className="text-xs font-mono whitespace-pre-wrap">{String(errorMsg)}</pre>
          </div>
          <button onClick={() => window.location.reload()} className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg">Reload Application</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// --- Fallback image handler ---
const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string) => {
  const target = e.target as HTMLImageElement;
  target.src = `https://placehold.co/800x450/1e293b/38bdf8?text=${encodeURIComponent(fallbackText)}`;
};

// --- Hero ---
const Hero = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => { });
      }
    };

    const handleCanPlay = () => {
      if (video.paused) tryPlay();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        tryPlay();
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      tryPlay();
    };

    tryPlay();
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('ended', handleEnded);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center pt-24 pb-16">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={heroVideoRef}
          src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/hero-water-treatment.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            const video = e.currentTarget;
            if (video.paused) {
              const playPromise = video.play();
              if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => { });
              }
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-slate-900/60 to-blue-950/90"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white font-sans">
        <div className="inline-flex items-center space-x-2 bg-cyan-500/20 rounded-full px-4 py-2 mb-6 sm:mb-8 backdrop-blur-md border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          <Droplet className="text-cyan-300" size={28} />
          <span className="text-xs sm:text-sm font-extrabold text-white tracking-widest uppercase drop-shadow-md">The 3rd Source of Water</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 leading-tight drop-shadow-lg uppercase">
          Convert Your <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">STP Treated Water</span> <br className="hidden sm:block" />To Potable Water
        </h1>
        <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-50 mb-8 sm:mb-10 leading-relaxed font-medium drop-shadow-md">
          Increase your water availability and achieve sustainable water management. Save on water tankers, reduce operational costs, and secure your water future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
          <button onClick={() => { setCurrentPage('methodology'); window.scrollTo(0, 0); }} className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center border border-blue-400">
            How It Works <ArrowRight className="ml-2" size={20} />
          </button>
          <button onClick={() => { setCurrentPage('booking'); window.scrollTo(0, 0); }} className="w-full sm:w-auto bg-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
            Book Water Tanker
          </button>
        </div>
      </div>
    </div>
  );
};

const SystemMetrics = () => {
  const metricsData = [
    { label: "Litres of Water Saved", value: "65+ Cr", sub: "650 Million+ Litres" },
    { label: "Lives Touched", value: "80+ L", sub: "8 Million+ People" },
    { label: "Tankers Saved", value: "55+ L", sub: "5.5 Million+ Tankers" },
    { label: "Maintenance Cost", value: "₹ 0", sub: "Zero CapEx OPEX Model" },
  ];
  return (
    <div className="relative z-20 -mt-8 sm:-mt-12 mx-4 md:mx-auto max-w-5xl font-sans">
      <div className="bg-white/15 backdrop-blur-xl py-5 sm:py-7 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-white/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-blue-600/10 pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8">
          {metricsData.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              {idx !== 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20"></div>}
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 drop-shadow-lg">{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-bold text-cyan-300 uppercase tracking-wider">{stat.label}</div>
              <div className="text-[8px] sm:text-[10px] text-blue-200/60 font-medium mt-0.5 uppercase tracking-widest">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Solutions ---
const ThirdSourceConcept = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <div className="py-16 md:py-20 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 leading-tight uppercase tracking-tight">Our Solutions</h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Water is going to be scarce in the coming years and there is an immediate need to work on sustainable water management.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-slate-900">
        {[
          { Icon: Building, title: "Apartments", desc: "Boson helps apartments manage wastewater efficiently where wastewater is treated to potable-quality water.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800", alt: "Residential Solution", page: 'apartments' },
          { Icon: Briefcase, title: "Shopping Malls & IT", desc: "Improve HVAC efficiency and reduce cooling tower blowdown by 90% using potable recycled water.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", alt: "Commercial HVAC", page: 'malls' },
          { Icon: Factory, title: "Industry & Laundry", desc: "We provide ultra-low TDS, high-quality water for industrial processes such as cooling towers, boilers, and manufacturing.", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800", alt: "Industrial Recovery", page: 'industries' }
        ].map((card, idx) => (
          <div key={idx} onClick={() => { setCurrentPage(card.page); window.scrollTo(0, 0); }} className="cursor-pointer text-center bg-white/40 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/60 shadow-xl w-full md:w-1/3 hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/60 backdrop-blur-md text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm border border-white/80 group-hover:scale-110 transition-transform">
              <card.Icon size={28} />
            </div>
            <div className="font-bold text-slate-800 text-lg sm:text-xl mb-2 uppercase tracking-tight">{card.title}</div>
            <div className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">{card.desc}</div>
            <div className="h-48 rounded-2xl overflow-hidden relative shadow-inner">
              <img src={card.img} alt={card.alt} className="w-full h-full object-cover opacity-80 mix-blend-multiply" onError={(e) => handleImgError(e, card.title)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Home Highlights ---
const HomeHighlights = () => {
  const [cardFlipped, setCardFlipped] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setCardFlipped((f) => !f), 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl border-b border-slate-200 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-50/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 border border-blue-200">
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight uppercase tracking-tight">BOSON White Water<br />enables access to Highest Quality Water</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-medium">We bring solutions to make life easier for our customers. Enjoy a World-Class Water Treatment experience and expertise without the capital burden.</p>
            <div className="space-y-4 sm:space-y-6">
              {[
                { Icon: Activity, iconClass: "text-cyan-600", title: "Real-time Water Monitoring", desc: "Track water quality parameters and consumption data in real-time via IoT." },
                { Icon: Settings, iconClass: "text-blue-600", title: "Turnkey Solution", desc: "Custom-engineered systems installed and maintained by our expert operations team." }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-50 flex items-center justify-center ${item.iconClass} shrink-0 mr-3 sm:mr-4 border border-slate-200 shadow-sm`}>
                    <item.Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg uppercase tracking-tight">{item.title}</h4>
                    <p className="text-sm sm:text-base text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[500px] sm:min-h-[420px] perspective-[1200px]">
            <div
              className="relative w-full h-full min-h-[500px] sm:min-h-[420px] cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setCardFlipped((f) => !f)}
            >
              {/* Card 1: OPEX Model (front) */}
              <div
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  transform: cardFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                }}
              >
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-[60px] sm:blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-600/20 rounded-full blur-[60px] sm:blur-[80px]"></div>
                <div className="inline-flex items-center space-x-2 bg-cyan-500/20 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 border border-cyan-500/30 relative z-10">
                  <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">The OPEX Model</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6 relative z-10 leading-tight uppercase tracking-tight">Pay only for the water you use.</h2>
                <p className="text-sm sm:text-base text-blue-100/80 mb-6 sm:mb-8 leading-relaxed relative z-10 font-medium">Zero capital investment for the equipment. We install, operate, and maintain the tertiary 11-stage system.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                  <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-4 shadow-sm">
                    <PiggyBank className="text-emerald-400 shrink-0" size={28} />
                    <div><div className="text-white font-bold text-sm uppercase tracking-tight">₹0 Maintenance</div><div className="text-xs text-cyan-100/80 font-medium">Fully covered by Boson</div></div>
                  </div>
                  <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-4 shadow-sm">
                    <Activity className="text-cyan-400 shrink-0" size={28} />
                    <div><div className="text-white font-bold text-sm uppercase tracking-tight">IoT assisted monitoring</div><div className="text-xs text-blue-100/80 font-medium">Enable IoT based real-time monitoring</div></div>
                  </div>
                </div>
                <p className="mt-4 text-right text-xs text-cyan-300/80 font-medium relative z-10 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4">Click to see Water Supply →</p>
              </div>
              {/* Card 2: Water Supply / Tanker (back) */}
              <div
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-2xl overflow-hidden border border-slate-800/50 transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  transform: cardFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
                }}
              >
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-600/20 rounded-full blur-[60px] sm:blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-[60px] sm:blur-[80px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 h-56 sm:h-72 bg-pink-500/25 rounded-full blur-[70px] sm:blur-[90px]"></div>
                <div className="absolute bottom-4 right-8 w-32 sm:w-40 h-32 sm:h-40 bg-rose-400/20 rounded-full blur-[50px]"></div>
                <div className="inline-flex items-center space-x-2 bg-cyan-500/20 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 border border-cyan-500/30 relative z-10">
                  <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Water Supply</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4 relative z-10 leading-tight uppercase tracking-tight">Tanker Supply</h2>
                <p className="text-sm sm:text-base text-blue-100/80 mb-4 sm:mb-6 leading-relaxed relative z-10 font-medium">Boson supplies water via tankers. Two grades of water are available.</p>
                <div className="space-y-3 relative z-10 mb-6">
                  <div className="flex items-start gap-3">
                    <Droplet className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-blue-100/90 font-medium">Boson supplies water via tankers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Droplet className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-blue-100/90 font-medium">Two grades of water are available</span>
                  </div>
                </div>
                {/* <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm border border-white/10 relative z-10 flex items-center gap-4 shadow-sm">
                  <Activity className="text-cyan-400 shrink-0" size={28} />
                  <div>
                    <div className="text-white font-bold text-sm uppercase tracking-tight">IoT-Assisted Monitoring</div>
                    <div className="text-xs text-blue-100/80 font-medium">Boson Whitewater tanker supply with real-time tracking</div>
                  </div>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                  <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-4 shadow-sm">
                    {/* <PiggyBank className="text-emerald-400 shrink-0" size={28} /> */}
                    <div><div className="text-white font-bold text-sm uppercase tracking-tight">BOSON White Water</div><div className="text-xs text-cyan-100/80 font-medium">Supplied in 12 KL tanker</div></div>
                  </div>
                  <div className="bg-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-4 shadow-sm">
                    {/* <Activity className="text-cyan-400 shrink-0" size={28} /> */}
                    <div><div className="text-white font-bold text-sm uppercase tracking-tight">BOSON DM Water</div><div className="text-xs text-blue-100/80 font-medium">Supplied in 6KL / 12 KL tanker</div></div>
                  </div>
                </div>
                <p className="mt-4 text-right text-xs text-cyan-300/80 font-medium relative z-10 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4">← Click to see OPEX Model</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              <button type="button" onClick={(e) => { e.stopPropagation(); setCardFlipped(false); }} className={`w-2.5 h-2.5 rounded-full transition-colors ${!cardFlipped ? 'bg-cyan-500 scale-110' : 'bg-slate-400 hover:bg-slate-500'}`} aria-label="Show OPEX Model" />
              <button type="button" onClick={(e) => { e.stopPropagation(); setCardFlipped(true); }} className={`w-2.5 h-2.5 rounded-full transition-colors ${cardFlipped ? 'bg-cyan-500 scale-110' : 'bg-slate-400 hover:bg-slate-500'}`} aria-label="Show Water Supply" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Benefits ---
const HomeBenefits = () => (
  <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-16">
      <div className="inline-flex items-center space-x-2 bg-blue-100/80 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 border border-blue-200 shadow-sm">
        <span className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-widest">The Advantages</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight">Benefits of Using Boson</h2>
      <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">Transform your wastewater into a highly profitable, sustainable operational asset.</p>
    </div>
    {(() => {
      const benefits = [
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-zero-capex.jpg", title: "Zero CapEx", desc: "Our Pay-Per-Use model eliminates upfront investment and maintenance burdens.", bgImg: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-chemical-reduction.jpg", title: "65% Chemical Reduction", desc: "Exceptionally low TDS water reduces the need for chemicals in cooling towers.", bgImg: "https://images.unsplash.com/photo-1532187863486-abf920a789cd?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-monitoring.jpg", title: "Real-Time Monitoring", desc: "Our IoT systems allow constant tracking of water quality, ensuring consistency.", bgImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-asset-life.jpg", title: "Extended Asset Life", desc: "Cooling tower fills and condensers remain pristine, significantly extending asset life.", bgImg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-zld.jpg", title: "ZLD Compliant", desc: "Waste water is sent back to the STP inlet, ensuring Zero Liquid Discharge compliance.", bgImg: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-blowdown.jpg", title: "Reduced Blowdown", desc: "Blowdown loss is practically eliminated, saving millions of litres monthly.", bgImg: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-zld.jpg", title: "Sustainable Source of Water", desc: "Water comes from treated wastewater. Unlike groundwater extraction.", bgImg: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-blowdown.jpg", title: "Reduced Wastewater Disposal", desc: "Apartments discharge less wastewater to drains.", bgImg: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-asset-life.jpg", title: "Boiler Efficiency", desc: "Reduced scaling in boilers → increases equipment life.", bgImg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" },
        { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/benefit-chemical-reduction.jpg", title: "Laundry Efficiency", desc: "Reduced detergent usage and efficient laundry operations.", bgImg: "https://images.unsplash.com/photo-1532187863486-abf920a789cd?auto=format&fit=crop&q=80&w=600" }
      ];
      const cardClass = "relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[2rem] border border-slate-200/60 hover:shadow-xl hover:-translate-y-1 transition-all group shadow-sm overflow-hidden";
      const Card = ({ ben }: { ben: (typeof benefits)[0]; idx: number }) => (
        <div className={cardClass}>
          <img src={ben.bgImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none" />
          <div className="relative z-10">
            <img src={ben.img} alt={ben.title} className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover mb-4 sm:mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{ben.title}</h3>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">{ben.desc}</p>
          </div>
        </div>
      );
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.slice(0, 8).map((ben, idx) => <Card key={idx} ben={ben} idx={idx} />)}
          {/* Empty slot at position 9 for desktop only; Boiler → 10, Laundry → 11 */}
          <div key="empty-9" className="hidden lg:block" aria-hidden />
          {benefits.slice(8, 10).map((ben, idx) => <Card key={idx + 8} ben={ben} idx={idx + 8} />)}
        </div>
      );
    })()}
  </div>
);

// --- Comparison ---
const HomeDifference = () => (
  <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl border-y border-slate-200 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase tracking-tight">How Are We Different?</h2>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center text-slate-900">
      {[
        { title: "STP + UF + RO", subtitle: "Conventional Setup", Icon: Filter, iconClass: "text-slate-400 mb-4", features: ["Huge Capital Investment", "13 to 18 Paise / Litre", "2 to 3 Shifts Manpower", "Large Space Requirement"], bg: "bg-slate-50/80" },
        { title: "STP + BOSON White Water", subtitle: "The 3rd Source", Icon: Droplets, iconClass: "text-cyan-400 mb-4 animate-pulse", features: ["Zero CapEx (Pay-Per-Use)", "8 to 11 Paise / Litre", "Fully Automated (IoT)", "Highly Compact & Modular"], bg: "bg-slate-900/95 shadow-2xl scale-105 z-10", text: "text-white", highlight: true },
        { title: "STP + Softener", subtitle: "Basic Treatment", Icon: Layers, iconClass: "text-slate-400 mb-4", features: ["Moderate Capital Required", "1.5 to 2.5 Paise / Litre", "TDS / Organics remain high", "Manual Operation Required"], bg: "bg-slate-50/80" }
      ].map((col, idx) => (
        <div key={idx} className={`${col.bg} p-8 rounded-[2rem] border border-slate-200 transition-all ${col.highlight ? 'border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)]' : ''} shadow-sm`}>
          <div className="text-center mb-8">
            <col.Icon className={col.iconClass} size={40} />
            <h3 className={`text-2xl font-bold ${col.text || 'text-slate-900'} mb-1 uppercase tracking-tight`}>{col.title}</h3>
            <p className={`text-xs font-bold uppercase tracking-widest ${col.highlight ? 'text-cyan-400' : 'text-slate-400'}`}>{col.subtitle}</p>
          </div>
          <ul className="space-y-4 font-sans">
            {col.features.map((feat, fidx) => (
              <li key={fidx} className="flex items-center text-sm font-semibold">
                {col.highlight ? <CheckCircle size={16} className="text-cyan-400 mr-2 shrink-0" /> : <X size={16} className="text-red-400 mr-2 shrink-0" />}
                <span className={col.highlight ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// --- Cooling Tower ---
const BosonAdvantage = () => {
  const metrics = [
    { title: "Chemical Usage", val: "65% Reduction", Icon: TestTube },
    { title: "Approach Temp", val: "< 1 - 2°C", Icon: ThermometerSun },
    { title: "Blowdown Loss", val: "90% Reduction", Icon: Droplets },
    { title: "Energy Savings", val: "30-35% Less", Icon: BatteryCharging }
  ];
  return (
    <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-6 uppercase tracking-tight leading-tight">Cooling Tower Transformation</h2>
          <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">By using potable standard BOSON White Water, you achieve higher Cycles of Concentration (COC), preserving your high-value HVAC assets indefinitely.</p>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <m.Icon className="text-blue-600 mb-3" size={24} />
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">{m.title}</p>
                <p className="text-sm font-bold text-blue-700 uppercase tracking-tight">{m.val}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 aspect-video relative group">
          <img src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/colling+tower.png" alt="Industrial Cooling Towers" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" onError={(e) => handleImgError(e, 'Cooling+Towers')} />
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

// --- Financial ---
const FinancialSavings = () => (
  <div className="py-8 bg-white/90 border-b border-slate-200 text-slate-900 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-tight leading-tight">Financial Impact</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { title: "MNC IT Park", save: "₹ 1.2 Lakh / Month", loc: "Bengaluru" },
          { title: "8 Lakh Sq. Ft. Mall", save: "₹ 1.75 Lakh / Month", loc: "Bengaluru" }
        ].map((c, i) => (
          <div key={i} className="bg-slate-900 p-8 rounded-[2rem] text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-sm border border-slate-800">
            <div className="absolute top-0 right-0 bg-blue-600 px-6 py-2 rounded-bl-2xl text-[10px] font-bold uppercase tracking-widest">{c.loc}</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{c.title}</h3>
            <div className="text-3xl font-black text-cyan-400 mb-2">{c.save}</div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wider">Direct monthly utility savings</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Clients ---
const clientLogos = [
  { name: "Brigade", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo1.png" },
  { name: "SKF", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo2.png" },
  { name: "Pramukh", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo3.png" },
  { name: "SJR Group", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo4.png" },
  { name: "Vakil Housing", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo7.png" },
  { name: "Soul Space", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo5.png" },
  { name: "Nucleus Office Parks", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo6.png" },
  { name: "Schneider Electric", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo8.png" },
  { name: "Puravankara", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo9.png" },
  { name: "SKF India", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo10.png" },
  { name: "WeWork", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo11.png" },
];

const Clients = ({ bgClass }: { bgClass: string }) => (
  <div className={`py-8 ${bgClass} text-center text-slate-900 font-sans`}>
    <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 leading-tight uppercase tracking-tight">Trusted by Global Industry Leaders</h2>
    <div className="relative overflow-hidden">
      <style>{`
        @keyframes clientMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .client-marquee {
          animation: clientMarquee 50s linear infinite;
        }
        .client-marquee:hover { animation-play-state: paused; }
      `}</style>
      <div className="flex gap-6 md:gap-8 client-marquee w-max px-4">
        {[...clientLogos, ...clientLogos].map((client, idx) => (
          <div key={`${client.name}-${idx}`} className="flex-shrink-0 px-6 py-5 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center min-h-[96px] w-[200px] md:w-[220px] opacity-90 hover:opacity-100 hover:shadow-md transition-all">
            <img src={client.img} alt={client.name} className="max-h-20 w-auto object-contain" />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  </div>
);

// --- Main App ---
const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <ErrorBoundary>
      <div className={`min-h-screen text-slate-900 font-sans selection:bg-blue-500 selection:text-white ${showSplash ? 'h-screen overflow-hidden' : ''}`}>
        <div className="fixed inset-0 z-[-1] bg-slate-950">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-[0.25]">
            <source src="https://videos.pexels.com/video-files/3173312/3173312-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply pointer-events-none"></div>
        </div>

        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <div className="relative z-0">
          {currentPage === 'home' && (
            <main>
              <Hero setCurrentPage={setCurrentPage} />
              {/* <SystemMetrics /> */}
              <Clients bgClass="bg-white/90 border-t border-slate-100" />
              <ThirdSourceConcept setCurrentPage={setCurrentPage} />
              <HomeHighlights />
              <HomeBenefits />
              <HomeDifference />
              <BosonAdvantage />
              <FinancialSavings />
            </main>
          )}
          {currentPage === 'about' && <About />}
          {currentPage === 'methodology' && <MethodologyPage />}
          {currentPage === 'investors' && <Investors />}
          {currentPage === 'case-studies' && <CaseStudiesPage />}
          {currentPage === 'media' && <MediaPage />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'booking' && <BookingPage />}
          {currentPage === 'solutions' && <SolutionsPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'apartments' && <ApartmentsPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'malls' && <MallsPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'it-parks' && <ITParksPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'industries' && <IndustriesPage setCurrentPage={setCurrentPage} />}
          {currentPage === 'FAQS' && <Faq />}
          <Footer setCurrentPage={setCurrentPage} />
          <WhatsAppButton />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
