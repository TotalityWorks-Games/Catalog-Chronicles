import {
  Actor,
  CollisionType,
  Engine,
  ImageSource,
  SpriteSheet,
  Vector,
} from 'excalibur';
import { DIRECTIONS } from '../../../../constants';

export class NPCSkirt extends Actor {
  public direction: DIRECTIONS;
  skirtSpriteSheet: SpriteSheet | undefined;
  constructor(
    pos: Vector,
    resources: {
      SkirtSpriteSheetPng: ImageSource;
    },
    direction?: DIRECTIONS
  ) {
    super({
      pos,
      width: 16,
      height: 24,
      collisionType: CollisionType.PreventCollision,
    });

    this.z = 100;
    this.direction = direction ?? DIRECTIONS.DOWN;

    this.skirtSpriteSheet = SpriteSheet.fromImageSource({
      image: resources.SkirtSpriteSheetPng as ImageSource,
      grid: {
        spriteWidth: 32,
        spriteHeight: 32,
        rows: 49,
        columns: 112,
      },
    });
  }

  onInitialize(_engine: Engine): void {}

  onPreUpdate(_engine: Engine, _elapsedMs: number): void {
    this.vel = Vector.Zero;
  }
}
