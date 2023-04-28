import * as THREE from "three"


let geometry = new THREE.BoxGeometry(40,40,40,40,10,10)
let material = new THREE.MeshLambertMaterial({ color: 0xfffff })

export const cube = new THREE.Mesh(geometry,material)

cube.rotation.y = 45
cube.rotation.x = 35