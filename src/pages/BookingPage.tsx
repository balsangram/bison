import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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


const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackText: string) => {
  const target = e.target as HTMLImageElement;
  target.src = `https://placehold.co/800x450/1e293b/38bdf8?text=${encodeURIComponent(fallbackText)}`;
};

// EmailJS – same service as Contact; template receives same variable names, booking data mapped into them
const EMAILJS_SERVICE_ID = 'service_uw4mfgh';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';

// --- Booking ---
const BookingPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', volume: '12KL', date: '' });
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
      const bookingMessage = `Delivery Address:\n${formData.address}\n\nVolume: ${formData.volume}\nPreferred Delivery Date: ${formData.date}`;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          phone: formData.phone,
          sector: 'Tanker Booking',
          message: bookingMessage,
          reply_to: formData.phone,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: '', phone: '', address: '', volume: '12KL', date: '' });
      setTimeout(() => setSubmitted(false), 5000);

      const whatsappText = `Tanker Booking from Website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nVolume: ${formData.volume}\nPreferred Date: ${formData.date}`;
      const whatsappUrl = `https://wa.me/918073182542?text=${encodeURIComponent(whatsappText)}`;
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send booking. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const bookingFeatures = [
    { icon: <Droplet size={56} className="text-cyan-500" strokeWidth={1.5} />, highlight: "TDS < 70 ppm", title: "High Quality Low TDS Water", desc: "Low TDS water may replace DM water in many Industries" },
    { icon: <div className="relative w-14 h-14 flex items-center justify-center"><Layers size={48} className="text-blue-400" strokeWidth={1.5} /><X size={56} className="text-red-500 absolute drop-shadow-md" strokeWidth={2.5} /></div>, title: "Save Costs and No Headache", desc: "No Additional Water Treatment Required in your Industry" },
    { icon: <Truck size={56} className="text-amber-500" strokeWidth={1.5} />, title: "Supply in 12 KL Tankers", desc: "Water is supplied in 12 KL tankers to Industries" },
    { icon: <Leaf size={56} className="text-emerald-500" strokeWidth={1.5} />, title: "Sustainable Water", desc: "Sustainable water sources — #StopBorewellExploitation" }
  ];

  const applications = [
    { title: "Cooling Towers", desc: "Save on chemicals and significantly improve efficiency & life of your cooling tower infrastructure.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
    { title: "Boilers", desc: "Low TDS water drastically reduces scaling, increasing heat transfer efficiency and boiler lifespan.", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" },
    { title: "Electroplating", desc: "Ensure smooth, high-precision, and defect-free coating processes using our ultra-low TDS water.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
    { title: "Plastic Extrusion", desc: "Reduces downtime, prevents production delays, and lowers overall maintenance costs.", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/robotic-arms-packaging-process.jpg" },
    { title: "Coolant Mixture", desc: "Improves consistency and lowers treatment requirements, maximizing your operational savings.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
    { title: "Injection Molding", desc: "Improves surface finish quality in molded products and significantly extends your mold life.", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="pt-16 sm:pt-20 font-sans text-slate-900 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100/80 backdrop-blur-md rounded-full px-4 py-1.5 mb-4 border border-blue-200 shadow-sm">
            <Truck size={16} className="text-blue-700" />
            <span className="text-xs sm:text-sm font-bold text-blue-800 uppercase tracking-widest">Express Delivery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight text-slate-900">Book a Water Tanker</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 font-medium">Fast, reliable, and highly purified potable water delivered directly to your facility. Minimum order volume: 12KL.</p>
        </div>

        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-slate-900 uppercase tracking-tight">Save Cost with Boson</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bookingFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col items-center text-center hover:shadow-xl transition-all group hover:-translate-y-1">
                <div className="h-20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
                {feat.highlight && <div className="text-blue-700 font-extrabold text-sm mb-3 uppercase tracking-widest">{feat.highlight}</div>}
                <h4 className={`text-lg font-bold text-slate-900 mb-3 leading-tight ${feat.highlight ? '' : 'mt-7'} uppercase tracking-tight`}>{feat.title}</h4>
                <p className="text-sm text-slate-600 font-medium leading-relaxed flex-grow">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-slate-900 uppercase tracking-tight">Industrial Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {applications.map((app, idx) => (
              <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square shadow-lg border border-slate-200/50 cursor-default">
                <img src={app.img} alt={app.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => handleImgError(e, app.title)} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight drop-shadow-md">{app.title}</h3>
                  <div className="h-1 w-12 bg-cyan-400 mb-4 rounded-full"></div>
                  <p className="text-blue-50 font-medium leading-relaxed drop-shadow-sm">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => document.getElementById('tanker-booking-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 text-white font-bold px-10 py-4 rounded-full hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center mx-auto text-lg">
              Book Tanker <ArrowDownRight className="ml-2" size={20} />
            </button>
          </div>
        </div>

        <div id="tanker-booking-form" className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row scroll-mt-24">
          <div className="lg:w-5/12 relative bg-slate-950 text-white overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <img src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/warertank-B1DG3cjg.png" alt="Boson Water Tanker" className="w-full h-full object-cover object-left opacity-50 mix-blend-luminosity" onError={(e) => handleImgError(e, 'Boson+Tanker+Fleet')} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-blue-900/40"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20 z-10 pointer-events-none select-none transform -rotate-12 scale-125 md:scale-150">
              {/* <span className="text-8xl sm:text-9xl font-black text-white uppercase tracking-tighter whitespace-nowrap leading-none drop-shadow-2xl">BOSON</span> */}
              {/* <span className="text-4xl sm:text-6xl font-bold text-cyan-400 uppercase tracking-widest whitespace-nowrap mt-2 drop-shadow-xl">White Water</span> */}
            </div>
            <div className="relative z-20 p-8 sm:p-12 mt-auto">
              <h3 className="text-3xl font-extrabold mb-4 uppercase tracking-tight">Premium Fleet</h3>
              <p className="text-blue-100 font-medium leading-relaxed mb-8">Our dedicated fleet of high-grade tankers ensures the absolute purity of BOSON White Water is maintained from our plant to your reservoir.</p>
              <div className="space-y-6">
                {[
                  { Icon: Droplet, title: "Food-Grade Tanks", sub: "100% rust-free storage" },
                  { Icon: Clock, title: "On-Time Delivery", sub: "GPS tracked fleet routing" },
                  { Icon: ShieldCheck, title: "Quality Assured", sub: "Sealed & certified dispatch" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center border border-blue-500/50 backdrop-blur-md shrink-0"><item.Icon className="text-cyan-400" size={24} /></div>
                    <div><h4 className="font-bold uppercase tracking-tight">{item.title}</h4><p className="text-sm text-slate-300">{item.sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="delivery-details" className="lg:w-7/12 p-8 sm:p-12 relative z-10 bg-white scroll-mt-24">
            {submitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-20 text-center px-6 transition-all duration-500">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100"><CheckCircle size={48} /></div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-3 uppercase tracking-tight">Booking Confirmed!</h3>
                <p className="text-slate-600 font-medium text-lg max-w-sm">Your tanker request has been received. Our logistics team will contact you shortly.</p>
              </div>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 uppercase tracking-tight text-slate-900">Delivery Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Delivery Address</label>
                <textarea required value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none font-medium text-slate-900" placeholder="Complete site address for tanker access..."></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Volume Required</label>
                  <select required value={formData.volume} onChange={(e) => setFormData({ ...formData, volume: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900 appearance-none">
                    <option value="6KL">12 KL tanker(BOSON White Water)</option>
                    <option value="6KL">06 KL (BOSON DM Water)</option>
                    <option value="12KL">12 KL (BOSON DM Water)</option>
                    {/* <option value="Custom">Custom Volume (Specify in Address)</option> */}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Preferred Delivery Date</label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-900" />
                </div>
              </div>
              {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
              <div className="pt-4">
                <button type="submit" disabled={sending} className="w-full bg-cyan-500 text-slate-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-cyan-400 hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                  {sending ? 'Sending...' : 'Confirm Booking'} <ArrowRight className="ml-3" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
