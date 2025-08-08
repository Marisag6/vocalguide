// components/FlipBook.jsx
import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { getDocument } from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

const FlipBook = ({ pdfPath }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const loadPDF = async () => {
      const loadingTask = getDocument(pdfPath);
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;

      const pageImages = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;
        pageImages.push(canvas.toDataURL());
      }

      setPages(pageImages);
    };

    loadPDF();
  }, [pdfPath]);

  return (
    <div className="w-full flex justify-center my-8">
      <HTMLFlipBook
        width={300}
        height={400}
        showCover={true}
        className="shadow-lg"
      >
        {pages.map((imgSrc, index) => (
          <div key={index} className="page bg-white">
            <img src={imgSrc} alt={`Page ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;
