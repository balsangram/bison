import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Preload URLs — fetched once, served from cache on every page
const PRELOAD_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/industery.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/modern-architecture-reflective-glass-building-with-cityscape.jpg",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Boson+Vikas+Brahmavar+CEO+and+Co+Founder.jpg",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Gowthaman+Desingh.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/sales.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Kishore+Gowda.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Process+Manager+-+IOT.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Installation+Expert.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Nagaraja+Prakasam.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Vishwanath+Zen+Rainman.png",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/team 1.jpeg",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Annual-Report+-+boson-C0h6EhI8_page-0002-imageonline.co-merged.jpg+(1).jpeg",
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/Annual-Report+-+boson-C0h6EhI8_page-0002-imageonline.co-merged.jpg+(2).jpeg",
];

export const BG_VIDEO_URL =
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/background+video.mp4";

export const APARTMENTS_VIDEO_URL =
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/video+water+tank.mp4";

export const MALLS_VIDEO_URL =
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/mall%20video.mp4";

export const INDUSTRIES_VIDEO_URL =
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/industery+video.mp4";

export const ITPARKS_VIDEO_URL =
  "https://boson-kods.s3.ap-south-1.amazonaws.com/assets+(2)/assets/it+park+video.mp4";

const App = () => {
  useEffect(() => {
    // Preload page JS chunks
    import("./pages/About");
    import("./pages/Faq");
    import("./pages/CaseStudiesPage");
    import("./pages/ContactPage");
    import("./pages/ApartmentsPage");
    import("./pages/MallsPage");
    import("./pages/IndustriesPage");
    import("./pages/ITParksPage");

    // Preload images into browser cache
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Preload all videos — browser fetches & caches each once
    [BG_VIDEO_URL, APARTMENTS_VIDEO_URL, MALLS_VIDEO_URL, INDUSTRIES_VIDEO_URL, ITPARKS_VIDEO_URL].forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
