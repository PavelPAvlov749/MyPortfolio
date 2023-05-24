import { camera, composer, effect1, effect2, scene } from "./Three/threeConfig";
import { renderer } from "./Three/threeConfig";
import "./index.css"
import "./styles.less"
import "./Styles/About.less"
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import model from "./Three/earth.glb"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Contacts } from "./Components/Contacts";





for (let i = 0; i < 10; i++) {

    let size = Math.random() * 100
    let x = Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
    let y = Math.floor(Math.random() * (window.innerHeight / 2 - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
    let z = Math.floor(Math.random() * (window.innerHeight - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
    const geometry = new THREE.ConeGeometry(size, size, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x4d4d4d });
    const cone = new THREE.Mesh(geometry, material);
    cone.position.set(x, z, z)
    cone.rotation.z = Math.random() * 90
    cone.rotation.x = Math.random() * 90
    cone.rotation.y = Math.random() * 90
    scene.add(cone)
}
for (let i = 0; i < 10; i++) {

    let size = Math.random() * 100
    let x = Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
    let y = Math.floor(Math.random() * (window.innerHeight / 2 - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
    let z = Math.floor(Math.random() * (window.innerHeight - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
    const cube = new THREE.BoxGeometry(size, size, size, size, size, size)
    const cubeMAterial = new THREE.MeshLambertMaterial({ color: 0x34c4a4 })
    const figure = new THREE.Mesh(cube, cubeMAterial)
    figure.position.set(x, z, z)
    figure.rotation.z = Math.random() * 90
    figure.rotation.x = Math.random() * 90
    figure.rotation.y = Math.random() * 90
    scene.add(figure)
}

for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
    let y = Math.floor(Math.random() * (window.innerHeight / 2 - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
    let z = Math.floor(Math.random() * (window.innerHeight - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
    const dodecahedron = new THREE.IcosahedronGeometry(Math.floor(Math.random() * 180), 0)
    // const figureMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
    const figureMaterial = new THREE.MeshPhongMaterial({ color: 0x4d4d4d, flatShading: true });
    const figure = new THREE.Mesh(dodecahedron, figureMaterial)
    figure.position.set(x, y, z)
    scene.add(figure)
}

//Rotate Camera
const controls = new OrbitControls(camera, renderer.domElement);
let delta = 2;
let radius = 800;
let clock = new THREE.Clock()
let angle = 0

//ANIMATION FUNCTION
export function AnimateGeometryParticles() {
    requestAnimationFrame(AnimateGeometryParticles)
    delta = clock.getDelta(); // getDelta() - возвращает интервал в долях секунды
    // Effect
    if (clock.elapsedTime % 4 < 0.1) {
        effect1.uniforms['scale'].value = 8;
        effect2.uniforms['amount'].value = 0.015;

    } else {
        effect1.uniforms['scale'].value = 4;
        effect2.uniforms['amount'].value = 0.0005;
    }
    // CAMERA ROTATION
    camera.position.x = Math.cos(angle) * radius;
    camera.position.y = Math.sin(angle) * radius;
    camera.position.z = Math.sin(angle) * radius;
    angle += 0.04 * delta; // приращение угла
    controls.update(0.2);
    composer.render()
}



AnimateGeometryParticles()
// Apend 3D SCENE to the DOM
let sceneContainer = document.getElementById("mainPage")
// sceneContainer.appendChild(renderer.domElement)
const body = document.body
body.appendChild(renderer.domElement);

// RESIZE FUNCTION 
function onWindowResize() {

    camera.aspect = body.clientWidth / body.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(body.clientWidth, body.clientHeight);
}

// window.addEventListener("resize",onWindowResize)

const root = ReactDOM.createRoot(
    document.getElementById('mainPage')
)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)


//PLANET SCEENE
//CREATE DOM NODE AND APPEND IT ONTO DOM
const planetSeneDOMElement = document.createElement("canvas")
planetSeneDOMElement.id = "planetDomElement"
planetSeneDOMElement.className = "planetDomElement"

const planetSceneContainer = document.getElementById("planetContainer")


//CREATE PLANET RENDERER
const planerRenderer = new THREE.WebGL1Renderer({planetSeneDOMElement,alpha : true})
// planetSceneContainer.appendChild(planerRenderer.domElement)
const planetScene = new THREE.Scene()
const planetCamera = new THREE.PerspectiveCamera(75,window.innerWidth / innerHeight,0.1,3000)
const planetSceneDirectionalLight = new THREE.DirectionalLight(0xfffff,1)

planetScene.add(planetSceneDirectionalLight)

const loader = new GLTFLoader()

loader.load(model,(gltf) => {
    console.log(gltf)
    planetScene.add(gltf.scene)
},(xhr) => {
    console.log("Laded : " + xhr.loaded)
},(error) => {
    console.error(error)
})


function animatePlanet  () {
    requestAnimationFrame(animatePlanet)
    planerRenderer.render(planetScene,planetCamera)
}

