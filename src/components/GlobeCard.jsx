import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Globe from "react-globe.gl";
import * as THREE from "three";
import "../styles/globecard.css";

export default function GlobeCard() {
  const { t } = useTranslation();
  const globeRef = useRef(null);
  const wrapRef = useRef(null);

  const [size, setSize] = useState({ w: 0, h: 0 });
  const [ready, setReady] = useState(false);

  const myLocation = useMemo(() => ({ lat: 30.3814, lng: 23.3860 }), []); 
  const label = "Zrenjanin, " + t("Country.country");

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const globeMat = useMemo(() => {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#000000"),
      roughness: 1.0,
      metalness: 0.0,
      emissive: new THREE.Color("#000000"),
      emissiveIntensity: 0.0,
    });
    return m;
  }, []);

  const points = useMemo(
    () => [
      { lat: myLocation.lat, lng: myLocation.lng, size: 0.55, color: "rgb(124, 58, 237);" },
      { lat: myLocation.lat, lng: myLocation.lng, size: 1.05, color: "rgba(255, 255, 255);" },
    ],
    [myLocation]
  );

  const rings = useMemo(
    () => [
      {
        lat: myLocation.lat,
        lng: myLocation.lng,
        maxR: 2,
        propagationSpeed: 1.0,
        repeatPeriod: 1000,
      },
      {
        lat: myLocation.lat,
        lng: myLocation.lng,
        maxR: 3,
        propagationSpeed: 1.0,
        repeatPeriod: 1300,
      },
    ],
    [myLocation]
  );

  useEffect(() => {
    if (!globeRef.current || !size.w || !size.h) return;

    globeRef.current.pointOfView(
      { lat: myLocation.lat, lng: myLocation.lng, altitude: 0.7},
      500
    );

    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.18;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;

    setReady(true);
  }, [myLocation, size.w, size.h]);

  useEffect(() => {
  if (!globeRef.current || !size.w || !size.h) return;

  const altitude = Math.min(0.9, Math.max(0.65, size.h / 220));

  globeRef.current.pointOfView(
    { lat: myLocation.lat, lng: myLocation.lng, altitude },
    2000
  );

  const controls = globeRef.current.controls();
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.18;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableRotate = true;

  setReady(true);
}, [myLocation, size.w, size.h]);

useEffect(() => {
  if (!globeRef.current || !ready) return;

  const scene = globeRef.current.scene();
  const camera = globeRef.current.camera();

  scene.children.forEach((o) => {
    if (o.type === "AmbientLight") o.intensity = 0;
  });

  let ambLight = scene.children.find((o) => o.name === "globe-amb");
  let dirLight = scene.children.find((o) => o.name === "globe-dir");

  if (!ambLight) {
    ambLight = new THREE.AmbientLight(0xffffff, 0.18);
    ambLight.name = "globe-amb";
    scene.add(ambLight);
  } else {
    ambLight.intensity = 0.18;
  }

  if (!dirLight) {
    dirLight = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLight.name = "globe-dir";
    scene.add(dirLight);
    scene.add(dirLight.target);
  } else {
    dirLight.intensity = 1.25;
  }

  let rafId;
  const tick = () => {
    dirLight.position.copy(camera.position);

    dirLight.target.position.set(0, 0, 0);
    dirLight.target.updateMatrixWorld();

    rafId = requestAnimationFrame(tick);
  };

  tick();
  return () => cancelAnimationFrame(rafId);
}, [ready]);


  return (
    <div className="globe_card">
      <div className="globe_topLeft">
        <span className="globe_pin" aria-hidden="true" />
        <span className="globe_label">{label}</span>
      </div>

      <div className="globe_wrap" ref={wrapRef}>
        {size.w > 0 && size.h > 0 && (
          <Globe
            ref={globeRef}
            width={size.w}
            height={size.h}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="/word_dotted.png"
            globeMaterial={globeMat}

            showAtmosphere={false}
            atmosphereColor="rgba(167,139,250)"
            atmosphereAltitude={0.02}

            // Pin
            pointsData={points}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointRadius={(d) => d.size}
            pointAltitude={() => 0.03}
            pointsMerge={true}

            // Pulse
            ringsData={rings}
            ringColor={() => "rgba(167,139,250,0.28)"}
            ringMaxRadius="maxR"
            ringPropagationSpeed="propagationSpeed"
            ringRepeatPeriod="repeatPeriod"

            onGlobeReady={() => setReady(true)}
          />
        )}

        {/* One overlay only: vignette+halo combined */}
        <div className="globe_overlay" aria-hidden="true" />
      </div>

      {!ready && <div className="globe_loading">Loading…</div>}
    </div>
  );
}
