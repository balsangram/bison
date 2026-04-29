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


// --- Methodology ---
const MethodologyPage = () => {
  const methodologyStages = [
    // { Icon: Filter, title: "100 Micron Automatic Filtration", desc: "Automatic filtration system reducing suspended solids and particles up to 100 microns.", img: step100Micron },
    // { Icon: Layers, title: "Clintoptilolite Filtration", desc: "Clintoptilolite based filtration system comprises of imported media for superior clarity.", img: stepClinoptilolite },
    // { Icon: Layers, title: "Alumino Silicate Filter", desc: "Efficient removal of suspended solids present in the waste water using crushed glass beads.", img: stepAluminosilicate },
    // { Icon: TestTube, title: "Initial pH Correction", desc: "pH correction system designed to prevent bio-fouling and optimize chemical performance.", img: stepPhCorrection },
    // { Icon: Wind, title: "Odour Reduction Filter", desc: "Loaded with High IV Activated carbon & MnO2 to eliminate odor and chlorine residuals.", img: stepOdourReduction },
    // { Icon: Droplets, title: "Antiscalant Dosing System", desc: "Protects membranes from mineral scaling, extending system life and efficiency.", img: stepAntiscalant },
    // { Icon: Filter, title: "Micron Filtration Stage 1", desc: "Precision micron-level particle removal for pre-filtration security of the membranes.", img: stepMicron1 },
    // { Icon: Filter, title: "Micron Filtration Stage 2", desc: "Absolute ultra-fine particle elimination before high-recovery modules.", img: stepMicron2 },
    // { Icon: Activity, title: "XFR Membrane Filtration", desc: "The core recovery system, reducing dissolved solids and pathogens to zero using advanced membrane technology.", img: stepXfrMembrane },
    // { Icon: TestTube, title: "Final pH Correction", desc: "Balances pH strictly to meet the BIS 10500:2012 potability standards.", img: stepFinalPh },
    // { Icon: ShieldCheck, title: "Disinfection System", desc: "Final multi-step UV and ORP disinfection guaranteeing absolute microbiological safety.", img: stepDisinfection }
  ];

  const waterSupplyComparison = [
    { criteria: "Cost per Its", municipal: "4 Paise - 23 Paise", borewell: "1-2 Paise", tanker: "7 Paise - 33 Paise", rain: "Free", boson: "8-11 paise" },
    { criteria: "Report Provided", municipal: "NO", borewell: "NO", tanker: "NO", rain: "NO", boson: "YES" },
    { criteria: "Treated", municipal: "NO / Sometimes", borewell: "NO", tanker: "NO", rain: "NO / Basic", boson: "YES" },
    { criteria: "Monitoring", municipal: "NO", borewell: "NO", tanker: "NO", rain: "NO", boson: "YES" },
    { criteria: "Cost", municipal: "Varies based on slabs", borewell: "Constant when available", tanker: "Varies drastically", rain: "Free", boson: "Fixed for agreed duration and planned variation." },
    { criteria: "Availability", municipal: "Not Reliable", borewell: "Not Reliable", tanker: "Not Reliable", rain: "Not Reliable", boson: "Reliable" },
    { criteria: "Usability Barrier", municipal: "None", borewell: "None", tanker: "None", rain: "Sometimes", boson: "Heavy" },
    { criteria: "Sustainable", municipal: "NO", borewell: "NO", tanker: "NO", rain: "NO", boson: "YES" },
    { criteria: "Capex", municipal: "Yes to get connection", borewell: "YES", tanker: "NO", rain: "Not much", boson: "NO" },
    { criteria: "Quality", municipal: "Fair", borewell: "Bad", tanker: "Bad", rain: "Fair", boson: "Good" },
  ];

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20 text-slate-900 font-sans">
      <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/background%20video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="absolute top-0 right-0 w-64 md:w-[600px] h-64 md:h-[600px] bg-blue-500/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-cyan-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <Settings size={14} className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Process</span>
          </div> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight uppercase">Technical Methodology</h1>
          <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">A precise 11-step journey transforming treated sewage into flawlessly pure, potable water through patented treatment.</p>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 mb-2">Watch Our Process</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">Boson transforms wastewater into high-quality reusable water, enabling a circular water economy in cities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="px-4 py-3 border-b border-slate-700">
                <h3 className="text-white font-bold text-sm sm:text-base">High Quality Water Supply from Boson</h3>
              </div>
              <div className="aspect-video bg-black">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/O1XcSb7qbds" title="High Quality Water Supply from Boson" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="px-4 py-3 border-t border-slate-700 flex items-center justify-between">
                <a href="https://youtu.be/O1XcSb7qbds" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold flex items-center gap-2">Watch on YouTube <ArrowUpRight size={14} /></a>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div className="px-4 py-3 border-b border-slate-700">
                <h3 className="text-white font-bold text-sm sm:text-base">Boson For Sustainable Cities</h3>
              </div>
              <div className="aspect-video bg-black">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/WM62z_CWm0s" title="Boson For Sustainable Cities" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="px-4 py-3 border-t border-slate-700 flex items-center justify-between">
                <a href="https://youtu.be/WM62z_CWm0s" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold flex items-center gap-2">Watch on YouTube <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-white/90 backdrop-blur-xl border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 text-slate-900">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">Why Boson Outperforms</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-900">
            <table className="w-full table-fixed text-left border-collapse min-w-[600px] font-sans">
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Parameters</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs bg-blue-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">BOSON System</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">STP + UF + RO</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">STP + Softener</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700 text-sm">
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Investment</td><td className="p-6 font-bold text-blue-800 bg-blue-50/50 uppercase tracking-tight">Zero CapEx</td><td className="p-6 font-semibold uppercase tracking-tight">Huge Capital</td><td className="p-6 font-semibold uppercase tracking-tight">MODERATE CAPITAL</td></tr>
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Cost / Litre</td><td className="p-6 font-bold text-blue-800 bg-blue-50/50 uppercase tracking-tight">8 to 11 Paise</td><td className="p-6 font-semibold">17 to 18 PAISE</td><td className="p-6 font-semibold uppercase tracking-tight">3 to 4 Paise</td></tr>
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Quality</td><td className="p-6 font-bold text-blue-800 bg-blue-50/50 uppercase tracking-tight">Consistently Clean</td><td className="p-6 font-semibold uppercase tracking-tight">Low TDS and other parameters meeting the potable norms</td><td className="p-6 font-semibold uppercase tracking-tight">HIGH TDS</td></tr>
                <tr><td className="p-6 font-bold text-slate-900 uppercase tracking-tight">Manpower</td><td className="p-6 font-bold text-blue-800 bg-blue-50/50 uppercase tracking-tight">Fully Automated</td><td className="p-6 font-semibold">3 SHIFT</td><td className="p-6 font-semibold uppercase tracking-tight">3 Shift</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-slate-50/90 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 text-slate-900">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">Water Supply Comparison</h2>
          <p className="text-slate-600 mt-2 font-medium">Compare different water supply methods across cost, quality, and sustainability.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-900 text-sm">
            <table className="w-full text-left border-collapse min-w-[800px] font-sans">
              <thead>
                <tr className="bg-blue-900/10 border-b border-slate-200">
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-widest text-xs text-slate-900 w-40 shrink-0"></th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-widest text-xs text-blue-800 bg-blue-100/60">STP + BOSON White Water</th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-widest text-xs text-slate-900">Municipal Water Supply<br /><span className="font-normal normal-case tracking-normal text-slate-600 mt-0.5 block">Average Cost per Its</span></th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-widest text-xs text-slate-900">Borewell - Pumping Cost</th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-widest text-xs text-slate-900">Tanker Purchase Water<br /><span className="font-normal normal-case tracking-normal text-slate-600 mt-0.5 block">per Its. 6000 Lts tanker cost between Rs.350 to 2000</span></th>
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-widest text-xs text-slate-900">Rain Water</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {waterSupplyComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-6 font-bold text-slate-900 uppercase tracking-tight align-middle w-40 shrink-0">{row.criteria}</td>
                    <td className="p-4 sm:p-6 font-bold text-blue-800 bg-blue-50/40 align-middle">{row.boson}</td>
                    <td className="p-4 sm:p-6 align-middle">{row.municipal}</td>
                    <td className="p-4 sm:p-6 align-middle">{row.borewell}</td>
                    <td className="p-4 sm:p-6 align-middle">{row.tanker}</td>
                    <td className="p-4 sm:p-6 align-middle">{row.rain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyPage;
