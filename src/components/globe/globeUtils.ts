import * as THREE from 'three';

import ThreeGlobe from 'three-globe';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function runGlobe() {
  gsap.registerPlugin(ScrollTrigger);

  // Globe & DOM

  // // Globe one data
  const N = 100;
  const globeOneData = Array.from(Array(N).keys()).map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 5,
    color: ['rgba(74,150,255,0', 'rgba(74,150,255,0'][
      Math.round(Math.random() * 3)
    ],
  }));

  const globeHeroDOM = document.querySelector('[data-js-globe-hero]');
  const globeHeroTitle = document.querySelector('[data-js-hero-title]');
  const spacer = document.querySelector('[data-js-spacer]');

  const circleOverlay = document.querySelector('[data-js-circle-overlay]');
  const percentOverlay = document.querySelector('[data-js-percent-overlay]');
  const percentOverlayPath = percentOverlay?.querySelector('path');
  const percentOverlayPathLength = percentOverlayPath?.getTotalLength();

  if (percentOverlayPath) {
    gsap.set(percentOverlayPath, {
      strokeDasharray: percentOverlayPathLength,
      strokeDashoffset: percentOverlayPathLength,
    });
  }
  const myGlobe = new ThreeGlobe().globeImageUrl(
    'https://unpkg.com/three-globe@2.31.0/example/img/earth-day.jpg'
  );

  myGlobe
    .showAtmosphere(true)
    .atmosphereColor('rgba(74,150,255,0.5)')
    .pointAltitude('size')
    .pointColor('color')
    .polygonCapColor(() => '#00000000')
    .polygonSideColor(() => '#00000000');

  const scene = new THREE.Scene();
  scene.add(myGlobe);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  globeHeroDOM?.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.position.z = 175;
  camera.position.y = 120;

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
  scene.add(new THREE.AmbientLight(0xbbbbbb));
  scene.add(directionalLight);

  (function animate() {
    // IIFE
    // Frame cycle
    myGlobe.rotation.y = 450;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  })();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  // // Globe two data
  fetch(
    'https://raw.githubusercontent.com/tenzinsama/tenzinsama/main/VSProvinces.geojson'
  )
    .then((res) => res.json())
    .then((countries) => {
      myGlobe.polygonsData(countries.features);
    });

  // // Hero ScrollTrigger
  let tlHero = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '[data-js-globe-scene]',
      pin: true, // pin the trigger element while active
      start: 'top top', // when the top of the trigger hits the top of the viewport
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      end: '+=2500',
    },
  });

  tlHero.to(globeHeroTitle, {
    opacity: 0,
    display: 'none',
    translateY: '-100%',
    duration: 0.4,
    onReverseComplete() {
      gsap.set(spacer, {
        display: 'none',
      });
    },
    onComplete() {
      gsap.set(spacer, {
        display: 'block',
      });

      myGlobe.pointsData(globeOneData);
    },
  });

  tlHero.to(
    camera.position,
    {
      y: -75,
      z: 500,
    },
    '0'
  );

  tlHero.fromTo(
    '[data-js-section-1]',
    {
      display: 'none',
      opacity: 0,
      translateY: '-10%',
      duration: '0.3',
    },
    {
      display: 'block',
      opacity: 1,
      translateY: '0%',
      duration: '0.3',
    }
  );

  // 2
  tlHero.to('[data-js-section-1]', {
    opacity: 0,
    display: 'none',
    y: '-10%',
    duration: '0.3',
  });

  tlHero.fromTo(
    '[data-js-section-2]',
    {
      opacity: 0,
      y: '-10%',
    },
    {
      display: 'block',
      opacity: 1,
      y: '0%',
      onReverseComplete() {
        myGlobe
          .polygonCapColor(() => '#00000000')
          .polygonSideColor(() => '#00000000');
      },
      onStart() {
        myGlobe
          .polygonCapColor(() => 'rgba(74,150,255,0')
          .polygonSideColor(() => '#FFFFFF')
          .polygonAltitude(0.01);
      },
    }
  );

  // 3
  tlHero.to('[data-js-section-2]', {
    opacity: 0,
    display: 'none',
    y: '0%',
    duration: '0.3',
  });

  tlHero.fromTo(
    '[data-js-section-3]',
    {
      opacity: 0,
      y: '0%',
    },
    {
      display: 'block',
      opacity: 1,
      y: '0%',
      duration: '0.3',
    }
  );
}

