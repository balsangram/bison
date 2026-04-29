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
import achievementImg from '@/assets/achivement.png';
import achievementImg1 from '@/assets/achivement 1.jpeg';
import achievementImg2 from '@/assets/achivement 2.jpeg';
import achievementImg3 from '@/assets/achivement 3.jpeg';
import achievementImg4 from '@/assets/achivement 4.jpeg';
import theHinduImg from '@/assets/the hindu.png';
import etRealtyImg from '@/assets/rt.png';
import deccanHeraldImg from '@/assets/dh.png';
import southFirstImg from '@/assets/south.png';
import theNewsMinuteImg from '@/assets/the news.png';
import yourstoryImg from '@/assets/yourstory.png';
import indiaWaterPortalImg from '@/assets/indian water.png';
import hindubusiness from '@/assets/hindu bisic.png';
import timesnow from '@/assets/tn.png';
import constraction from '@/assets/construction.png';
import fince from '@/assets/fincel.png';
import global from '@/assets/the global.png';
import kj from '@/assets/kj.png';
import indianpsu from '@/assets/indian psu.png';
import betterindia from '@/assets/the better.png';
import new1Img from '@/assets/new 1.jpeg';
import new2Img from '@/assets/new 2.jpeg';
import new3Img from '@/assets/new 3.jpeg';
import new4Img from '@/assets/new 4.jpeg';
import new5Img from '@/assets/new 5.jpeg';
import new6Img from '@/assets/new 6.jpeg';
import new7Img from '@/assets/new 7.jpeg';
import {
  Droplet, Leaf, ShieldCheck, CheckCircle2, Menu, X, ArrowRight, Settings,
  Star, Quote, Mail, Activity, Filter, Layers, ThermometerSun, Droplets, TestTube,
  ArrowDownRight, ChevronRight, Wind, BatteryCharging, Building, Briefcase,
  Factory, PiggyBank, Clock, MapPin, Phone, Linkedin, Twitter, Facebook,
  ArrowUpRight, CheckCircle, Send, MessageSquare, Truck, Youtube, Video, ImageIcon,
  Target, Globe, ShoppingBag, Zap, Gauge, Beaker, ChevronDown, Wrench, Users,
  FlaskConical, TrendingUp, Warehouse, Package, MessageCircle,
  Building2, Award, Newspaper, ExternalLink
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Faq from '@/pages/Faq';


// --- Media Gallery ---
type VideoCategory = 'awards' | 'pressCoverage' | 'talks';

const videoCategories: Record<VideoCategory, { id: string }[]> = {
  awards: [
    { id: "fIHDH4vhr0I" },
    { id: "oZRlVyh0VxY" }, { id: "c-CfmMEzSCU" }, { id: "Xqh8pHMVXBk" },
    { id: "PsHe7c4IS1U" }, { id: "jQYCKf71kl4" }, { id: "E6llEejki1U" },
    { id: "JShUb8F30Ew" },
    { id: "OAqyhO6-a5M" },
  ],
  pressCoverage: [
    { id: "7cAWrmj9YpE" }, { id: "7l3q0xCthNA" }, { id: "q-joqEnCv3A" },
    { id: "HbnCnorFd00" },{ id: "bi48Wlp2EMs" },
  ],
  talks: [
    { id: "wf5EwDNTXpI" }, { id: "QtP1ZX57YLA" }, { id: "OAqyhO6-a5M" },
    { id: "qH9O8dPmpf0" }, { id: "oQ7mDlBSN34" }, { id: "BnFCn0VvhUY" },
    { id: "hcze3hxnHQE" }, { id: "JnagvYQ282M" }, { id: "IxmJmVvDeCw" },
    { id: "OS1Ni2vl3RA" }, { id: "wqm8n_hvWxc" }, { id: "zYUMYMbiN8U" },
    { id: "QVkehE1G7f8" }, { id: "7mE15jl12JI" }, { id: "d9YqMdmsXgU" },
    { id: "-IBsrj7KHCs" }, { id: "bKk2q-UL_5U" }, { id: "8NzHXXWnP1E" },
    { id: "XQzesQzuRWM" },
  ],
};

const imageData = [
  { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lwvvgouqdyc50s27xe-lsyfvnlmhbt9v6o3sqv-BosonWhiteWater---Reduce-Water-Cost--1-.webp", alt: "BosonWhiteWater Reduce Water Cost" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lui111298xsyqw5jyif-infographic1--1-.webp", alt: "Boson How It Works" },
  { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lwvvgpf7jmrjm1rpjap-lsyfvo3m0xzdhwbwaol-WhatsApp-Image-2023-04-24-at-20.48.36.webp", alt: "Boson Water Quality" },
  { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lwvvgnyeyt7c81k1i7p-lsyfvn7ugh1gubjwo15-BAF-site-visit---4.webp", alt: "Government of Karnataka Visit" },
  { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lwvvgolw4item9blht-lsyfvneo2wvo1b2f3px-BAF-Site-Visit-5.webp", alt: "BAF Site Visit" },
  { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lwvvgpa0e9drpxkzw3l-lsyfvny13hdv5noja2r-BosonWhitewaterSystem-Post-STP.webp", alt: "Boson Whitewater System" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/luhxm66piyumlclnk-real.webp", alt: "Real-time Water Monitoring" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/luhxm4x7eclfqegikp-opex.webp", alt: "OPEX Model" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/lugn9776yebr0cen8y-turn.webp", alt: "Turnkey Solution" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/gallery/600/luhxm8ta71oiae4jhe5-ww.webp", alt: "World Class Expertise" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/Media/1000/lx33hrinynhyw629yh-5.webp", alt: "Times of India Coverage" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/Media/300/lx33hrdvm8kt30neya-4.webp", alt: "YourStory Coverage" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/Media/300/lx4bsf8neh7trdc5kse-better-india-logo.webp", alt: "Better India Coverage" },
  // { src: "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/Media/300/lx33hr8vljsvmwtutmc-3.webp", alt: "Udaya News Coverage" },
  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/new%201.jpeg", alt: "Eon Ecolife Apartment" },
  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/new%202.jpeg", alt: "BWSSB Chairman Dr. Ram Prasad Manohar inagurating Boson white water system" },
  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/new%203.jpeg", alt: "Eon Ecolife apartment - Inauguration" },
  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/new%204.jpeg", alt: "Bwssb Chairman Dr. Ram Prasad Manohar at BOSON White water system" },
  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/new%205.jpeg", alt: "BOSON White water system at BWSSB" },
  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/new%206.jpeg", alt: "SJR Brooklyn Apartment" },
  { src: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/new%207.jpeg", alt: "DSR waterscape Apartment" },
];

// Articles: image shown on card; click opens article URL
const articleDefaultImg = "https://simpleji-websites.s3.ap-south-1.amazonaws.com/images-resized/web63-78515f08-639a-473d-bc17-66996ee517e8/Media/1000/lx33hrinynhyw629yh-5.webp";
const articleData: { title: string; url: string; source?: string; img?: string }[] = [
  { title: "Treatment plant uses aquifer to supply 6 lakh litres of potable water to Devanahalli", url: "https://www.thehindu.com/news/cities/bangalore/treatment-plant-uses-aquifer-to-supply-6-lakh-litres-of-potable-water-to-devanahalli-town-near-bengaluru/article68717754.ece", source: "The Hindu", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/the%20hindu.png" },
  { title: "BWSSB opens wastewater treatment plants to start-ups to boost home-grown water innovation", url: "https://www.thehindu.com/news/national/karnataka/bwssb-opens-wastewater-treatment-plants-to-start-ups-to-boost-home-grown-water-innovation/article70317813.ece", source: "The Hindu", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/the%20hindu.png" },
  { title: "Boson Whitewater partners with Biome Environmental for indirect potable water reuse project", url: "https://realty.economictimes.indiatimes.com/news/allied-industries/boson-whitewater-partners-with-biome-environmental-for-indirect-potable-water-reuse-project-in-bengaluru/113942919", source: "ET Realty", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/rt.png" },
  { title: "Bengaluru's 'white water' revolution: How apartments are powering IT parks and data centres", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengalurus-white-water-revolution-how-apartments-are-powering-it-parks-and-data-centres-3880719", source: "Deccan Herald", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/dh.png" },
  { title: "Bengaluru moves toward circular water economy with new recycled water supply pilot", url: "https://thesouthfirst.com/news/bengaluru-moves-toward-circular-water-economy-with-new-recycled-water-supply-pilot/", source: "South First", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/south.png" },
  { title: "Bengaluru-based Boson Whitewater selected for startup challenge by Housing Ministry", url: "https://www.thenewsminute.com/karnataka/bengaluru-based-boson-whitewater-selected-startup-challenge-housing-ministry-167863", source: "The News Minute", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/the%20news.png" },
  { title: "Saviour of Bengaluru's water crisis: Boson Whitewater", url: "https://yourstory.com/2024/04/saviour-bengalurus-water-crisis-boson-whitewater", source: "YourStory", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/yourstory.png" },
  { title: "Water reuse: Panacea for parching cities", url: "https://www.indiawaterportal.org/water-quality-and-pollution/waste-water-/water-reuse-panacea-parching-cities", source: "India Water Portal", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/indian%20water.png" },
  { title: "Bengaluru malls can now tap into a supply of treated sewage water", url: "https://www.thehindubusinessline.com/news/bengaluru-malls-can-now-tap-into-a-supply-of-treated-sewage-water/article65524121.ece", source: "The Hindu Business Line", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/hindu%20bisic.png" },
  { title: "Why Can't Bengaluru Residents Use Their Treated Wastewater? Expert Suggests A Solution", url: "https://www.timesnownews.com/bengaluru/bangalore-water-crisis-3-5k-complexes-treat-wastewater-but-cant-use-it-then-what-to-do-with-it-exclusive-article-119464869", source: "Times Now", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/tn.png" },
  { title: "The unique initiative by Citadines OMR Chennai", url: "https://www.constructionweekonline.in/business/the-unique-initiative-by-citadines-omr-chennai", source: "Construction Week", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/construction.png" },
  { title: "Boson White Water's IoT-based system makes STP treated water potable", url: "https://www.financialexpress.com/business/industry-boson-white-waters-iot-based-system-makes-stp-treated-water-potable-2910727/", source: "Financial Express", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/fincel.png" },
  { title: "London sparked it, Bengaluru needed it: Vikas Brahmavar's urban water vision", url: "https://www.globalindian.com/story/story-startup/boson-whitewater/", source: "The Global Indian", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/the%20global.png" },
  { title: "Boson Whitewater & SGBS Unnati to Install Water ATMs in Karnataka Villages", url: "https://krishijagran.com/industry-news/boson-whitewater-sgbs-unnati-to-install-water-atms-in-karnataka-villages/", source: "Krishi Jagran", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/kj.png" },
  { title: "IAPMO India Installs Boson Whitewater System To Recycle 10,000 Litres Of Water Daily", url: "https://indianpsu.com/iapmo-india-installs-boson-whitewater-system-to-recycle-10000-litres-of-water-daily/", source: "Indian PSU", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/indian%20psu.png" },
  { title: "Water reborn: Bengaluru start-up offers a lesson in sustainability", url: "https://www.thehindu.com/news/cities/bangalore/water-reborn-bengaluru-start-up-offers-a-lesson-in-sustainability/article68227304.ece", source: "The Hindu", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/the%20hindu.png" },
  { title: "How Devanahalli's Water Solutions Could Be the Key to Bengaluru's Water Shortage", url: "https://thebetterindia.com/373474/bengaluru-water-solutions-stp-treated-lake-rejuvenation-devanahalli-biome-environmental-trust-boson-whitewater/", source: "The Better India", img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/the%20better.png" },
];

const MediaGallery = ({ bgClass }: { bgClass: string }) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'images' | 'articles'>('images');
  const [videoFilter, setVideoFilter] = useState<VideoCategory>('awards');
  const [visibleVideos, setVisibleVideos] = useState(6);
  const [visibleImages, setVisibleImages] = useState(6);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const currentVideoData = videoCategories[videoFilter];

  return (
    <div className={`py-16 ${bgClass} font-sans`}>
      {/* Toggle: Videos / Images / Articles */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
   
          <button
            onClick={() => setActiveTab('images')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${activeTab === 'images'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <ImageIcon size={16} /> Images
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${activeTab === 'articles'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <Newspaper size={16} /> Articles
          </button>
                 <button
            onClick={() => setActiveTab('videos')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${activeTab === 'videos'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-500 hover:text-slate-700'
              }`}
          >
            <Video size={16} /> Videos
          </button>
        </div>
      </div>

      {/* Videos: category filter (Awards, Press coverage, Talks) */}
      {activeTab === 'videos' && (
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
          {(['awards', 'pressCoverage', 'talks'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => { setVideoFilter(cat); setVisibleVideos(6); }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all border ${
                videoFilter === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat === 'awards' && <Award size={14} />}
              {cat === 'pressCoverage' && <MessageSquare size={14} />}
              {cat === 'talks' && <Users size={14} />}
              {cat === 'awards' && 'Awards'}
              {cat === 'pressCoverage' && 'Press coverage'}
              {cat === 'talks' && 'Talks'}
            </button>
          ))}
        </div>
      )}

      {/* Videos Grid */}
      {activeTab === 'videos' && (
        <>
          <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-slate-900">
            {currentVideoData.slice(0, visibleVideos).map((v, i) => (
              <div key={v.id} className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                  <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${v.id}`} frameBorder="0" allowFullScreen title={`Boson White Water Video ${i + 1}`} loading="lazy"></iframe>
                </div>
              </div>
            ))}
          </div>
          {visibleVideos < currentVideoData.length && (
            <div className="text-center mt-10">
              <button onClick={() => setVisibleVideos(prev => Math.min(prev + 6, currentVideoData.length))} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wide text-sm">
                Load More Videos <ChevronRight className="inline ml-1" size={16} />
              </button>
            </div>
          )}
        </>
      )}

      {/* Images Grid */}
      {activeTab === 'images' && (
        <>
          <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-slate-900">
            {imageData.slice(0, visibleImages).map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxImg(img)}
                className="bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-700 text-center">{img.alt}</p>
              </div>
            ))}
          </div>
          {visibleImages < imageData.length && (
            <div className="text-center mt-10">
              <button onClick={() => setVisibleImages(prev => Math.min(prev + 6, imageData.length))} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wide text-sm">
                Load More Images <ChevronRight className="inline ml-1" size={16} />
              </button>
            </div>
          )}

          {/* Lightbox */}
          <Dialog open={!!lightboxImg} onOpenChange={() => setLightboxImg(null)}>
            <DialogContent className="max-w-4xl p-2 bg-black/95 border-none">
              <DialogTitle className="sr-only">Image Preview</DialogTitle>
              {lightboxImg && (
                <img src={lightboxImg.src} alt={lightboxImg.alt} className="w-full h-auto rounded-lg" />
              )}
            </DialogContent>
          </Dialog>
        </>
      )}

      {/* Articles Grid — click image/card opens article link */}
      {activeTab === 'articles' && (
        <>
          <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-slate-900">
            {articleData.slice(0, visibleArticles).map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer no-underline text-inherit"
              >
                <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                  <img
                    src={article.img ?? articleDefaultImg}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-700 line-clamp-2 group-hover:text-blue-600 transition-colors">{article.title}</p>
                {article.source && (
                  <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                    {article.source}
                    <ExternalLink size={12} className="opacity-70" />
                  </span>
                )}
              </a>
            ))}
          </div>
          {visibleArticles < articleData.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleArticles(prev => Math.min(prev + 6, articleData.length))}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wide text-sm"
              >
                Load More Articles <ChevronRight className="inline ml-1" size={16} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const achievementItems = [
  { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/achivement.png",  title: 'Champions of change honoured',desc: 'DH Changemakers 2025' },
  { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/achivement%201.jpeg", title: 'Design Impact Awards', desc: 'A social initiative by Titan Company — recognition for impactful work in sustainability.' },
  { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/achivement%202.jpeg", title: 'Mission Paani by CNN', desc: 'Mission Paani by CNN — recognition for impactful work in sustainability.' },
  { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/achivement%203.jpeg", title: 'FICCI Sanitation Awards', desc: 'India Sanitation Coalition recognition for excellence in water and sanitation.' },
  { img: "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/achivement%204.jpeg", title: 'Namma Bengaluru Awards', desc: 'Recognizing providers helping Bengaluru achieve sustainable water reuse and conservation.' },
];

// --- Media Page ---
const MediaPage = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(0);
  const [achievementModalOpen, setAchievementModalOpen] = useState(false);
  const current = achievementItems[selectedAchievement];
  return (
  <div className="relative overflow-hidden pt-16 sm:pt-20 font-sans text-slate-900">
    <div className="relative py-16 sm:py-24 overflow-hidden border-b border-blue-900/30 text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/background%20video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md border border-white/20 shadow-lg">
          <Youtube size={16} className="text-red-400" />
          <span className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-widest">Multimedia</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase leading-tight">Media Gallery</h1>
        <p className="text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">Technical insights, industry news, and media coverage highlighting advancements in water reuse and treatment.</p>
      </div>
    </div>

    {/* Achievement Section */}
    <div className="bg-white py-10 sm:py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 text-amber-600 mb-3 sm:mb-4">
            <Award size={20} className="sm:w-6 sm:h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight px-1">Our Achievement</h2>
          {/* <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto px-1">Champions of change honoured — recognised for eco entrepreneurship and sustainability.</p> */}
        </div>

        {/* Upper row: clickable cards with thumbnail + text */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-5 mb-6 sm:mb-10">
          {achievementItems.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { setSelectedAchievement(i); setAchievementModalOpen(false); }}
              className={`rounded-xl sm:rounded-2xl overflow-hidden border-2 shadow-md sm:shadow-lg bg-slate-50 text-left transition-all duration-300 hover:shadow-xl active:scale-[0.98] sm:hover:-translate-y-1 flex flex-col min-w-0 ${selectedAchievement === i ? 'border-amber-500 ring-2 ring-amber-200' : 'border-slate-200 hover:border-amber-300'}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 flex-shrink-0">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col min-w-0">
                <span className="text-lg sm:text-2xl md:text-3xl font-black text-amber-500/80 leading-none mb-0.5 sm:mb-1">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base uppercase tracking-tight line-clamp-2 leading-tight">{item.title}</h3>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs md:text-sm text-slate-600 line-clamp-2 font-medium leading-snug">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Large display: selected image (click to open modal) */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50">
          <button type="button" onClick={() => setAchievementModalOpen(true)} className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 rounded-xl sm:rounded-2xl touch-manipulation">
            <img src={current.img} alt={current.title} className="w-full h-auto object-contain max-h-[55vh] sm:max-h-[70vh] object-center" />
            <div className="p-3 sm:p-4 md:p-6 bg-slate-50 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg md:text-xl uppercase tracking-tight">{current.title}</h3>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600 font-medium">{current.desc}</p>
              <span className="inline-flex items-center gap-1 mt-2 sm:mt-3 text-amber-600 text-xs sm:text-sm font-bold uppercase tracking-wider">Tap image to view full size <ArrowUpRight size={12} className="sm:w-3.5 sm:h-3.5" /></span>
            </div>
          </button>
        </div>

        <Dialog open={achievementModalOpen} onOpenChange={setAchievementModalOpen}>
          <DialogContent className="max-w-4xl w-[100vw] sm:w-[95vw] max-h-[100dvh] sm:max-h-[90vh] p-0 overflow-hidden bg-slate-900 border-0 rounded-none sm:rounded-lg">
            <button type="button" onClick={() => setAchievementModalOpen(false)} className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 active:bg-white/25 transition-colors touch-manipulation" aria-label="Close">
              <X size={22} className="sm:w-6 sm:h-6" />
            </button>
            <div className="overflow-y-auto max-h-[100dvh] sm:max-h-[90vh] flex flex-col">
              <img src={current.img} alt={current.title} className="w-full h-auto object-contain max-h-[75dvh] sm:max-h-[70vh] flex-shrink-0" />
              <div className="p-3 sm:p-4 bg-slate-800 text-white flex-shrink-0">
                <h3 className="font-bold text-base sm:text-lg">{current.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">{current.desc}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>

    <div className="bg-slate-50/90 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><MediaGallery bgClass="bg-transparent" /></div>
    </div>
  </div>
  );
};

export default MediaPage;
