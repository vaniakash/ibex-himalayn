'use client';

import dynamic from 'next/dynamic';

// We dynamically import the Masonry component since it relies on window/document in GSAP animations
const Masonry = dynamic(() => import('@/components/ui/Masonry'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading gallery...</div>
});

export default function TrailMomentsClient({ items }) {
  return (
    <div style={{ width: '100%' }}>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.97}
        blurToFocus={false}
        colorShiftOnHover={false}
      />
    </div>
  );
}
