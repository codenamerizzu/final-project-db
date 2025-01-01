import * as migration_20250101_164328 from './20250101_164328';

export const migrations = [
  {
    up: migration_20250101_164328.up,
    down: migration_20250101_164328.down,
    name: '20250101_164328'
  },
];
