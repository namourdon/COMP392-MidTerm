//Nashia Amourdon
/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

// setup an IIFE structure (Immediately Invoked Function Expression)
var game = (() => {

    // declare game objects
    var scene: Scene = new Scene();
    var renderer: Renderer;
    var camera: PerspectiveCamera;
    var control: Control;
    var axes: AxisHelper;
    var spotLight: SpotLight;
    var gui: GUI;
    var cubeGeometry: CubeGeometry;
    var cubeMaterial: LambertMaterial;
    var stats: Stats;
    var firstCube: Mesh;
    var secondCube: Mesh;
    var thirdCube: Mesh;
    var fourthCube: Mesh;
    var fifthCube: Mesh;
    var ambientLight: AmbientLight;
    var plane: Mesh;


    function init() {
        // Instantiate a new Scene object
        scene = new Scene();
        
        setupRenderer(); // setup the default renderer
	
        setupCamera(); // setup the camera


        /* ENTER CODE HERE */
        
        //Add helper Axis to the scene
        axes = new AxisHelper(20);
        scene.add(axes);
        console.log("Added Axis Helper to scene...");
        
        //Add an AmbientLight to the scene
        ambientLight = new AmbientLight(0x404040);
        scene.add(ambientLight);
        console.log("Added an Ambient Light to Scene");
    
        //Add a spotlight to the scene
        spotLight = new SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        //spotLight.rotation.set(-0.8, 42.7, 19.5);
        spotLight.castShadow = true;
        scene.add(spotLight);
        console.log("Added a SpotLight Light to Scene");
        //Add a plane to the scene
        plane = new gameObject(
            new PlaneGeometry(10, 10, 10, 1),
            new LambertMaterial({ color: 3323158 }),
            0, 0, 0);

        plane.rotation.x = -0.5 * Math.PI;

        scene.add(plane);
        console.log("Added Plane Primitive to scene...");
    
        //Add first cube to the scene
        cubeGeometry = new BoxGeometry(2.4, 1.1, 2.4);
        cubeMaterial = new LambertMaterial({ color: 102255204 });
        firstCube = new Mesh(cubeGeometry, cubeMaterial);
        firstCube.castShadow = true;
        firstCube.position.x = 0.8;
        firstCube.position.y = 1.2;
        firstCube.position.z = 0.1;
        scene.add(firstCube);
        console.log("Added the larger cube to the scene");

        //Add Second Cube to the scene
        cubeGeometry = new BoxGeometry(1.8, 0.8, 1.8);
        cubeMaterial = new LambertMaterial({ color: 102255204 });
        secondCube = new Mesh(cubeGeometry, cubeMaterial);
        secondCube.castShadow = true;
        secondCube.position.x = 0.8;
        secondCube.position.y = 2.3;
        secondCube.position.z = 0.05;
        scene.add(secondCube);
        console.log("Added the larger cube to the scene");

        //Add Third Cube to the scene
        cubeGeometry = new BoxGeometry(1.4, 0.6, 1.4);
        cubeMaterial = new LambertMaterial({ color: 102255204 });
        thirdCube = new Mesh(cubeGeometry, cubeMaterial);
        thirdCube.castShadow = true;
        thirdCube.position.x = 0.8;
        thirdCube.position.y = 2.9;
        thirdCube.position.z = 0.05;
        scene.add(thirdCube);
        console.log("Added the larger cube to the scene");

        //Add fourth Cube to the scene
        cubeGeometry = new BoxGeometry(1, 0.4, 1);
        cubeMaterial = new LambertMaterial({ color: 102255204 });
        fourthCube = new Mesh(cubeGeometry, cubeMaterial);
        fourthCube.castShadow = true;
        fourthCube.position.x = 0.8;
        fourthCube.position.y = 3.3;
        fourthCube.position.z = 0.05;
        scene.add(fourthCube);
        console.log("Added the larger cube to the scene");

        //Add fifth cube to the scene
        cubeGeometry = new BoxGeometry(0.6, 0.5, 0.6);
        cubeMaterial = new LambertMaterial({ color: 102255204 });
        fifthCube = new Mesh(cubeGeometry, cubeMaterial);
        fifthCube.castShadow = true;
        fifthCube.position.x = 0.8;
        fifthCube.position.y = 3.5;
        fifthCube.position.z = 0.05;
        scene.add(fifthCube);
        console.log("Added the larger cube to the scene");

 
        // add controls
        gui = new GUI();
        control = new Control(0,0,0,0,0);
        addControl(control);

        // Add framerate stats
        addStatsObject();
        console.log("Added Stats to scene...");

        document.body.appendChild(renderer.domElement);
        gameLoop(); // render the scene	

    }

    function addControl(controlObject: Control): void {
        /* ENTER CODE for the GUI CONTROL HERE */
        gui.add(controlObject, 'firstCubeRotation', -0.5, 0.5);
        gui.add(controlObject, 'secondCubeRotation', -0.5, 0.5);
        gui.add(controlObject, 'thirdCubeRotation', -0.5, 0.5);
        gui.add(controlObject, 'fourthCubeRotation', -0.5, 0.5);
        gui.add(controlObject, 'fifthCubeRotation', -0.5, 0.5);
    }

    function addStatsObject() {
        stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }

    // Setup main game loop
    function gameLoop(): void {
        stats.update();
        firstCube.rotation.y += control.firstCubeRotation;
        secondCube.rotation.y += control.secondCubeRotation;
        thirdCube.rotation.y += control.thirdCubeRotation;
        fourthCube.rotation.y += control.fourthCubeRotation;
        fifthCube.rotation.y += control.fifthCubeRotation;
        
        // render using requestAnimationFrame
        requestAnimationFrame(gameLoop);
	
        // render the scene
        renderer.render(scene, camera);
    }

    // Setup default renderer
    function setupRenderer(): void {
        renderer = new Renderer();
        renderer.setClearColor(0x404040, 1.0);
        renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        console.log("Finished setting up Renderer...");
    }

    // Setup main camera for the scene
    function setupCamera(): void {
        camera = new PerspectiveCamera(35, config.Screen.RATIO, 0.1, 100);
        camera.position.x = 10.3;
        camera.position.y = 18.5;
        camera.position.z = -28.7;
        camera.rotation.set(-1.10305, 0.49742, -0.1396);
        camera.lookAt(new Vector3(0, 0, 0));
        console.log("Finished setting up Camera...");
    }

    window.onload = init;

    return {
        scene: scene
    }

})();

