import * as THREE from 'three';

class Flower {
    constructor() {
        // console.log('Flower constructor');
        this.canvas=document.querySelector('.js-canvas');
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;

        this.init();
    }
    init() {
        this.createScene();
        this.camera();
        this.createRenderer();
        this.createCube();
        this.animate();
    }
    createScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('skyblue');
       
    }
    camera() {
        const aspectRatio = this.canvasWidth /this.canvasHeight;
        this.camera = new THREE.PerspectiveCamera( 75,aspectRatio, 0.1, 1000 );
        this.camera.position.z = 5;
        this.camera.position.y = 0;
        this.camera.position.x = 0;
    }
    createRenderer() {
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize( this.canvasWidth, this.canvasHeight )
        this.canvas.appendChild( this.renderer.domElement )
        
    }
    createCube() {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    const cubeColor = new THREE.Color('red')
    const material = new THREE.MeshBasicMaterial( {color: cubeColor} ); 

    this.cube = new THREE.Mesh( geometry, material ); 
    this.cube.rotation.x = Math.PI * 0.25;
    this.cube.rotation.y = Math.PI * 0.25;
    this.scene.add( this.cube );
        
    }
    animate() {

  requestAnimationFrame( this.animate.bind(this) );
  // console.log('animate')
  this.renderer.render( this.scene, this.camera );

  // rotation du cube
  this.cube.rotation.x += 0.01;
  this.cube.rotation.y += 0.01;
  this.renderer.render( this.scene, this.camera );
       
    }
}
export { Flower }; // export the Flower class