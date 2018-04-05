let houseColor = 0xf45042,
    roofColor = 0xe5dcdc;
    width = window.innerWidth/2,
    height = window.innerHeight/2,
    matrix = 0,
    camera = 0,
    renderer = 0,
    scene = 0;

function createGenericWireObject(genericObject, desiredColor, xPos, yPos, zPos, scene){
    var geometry = new THREE.EdgesGeometry( genericObject );
    var material = new THREE.LineBasicMaterial( { color: desiredColor } );
    var wireframe = new THREE.LineSegments( geometry, material );
    wireframe.position.y = yPos;
    wireframe.position.x = xPos;
    wireframe.position.z = zPos;
    scene.add(wireframe);
}


function createHouse(){

    matrix = new THREE.Matrix4();
    matrix.set(1,0,-1,0,
               0,1,-1,0,
               0,0,1,0,
               0,0,0,1);
    
    renderer === 0 ? initializeRenderer() : null;
    
    scene = new THREE.Scene;

    var house = new THREE.CubeGeometry(1,1.5,1);
    var material = new THREE.MeshBasicMaterial( { color: houseColor } );
    var cube = new THREE.Mesh(house, material);                   
    scene.add(cube);
    createGenericWireObject(house,0x000000,0,0,0, scene);

    var geometry = new THREE.CylinderGeometry( .25, .75, .5, 4 ,100,false, Math.PI/4);
    var material = new THREE.MeshBasicMaterial( {color: roofColor} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = 1;
    scene.add( cylinder );

    createGenericWireObject(geometry,0x000000,0,1,0, scene);
}

function initializeRenderer(){
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
}

function showTop(){
    createHouse();

    var x = 80;
    var camera = new THREE.OrthographicCamera( width / - x, width / x, height / x, height / - x, .1, 1000 );

    camera.position.z = 2;
    camera.position.y = 2;
    camera.rotation.x = -90 * Math.PI / 180;

    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}


function showSide(){
    createHouse();
    var sideX = 150;
    var camera = new THREE.OrthographicCamera( width / - sideX, width / sideX, height / sideX, height / - sideX, .1, 1000 );

    camera.position.z = 2;
    camera.position.x = -10;
    camera.rotation.y = -90 * Math.PI / 180;

    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}


function showFront(){
    createHouse();
    let frontX = 150;
    var camera = new THREE.OrthographicCamera( width / - frontX, width / frontX, height / frontX, height / - frontX, .1, 1000 );

    camera.position.z = 5;

    scene.add(camera);
    renderer.setClearColor(0xEEEEEE);
    renderer.render(scene, camera);
}