import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, useAnimation, type PanInfo } from "framer-motion";
import Photo1 from "../../public/images/Photo1.jpg";
import Photo2 from "../../public/images/Photo2.jpg";
import Photo3 from "../../public/images/Photo3.jpg";
import Photo4 from "../../public/images/Photo4.jpg";
import Photo5 from "../../public/images/Photo5.jpg";
import Photo6 from "../../public/images/Photo6.jpg";
import Photo7 from "../../public/images/Photo7.jpg";
import Photo8 from "../../public/images/Photo8.jpg";
import Photo9 from "../../public/images/Photo9.jpg";
import Photo10 from "../../public/images/Photo10.jpg";
import Photo11 from "../../public/images/Photo11.jpg";
import Photo12 from "../../public/images/Photo12.jpg";
import Photo13 from "../../public/images/Photo13.jpg";
import Billie1 from "../../public/images/billie1.jpg";
import Billie2 from "../../public/images/billie2.jpg";
import Billie4 from "../../public/images/billie4.jpg";
import Billie5 from "../../public/images/billie5.jpg";
import Billie6 from "../../public/images/billie6.jpg";
import Billie7 from "../../public/images/billie7.jpg";
import Billie8 from "../../public/images/billie8.jpg";
import Billie9 from "../../public/images/billie9.jpg";
import MySketch1 from "../../public/images/MySketch1.jpg";
import MySketch2 from "../../public/images/MySketch2.jpg";
import MySketch3 from "../../public/images/MySketch3.jpg";

// Dummy data for images and cats
const initialImages = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
];

const cats = [
  Billie1,
  Billie2,
  Billie4,
  Billie5,
  Billie6,
  Billie7,
  Billie8,
  Billie9,
];

const sketches = [MySketch1, MySketch2, MySketch3];

interface DraggableCardProps {
  src: string;
  index: number;
  total: number;
  isTop: boolean;
  onSwipedAway: (direction: number) => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({
  src,
  index,
  total,
  onSwipedAway,
}) => {
  const controls = useAnimation();

  const offset = index * 6;
  const scale = 1 - index * 0.03;
  const z = total - index;

  useEffect(() => {
    controls.set({ y: offset, scale, rotate: 0, x: 0, opacity: 1 });
  }, [controls, offset, scale]);

  const handleClick = async () => {
    const dir = 1;
    const offX = (window.innerWidth || 800) * 1.5;
    await controls.start({
      x: offX,
      rotate: dir * 8,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
      },
    });
    onSwipedAway(dir);
  };

