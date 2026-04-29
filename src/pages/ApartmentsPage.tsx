import React, { useState, useEffect } from 'react';
import { APARTMENTS_VIDEO_URL } from '@/App';
import heroVideo from '@/assets/hero-water-treatment.mp4';
import bgVideo from '@/assets/background video.mp4';
import videoWaterTank from '@/assets/video water tank.mp4';
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
import logo12Img from '@/assets/logo12.png';
import logo13Img from '@/assets/logo13.png';
import logo14Img from '@/assets/logo14.png';
import logo15Img from '@/assets/logo15.png';
import waterFlowDiagramImg from '@/assets/water-flow-diagram.png';
import logoTreeProvident from '@/assets/Logos/Tree by Provident- Logo.png';
import logoSJRBrooklyn from '@/assets/Logos/SJR Brooklyn - Logo.png';
import logoBrenwoods from '@/assets/Logos/Brenwoods - Logo.png';
import logoDLFWoodland from '@/assets/Logos/DLF woodland - Logo.png';
import logoPrinceton from '@/assets/Logos/Princeton - Logo.jpg';
import logoPramukh from '@/assets/Logos/pramuk logo.jpg';
import logoRohan from '@/assets/Logos/Rohan_logo.jpg';
import logoRC from '@/assets/Logos/RC_Logo_White.png';
import logoMountRaindrop from '@/assets/Logos/Mount Raindrop - logo.png';
import logoEcolifeBhoomi from '@/assets/Logos/Ecolife bhoomi - logo.jpeg';
import logoLVC from '@/assets/Logos/LVC_Logo.png';
import logoMJRHydra from '@/assets/Logos/MJR hydra - logo.png';
import logoNirman from '@/assets/Logos/Nirman - Logo.png';
import logoArattAmora from '@/assets/Logos/Aratt Amora - logo.png';
import logoAkme from '@/assets/Logos/Akme logo.jfif';
import logoPurvaPalmBeach from '@/assets/Logos/Purva palm beach - logo.png';
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


// --- Apartments Page ---
const ApartmentsPage = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
    <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={APARTMENTS_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <Building size={14} className="text-cyan-400" />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Residential</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Apartments</h1>
        <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">BOSON White Water System helps to manage the excess STP treated water better</p>
      </div>
    </div>
    <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 uppercase tracking-tight">The Growing Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">With rapid vertical growth in urban India, apartment complexes face increasing water stress. Most STPs in residential buildings treat water that is simply drained — a massive waste of a precious resource.</p>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Our Solutions</h3>
            <div className="space-y-4">
              {["Upgrade STP water to potable quality standards",  "Reduce Wastewater Disposal", "Water Security"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200" alt="Modern Apartment Complex" className="w-full h-full object-cover" onError={(e) => handleImgError(e, 'Apartment+Complex')} />
          </div>
        </div>
        <div className="bg-slate-50 rounded-[2rem] p-8 sm:p-12 border border-slate-200 shadow-sm mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 uppercase tracking-tight">Eligibility Criteria</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "250+ Units", desc: "Apartment complexes with 250 or more residential units" },
              { icon: Droplets, title: "80 - 100 KLD STPs", desc: "Sewage Treatment Plants with 80,000+ litres per day capacity" },
              { icon: TrendingUp, title: "Underutilized Treated Water", desc: "Significant portion of STP output being drained or wasted" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                  <item.icon size={28} className="text-blue-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-16 overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-10 uppercase tracking-tight">Current Installations</h3>

          {(() => {
            const currentInstallations = [
              { name: "Pramukh", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo3.png" },
              { name: "SJR Group", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo4.png" },
              { name: "Vakil Housing", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo7.png" },
              // { name: "Client 12", img: logo12Img },
              { name: "Client 13", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo13.png" },
              { name: "Client 14", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo14.png" },
              { name: "Client 15", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/logo15.png" },
              { name: "Tree by Provident", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Tree%20by%20Provident-%20Logo.png" },
              { name: "SJR Brooklyn", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/SJR%20Brooklyn%20-%20Logo.png" },
              { name: "Brenwoods", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Brenwoods%20-%20Logo.png" },
              { name: "DLF Woodland", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/DLF%20woodland%20-%20Logo.png" },
              { name: "Princeton", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Princeton%20-%20Logo.jpg" },
              { name: "Pramukh", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/pramuk%20logo.jpg" },
              { name: "Rohan", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Rohan_logo.jpg" },
              // { name: "RC", img: logoRC },
              { name: "Mount Raindrop", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Mount%20Raindrop%20-%20logo.png" },
              { name: "Ecolife Bhoomi", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Ecolife%20bhoomi%20-%20logo.jpeg" },
              { name: "LVC", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/LVC_Logo.png" },
              { name: "MJR Hydra", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/MJR%20hydra%20-%20logo.png" },
              { name: "Nirman", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Nirman%20-%20Logo.png" },
              { name: "Aratt Amora", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Aratt%20Amora%20-%20logo.png" },
              { name: "Akme", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Akme%20logo.jfif" },
              { name: "Purva Palm Beach", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Logos/Purva%20palm%20beach%20-%20logo.png" },
            ];
            return (
              <div className="relative flex overflow-x-hidden group max-w-full">
                <div className="flex space-x-8 animate-marquee whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity pr-8 shrink-0">
                  {currentInstallations.map((client, idx) => (
                    <div key={`${client.name}-${idx}-1`} className="px-8 py-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md flex items-center justify-center min-h-[96px] w-[220px] shrink-0">
                      <img src={client.img} alt={client.name} className="max-h-24 w-auto object-contain" onError={(e) => handleImgError(e, client.name)} />
                    </div>
                  ))}
                </div>
                <div className="flex space-x-8 animate-marquee whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity pr-8 shrink-0" aria-hidden="true">
                  {currentInstallations.map((client, idx) => (
                    <div key={`${client.name}-${idx}-2`} className="px-8 py-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md flex items-center justify-center min-h-[96px] w-[220px] shrink-0">
                      <img src={client.img} alt={client.name} className="max-h-24 w-auto object-contain" onError={(e) => handleImgError(e, client.name)} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-10 uppercase tracking-tight text-center">Videos</h3>
          {(() => {
            const apartmentVideos = [
              { id: 'YtXDlJgUoDk', title: 'BOSON White Water Video 1' },
              { id: 'QVkehE1G7f8', title: 'BOSON White Water Video 2' },
              { id: '8NzHXXWnP1E', title: 'BOSON White Water Video 3' },
              { id: '7mE15jl12JI', title: 'BOSON White Water Video 4' },
            ];

            return (
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {apartmentVideos.map((video) => (
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
            Get a Free Assessment <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ApartmentsPage;
