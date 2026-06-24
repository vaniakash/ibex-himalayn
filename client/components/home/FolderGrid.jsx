'use client';
import { useState } from 'react';
import Folder from '@/components/ui/Folder';

export default function FolderGrid({ galleryImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openFolderId, setOpenFolderId] = useState(null);

  const handleImageClick = (e, src) => {
    e.stopPropagation();
    setSelectedImage(src);
  };

  const handleFolderToggle = (folderId) => {
    setOpenFolderId(prev => prev === folderId ? null : folderId);
  };

  const getImg = (index) => {
    const src = galleryImages[index % galleryImages.length];
    return (
      <img 
        key={index} 
        src={src} 
        alt={`Gallery image ${index}`} 
        onClick={(e) => handleImageClick(e, src)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in' }} 
      />
    );
  };

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '3rem', justifyItems: 'center', maxWidth: '1000px', margin: '0 auto', paddingBottom: '2rem' }}>
        {/* Folder 1: Landscapes */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              color="var(--color-moss)" 
              size={1.1} 
              items={[getImg(0), getImg(1), getImg(2)]} 
              isOpen={openFolderId === 1}
              onToggle={() => handleFolderToggle(1)}
            />
          </div>
          <span className="mono-label" style={{ fontSize: '0.9rem', color: 'var(--color-stone)' }}>landscapes/</span>
        </div>

        {/* Folder 2: Trails */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              color="var(--color-amber)" 
              size={1.1} 
              items={[getImg(3), getImg(4), getImg(5)]} 
              isOpen={openFolderId === 2}
              onToggle={() => handleFolderToggle(2)}
            />
          </div>
          <span className="mono-label" style={{ fontSize: '0.9rem', color: 'var(--color-stone)' }}>trails/</span>
        </div>

        {/* Folder 3: Campsites */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              color="var(--color-forest)" 
              size={1.1} 
              items={[getImg(6), getImg(7), getImg(8)]} 
              isOpen={openFolderId === 3}
              onToggle={() => handleFolderToggle(3)}
            />
          </div>
          <span className="mono-label" style={{ fontSize: '0.9rem', color: 'var(--color-stone)' }}>campsites/</span>
        </div>

        {/* Folder 4: Trekkers */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              color="#D97706" 
              size={1.1} 
              items={[getImg(9), getImg(10), getImg(11)]} 
              isOpen={openFolderId === 4}
              onToggle={() => handleFolderToggle(4)}
            />
          </div>
          <span className="mono-label" style={{ fontSize: '0.9rem', color: 'var(--color-stone)' }}>trekkers/</span>
        </div>

        {/* Folder 5: Experiences */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Folder 
              color="#2563EB" 
              size={1.1} 
              items={[getImg(12), getImg(13), getImg(14)]} 
              isOpen={openFolderId === 5}
              onToggle={() => handleFolderToggle(5)}
            />
          </div>
          <span className="mono-label" style={{ fontSize: '0.9rem', color: 'var(--color-stone)' }}>experiences/</span>
        </div>
      </div>

      {selectedImage && (
        <div 
          style={{ 
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(0,0,0,0.85)', zIndex: 9999, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            cursor: 'zoom-out', backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
            onClick={(e) => e.stopPropagation()} 
          />
          <button 
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute', top: '2rem', right: '2rem',
              background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff',
              width: '40px', height: '40px', borderRadius: '50%',
              fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}
