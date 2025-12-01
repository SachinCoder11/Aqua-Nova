import React, { useState, useEffect, useRef } from "react";
import { pdfjs } from "react-pdf";
import ContactForm from "../sections/ContactForm";
import Footer from "../layout/Footer";
import HTMLFlipBook from "react-pageflip";

// ------------------------------
// FIXED PDF WORKER (VITE REQUIRED)
// ------------------------------
import workerSrc from "pdfjs-dist/build/pdf.worker.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// ------------------------------
// FIXED PDF PATH (VITE PUBLIC FOLDER)
// Move your file to: public/Pdf/dope.pdf
// ------------------------------
const SamplePDF = "/src/Pdf/dope.pdf";

const Accessories: React.FC = () => {
  const pdfFiles = [
    { name: "Wi-Fi Hub Manual", file: SamplePDF },
    { name: "IR Blaster Guide", file: SamplePDF },
    { name: "Smart Bridge Spec Sheet", file: SamplePDF },
    { name: "RF Remote Manual", file: SamplePDF },
    { name: "Motion Sensor Manual", file: SamplePDF },
    { name: "Door Sensor Manual", file: SamplePDF },
  ];

  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const bookRef = useRef<any>(null);

  const renderPDFToImages = async (pdfUrl: string) => {
    setLoading(true);
    setPageImages([]);

    try {
      const pdf = await pdfjs.getDocument(pdfUrl).promise;
      const imgs: string[] = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.4 });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) continue;

        await page
          .render({
            canvasContext: ctx,
            canvas,
            viewport,
          })
          .promise;

        imgs.push(canvas.toDataURL("image/jpeg", 1.0));
      }

      setPageImages(imgs);
    } catch (err) {
      console.error("Render error:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (selectedPDF) {
      console.log("Loading PDF:", selectedPDF);
      renderPDFToImages(selectedPDF);
    }
  }, [selectedPDF]);

  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://smartnode.in/wp-content/uploads/2025/08/manual-banner.jpg.webp"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-white text-6xl font-bold">
          Accessories
        </h1>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 px-6 py-16 gap-10">
        {pdfFiles.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelectedPDF(item.file)}
            className="bg-white border rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-2xl text-center"
          >
            <img src="/icons/pdf-icon.png" className="w-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-orange-500 mt-2">Open →</p>
          </div>
        ))}
      </section>

      {/* FLIPBOOK */}
      {selectedPDF && (
        <section className="max-w-5xl mx-auto pb-24">
          <h2 className="text-3xl text-center font-bold mb-6">
            Document Viewer
          </h2>

          {loading && <p className="text-center text-lg">Rendering PDF...</p>}

          {!loading && pageImages.length > 0 && (
            <HTMLFlipBook
              ref={bookRef}
              width={450}
              height={600}
              className="shadow-xl mx-auto bg-white"
              useMouseEvents={true}
              swipeDistance={5}
              flippingTime={600}
            >
              {pageImages.map((img, idx) => (
                <div key={idx} className="bg-white">
                  <img src={img} className="w-full h-full object-contain" />
                </div>
              ))}
            </HTMLFlipBook>
          )}
        </section>
      )}

      {/* CONTACT + FOOTER */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Accessories;
