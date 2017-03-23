// scene = where objects, cameras, and lights are added.
let scene    = new THREE.Scene();
// camera - clips scene and gives depth
// creates perspective camera - gives perspective of close objects as big and far objects as small.
let camera   = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// renderer - renders scene in WebGL/Cavnvas 2D
let renderer = new THREE.WebGLRenderer();

// setting the size of the space
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
renderer.setClearColor(0x3399ff);
document.body.appendChild(renderer.domElement);

function render(){
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
