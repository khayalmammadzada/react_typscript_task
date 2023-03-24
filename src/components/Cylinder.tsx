import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const Cylinder: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const geometry = new THREE.CylinderGeometry(1, 1, height, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
    });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    const animate = () => {
      cylinder.rotation.x += 0.01;
      cylinder.rotation.y += 0.01;

      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [height]);

  useEffect(() => {
    // Generate a random value for the cylinder height every 100ms
    const interval = setInterval(() => {
      setHeight(Math.floor(Math.random() * 5 + 1));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%" }}
      aria-label="3D cylinder"
    />
  );
};

export default Cylinder;
