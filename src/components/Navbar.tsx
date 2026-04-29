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


// --- Navbar ---
const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const handleNav = (page: string) => { setCurrentPage(page); setIsOpen(false); setSolutionsOpen(false); setMobileSolutionsOpen(false); window.scrollTo(0, 0); };

  const solutionsPages = ['solutions', 'apartments', 'malls', 'industries', 'it-parks'];
  const isSolutionsActive = solutionsPages.includes(currentPage);

  return (
    // <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 font-sans">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between h-16 sm:h-20">
    //       <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
    //         <img src={bosonLogo} alt="BOSON Logo" className="h-12 sm:h-20 w-auto object-contain -ml-4 sm:-ml-6 lg:-ml-8" />
    //       </div>
    //       <div className="hidden lg:flex items-center space-x-8 text-sm xl:text-base font-sans">
    //         <button onClick={() => handleNav('home')} className={`transition-colors font-semibold ${currentPage === 'home' ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>Home</button>
    //         <button onClick={() => handleNav('about')} className={`transition-colors font-semibold ${currentPage === 'about' ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>About Us</button>
    //         <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
    //           <button className={`transition-colors font-semibold flex items-center gap-1 ${isSolutionsActive ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>
    //             Solutions <ChevronDown size={14} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
    //           </button>
    //           <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
    //             <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 min-w-[200px]">
    //               {[
    //                 { key: 'solutions', label: 'Overview', icon: Globe },
    //                 { key: 'apartments', label: 'Apartments', icon: Building },
    //                 { key: 'malls', label: 'Malls', icon: ShoppingBag },
    //                 { key: 'industries', label: 'Industries', icon: Factory },
    //                 { key: 'it-parks', label: 'IT Parks', icon: Building2 },
    //               ].map(item => (
    //                 <button key={item.key} onClick={() => handleNav(item.key)} className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center gap-3 ${currentPage === item.key ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>
    //                   <item.icon size={16} /> {item.label}
    //                 </button>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <button onClick={() => handleNav('methodology')} className={`transition-colors font-semibold ${currentPage === 'methodology' ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>How It Works</button>
    //         <button onClick={() => handleNav('case-studies')} className={`transition-colors font-semibold ${currentPage === 'case-studies' ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>Testimonials</button>
    //         <button onClick={() => handleNav('media')} className={`transition-colors font-semibold ${currentPage === 'media' ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>Media</button>
    //         <button onClick={() => handleNav('contact')} className={`transition-colors font-semibold ${currentPage === 'contact' ? 'text-blue-700 underline underline-offset-8 decoration-2' : 'text-slate-600 hover:text-blue-600'}`}>Contact</button>
    //         <button onClick={() => handleNav('booking')} className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">Book Tanker</button>
    //       </div>
    //       <div className="flex items-center lg:hidden">
    //         <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 -mr-2">{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
    //     <div className="px-4 pt-2 pb-4 space-y-1 flex flex-col shadow-inner text-sm font-sans">
    //       <button onClick={() => handleNav('home')} className={`text-left px-3 py-3 rounded-lg font-bold transition-colors ${currentPage === 'home' ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>Home</button>
    //       <button onClick={() => handleNav('about')} className={`text-left px-3 py-3 rounded-lg font-bold transition-colors ${currentPage === 'about' ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>About Us</button>
    //       <div>
    //         <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className={`w-full text-left px-3 py-3 rounded-lg font-bold transition-colors flex items-center justify-between ${isSolutionsActive ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>
    //           Solutions <ChevronDown size={16} className={`transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
    //         </button>
    //         <div className={`overflow-hidden transition-all duration-300 ${mobileSolutionsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
    //           <div className="pl-6 space-y-1 py-1">
    //             {[
    //               { key: 'solutions', label: 'Overview' },
    //               { key: 'apartments', label: 'Apartments' },
    //               { key: 'malls', label: 'Malls' },
    //               { key: 'industries', label: 'Industries' },
    //               { key: 'it-parks', label: 'IT Parks' },
    //             ].map(item => (
    //               <button key={item.key} onClick={() => handleNav(item.key)} className={`w-full text-left px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors ${currentPage === item.key ? 'text-blue-700 bg-blue-50/50' : 'text-slate-500 hover:bg-slate-50'}`}>{item.label}</button>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //       <button onClick={() => handleNav('methodology')} className={`text-left px-3 py-3 rounded-lg font-bold transition-colors ${currentPage === 'methodology' ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>How It Works</button>
    //       <button onClick={() => handleNav('case-studies')} className={`text-left px-3 py-3 rounded-lg font-bold transition-colors ${currentPage === 'case-studies' ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>Testimonials</button>
    //       <button onClick={() => handleNav('media')} className={`text-left px-3 py-3 rounded-lg font-bold transition-colors ${currentPage === 'media' ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>Media</button>
    //       <button onClick={() => handleNav('contact')} className={`text-left px-3 py-3 rounded-lg font-bold transition-colors ${currentPage === 'contact' ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}>Contact Us</button>
    //       <button onClick={() => handleNav('booking')} className="text-left px-3 py-3 rounded-lg font-bold transition-colors text-blue-600 hover:bg-blue-50">Book Water Tanker</button>
    //     </div>
    //   </div>
    // </nav>

    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 font-sans">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">

          {/* Logo */}
          <div
            className="flex items-center cursor-pointer lg:w-[180px] xl:w-[220px]"
            onClick={() => handleNav("home")}
          >
            <img
              src={bosonLogo}
              alt="BOSON Logo"
              className="h-12 sm:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-8 text-sm xl:text-base font-sans whitespace-nowrap">

            <button
              onClick={() => handleNav("home")}
              className={`transition-colors font-semibold ${currentPage === "home"
                ? "text-blue-700 underline underline-offset-8 decoration-2"
                : "text-slate-600 hover:text-blue-600"
                }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav("about")}
              className={`transition-colors font-semibold ${currentPage === "about"
                ? "text-blue-700 underline underline-offset-8 decoration-2"
                : "text-slate-600 hover:text-blue-600"
                }`}
            >
              About Us
            </button>

            {/* Desktop Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={`transition-colors font-semibold flex items-center gap-1 ${isSolutionsActive
                  ? "text-blue-700 underline underline-offset-8 decoration-2"
                  : "text-slate-600 hover:text-blue-600"
                  }`}
              >
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform ${solutionsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${solutionsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 min-w-[200px]">

                  {[
                    { key: "solutions", label: "Overview", icon: Globe },
                    { key: "apartments", label: "Apartments", icon: Building },
                    { key: "malls", label: "Malls", icon: ShoppingBag },
                    { key: "industries", label: "Industries", icon: Factory },
                    { key: "it-parks", label: "IT Parks", icon: Building2 },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNav(item.key)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-colors flex items-center gap-3 ${currentPage === item.key
                        ? "text-blue-700 bg-blue-50"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                    >
                      <item.icon size={16} />
                      {item.label}
                    </button>
                  ))}

                </div>
              </div>
            </div>

            <button
              onClick={() => handleNav("methodology")}
              className={`transition-colors font-semibold ${currentPage === "methodology"
                ? "text-blue-700 underline underline-offset-8 decoration-2"
                : "text-slate-600 hover:text-blue-600"
                }`}
            >
              How It Works
            </button>
            <button
              onClick={() => handleNav("investors")}
              className={`transition-colors font-semibold ${currentPage === "investors"
                ? "text-blue-700 underline underline-offset-8 decoration-2"
                : "text-slate-600 hover:text-blue-600"
                }`}
            >
              Investors
            </button>

            <button
              onClick={() => handleNav("case-studies")}
              className={`transition-colors font-semibold ${currentPage === "case-studies"
                ? "text-blue-700 underline underline-offset-8 decoration-2"
                : "text-slate-600 hover:text-blue-600"
                }`}
            >
              Testimonials
            </button>

            <button
              onClick={() => handleNav("media")}
              className={`transition-colors font-semibold ${currentPage === "media"
                ? "text-blue-700 underline underline-offset-8 decoration-2"
                : "text-slate-600 hover:text-blue-600"
                }`}
            >
              Media
            </button>

            <button
              onClick={() => handleNav("contact")}
              className={`transition-colors font-semibold ${currentPage === "contact"
                ? "text-blue-700 underline underline-offset-8 decoration-2"
                : "text-slate-600 hover:text-blue-600"
                }`}
            >
              Contact
            </button>

          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex lg:w-[180px] xl:w-[220px] items-center justify-end">
            <button
              onClick={() => handleNav("booking")}
              className="bg-blue-600 text-white px-5 xl:px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Tanker
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white border-t border-slate-100 ${isOpen ? "max-h-[600px]" : "max-h-0"
          }`}
      >
        <div className="px-4 py-3 space-y-2 flex flex-col text-sm font-semibold">

          <button onClick={() => handleNav("home")} className="text-left py-2">
            Home
          </button>

          <button onClick={() => handleNav("about")} className="text-left py-2">
            About Us
          </button>

          {/* MOBILE SOLUTIONS DROPDOWN */}
          <div className="flex flex-col">

            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center justify-between py-2"
            >
              Solutions
              <ChevronDown
                size={18}
                className={`transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all ${mobileSolutionsOpen ? "max-h-60 mt-1" : "max-h-0"
                }`}
            >
              <div className="flex flex-col pl-4 space-y-1">

                {[
                  { key: "solutions", label: "Overview" },
                  { key: "apartments", label: "Apartments" },
                  { key: "malls", label: "Malls" },
                  { key: "industries", label: "Industries" },
                  { key: "it-parks", label: "IT Parks" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNav(item.key)}
                    className="text-left py-1 text-slate-600 hover:text-blue-600"
                  >
                    {item.label}
                  </button>
                ))}

              </div>
            </div>

          </div>

          <button onClick={() => handleNav("methodology")} className="text-left py-2">
            How It Works
          </button>

          <button onClick={() => handleNav("investors")} className="text-left py-2">
            Investors
          </button>

          <button onClick={() => handleNav("case-studies")} className="text-left py-2">
            Testimonials
          </button>

          <button onClick={() => handleNav("media")} className="text-left py-2">
            Media
          </button>

          <button onClick={() => handleNav("contact")} className="text-left py-2">
            Contact
          </button>

          <button
            onClick={() => handleNav("booking")}
            className="bg-blue-600 text-white py-2 rounded-lg mt-2"
          >
            Book Tanker
          </button>

        </div>
      </div>

    </nav>

  );
};

export default Navbar;
