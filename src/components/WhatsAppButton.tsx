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


// --- WhatsApp ---
const WhatsAppButton = () => (
  <a href="https://wa.me/918073182542" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 hover:scale-110 transition-transform group">
    <div className="relative p-3 sm:p-4 rounded-full flex items-center justify-center bg-gradient-to-br from-[#25D366] via-[#20BA5C] to-[#128C7E] shadow-[0_2px_16px_rgba(37,211,102,0.4)] sm:shadow-[0_4px_24px_rgba(37,211,102,0.5)] border border-white/30 sm:border-2 overflow-hidden">
      {/* Watery ripple effects */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/10 to-transparent"></div>
      <div className="absolute -bottom-2 -left-2 w-7 h-7 sm:w-10 sm:h-10 bg-white/15 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-200/20 rounded-full blur-sm animate-pulse [animation-delay:0.5s]"></div>
      <div className="absolute inset-0 rounded-full shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.2)]"></div>
      <img src={dropLogoSvg} alt="Drop Logo" className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 object-contain drop-shadow-md" />
    </div>
  </a>
);

export default WhatsAppButton;
