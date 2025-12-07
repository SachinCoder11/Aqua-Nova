import React, { useState } from "react";

/* ========================================================================= */
/*  PRODUCT + CATEGORY TYPES                                                 */
/* ========================================================================= */
interface ProductItem {
  name: string;
  description: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  image: string;
  products: ProductItem[];
}

/* ========================================================================= */
/*  CATEGORY DATA                                                            */
/* ========================================================================= */
const categories: Category[] = [
  {
    id: "smart-door-lock",
    title: "Smart Door Lock",
    subtitle: "Keyless entry with multi-layered smart access & complete home protection.",
    image: "/public/DoorLocks/1lock.png",

    points: [
      "Unlock with PIN, RFID or Mobile App",
      "Fast Fingerprint Access",
      "Remote Unlocking via Smartphone",
      "Auto-Locking for enhanced safety",
      "Multiple Access Modes",
      "Tamper Alerts for unauthorized attempts",
      "Low Battery Notifications",
      "Visitor Log Tracking",
      "Strong & Durable Metal Build"
    ],

    products: [
      {
        name: "Fingerprint Door Lock",
        description: "Ultra-fast biometric recognition with a premium metal body.",
        image: "/public/DoorLocks/210.jpg",
      },
      {
        name: "Video Smart Lock",
        description: "Camera-based lock with monitoring + two-way communication.",
        image: "/public/DoorLocks/videolock.jpg",
      },
      {
        name: "Rim Door Lock",
        description: "Compact and stylish lock for modern homes.",
        image: "/Public/DoorLocks/Rimdoorlock.jpg",
      },
      {
        name: "Premium Metal Lock",
        description: "Heavy-duty lock with advanced smart features.",
        image: "/public/DoorLocks/lock.jpg",
      },
      {
        name: "Touchscreen PIN Lock",
        description: "Full-glass touch interface with hidden PIN.",
        image: "/DoorLocks/pinlck.jpg",
      },
      {
        name: "NFC Digital Lock",
        description: "Tap-to-unlock NFC door lock.",
        image: "/public/DoorLocks/NFC.png",
      }
    ]
  },

  {
    id: "biometric-lock",
    title: "Biometric Smart Lock",
    subtitle: "Perfect for wardrobes, cabinets & drawers.",
    image: "/public/DoorLocks/fingerlock.jpg",
    points: [
      "Fingerprint access",
      "Suitable for 15–20mm cabinet thickness",
      "Ideal for wardrobes & drawers",
      "Battery-operated",
      "Auto-locking protection"
    ],
    products: []
  },

  {
    id: "glass-door-lock",
    title: "Glass Door Smart Lock",
    subtitle: "Beautiful fingerprint lock with full display.",
    image: "/DoorLocks/glaSSdoor.png",
    points: [
      "Semiconductor Fingerprint",
      "Anti-peep Password Screen",
      "Touch Display Panel",
      "Multiple unlock functions",
      "Multiple alarm modes",
      "Long battery life"
    ],
    products: []
  },

  {
    id: "video-door-phone",
    title: "Video Door Phone",
    subtitle: "See & speak to your visitors anytime.",
    image: "/public/DoorLocks/videolock.jpg",
    points: [
      "Two-way communication",
      "HD Display",
      "Night Vision Support",
      "Remote Monitoring",
      "Motion Detection Alerts",
      "Snapshots & Video Recording",
      "Intercom Functionality",
      "Weatherproof Outdoor Unit",
      "Easy Installation",
      "Smart Home Integration"
    ],
    products: []
  },

  {
    id: "visitor-system",
    title: "Smart Visitor Entry System",
    subtitle: "Automated visitor access for apartments & societies.",
    image: "/DoorLocks/visitor.jpg",
    points: [
      "Smartphone Integration",
      "Face Recognition, QR & OTP",
      "Gate/Turnstile Integration",
      "Hot Dial Concierge Button",
      "Photo Visitor Logs",
      "Video Calling",
      "Remote Unlocking"
    ],
    products: []
  }
];

/* ========================================================================= */
/*  BOTTOM SHEET POPUP                                                       */
/* ========================================================================= */
const BottomSheet: React.FC<{
  open: boolean;
  productList: ProductItem[];
  onClose: () => void;
}> = ({ open, productList, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center z-50">
      <div className="bg-[#111] w-full max-h-[70vh] rounded-t-3xl p-6 overflow-y-auto border-t border-orange-500/30">

        <button className="text-gray-400 mb-4" onClick={onClose}>
          Close
        </button>

        <h2 className="text-2xl font-bold mb-6">Products</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {productList.map((p, i) => (
            <div key={i} className="bg-black rounded-2xl p-4 border border-orange-500/20">

              {/* CLEAN FIX: IMAGE COVERS CARD */}
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl mt-3 font-bold">{p.name}</h3>
              <p className="text-gray-400 mt-1">{p.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

/* ========================================================================= */
/*  ALTERNATING SECTION                                                      */
/* ========================================================================= */
const AlternatingSection: React.FC<{
  category: Category;
  index: number;
  onOpen: () => void;
}> = ({ category, index, onOpen }) => {
  const reverse = index % 2 !== 0;

  return (
    <section
      className={`max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <img
        src={category.image}
        className="w-full rounded-3xl shadow-xl object-cover"
      />

      <div>
        <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
        <p className="text-gray-400 mt-3">{category.subtitle}</p>

        <ul className="mt-6 space-y-2 text-gray-300">
          {category.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">•</span> {p}
            </li>
          ))}
        </ul>

        {category.products.length > 0 && (
          <button
            onClick={onOpen}
            className="mt-6 px-6 py-3 bg-orange-600 rounded-xl text-white font-semibold hover:bg-orange-700 transition"
          >
            View Products
          </button>
        )}
      </div>
    </section>
  );
};

/* ========================================================================= */
/*  MAIN COMPONENT                                                           */
/* ========================================================================= */
const Doorlocks: React.FC = () => {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <div className="w-full bg-black text-white min-h-screen">

      <h1 className="text-4xl md:text-5xl font-bold text-center pt-20">
        Smart Door Lock Solutions
      </h1>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Reduce errors. Maintain accurate records. Replace manual visitor entry with fully automated smart access.
      </p>

      {categories.map((cat, index) => (
        <AlternatingSection
          key={cat.id}
          category={cat}
          index={index}
          onOpen={() => setSelected(cat)}
        />
      ))}

      <BottomSheet
        open={!!selected}
        productList={selected?.products || []}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Doorlocks;