  return (
    <motion.div
      key={src}
      className="absolute cursor-pointer select-none pointer-events-auto"
      style={{ zIndex: z }}
      animate={controls}
      initial={false}
      onClick={handleClick}
      whileHover={{ y: offset - 4, scale: scale + 0.03, rotate: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 25 }}
    >
      <div
        className="
          w-48 h-32 
          rounded-xl overflow-hidden 
          bg-white/70 backdrop-blur-xl 
          shadow-lg shadow-gray-300/60 
          border border-gray-100/50
          transition-all duration-300
        "
      >
        <img
          src={src}
          alt={`photo-${index}`}
          className="w-full h-full object-cover rounded-xl pointer-events-none"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/800x600/F06292/FFFFFF?text=Image%20Error`;
          }}
        />
      </div>
    </motion.div>
  );
};

// Bento Grid Spans
const FIXED_BENTO_SPANS = [
  { col: 2, row: 2 }, // Intro
  { col: 2, row: 1 }, // Quote
  { col: 1, row: 2 }, // Photo stack
  { col: 1, row: 1 }, // GitHub
  { col: 1, row: 1 }, // Map
  { col: 2, row: 1 }, // Cats
  { col: 1, row: 1 }, // Sketchbook
  { col: 4, row: 1 }, // Spotify
];

const AboutMe: React.FC = () => {
  const [images, setImages] = useState<string[]>(initialImages);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [selectedSketch, setSelectedSketch] = useState<string | null>(null);

  const rotateFirstToEnd = useCallback(() => {
    setImages((prev) => {
      if (prev.length === 0) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  const handleSwipedAway = useCallback(
    (_dir: number) => {
      setTimeout(() => rotateFirstToEnd(), 100);
    },
    [rotateFirstToEnd]
  );

  const getSpanClasses = (index: number) => {
    const span = FIXED_BENTO_SPANS[index];
    return `col-span-1 lg:col-span-${span.col} lg:row-span-${span.row}`;
  };

  const CARD_CLASSES =
    "bg-white/80 backdrop-blur-xl rounded-xl shadow-lg p-4 border border-gray-200/50 hover:shadow-xl transition-shadow duration-300";

  return (
    <section
      id="about"
      className="p-4 sm:p-6 lg:p-12 min-h-[80vh] bg-gray-50 text-gray-900"
    >
      <h2 className="sr-only">About Me</h2>

      <div className="max-w-8xl mx-auto">
        {/* Main Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-4 auto-rows-[minmax(160px,auto)]
          "
        >
          {/* Card 0: Intro */}
          <motion.div
            className={`${CARD_CLASSES} flex flex-col ${getSpanClasses(0)}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-2">Hi, I&apos;m Nishani 👋</h3>
            <p className="text-sm text-gray-700 mb-3 flex-grow">
              Software Engineer passionate about crafting delightful interfaces,
              building small web interactions, and capturing moments through
              photography.
            </p>

            <ul className="text-xs text-gray-600 space-y-1 mb-3">
              <li>
                <strong>From:</strong> Mangalore, India
              </li>
              <li>
                <strong>Interests:</strong> Frontend development, Sketching,
                photography
              </li>
            </ul>

            <div className="mt-2 flex gap-3">
              {/* Connect via email */}
              <a
                href="mailto:nishanir18@gmail.com"
                className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full text-xs transition-shadow shadow-md hover:shadow-lg"
              >
                Connect
              </a>

              {/* Download CV */}
              <a
                href="/pdf/Nishani-Resume.pdf"
                download
                className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full text-xs transition-shadow shadow-md hover:shadow-lg"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Card 1: Quote */}
          <motion.blockquote
            className={`${CARD_CLASSES} flex flex-col justify-center ${getSpanClasses(
              1
            )}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="italic text-base text-gray-800">
              “I would rather have questions that can&apos;t be answered than
              answers that can&apos;t be questioned.”
            </p>
            <footer className="mt-2 text-xs text-gray-500 font-medium">
              — Richard Feynman
            </footer>
          </motion.blockquote>

          {/* Card 2: Photo stack */}
          <motion.div
            className={`${CARD_CLASSES} flex flex-col ${getSpanClasses(2)}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-base font-semibold mb-2">Photo Stack</h4>
            <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
              {images.map((src, i) => (
                <DraggableCard
                  key={src}
                  src={src}
                  index={i}
                  total={images.length}
                  isTop={i === 0}
                  onSwipedAway={handleSwipedAway}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Tap on a photo to cycle 👆🏻
            </p>
          </motion.div>

          {/* Card 3: GitHub */}
          <motion.div
            className={`${CARD_CLASSES} flex flex-col justify-between ${getSpanClasses(
              3
            )}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h5 className="text-base font-semibold mb-2">GitHub</h5>
            <p className="text-xs text-gray-600 mb-2 flex-grow">
              Public repos, pins, and contributions.
            </p>
            <a
              href="https://github.com/Nishani18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-500 transition"
            >
              View profile →
            </a>
          </motion.div>

          {/* Card 4: Map */}
          <motion.div
            className={`${CARD_CLASSES} ${getSpanClasses(4)}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-base font-semibold mb-2">Where I live</h5>
            <div className="w-full h-[180px] rounded-lg overflow-hidden border">
              <iframe
                title="Mangaluru Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38865.044005697626!2d74.83857597148943!3d12.87971360098059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4d48dc3903%3A0x63359d9197c83f6!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Card 5: Cats */}
          <motion.div
            className={`${CARD_CLASSES} ${getSpanClasses(5)}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-base font-semibold mb-2">
              My Feline Overlords 🐈
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {cats.map((c) => (
                <img
                  key={c}
                  src={c}
                  alt="cat"
                  className="w-full h-20 object-cover rounded-lg border cursor-pointer"
                  onClick={() => setSelectedCat(c)}
                />
              ))}
            </div>

            {/* Popup / Lightbox */}
            {selectedCat && (
              <div
                className="fixed inset-0 bg-black/50 flex items-center rounded-lg justify-center z-50 p-4"
                onClick={() => setSelectedCat(null)}
              >
                <img
                  src={selectedCat}
                  alt="Enlarged cat"
                  className="max-w-full max-h-full rounded-lg shadow-lg"
                />
              </div>
            )}
          </motion.div>

          {/* Card 6: Sketchbook */}
          <motion.div
            className={`${CARD_CLASSES} flex flex-col justify-between ${getSpanClasses(
              6
            )}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-base font-semibold mb-2">Sketchbook (IG)</h5>
            <div className="grid grid-cols-3 gap-1 flex-grow mb-2">
              {sketches.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-16 object-cover rounded shadow-sm cursor-pointer"
                  onClick={() => setSelectedSketch(img)}
                />
              ))}
            </div>

            <a
              href="https://www.instagram.com/monochromegrave?igsh=MXc2Zm10c2VyOG1kcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-500 transition"
            >
              Visit sketchbook →
            </a>

            {/* Popup / Lightbox */}
            {selectedSketch && (
              <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedSketch(null)}
              >
                <img
                  src={selectedSketch}
                  alt="Enlarged sketch"
                  className="max-w-full max-h-full rounded-lg shadow-lg"
                />
              </div>
            )}
          </motion.div>

          {/* Card 7: Spotify */}
          <motion.div
            className={`${CARD_CLASSES} flex flex-col ${getSpanClasses(7)}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-base font-semibold mb-2">Now Playing 🎧</h5>

            <iframe
              style={{ borderRadius: "8px" }}
              src="https://open.spotify.com/embed/track/2D4dV2KXDTszzJ3p3cFqhA?utm_source=generator"
              width="100%"
              height="150"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Embed"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
