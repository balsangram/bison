import React, { useState } from 'react';
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
  Target, Globe, ShoppingBag, Zap, Gauge, Beaker, ChevronDown, Wrench, Users,
  FlaskConical, TrendingUp, Warehouse, Package, MessageCircle,
  Building2
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Faq from '@/pages/Faq';


const TESTIMONIAL_VIDEOS = [
  { title: "High Quality Water Supply from Boson", embedId: "8NzHXXWnP1E", youtubeUrl: "https://youtu.be/8NzHXXWnP1E" },
  { title: "Boson For Sustainable Cities", embedId: "QVkehE1G7f8", youtubeUrl: "https://youtu.be/QVkehE1G7f8" },
  { title: "Client Testimonials — Boson", embedId: "d9YqMdmsXgU", youtubeUrl: "https://youtu.be/d9YqMdmsXgU" },
  { title: "Boson White Water — Testimonial", embedId: "YtXDlJgUoDk", youtubeUrl: "https://www.youtube.com/watch?v=YtXDlJgUoDk" },
  { title: "Boson Water Solutions — Client Story", embedId: "7mE15jl12JI", youtubeUrl: "https://www.youtube.com/watch?v=7mE15jl12JI" },
  { title: "Boson Case Study — Sustainable Water", embedId: "-IBsrj7KHCs", youtubeUrl: "https://www.youtube.com/watch?v=-IBsrj7KHCs" },
];

