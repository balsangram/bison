import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BG_VIDEO_URL } from '@/App';
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


// EmailJS: use your Public Key from https://dashboard.emailjs.com/admin/account
const EMAILJS_SERVICE_ID = 'service_uw4mfgh';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';

// --- Contact ---
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', sector: 'Apartments', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      if (!EMAILJS_PUBLIC_KEY || !EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS is not configured. Add VITE_EMAILJS_PUBLIC_KEY and VITE_EMAILJS_TEMPLATE_ID to .env');
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          sector: formData.sector,
          company: formData.company,
          message: formData.message,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', sector: 'Apartments', message: '' });
      setTimeout(() => setSubmitted(false), 5000);

      // Also open WhatsApp with the same inquiry (as before)
      const whatsappText = `New Inquiry from Website:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n${formData.sector} Name: ${formData.company}\nMessage:\n${formData.message}`;
      const whatsappUrl = `https://wa.me/918073182542?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-16 sm:pt-20 font-sans text-slate-900">
      <div className="relative py-24 text-center text-white border-b border-blue-900/20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={BG_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <Send size={16} className="text-cyan-400" />
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Contact Us</h1>
          <p className="text-blue-100 text-lg sm:text-xl font-medium leading-relaxed">Ready to transform your water infrastructure and reduce operational costs? Our team is here to help.</p>
        </div>
      </div>
      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 uppercase tracking-tight text-slate-900">Reach Out To Us</h2>
              <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg">Whether you have a question about our 11-stage process, pricing, or want to schedule a site visit, our team is ready to answer all your questions.</p>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mr-5 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300"><MapPin size={28} /></div>
                  <div><h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight mb-1">Our Headquarters</h4><p className="text-slate-600 font-medium leading-relaxed">Transwater Systems Pvt. Ltd.<br />#8, 2nd Floor, Purestone Pavilion, Haralur Road,<br />Ambalipura, Bangalore 560 103, Karnataka</p></div>
                </div>
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-cyan-600 shrink-0 mr-5 group-hover:scale-110 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-all duration-300"><Phone size={28} /></div>
                  <div><h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight mb-1">Call Us</h4><p className="text-slate-600 font-medium leading-relaxed">+91-8073182542</p>
                  {/* <p className="text-sm text-slate-500 font-medium mt-1">Mon-Fri from 9am to 6pm</p> */}
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 mr-5 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300"><Mail size={28} /></div>
                  <div><h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight mb-1">Email Us</h4><a href="mailto:inquiry@transwaters.com" className="text-slate-600 font-medium leading-relaxed hover:text-blue-600 transition-colors">inquiry@transwaters.com</a></div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-200/60 relative overflow-hidden">
              {submitted && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-10 text-center px-6 transition-all duration-500">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100"><CheckCircle size={48} /></div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Message Sent!</h3>
                  <p className="text-slate-600 font-medium text-lg max-w-sm">Thank you for reaching out. Our technical team will review your requirements and get back to you shortly.</p>
                </div>
              )}
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-tight text-slate-900">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="John Doe" /></div>
                  <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="john@company.com" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="+91 98765 43210" /></div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sector</label>
                    <div className="relative">
                      <select value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 appearance-none pr-10 cursor-pointer">
                        <option value="Apartments">Apartments</option>
                        <option value="Malls">Malls</option>
                        <option value="Industries">Industries</option>
                        <option value="IT Parks">IT Parks</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <ChevronDown className="text-slate-400" size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:col-span-2"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">{formData.sector} Name</label><input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder={`Enter ${formData.sector || 'Company'} Name`} /></div>

                </div>
                <div className="space-y-1.5"><label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label><textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none font-medium text-slate-900" placeholder="Tell us about your water infrastructure requirements..."></textarea></div>
                {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
                <button type="submit" disabled={sending} className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all flex items-center justify-center uppercase tracking-widest mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"> {sending ? 'Sending...' : 'Submit Inquiry'} <Send className="ml-3" size={20} /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
