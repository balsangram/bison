import React, { useState, useEffect } from 'react';
import { INDUSTRIES_VIDEO_URL } from '@/App';
import heroVideo from '@/assets/hero-water-treatment.mp4';
import bgVideo from '@/assets/background video.mp4';
import industriesVideo from '@/assets/industery video.mp4';
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
import industeryImg from '@/assets/industery.png';
import bosonLogo from '@/assets/boson logo.svg';
import ind10LogoImg from '@/assets/ind10.png';
import ind2LogoImg from '@/assets/ind2.png';
import ind1LogoImg from '@/assets/ind 1.jpg';
import ind3LogoImg from '@/assets/ind3.png';
import ind4LogoImg from '@/assets/ind4.png';
import ind5LogoImg from '@/assets/ind5.png';
import ind6LogoImg from '@/assets/ind6.png';
import ind7LogoImg from '@/assets/ind7.png';
import ind8LogoImg from '@/assets/ind8.png';
import ind9LogoImg from '@/assets/ind9.png';
import ind11LogoImg from '@/assets/ind11.png';
import ind12LogoImg from '@/assets/ind12.png';
import ind13SvgLogoImg from '@/assets/ind13.svg';
import ind13PngLogoImg from '@/assets/ind13.png';
import bosonWhiteWaterReportImage1 from '@/assets/BOSON-White-Water(1).jpg (1).jpeg';
import bosonWhiteWaterReportImage2 from '@/assets/BOSON-White-Water(2) (1).jpeg';
import bosonDmWaterReportImage1 from '@/assets/BOSON-DM-Water_page-0002-imageonline.co-merged.jpg (1).jpeg';
import bosonDmWaterReportImage2 from '@/assets/BOSON-DM-Water_page-0002-imageonline.co-merged.jpg (2).jpeg';
import {
  Droplet, Leaf, ShieldCheck, CheckCircle2, Menu, X, ArrowRight, Settings,
  Star, Quote, Mail, Activity, Filter, Layers, ThermometerSun, Droplets, TestTube,
  ArrowDownRight, ChevronRight, Wind, BatteryCharging, Building, Briefcase,
  Factory, PiggyBank, Clock, MapPin, Phone, Linkedin, Twitter, Facebook,
  ArrowUpRight, CheckCircle, Send, MessageSquare, Truck, Youtube, Video, ImageIcon,
  Target, Globe, ShoppingBag, Zap, Gauge, Beaker, ChevronDown, Wrench, Users, ChevronLeft,
  FlaskConical, TrendingUp, Warehouse, Package, MessageCircle,
  Building2
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Faq from '@/pages/Faq';


const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string) => {
  const target = e.target as HTMLImageElement;
  target.src = `https://placehold.co/800x450/1e293b/38bdf8?text=${encodeURIComponent(fallbackText)}`;
};


