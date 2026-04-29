import React, { useState, useEffect } from 'react';
import { MALLS_VIDEO_URL } from '@/App';
import heroVideo from '@/assets/hero-water-treatment.mp4';
import bgVideo from '@/assets/background video.mp4';
import mallVideo from '@/assets/mall video.mp4';
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
import avenueLogoImg from '@/assets/avenue.png';
import orien from '@/assets/orion.png';
import mantrilogo from '@/assets/mantri.png';
import updown from '@/assets/updown.png';
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


const CLIENTS = [
  { name: "Brigade", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo1.png" },
  { name: "Soul Space", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo5.png" },
  { name: "Avenue", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/avenue.png" },
  { name: "Oriental", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/orion.png" },
  { name: "Mantri", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/mantri.png" },
  // { name: "Updown", img: updown },
];

// --- Malls Page ---
const MallsPage = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
    <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={MALLS_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <ShoppingBag size={14} className="text-cyan-400" />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Commercial</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Shopping Malls</h1>
        <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">Transform your mall's water infrastructure with zero capital investment and maintenance-free operations.</p>
      </div>
    </div>
    <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 uppercase tracking-tight">The Mall Water Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">Shopping malls consume vast quantities of water for cooling towers, HVAC systems, fountains, restrooms, and landscaping. Conventional water sources are expensive and unsustainable.</p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">Boson White Water provides a turnkey solution — converting your STP treated water into potable-grade water that dramatically reduces cooling tower chemical usage and extends equipment life.</p>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Shopping Mall" className="w-full h-full object-cover" onError={(e) => handleImgError(e, 'Shopping+Mall')} />
          </div>
        </div>
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 uppercase tracking-tight">Key Benefits</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PiggyBank, title: "Zero Capital Investment", desc: "No upfront costs — pay only for the water you use." },
              { icon: Wrench, title: "Maintenance-Free", desc: "Boson handles all installation, operation, and maintenance." },
              { icon: Droplets, title: "Consistent Water Supply", desc: "Reliable, high-quality water available 24/7." },
              { icon: FlaskConical, title: "65% Chemical Reduction", desc: "Drastically reduce cooling tower chemical treatments." },
              { icon: Clock, title: "Extended Equipment Life", desc: "Prolong cooling tower and chiller lifespan significantly." },
              { icon: TrendingUp, title: "Reduce wastewater disposal", desc: "Reduce wastewater disposal costs substantially." },
              { icon: Users, title: "Better Customer Experience", desc: "Clean restrooms and facilities enhance visitor satisfaction." },
              { icon: Droplet, title: "Reduced downtime of cooling assets", desc: "High-quality Boson Whitewater reduces scaling and fouling in cooling systems." },
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
          <h3 className="text-2xl font-extrabold text-center mb-8 uppercase tracking-tight">Requirements</h3>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: MapPin, title: "Space Near STP", desc: "Dedicated space adjacent to the STP for system installation" },
              { icon: Settings, title: "Plumbing Lines", desc: "Inlet and outlet plumbing connections from STP to system" },
              { icon: Zap, title: "3-Phase Power", desc: "Continuous 3-phase power supply for system operation" },
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
        </div>
        <div className="text-center mb-16 overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-10 uppercase tracking-tight">Current Clients</h3>
          <div className="relative flex overflow-x-hidden group max-w-full">
            <div className="flex space-x-8 animate-marquee whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity pr-8 shrink-0">
              {CLIENTS.map((client, idx) => (
                <div key={`${client.name}-${idx}-1`} className="px-8 py-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md flex items-center justify-center min-h-[96px] w-[220px] shrink-0">
                  <img src={client.img} alt={client.name} className="max-h-24 w-auto object-contain" onError={(e) => handleImgError(e, client.name)} />
                </div>
              ))}
            </div>
            <div className="flex space-x-8 animate-marquee whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity pr-8 shrink-0" aria-hidden="true">
              {CLIENTS.map((client, idx) => (
                <div key={`${client.name}-${idx}-2`} className="px-8 py-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md flex items-center justify-center min-h-[96px] w-[220px] shrink-0">
                  <img src={client.img} alt={client.name} className="max-h-24 w-auto object-contain" onError={(e) => handleImgError(e, client.name)} />
                </div>
              ))}
            </div>
          </div>
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

export default MallsPage;
