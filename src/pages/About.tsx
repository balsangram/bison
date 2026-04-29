import React, { useState, useEffect } from 'react';
import { BG_VIDEO_URL } from '@/App';
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
import vikasImg from '@/assets/Boson Vikas Brahmavar CEO and Co Founder.jpg';
import gowthamImg from '@/assets/co-founder.png';
import salesManager from '@/assets/Sales Manager.png';
import OperationsManager from '@/assets/Operations Manager.png';
import KishoreGowdaImg from '@/assets/Kishore Gowda.png';
import Gowthaman from '@/assets/Gowthaman Desingh.png';
import ProcessManagerIOT from '@/assets/Process Manager - IOT.png';
import InstallationExpert from '@/assets/Installation Expert.png'
import team1Img from '@/assets/team 1.jpeg';
import annualReportImage1 from '@/assets/Annual-Report - boson-C0h6EhI8_page-0002-imageonline.co-merged.jpg (1).jpeg';
import annualReportImage2 from '@/assets/Annual-Report - boson-C0h6EhI8_page-0002-imageonline.co-merged.jpg (2).jpeg';
import NagarajaPrakasam from '@/assets/Nagaraja Prakasam.png';
import Vishwanath from '@/assets/Vishwanath Zen Rainman.png';
import DorisRoopaJohn from '@/assets/sales.png';




const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string) => {
  const target = e.target as HTMLImageElement;
  target.src = `https://placehold.co/800x450/1e293b/38bdf8?text=${encodeURIComponent(fallbackText)}`;
};


