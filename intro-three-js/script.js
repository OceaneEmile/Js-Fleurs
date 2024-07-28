import * as THREE from 'three';
// j'importe toute la librairie avec asterix, 
// as THREE  , dans la doc


// je recupere mon canva
const canvas = document.querySelector('.js-canvas')
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');
//en three js, la scene est un objet, avec le new , je crée une nouvelle instance de scene
// je vais pouvoir ajouter des objets dans cette scene

// Camera pour voir la scene
const aspectRatio = canvasWidth /canvasHeight;
const camera = new THREE.PerspectiveCamera( 75,aspectRatio, 0.1, 1000 );
camera.position.z = 5;
camera.position.y = 0;
camera.position.x = 0;

// Render pour afficher la scene du point de vue de la camera
const renderer = new THREE.WebGLRenderer()
renderer.setSize( canvasWidth, canvasHeight )
canvas.appendChild( renderer.domElement ) // au lieu de faire un appendchild dans body, ce sera un cana



// Ajout d'une forme géométrique
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const cubeColor = new THREE.Color('red')
const material = new THREE.MeshBasicMaterial( {color: cubeColor} ); 

const cube = new THREE.Mesh( geometry, material ); 
cube.rotation.x = Math.PI * 0.25;
cube.rotation.y = Math.PI * 0.25;
animate()

function animate (){
  requestAnimationFrame( animate );
  // console.log('animate')
  renderer.render( scene, camera );

  // rotation du cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

scene.add( cube );


// rendu de la scene
renderer.render( scene, camera );
