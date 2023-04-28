import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js';


//CONFIG WEB GL RENDERER
export const renderer = new THREE.WebGL1Renderer()
renderer.setClearColor(0x000000, 10)
renderer.setSize(window.innerWidth - 190, window.innerHeight)

//PERPSECTIVE CAMERA
export let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
camera.position.z = 700;
//DIRRECTIONAL LIGHT
export let directionalLight = new THREE.DirectionalLight(0xf08080, 2);
export let DirectionalLight2 = new THREE.DirectionalLight(0xf08080, 1)
export let DirectionalLight3 = new THREE.DirectionalLight(0xfffffff)

DirectionalLight3.position.set(10,10,10)
DirectionalLight2.position.set(10, 90, 100)
//Light position (xyz)
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