// ScrollTrigger
// let tl = gsap.timeline({
//   // yes, we can add it to an entire timeline!
//   scrollTrigger: {
//     trigger: "[data-js-globe-section]",
//     pin: true, // pin the trigger element while active
//     start: "top top", // when the top of the trigger hits the top of the viewport
//     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     end: "+=2500"
//     // snap: {
//     //   snapTo: "labelsDirectional", // snap to the closest label in the timeline
//     //   duration: 0.75, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//     //   delay: 0.2 // wait 0.1 seconds from the last scroll event before doing the snapping
//     // }
//   }
// });

// tl.addLabel("start");
// tl.to("[data-js-section-1]", {
//   opacity: 0,
//   height: 0,
//   y: "-25%",
//   duration: "0.3",
//   onStart() {
//     myGlobe.pointsData(globeOneData);
//   }
// });

// let animationHasRun = false;
// tl.fromTo(
//   "[data-js-section-2]",
//   {
//     height: 0,
//     opacity: 0,
//     y: "-10%"
//   },
//   {
//     height: "304px",
//     opacity: 1,
//     y: "0%",
//     duration: "0.3",
//     onUpdate() {
//       if (this.progress() > 0.7 && animationHasRun === false) {
//         myGlobe
//           .polygonCapColor(() => "#F2A900")
//           .polygonSideColor(() => "#F2A900")
//           .polygonAltitude(0.01);
//         animationHasRun = true;
//       } else if (this.progress() < 0.7) {
//         myGlobe
//           .polygonAltitude(0.1)
//           .polygonCapColor(() => "#0a3a502b")
//           .polygonSideColor(() => "#0a3a502b");
//         animationHasRun = false;
//       }
//     }
//   },
//   "-=0.3"
// );
// tl.addLabel("start2");

// let percentAnimationHasFired = false;
// tl.to("[data-js-section-2]", {
//   height: 0,
//   opacity: 0,
//   y: "-20%",
//   duration: "0.3",
//   onUpdate() {
//     if (this.progress() > 0.7 && percentAnimationHasFired === false) {
//       gsap.to(percentOverlay, {
//         opacity: 1,
//         scale: 0.95
//       });

//       gsap.to(percentOverlayPath, {
//         strokeDashoffset: 0,
//         duration: 1
//       });

//       myGlobe
//         .polygonAltitude(0.1)
//         .polygonCapColor(() => "#0a3a502b")
//         .polygonSideColor(() => "#0a3a502b");

//       percentAnimationHasFired = true;
//     } else if (this.progress() < 0.7) {
//       gsap.to(percentOverlay, {
//         opacity: 0,
//         scale: 0.9
//       });

//       gsap.to(percentOverlayPath, {
//         strokeDashoffset: percentOverlayPathLength,
//         duration: 1
//       });
//       percentAnimationHasFired = false;
//     }
//   }
// });

// tl.fromTo(
//   "[data-js-section-3]",
//   {
//     height: 0,
//     opacity: 0,
//     y: "-20%"
//   },
//   {
//     height: "340px",
//     opacity: 1,
//     y: "0%"
//   },
//   "-=0.3"
// );
// tl.addLabel("start3");

// tl.to("[data-js-section-3]", {
//   height: 0,
//   opacity: 0,
//   y: "-20%",
//   duration: "0.3",
//   onUpdate() {
//     if (this.progress() > 0.7) {
//       gsap.to(percentOverlay, {
//         opacity: 0,
//         scale: 0.95
//       });

//       gsap.to(circleOverlay, {
//         opacity: 1,
//         scale: 0.95
//       });

//       gsap.to(globeDOM, {
//         opacity: 0.5
//       });
//     } else {
//       gsap.to(percentOverlay, {
//         opacity: 1,
//         scale: 0.95
//       });

//       gsap.to(circleOverlay, {
//         opacity: 0,
//         scale: 0.9
//       });

//       gsap.to(globeDOM, {
//         opacity: 1
//       });
//     }
//   }
// });

// tl.fromTo(
//   "[data-js-section-4]",
//   {
//     height: 0,
//     opacity: 0,
//     y: "-20%"
//   },
//   {
//     height: "340px",
//     opacity: 1,
//     y: "0%"
//   },
//   "-=0.3"
// );
// tl.addLabel("start4");
