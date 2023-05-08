// //IMPORT LOADER
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import * as THREE from "three"
// import { render } from 'less';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import model from "./earth.glb"
// // Initialize loader instance
// const loader = new GLTFLoader();

// const planetRenderer = new THREE.WebGL1Renderer()
// const planetCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000)
// const planetLight = new THREE.DirectionalLight(0xf08080, 1)
// const planetCcene = new THREE.Scene()
// planetCcene.add(new THREE.AmbientLight(0x222222,1))
// planetCcene.add(planetLight)

// const controls = new OrbitControls(planetCamera, planetRenderer.domElement);




// loader.load( model, function ( gltf ) {
// 	console.log(gltf)
// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );


// const Container = document.getElementById("container")
// Container.appendChild(renderer)


// const AnimatePlanet = () => {
//     requestAnimationFrame(AnimatePlanet)
//     renderer.redner()
// }