// --- Industries Page ---
const IndustriesPage = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => {
  type ReportKey = 'white-water' | 'dm-water';
  type ReportConfigEntry = {
    type: 'images' | 'pdf';
    title: string;
    src?: string;
    images?: string[];
  };

  const [activeReport, setActiveReport] = useState<ReportKey | null>(null);
  const [activeReportImageIndex, setActiveReportImageIndex] = useState(0);

  const reportConfig: Record<ReportKey, ReportConfigEntry> = {
    'white-water': {
      type: 'images',
      title: 'BOSON White Water Report',
      images: ["https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/BOSON-White-Water(1).jpg%20(1).jpeg", "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/BOSON-White-Water(2)%20(1).jpeg"],
    },
    'dm-water': {
      type: 'images',
      title: 'BOSON DM Grade Water Report',
      images: ["https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/BOSON-DM-Water_page-0002-imageonline.co-merged.jpg%20(1).jpeg", "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/BOSON-DM-Water_page-0002-imageonline.co-merged.jpg%20(2).jpeg"],
    },
  };

  const activeReportConfig = activeReport ? reportConfig[activeReport] : null;
  const reportTitle = activeReportConfig?.title ?? 'Report';
  const reportSrc = activeReportConfig?.type === 'pdf' ? activeReportConfig.src ?? '' : '';
  const reportImages = activeReportConfig?.type === 'images' ? activeReportConfig.images ?? [] : [];
  const currentReportImage = reportImages[activeReportImageIndex] ?? '';

  const openReport = (reportKey: ReportKey) => {
    setActiveReport(reportKey);
    setActiveReportImageIndex(0);
  };

  const showPreviousReportImage = () => {
    if (!reportImages.length) return;
    setActiveReportImageIndex((prev) => (prev - 1 + reportImages.length) % reportImages.length);
  };

  const showNextReportImage = () => {
    if (!reportImages.length) return;
    setActiveReportImageIndex((prev) => (prev + 1) % reportImages.length);
  };

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
    <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={INDUSTRIES_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <Factory size={14} className="text-cyan-400" />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Industrial</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Industries</h1>
        <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">BOSON White Water provides high‑quality, low‑TDS water for industrial processes, laundry, cooling, and reduced downtime and maintenance.</p>
      </div>
    </div>
    <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column: Our approach + industrial image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 uppercase tracking-tight">Transforming Industrial Water</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">We transform wastewater into high-quality, reusable water through advanced treatment and strict quality control. Our streamlined process — from treatment to delivery — ensures reliable, compliant, and sustainable water solutions for industrial and non-potable use.</p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">Committed to innovation and environmental responsibility, we help businesses reduce freshwater dependency and build a greener future.</p>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
            <img src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/industery.png" alt="Industrial water treatment facility" className="w-full h-full object-cover" onError={(e) => handleImgError(e, 'Industrial+Water')} />
          </div>
        </div>
        {/* <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 uppercase tracking-tight">Customer Segments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Building, title: "Apartments", desc: "Large residential complexes requiring sustainable water for flushing, gardening, and domestic use.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
              { Icon: Briefcase, title: "Commercial Parks", desc: "IT parks, business centres, and tech campuses needing reliable water for cooling towers and operations.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
              { Icon: Factory, title: "Industries", desc: "Manufacturing plants, warehouses, and processing facilities requiring DM water and treated water.", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" },
            ].map((seg, i) => (
              <div key={i} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square shadow-lg border border-slate-200/50">
                <img src={seg.img} alt={seg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => handleImgError(e, seg.title)} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <seg.Icon size={20} className="text-cyan-400" />
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{seg.title}</h3>
                  </div>
                  <p className="text-blue-50 font-medium leading-relaxed text-sm">{seg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 uppercase tracking-tight">Product Types</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 font-medium leading-relaxed">We offer two grades of treated water to meet diverse industrial and commercial needs — from general use to precision processes. Each product is designed for consistent quality and reliability.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 sm:p-10 rounded-[2rem] border border-cyan-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 border border-cyan-200">
                <Droplets size={32} className="text-cyan-600" />
              </div>
              <h3 className="text-2xl font-extrabold mb-3 uppercase tracking-tight text-cyan-800">BOSON White Water</h3>
              <p className="text-cyan-700 font-medium leading-relaxed mb-4">Treated recycled water for general use — cooling towers, gardening,Cooling towers,Laundry, flushing, and landscaping.</p>
              <div className="space-y-2">
                {["TDS < 100 ppm", "pH 6.5 - 8.5", "Zero Turbidity", "BIS 10500 Compliant"].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle size={14} className="text-cyan-500" /><span className="text-slate-700 font-medium">{spec}</span></div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => openReport('white-water')}
                className="mt-6 inline-flex items-center rounded-lg bg-cyan-600 text-white px-4 py-2 text-sm font-bold hover:bg-cyan-700 transition-colors"
              >
                View Report
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 sm:p-10 rounded-[2rem] border border-blue-200 shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 border border-blue-200">
                <FlaskConical size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-extrabold mb-3 uppercase tracking-tight text-blue-800">BOSON DM Grade Water</h3>
              <p className="text-blue-700 font-medium leading-relaxed mb-4">Demineralized water for industrial processes — boilers, manufacturing, electroplating, and precision manufacturing.</p>
              <div className="space-y-2">
                {["TDS < 10 ppm", "Ultra-Pure Grade", "Scale-Free", "Industrial Standard"].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle size={14} className="text-blue-500" /><span className="text-slate-700 font-medium">{spec}</span></div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => openReport('dm-water')}
                className="mt-6 inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-bold hover:bg-blue-700 transition-colors"
              >
                View Report
              </button>
            </div>
          </div>
        </div>
        {/* <div className="bg-slate-50 rounded-[2rem] p-6 sm:p-10 border border-slate-200 shadow-sm mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-4 uppercase tracking-tight">Operational Flow</h3>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 font-medium leading-relaxed">From source to delivery, our process ensures quality at every step. Water is treated, tested, stored, and delivered through a streamlined pipeline designed for efficiency and compliance.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {[
              { Icon: Warehouse, title: "Source", sub: "STP / Raw Water" },
              { Icon: Settings, title: "Treat", sub: "Boson System" },
              { Icon: Beaker, title: "Test", sub: "Quality Check" },
              { Icon: Package, title: "Store", sub: "Treated Water Tank" },
              { Icon: Truck, title: "Deliver", sub: "Tanker or Bulk Supply" },
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="bg-white px-6 py-5 rounded-2xl border border-slate-200 shadow-sm text-center min-w-[140px] hover:shadow-lg hover:-translate-y-1 transition-all">
                  <step.Icon size={28} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">{step.title}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">{step.sub}</p>
                </div>
                {i < arr.length - 1 && <ArrowRight className="text-cyan-500 shrink-0 rotate-90 md:rotate-0" size={22} />}
              </React.Fragment>
            ))}
          </div>
        </div> */}
        {/* <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 uppercase tracking-tight">Tanker Booking Flow</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", Icon: MessageCircle, title: "Request", desc: "Submit your order via WhatsApp or Email with volume and delivery details.", color: "text-cyan-600 bg-cyan-50 border-cyan-200" },
              { step: "02", Icon: CheckCircle, title: "Confirmation", desc: "Receive instant confirmation with delivery schedule and pricing.", color: "text-blue-600 bg-blue-50 border-blue-200" },
              { step: "03", Icon: Truck, title: "Dispatch", desc: "GPS-tracked tanker dispatched from nearest Boson facility.", color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
              { step: "04", Icon: CheckCircle2, title: "Delivered", desc: "Quality-assured water delivered with digital receipt and certificate.", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-black text-slate-100">{item.step}</div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color}`}>
                  <item.Icon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-tight relative z-10">{item.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div> */}
        {/* <div className="bg-slate-900 rounded-[2rem] p-8 sm:p-12 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10 uppercase tracking-tight">IoT Monitoring Dashboard</h3>
            <p className="text-blue-100 text-center max-w-2xl mx-auto mb-10 font-medium leading-relaxed">Every Boson system is equipped with real-time IoT sensors. Monitor water quality parameters remotely with our digital dashboard.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "TDS", value: "68 ppm", trend: "↓ 12%", Icon: Gauge },
                { label: "pH Level", value: "7.2", trend: "Stable", Icon: Beaker },
                { label: "Flow Rate", value: "4.2 m³/hr", trend: "↑ Active", Icon: Activity },
                { label: "Turbidity", value: "0.3 NTU", trend: "Excellent", Icon: Droplet },
              ].map((param, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/10 text-center">
                  <param.Icon size={20} className="text-cyan-400 mx-auto mb-2" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{param.label}</p>
                  <p className="text-xl font-extrabold text-white mb-1">{param.value}</p>
                  <p className="text-xs text-cyan-400 font-bold">{param.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="text-center mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-10 uppercase tracking-tight">Current Clients</h3>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex items-center gap-10 py-4 w-max animate-industries-scroll">
              {(() => {
                const clientLogos = [
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind10.png", alt: 'Sansera' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind2.png", alt: 'NTT Data' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind%201.jpg", alt: 'Tata Electronics' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind3.png", alt: 'Synergy Tech' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind4.png", alt: 'Ascott Star Rewards' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind5.png", alt: 'IAPMO' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind6.png", alt: 'APL' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind7.png", alt: 'Sartorius' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind8.png", alt: 'Schneider Electric' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind9.png", alt: 'Manjushree' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind11.png", alt: 'Bharat Silks' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind12.png", alt: 'SKF' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind13.svg", alt: 'Sanjeevini Group' },
                  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/ind13.png", alt: 'Sanjeevini Group' },
                ];
                return [...clientLogos, ...clientLogos].map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 px-8 py-6 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center w-[220px] h-[120px]"
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                  </div>
                ));
              })()}
            </div>
          </div>
          <style>{`
            @keyframes industries-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-industries-scroll { animation: industries-scroll 35s linear infinite; }
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

        <div className="text-center mb-16">
          <button
            onClick={() => {
              setCurrentPage('booking');
              window.scrollTo(0, 0);
              setTimeout(() => document.getElementById('delivery-details')?.scrollIntoView({ behavior: 'smooth' }), 400);
            }}
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] inline-flex items-center justify-center gap-2"
          >
            Book a Tanker <ArrowRight size={20} />
          </button>
        </div>
        <Dialog
          open={Boolean(activeReport)}
          onOpenChange={(open) => {
            if (!open) {
              setActiveReport(null);
              setActiveReportImageIndex(0);
            }
          }}
        >
          <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden">
            <DialogTitle className="sr-only">{reportTitle}</DialogTitle>
            {activeReportConfig?.type === 'images' ? (
              <div className="relative w-full h-[82vh] bg-slate-100 flex items-center justify-center">
                <img
                  src={currentReportImage}
                  alt={`${reportTitle} - Page ${activeReportImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                {reportImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousReportImage}
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md p-2 transition-colors"
                      aria-label="Previous report image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextReportImage}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md p-2 transition-colors"
                      aria-label="Next report image"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/65 text-white text-xs sm:text-sm px-3 py-1">
                      {activeReportImageIndex + 1} / {reportImages.length}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-[82vh] bg-white">
                <iframe
                  src={reportSrc}
                  title={reportTitle}
                  className="w-full h-full"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
        {/* <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/918073182542?text=Hi%2C%20I%20would%20like%20to%20book%20a%20water%20tanker" target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20BA5C] transition-all shadow-lg inline-flex items-center justify-center">
            <MessageSquare className="mr-2" size={20} /> Book via WhatsApp
          </a>
          <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }} className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] inline-flex items-center justify-center">
            <Mail className="mr-2" size={20} /> Email Inquiry
          </button>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default IndustriesPage;
