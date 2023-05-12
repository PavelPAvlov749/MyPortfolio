import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import planet from "./earth.glb"
import model from "./scene.gltf"
import "./PlanetScene"
console.log(model)
//CONFIG WEB GL RENDERER

//CREATING CANVAS
const particles_canvas = document.createElement("canvas")
const planet_canvas = document.createElement("canvas")
export const renderer = new THREE.WebGL1Renderer({particles_canvas,alpha : true})
export const planet_renderer = new THREE.WebGL1Renderer({planet_canvas,alpha: true})
renderer.setClearColor(0x000000, 10)
renderer.setSize(window.innerWidth - 190, window.innerHeight)


//PERPSECTIVE CAMERA
export let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
// camera.position.z = 200;
camera.position.set(0,20,200)
//DIRRECTIONAL LIGHT
export let directionalLight = new THREE.DirectionalLight(0xf08080, 2);
export let DirectionalLight2 = new THREE.DirectionalLight(0xf08080, 1)
export let DirectionalLight3 = new THREE.DirectionalLight(0xfffffff)

DirectionalLight3.position.set(10,10,10)
DirectionalLight2.position.set(10, 90, 100)
// Light position (xyz)
directionalLight.position.set(-10, -45, -100)



// SCENE OBJECT
export const scene = new THREE.Scene()
scene.add(new THREE.AmbientLight(0x222222,1))
scene.add(directionalLight)
scene.add(DirectionalLight2)
scene.add(DirectionalLight3)


//CONTROLS 
export const controls = new OrbitControls(camera, renderer.domElement);
// Post Processing
//EFFECT COMPOSER
export const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

export const effect1 = new ShaderPass(DotScreenShader);
effect1.uniforms['scale'].value = 4;
composer.addPass(effect1);

export const effect2 = new ShaderPass(RGBShiftShader);
effect2.uniforms['amount'].value = 0.0005;
composer.addPass(effect2);




const loader = new GLTFLoader();
console.log(loader)

loader.load( planet, function ( gltf ) {
	console.log(gltf)
	scene.add( gltf.scene );

}, function (xhr) {
	console.log("Loading : " + xhr.loaded)
}, function ( error ) {

	console.error( error );

} );
