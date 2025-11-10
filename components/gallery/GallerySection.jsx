'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import phy1 from "@/assets/services/physio/phy-1.jpg";
import phy2 from "@/assets/services/physio/phy-2.jpg";
import phy3 from "@/assets/services/physio/phy-3.jpg";
import phy4 from "@/assets/services/physio/phy-4.jpg";
import phy5 from "@/assets/services/physio/phy-5.jpg";

import pilate1 from "@/assets/services/pilate/pilate-1.jpg";
import pilate2 from "@/assets/services/pilate/pilate-2.jpg";
import pilate3 from "@/assets/services/pilate/pilate-3.jpg";
import pilate4 from "@/assets/services/pilate/pilate-4.jpg";
import pilate5 from "@/assets/services/pilate/pilate-5.jpg";

import yog1 from "@/assets/services/yog/yog-1.jpg";
import yog2 from "@/assets/services/yog/yog-2.jpg";
import yog3 from "@/assets/services/yog/yog-3.jpg";
import yog4 from "@/assets/services/yog/yog-4.jpg";
import yog5 from "@/assets/services/yog/yog-5.jpg";

import therapy1 from "@/assets/services/therapy/therapy-1.jpg";
import therapy2 from "@/assets/services/therapy/therapy-2.jpg";
import therapy3 from "@/assets/services/therapy/therapy-3.jpg";
import therapy4 from "@/assets/services/therapy/therapy-4.jpg";
import therapy5 from "@/assets/services/therapy/therapy-5.jpg";

const galleryImages = [
  { src: phy1, category: 'Physiotherapy'},
  { src: phy2, category: 'Physiotherapy'},
  { src: phy3, category: 'Physiotherapy' },
  { src: phy4, category: 'Physiotherapy'  },
  { src: phy5, category: 'Physiotherapy'  },

  { src: pilate1, category: 'Pilates'},
  { src: pilate2, category: 'Pilates'},
  { src: pilate3, category: 'Pilates' },
  { src: pilate4, category: 'Pilates' },
  { src: pilate5, category: 'Pilates' },

  { src: yog1, category: 'Yoga' },
  { src: yog2, category: 'Yoga' },
  { src: yog3, category: 'Yoga' },
  { src: yog4, category: 'Yoga' },
  { src: yog5, category: 'Yoga' },

  { src: therapy1, category: 'Dry Needling & Cup Therapy'},
  { src: therapy2, category: 'Dry Needling & Cup Therapy'},
  { src: therapy3, category: 'Dry Needling & Cup Therapy' },
  { src: therapy4, category: 'Dry Needling & Cup Therapy' },
  { src: therapy5, category: 'Dry Needling & Cup Therapy'},
];

const categories = ['All', 'Physiotherapy', 'Pilates', 'Yoga', 'Dry Needling & Cup Therapy'];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#5CE2E7] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={image.src.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-[#5CE2E7] px-3 py-1 rounded-full text-sm mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-xl font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>
          <motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.3 }}
  className="relative max-w-7xl max-h-[90vh] w-auto h-auto flex items-center justify-center"
  onClick={(e) => e.stopPropagation()}
>
  <img
    src={selectedImage.src.src || selectedImage.src}
    alt={selectedImage.title}
    className="max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
  />

  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
    <span className="inline-block bg-[#5CE2E7] px-3 py-1 rounded-full text-sm text-white mb-2">
      {selectedImage.category}
    </span>
    <h3 className="text-2xl font-semibold text-white">
      {selectedImage.title}
    </h3>
  </div>
</motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