// --- Testimonials ---
const CaseStudiesPage = () => {
  const [featuredVideoIndex, setFeaturedVideoIndex] = useState(0);

  const featured = TESTIMONIAL_VIDEOS[featuredVideoIndex];
  const leftVideos = TESTIMONIAL_VIDEOS.filter((_, i) => i < featuredVideoIndex).reverse();
  const rightVideos = TESTIMONIAL_VIDEOS.filter((_, i) => i > featuredVideoIndex);

  const SideCard = ({ video, onClick }: { video: (typeof TESTIMONIAL_VIDEOS)[0]; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/50 text-left transition-all hover:scale-[1.02] active:scale-[0.98] group"
    >
      <div className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden bg-slate-800">
        <img
          src={`https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg`}
          alt=""
          className="w-full h-full object-cover group-hover:opacity-90"
        />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-slate-200 line-clamp-2 group-hover:text-white">{video.title}</span>
    </button>
  );

  const testimonials = [
    { quote: "Our layout has saved huge quantity of water using this initiative of recycling STP treated water. The water report from the system is consistently giving us great quality of water as per the water reports from laboratories. The system we have is saving 1500 to 2000 lts of water per hr and can save between 10000 to 20000 lts of water per day. Since the water report says potable, we are using this water to recharge our ground water level, there by we avoid the psychological issue of taking the water directly", name: "Mr. Piyush", company: "Vakil Township, Bangalore", rating: 5 },
    { quote: "We are producing 80-100 KLD of potable quality BOSON White Water from our existing STP treated water, which is being used in cooling towers. With BOSON White Water system in place, we are saving 80-100 KLD of fresh water every day which was used for cooling tower. By using high quality BOSON White Water, our blow down water came down drastically, improved the efficiency of cooling tower and bring down the cost of operation apart from contribution to the water saving.", name: "Mr. Sreejith", company: "Property Manager, RMZ Ecoworld", rating: 5 },
    { quote: "We are using BOSON White Water System for our Laundry units since 2022, we were seeing significant improvement in the wash quality, reduced maintenance of equipment,  reduction in detergent usage saving costs directs and also helps in operating our ETP easier with high predictability. Overall, we have reduced our fresh water utilization, direct costs and BOSON Whitewater system helps us in achieving our sustainability goals directly attributing to our corporate goals.", name: "Mr. Hemanth", company: "Plant Head, JEEVS Laundry", rating: 5 },
    // { quote: "A truly visionary solution. They handled everything from installation to maintenance without any upfront investment. The approach temperature in our HVAC systems has drastically improved.", name: "Chief Engineer", company: "Commercial Shopping Mall", rating: 5 }
  ];
  const clientTableData = [
    { org: "RMZ Ecoworld", sector: "IT Park", loc: "Bengaluru", impact: "Zero fresh water for cooling towers" },
    { org: "Brigade Group", sector: "Real Estate", loc: "Bengaluru", impact: "Sustainable potable water reuse" },
    { org: "Puravankara", sector: "Residential", loc: "Bengaluru", impact: "Flushing & landscaping independence" },
    { org: "SKF India", sector: "Industrial", loc: "Pune / Bengaluru", impact: "Ultra-low TDS water for machining" },
    { org: "Schneider Electric", sector: "Industrial", loc: "Bengaluru", impact: "HVAC efficiency & ZLD compliance" },
    // { org: "Lulu Mall", sector: "Commercial", loc: "Bengaluru", impact: "Reduced tanker dependency by 80%" }
  ];

  return (
    <div className="pt-16 sm:pt-20 font-sans text-slate-900">
      <div className="relative py-24 text-center text-white border-b border-blue-900/20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={BG_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Success Stories</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Client Testimonials</h1>
          <p className="text-blue-100 text-lg sm:text-xl font-medium leading-relaxed">Proven performance across major tech parks, malls, and industrial complexes in Bengaluru.</p>
        </div>
      </div>
      <div className="py-16 md:py-24 bg-slate-50/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/60 relative group overflow-hidden">
                <Quote className="text-slate-100 absolute -top-4 -right-4 rotate-180 transition-transform group-hover:scale-110 duration-500" size={120} />
                <div className="relative z-10">
                  <div className="flex text-yellow-400 mb-6">{[...Array(t.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" className="mr-1" />)}</div>
                  <p className="text-slate-700 text-lg font-medium leading-relaxed mb-10">"{t.quote}"</p>
                  <div className="flex items-center border-t border-slate-100 pt-6">
                    <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">{t.name.charAt(0)}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-tight">{t.name}</h4>
                      <p className="text-xs text-cyan-600 font-bold uppercase tracking-widest mt-1">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Watch Our Clients Testimonials — central video + side previews */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-blue-50/80 to-slate-50 border-t border-slate-200 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 mb-3">Watch Our Clients Testimonials</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-base sm:text-lg leading-relaxed">See how Boson transforms wastewater into high-quality water — from high-volume supply to enabling circular economy in cities.</p>
          </div>

          {/* Desktop: center video — left = unseen (next), right = seen (previous) */}
          <div className="hidden lg:flex items-stretch gap-4 xl:gap-6 max-w-6xl mx-auto">
            <div className="w-44 xl:w-52 flex-shrink-0 flex flex-col gap-3 overflow-y-auto max-h-[420px] py-1 [scrollbar-width:thin]">
              {rightVideos.map((v, i) => (
                <SideCard key={`l-${i}`} video={v} onClick={() => setFeaturedVideoIndex(TESTIMONIAL_VIDEOS.indexOf(v))} />
              ))}
              {rightVideos.length === 0 && <div className="flex-1 min-h-[80px]" />}
            </div>
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 flex flex-col">
                <div className="px-4 py-3 border-b border-white/10 bg-slate-900/95">
                  <p className="text-white font-bold text-sm sm:text-base truncate">{featured.title}</p>
                </div>
                <div className="aspect-video relative w-full bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${featured.embedId}`}
                    title={featured.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between border-t border-white/10 bg-slate-900/95">
                  <span className="text-slate-300 text-sm font-semibold flex items-center">
                    <Youtube className="mr-2 text-white" size={18} fill="currentColor" />
                    YouTube
                  </span>
                  <a href={featured.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-xs font-bold uppercase tracking-widest flex items-center">
                    Watch on YouTube <ArrowUpRight className="ml-1" size={14} />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-44 xl:w-52 flex-shrink-0 flex flex-col gap-3 overflow-y-auto max-h-[420px] py-1 [scrollbar-width:thin]">
              {leftVideos.map((v, i) => (
                <SideCard key={`r-${i}`} video={v} onClick={() => setFeaturedVideoIndex(TESTIMONIAL_VIDEOS.indexOf(v))} />
              ))}
              {leftVideos.length === 0 && <div className="flex-1 min-h-[80px]" />}
            </div>
          </div>

          {/* Mobile/tablet: featured video + horizontal thumbnails */}
          <div className="lg:hidden space-y-6">
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700/50">
              <div className="px-4 py-3 border-b border-white/10">
                <p className="text-white font-bold text-sm truncate">{featured.title}</p>
              </div>
              <div className="aspect-video relative w-full bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${featured.embedId}`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between border-t border-white/10">
                <span className="text-slate-300 text-sm font-semibold flex items-center">
                  <Youtube className="mr-2 text-white" size={18} fill="currentColor" />
                  YouTube
                </span>
                <a href={featured.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center">
                  Watch <ArrowUpRight className="ml-1" size={14} />
                </a>
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm font-medium">Choose another video</p>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 [scrollbar-width:thin]">
              {TESTIMONIAL_VIDEOS.map((video, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setFeaturedVideoIndex(idx)}
                  className={`flex-shrink-0 w-36 rounded-xl overflow-hidden border-2 transition-all ${idx === featuredVideoIndex ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <img src={`https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg`} alt="" className="w-full aspect-video object-cover" />
                  <p className="p-2 bg-slate-900 text-white text-xs font-semibold line-clamp-2 text-left">{video.title}</p>
                </button>
              ))}
            </div>
          </div>

          {/* <div className="text-center mt-10">
            <a href={featured.youtubeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-500 text-blue-600 font-bold text-sm hover:bg-blue-500 hover:text-white transition-colors">
              See all testimonials by our customers <ChevronRight size={16} />
            </a>
          </div> */}
        </div>
      </div>

      {/* <div className="py-16 md:py-24 bg-white/90 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">Organizations Benefitted</h2>
            <p className="text-slate-600 mt-2 font-medium text-lg">Leading enterprises transitioning to the 3rd source of water.</p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white text-slate-900 text-sm">
            <table className="w-full text-left border-collapse min-w-[800px] font-sans">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Organization</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Sector</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Location</th>
                  <th className="p-6 font-bold uppercase tracking-widest text-xs">Key Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {clientTableData.map((client, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900 uppercase tracking-tight flex items-center gap-3"><CheckCircle2 size={16} className="text-cyan-500" />{client.org}</td>
                    <td className="p-6 font-semibold text-blue-700">{client.sector}</td>
                    <td className="p-6 font-semibold">{client.loc}</td>
                    <td className="p-6 text-slate-600 leading-relaxed">{client.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CaseStudiesPage;
