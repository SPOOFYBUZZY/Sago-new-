import React from 'react';
import { useNavigate } from 'react-router-dom';

const images = ['/1.png','/2.png','/3.png','/4.png','/5.png','/6.png','/7.png','/8.png','/9.png'];

const GalleryPage: React.FC = () => {
  const nav = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Photo & Media Gallery</h2>
          <button onClick={() => nav(-1)} className="px-4 py-2 bg-white rounded shadow">Back</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="w-full h-72 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
              <img src={src} alt={`gallery-${i}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
