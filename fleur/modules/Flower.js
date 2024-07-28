class Flower {
    constructor() {
        console.log('Flower constructor');
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
       
    }
    camera() {
   
    }
    createRenderer() {
        
    }
    createCube() {
        
    }
    animate() {
       
    }
}
export { Flower }; // export the Flower class