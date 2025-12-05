import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const CesiumGlobe: React.FC = () => {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Cesium.Viewer | null>(null);

  useEffect(() => {
    if (!cesiumContainerRef.current) return;

    // 初始化 Cesium Viewer
    const viewer = new Cesium.Viewer(cesiumContainerRef.current, {
      animation: true,
      timeline: true,
      baseLayerPicker: true,
      geocoder: true,
      homeButton: true,
      sceneModePicker: true,
      navigationHelpButton: true,
      fullscreenButton: true,
    });

    viewerRef.current = viewer;

    // 清理函数
    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={cesiumContainerRef}
      style={{
        width: '100%',
        height: '100vh',
      }}
    />
  );
};

export default CesiumGlobe;