// --- About ---
const About = () => {
  const [isAnnualReportOpen, setIsAnnualReportOpen] = useState(false);
  const [activeAnnualReportImageIndex, setActiveAnnualReportImageIndex] = useState(0);
  const annualReportImages = ["https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Annual-Report+-+boson-C0h6EhI8_page-0002-imageonline.co-merged.jpg+(1).jpeg", "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Annual-Report+-+boson-C0h6EhI8_page-0002-imageonline.co-merged.jpg+(2).jpeg"];

  const openAnnualReport = () => {
    setIsAnnualReportOpen(true);
    setActiveAnnualReportImageIndex(0);
  };

  const showPreviousAnnualReportImage = () => {
    setActiveAnnualReportImageIndex((prev) => (prev - 1 + annualReportImages.length) % annualReportImages.length);
  };

  const showNextAnnualReportImage = () => {
    setActiveAnnualReportImageIndex((prev) => (prev + 1) % annualReportImages.length);
  };

  const founders = [
    { name: "Vikas Brahmavar", role: "Director", /* exp: "16+ Years in Water Industry", desc: "A visionary recognized as a Mission Paani Awardee, dedicated to solving India's water crisis through innovative recycling and reuse strategies.", */ image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Boson+Vikas+Brahmavar+CEO+and+Co+Founder.jpg", email: "vikas@transwaters.com", linkedin: "https://www.linkedin.com/in/vikasbrahmavar/" },
    { name: "Gowthaman Desingh", role: "Director - Technology", /* exp: "8+ Years in Water Industry", desc: "An IoT expert leading the technological frontier of BWW, ensuring our 11-stage systems are fully automated, efficient, and remotely monitored.", */ image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Gowthaman+Desingh.png", email: "gowtham@transwaters.com", linkedin: "https://www.linkedin.com/in/gowthamandesingh/" },
    { name: "Doris Roopa John", role: "Sales Manager", /* exp: "12+ Years in Operations", desc: "Expert in scaling water treatment operations across complex commercial and industrial environments.", */ image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/sales.png", email: "Doris@transwaters.com", linkedin: "https://www.linkedin.com/in/doris-roopa-john-6685b2178/", objectPosition: "center", imageZoom: true },
    { name: "Kishore Gowda", role: "Operations Manager", /* exp: "10+ Years in ESG", desc: "Driving environmental compliance and circular economy initiatives for all our major installations.", */ image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Kishore+Gowda.png", email: "kishore@transwaters.com", linkedin: "https://www.linkedin.com/in/kishore-gowda-23528b77/" },
    { name: "Naveen Prasanth", role: "Process Manager - IOT", /* exp: "15+ Years in Engineering", desc: "Leading the design and deployment of our high-efficiency IoT-integrated water recovery systems.", */ image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Process+Manager+-+IOT.png", email: "Naveen@transwaters.com", linkedin: "https://www.linkedin.com/in/naveen-prasanth-393652261/" },
    { name: "Raja", role: "Lead Installation Expert", /* exp: "7+ Years in Analytics", desc: "Specializes in optimizing water treatment plant efficiency through advanced AI and machine learning insights.", */ image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Installation+Expert.png" }
  ];
  const experts = [
    { name: "Nagaraja Prakasam", role: "Board Member", org: "Acumen, IAN", desc: "Angel Investor fostering impactful sustainable ventures and social entrepreneurship.", image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Nagaraja+Prakasam.png" },
    { name: "Vishwanath Zen Rainman", role: "Advisor", org: "Policy Advisor to Government", desc: "Renowned water conservationist, policy expert and strategic advisor on urban water management.", image: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Vishwanath+Zen+Rainman.png" }
  ];

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
      <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={BG_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Our Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight uppercase leading-tight">Pioneering Water Security</h1>
          <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">Our mission is to create a decentralized wastewater‑recovery infrastructure, by building a sustainable circular‑economy model to recover highest quality water from waste water and reuse at scale.</p>
          <button
            type="button"
            onClick={openAnnualReport}
            className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-red-500 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest bg-white/5 hover:bg-red-500/10 transition-colors backdrop-blur-md"
          >
            Annual-Report
          </button>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold leading-tight uppercase tracking-tight">Meet the Founders</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {founders.map((founder, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={founder.image} alt={founder.name} className={`w-full h-full object-cover transition-transform duration-700 ${(founder as { objectPosition?: string }).objectPosition === 'center' ? 'object-center' : 'object-top'} ${(founder as { imageZoom?: boolean }).imageZoom ? 'scale-125 origin-center group-hover:scale-[1.31]' : 'group-hover:scale-105'}`} onError={(e) => handleImgError(e, founder.name)} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-1 uppercase tracking-tight">{founder.name}</h3>
                    <p className="text-cyan-400 font-bold uppercase text-[10px] tracking-widest">{founder.role}</p>
                  </div>
                </div>
                <div className="p-8 text-slate-900">
                  {/* <div className="inline-flex items-center text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-sm">{founder.exp}</div>
                  <p className="text-slate-700 font-medium leading-relaxed mb-6">{founder.desc}</p> */}
                  {founder.linkedin ? (
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-slate-900 hover:text-blue-700 transition-colors"><Linkedin size={16} className="mr-2 text-[#0a66c2]" /> LinkedIn Profile</a>
                  ) : founder.email ? (
                    <a href={`mailto:${founder.email}`} className="inline-flex items-center font-bold text-slate-900 hover:text-blue-700 transition-colors"><Mail size={16} className="mr-2" /> {founder.email}</a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center mb-12"><h3 className="text-2xl sm:text-3xl font-bold leading-tight uppercase tracking-tight">Guided by Industry Experts</h3></div>
            <div className="grid sm:grid-cols-2 max-w-4xl mx-auto gap-8 px-4 sm:px-0">
              {experts.map((expert, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center text-slate-900">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-50 shadow-md transition-transform group-hover:scale-105 duration-500">
                    <img src={expert.image} alt={expert.name} className="w-full h-full object-cover object-top" onError={(e) => handleImgError(e, expert.name)} />
                  </div>
                  <h4 className="text-xl font-bold mb-1 leading-tight uppercase tracking-tight">{expert.name}</h4>
                  <p className="text-blue-700 font-bold text-[10px] uppercase tracking-widest mb-4">{expert.role} • {expert.org}</p>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm">{expert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center mb-12"><h3 className="text-2xl sm:text-3xl font-bold leading-tight uppercase tracking-tight">Our Team</h3></div>
            <div className="w-full max-w-5xl mx-auto flex justify-center">
              <div className="w-full sm:w-[90%] lg:w-[80%] rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 group aspect-[16/10] relative">
                <img src= "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/team 1.jpeg" alt="Team 1" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" onError={(e) => handleImgError(e, 'Our Team')} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={isAnnualReportOpen}
        onOpenChange={(open) => {
          setIsAnnualReportOpen(open);
          if (!open) setActiveAnnualReportImageIndex(0);
        }}
      >
        <DialogContent className="max-w-6xl w-[95vw] p-0 overflow-hidden">
          <DialogTitle className="sr-only">Annual Report</DialogTitle>
          <div className="relative w-full h-[82vh] bg-slate-100 flex items-center justify-center">
            <img
              src={annualReportImages[activeAnnualReportImageIndex]}
              alt={`Annual Report - Page ${activeAnnualReportImageIndex + 1}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
            {annualReportImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousAnnualReportImage}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md p-2 transition-colors"
                  aria-label="Previous annual report image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={showNextAnnualReportImage}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-md p-2 transition-colors"
                  aria-label="Next annual report image"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/65 text-white text-xs sm:text-sm px-3 py-1">
                  {activeAnnualReportImageIndex + 1} / {annualReportImages.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
