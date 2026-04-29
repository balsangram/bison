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
  Factory, PiggyBank, Clock, MapPin, Phone, Linkedin, Youtube,
  ArrowUpRight, CheckCircle, Send, MessageSquare, Truck, Video, ImageIcon,
  Target, Globe, ShoppingBag, Zap, Gauge, Beaker, ChevronDown, Wrench, Users,
  FlaskConical, TrendingUp, Warehouse, Package, MessageCircle,
  Building2
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Faq from '@/pages/Faq';


// --- Footer ---
const Footer = ({ setCurrentPage }: { setCurrentPage: (p: string) => void }) => (
  <footer className="relative bg-slate-950 text-slate-300 pt-32 pb-8 border-t border-slate-800 font-sans mt-24">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden relative border border-white/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 mb-6 md:mb-0 text-center md:text-left text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight uppercase tracking-tight">Ready to transform?</h3>
          <p className="text-blue-50 font-medium leading-relaxed">Switch to the 3rd source of water with our Zero CapEx model.</p>
        </div>
        <button onClick={() => { setCurrentPage('contact'); window.scrollTo(0, 0); }} className="relative z-10 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg flex items-center group whitespace-nowrap">
          Contact Us <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
        </button>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-slate-300">
        <div className="lg:col-span-1">
          <img src="/boson-logo.svg" alt="BOSON Logo" className="h-16 sm:h-20 w-auto mb-6 object-contain" />
          <p className="text-slate-400 leading-relaxed mb-6 text-sm font-medium">Transwater Systems Pvt. Ltd.<br /><br />Converting treated sewage into potable water, drastically reducing stress on finite natural resources.</p>
          {/* <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 inline-block shadow-inner">
            <span className="flex items-center text-xs font-bold text-cyan-400 tracking-widest uppercase"><CheckCircle2 className="text-cyan-500 mr-2" size={18} /> Mission Paani Awardee</span>
          </div> */}
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            {[{ key: 'home', label: 'Home' }, { key: 'about', label: 'About Us' }, { key: 'methodology', label: 'How It Works' }, { key: 'media', label: 'Media' }, { key: 'FAQS', label: 'FAQS' }].map(item => (
              <li key={item.key}><button onClick={() => { setCurrentPage(item.key); window.scrollTo(0, 0); }} className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center group"><ChevronRight size={14} className="mr-2 text-slate-600 group-hover:text-cyan-500" /> {item.label}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400 font-medium">
            <li className="flex items-start"><Mail className="text-cyan-400 mr-3 mt-1 shrink-0" size={18} /><a href="mailto:inquiry@transwaters.com" className="hover:text-cyan-300 transition-colors break-all leading-relaxed">inquiry@transwaters.com</a></li>
            <li className="flex items-start"><Phone className="text-cyan-400 mr-3 mt-1 shrink-0" size={18} /><span className="leading-relaxed">+91-8073182542</span></li>
            <li className="flex items-start"><MapPin className="text-cyan-400 mr-3 mt-1 shrink-0" size={18} /><span className="leading-relaxed">#8, 2nd Floor, Purestone Pavilion,<br />Haralur Road, Ambalipura,<br />Bangalore 560103, Karnataka</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Social Presence</h4>
          <div className="flex space-x-4 mb-8 text-slate-300">
            <a href="https://www.instagram.com/bosonwhitewater/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all hover:scale-110 shadow-lg" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            <a href="https://www.linkedin.com/company/bosonwhitewater" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all hover:scale-110 shadow-lg" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://www.youtube.com/@vikasbrahmavar122" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all hover:scale-110 shadow-lg" aria-label="YouTube"><Youtube size={20} /></a>
          </div>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Design Patent #523072</p>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Boson Whitewater. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="font-bold text-slate-400 tracking-widest uppercase leading-tight flex items-center"><ShieldCheck size={14} className="mr-1.5 text-cyan-500" /> SECURE WATER FUTURE</span>
          <a href="https://www.bosonwhitewater.com" className="hover:text-cyan-400 transition-colors font-bold uppercase tracking-widest leading-tight">bosonwhitewater.com</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
