import React from 'react';
import CesiumGlobe from '../components/CesiumGlobe';

const Globe: React.FC = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-2xl font-bold mb-4">地球可视化</h1>
      <CesiumGlobe />
    </div>
  );
};

export default Globe;