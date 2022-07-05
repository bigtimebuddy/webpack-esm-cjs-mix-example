import * as PIXI from 'pixi.js';
import * as PIXI3D from 'pixi3d';

const app = new PIXI.Application({
    backgroundColor: 0xdddddd,
    resizeTo: window,
    antialias: true,
});
document.body.appendChild(app.view);
  
const mesh = app.stage.addChild(PIXI3D.Mesh3D.createCube());
PIXI3D.LightingEnvironment.main.lights.push(
    Object.assign(new PIXI3D.Light(), {
        x: -1,
        z: 3,
    })
);
  
let rotation = 0;
app.ticker.add(() => {
    mesh.rotationQuaternion.setEulerAngles(0, rotation++, 0);
});