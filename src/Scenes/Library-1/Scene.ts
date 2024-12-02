import {
  BoundingBox,
  Engine,
  Loader,
  Scene,
  SceneActivationContext,
  vec,
} from 'excalibur';
import { LOCATIONS, SCENE_STATE } from '../../constants';

// import scene specific items
import { Library1Resources } from './Resources';
import { Library1Dialogues } from './Dialogues';

// import managers
import { uiManager } from '../../Managers/UIManager';
import { musicManager } from '../../Managers/MusicManager';

// import Actors
import { MainGuy } from '../../Actors/Main/Player';

class Library1 extends Scene {
  game_container!: HTMLElement;
  constructor() {
    super();
  }

  onInitialize(engine: Engine): void {
    this.game_container = document.getElementById('game')!;

    this.setCameraBoundaries(engine);
    const npcs = this.setupNPCs();

    // add player character
    /* Default Player Location: pos: vec(2300, 2550), */
    const player = new MainGuy(vec(200, 200), Library1Resources);
    engine.currentScene.add(player);
    engine.currentScene.camera.zoom = 0.8;
    musicManager.startMusic(Library1Resources);

    // add all npcs to game
    npcs.forEach((character) => {
      engine.add(character);
    });

    engine.currentScene.camera.strategy.lockToActor(player);
    Library1Resources.TiledMap.addToScene(engine.currentScene);
  }

  onActivate(_context: SceneActivationContext<unknown>): void {
    if (musicManager.location !== LOCATIONS.LIBRARY1) {
      musicManager.updateLocation(LOCATIONS.LIBRARY1);
      musicManager.startMusic(Library1Resources);
    }
  }

  onDeactivate(_context: SceneActivationContext): void {}

  onPreUpdate(_engine: Engine, _delta: number): void {
    if (this.game_container.className === SCENE_STATE.TALKING) {
      uiManager.displayDialogue(Library1Dialogues);
    }

    if (this.game_container.className !== SCENE_STATE.TALKING) {
      uiManager.cleanupDialogue();
    }
  }

  private setCameraBoundaries(engine: Engine) {
    // add map boundaries for camera
    const tilemap = Library1Resources.TiledMap.getTileLayers()[0].tilemap;
    const tileWidth = Library1Resources.TiledMap.getTileLayers()[0].width;
    const tileHeight = Library1Resources.TiledMap.getTileLayers()[0].height;

    const mapBounds = new BoundingBox({
      left: tilemap.pos.x,
      top: tilemap.pos.y,
      bottom: tilemap.pos.y + tileWidth * 90,
      right: tilemap.pos.y + tileHeight * 32,
    });
    engine.currentScene.camera.strategy.limitCameraBounds(mapBounds);
  }

  private setupNPCs() {
    return [];
  }
}

export const lirary1Scene = new Library1();

// loader
export const library1SceneLoader = new Loader();
for (let resource of Object.values(Library1Resources)) {
  library1SceneLoader.addResource(resource);
}
