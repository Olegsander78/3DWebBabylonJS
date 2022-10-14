/// <reference path='./vendor/babylon.d.ts' />

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas,true);

function createScene(){
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,0,0), scene);

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {scene.render();});