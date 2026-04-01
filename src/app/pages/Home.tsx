import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import ImageComparisonSlider from '../components/ImageComparisonSlider';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Button } from '../components/ui/button';

import Abandon from '../../assets/Abandon.jpeg';
import Abandon2 from '../../assets/Abandon2.jpeg';
import BrokenHome from '../../assets/BrokenHome.jpg';
import BrokenHome2 from '../../assets/BrokenHome2.png';
import CheckPoint from '../../assets/CheckPoint.jpg';
import CheckPoint2 from '../../assets/CheckPoint2.png';
import ClosedShops from '../../assets/ClosedShopsjpg.jpg';
import ClosedShops2 from '../../assets/ClosedShops2.png';
import OldCityMarket from '../../assets/oldCityMarket.avif';
import OldCityMarket2 from '../../assets/oldCityMarket2.png';
import Trash from '../../assets/Trash.jpeg';
import Trash2 from '../../assets/Trash2.jpeg';
import RebuldingVideo from '../../assets/Rebulding.mp4';

const heritageImages = [
  {
    id: 1,
    title: 'Abandonned Building',
    old: Abandon,
    new: Abandon2,
  },
  {
    id: 2,
    title: 'Broken Home',
    old: BrokenHome,
    new: BrokenHome2,
  },
  {
    id: 3,
    title: 'Check Point',
    old: CheckPoint,
    new: CheckPoint2,
  },
  {
    id: 4,
    title: 'Closed Shops',
    old: ClosedShops,
    new: ClosedShops2,
  },
  {
    id: 5,
    title: 'Old City Market',
    old: OldCityMarket,
    new: OldCityMarket2,
  },
  {
    id: 6,
    title: 'Destroyed Shop',
    old: Trash,
    new: Trash2,
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!videoDialogOpen) {
      v?.pause();
      if (v) v.currentTime = 0;
      return;
    }
    const id = window.setTimeout(() => {
      const el = videoRef.current;
      if (!el) return;
      el.muted = false;
      void el.play().catch(() => {
        el.muted = true;
        void el.play();
      });
    }, 0);
    return () => clearTimeout(id);
  }, [videoDialogOpen]);

  return (
    <div className="min-h-screen bg-[var(--heritage-bg)]">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[var(--heritage-gold)]/20 via-transparent to-transparent opacity-50" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[var(--heritage-gold-light)] via-[var(--heritage-gold)] to-[var(--heritage-gold-dark)] bg-clip-text text-transparent">
              Smart Heritage Hebron
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--heritage-stone)] max-w-3xl mx-auto">
              Witness the Transformation of the Old City
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--heritage-stone)]" />
                <span className="text-sm text-[var(--heritage-stone)]">Old</span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-[var(--heritage-stone)] to-[var(--heritage-gold)]" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--heritage-gold)]" />
                <span className="text-sm text-[var(--heritage-gold)]">New</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="border-[var(--heritage-gold)]/60 bg-[var(--heritage-stone-dark)]/40 text-[var(--heritage-gold)] hover:bg-[var(--heritage-gold)]/10 hover:text-[var(--heritage-gold-light)] hover:border-[var(--heritage-gold)]"
                  >
                    <Play className="size-5" aria-hidden />
                    Heritage, in motion
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl gap-0 border-[var(--heritage-gold)]/30 bg-[var(--heritage-stone-dark)] p-3 pt-12 pb-4">
                  <DialogTitle className="sr-only">
                    Heritage in motion — Hebron rebuilding
                  </DialogTitle>
                  <video
                    ref={videoRef}
                    className="w-full max-h-[70vh] rounded-md"
                    src={RebuldingVideo}
                    controls
                    playsInline
                  />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center text-[var(--heritage-stone)] mb-12 text-base sm:text-lg"
          >
            Drag the slider to compare the past and present of Hebron's heritage sites
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {heritageImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[var(--heritage-gold)]/30 hover:border-[var(--heritage-gold)]/60 transition-all duration-300">
                  {/* Before/After Labels */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="px-3 py-1 bg-[var(--heritage-stone-dark)]/80 backdrop-blur-sm text-[var(--foreground)] rounded-full text-xs border border-[var(--heritage-stone)]">
                      Old
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <span className="px-3 py-1 bg-[var(--heritage-stone-dark)]/80 backdrop-blur-sm text-[var(--heritage-gold)] rounded-full text-xs border border-[var(--heritage-gold)]">
                      New
                    </span>
                  </div>
                  
                  {/* Image Comparison Slider */}
                  <div className="aspect-[4/3]">
                    <ImageComparisonSlider
                      oldImage={image.old}
                      newImage={image.new}
                    />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--heritage-stone-dark)]/90 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl text-[var(--heritage-gold)]">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--heritage-gold)]/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--heritage-stone)]">
            Preserving the Past, Building the Future
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[var(--heritage-gold)] to-transparent" />
          </div>
        </div>
      </footer>
    </div>
  );
}