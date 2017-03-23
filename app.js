// scene = where objects, cameras, and lights are added.
let scene = new THREE.Scene();

// camera - clips scene and gives depth
// creates perspective camera - gives perspective of close objects as big and far objects as small.
let camera  = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  // attributes of perspective camera(in order): 1) field of view  2)aspect ratio - usually width of element divided by height 3) near clipping plane 4) far clipping plane
    // clipping plane restricts how close or how far until it won't render anymore.


// renderer - renders scene in WebGL/Cavnvas 2D
let renderer = new THREE.WebGLRenderer();

// setting the size of the space
renderer.setSize(window.innerWidth, window.innerHeight);
//sets background color
renderer.setClearColor(0x3399ff);

document.body.appendChild(renderer.domElement);


// creates the cubelike characteristics - vertices and faces
let geometry = new THREE.BoxGeometry( 2, 2, 2 );

// adds color to the cube - one of three.js's materials to color it.
let material = new THREE.MeshBasicMaterial( { color: 0x7F7FFF } );

//mesh = object that takes geometry and applies material to it.
let cube = new THREE.Mesh( geometry, material );
let cube1 = new THREE.Mesh( geometry, material );

//adds item/object
scene.add( cube, cube1 );

//adds white pointlight
let light = new THREE.PointLight(0xFFFFFF, 1.5);
  // (x, y, z)
  light.position.set(-100,200,100);
  scene.add( light );


//default - object will add to coordinates (0,0,0) --> which leads to issues with the camera.
camera.position.z = 10;

// Add OrbitControls so that we can pan around with the mouse.
   controls = new THREE.OrbitControls(camera, renderer.domElement);


//render loop - causes renderer to draw something 60 times per second
function render() {
	requestAnimationFrame( render );
  // gives the cube rotation
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  cube1.rotation.x -=0.1;
  cube1.rotation.y -=0.1;
	renderer.render( scene, camera );
  controls.update();

}
render();
