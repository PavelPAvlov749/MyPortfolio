import { scene } from "./threeConfig";
import * as THREE from "three"

//Create cubes
export const createCube = (scene) => {

        // Figure Position
        let positionX =  Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
        let positionY =  Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
        let positionZ =  Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
        //Figure Rotation 
        let rotationZ = Math.random()
        let rotationY = Math.random()
        let rotationX = Math.random()
        // Figure size
        let size =  Math.floor(Math.random() * 40)
        // Create Mesh from geometry and material
        let geometry = new THREE.BoxGeometry(size, size, size, size, size, size)
        let material = new THREE.MeshBasicMaterial({ color: 0xf0000 })
        let figure = new THREE.Mesh(geometry, material)

        // Set position and rotation
        figure.position.set([positionX, positionY, positionZ])
        figure.rotation.set(rotationX, rotationY, rotationZ)
        // Add to the csene
        scene.add(figure)
    
}

// Create Icosahedron
export const createIcosahedron = () => {

    for (let i = 0; i < 10; i++) {
        // Figueres position 
        let positionX = Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
        let positionY = Math.floor(Math.random() * (window.innerHeight / 2 - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
        let positionZ = Math.floor(Math.random() * (window.innerHeight - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
        // 
        const geometry = new THREE.IcosahedronGeometry(Math.floor(Math.random() * 180), 0)
        // const figureMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
        const material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true });
        const figure = new THREE.Mesh(geometry, material)
        // Set position and rotation
        figure.position.set([positionX, positionY, positionZ])
        // Add ti the scene
        scene.add(figure)
    }
}

export const createCones = (scene) => {
    
    for (let i = 0; i < 10; i++) {
        // Figueres position 
        let positionX = Math.floor(Math.random() * (window.innerWidth / 2 - (window.innerWidth / 2) * -1)) + (window.innerWidth / 2) * -1
        let positionY = Math.floor(Math.random() * (window.innerHeight / 2 - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
        let positionZ = Math.floor(Math.random() * (window.innerHeight - (window.innerHeight / 2) * -1)) + (window.innerHeight / 2) * -1
        // Figure size
        let size =  Math.floor(Math.random() * 100)
        const geometry = new THREE.ConeGeometry(size, size, 3);
        // const figureMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
        const material = new THREE.MeshPhongMaterial({ color: 0x00000, flatShading: true });
        const figure = new THREE.Mesh(geometry, material)
        // Set position and rotation
        figure.position.set([positionX, positionY, positionZ])
        // Add ti the scene
        console.log(figure)
        scene.add(figure)
    }
}



