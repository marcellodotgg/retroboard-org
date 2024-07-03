import { isDevMode } from '@angular/core';

export const GITHUB_REPO = 'https://github.com/bytebury/retroboard-org';
export const API_ROOT = isDevMode() ? 'http://localhost:8080' : 'https://retro.bytebury.com';

export const DEFAULT_BOARD_CONFIG = {
  name: 'My Retro',
  columns: [{ name: 'What Went Well' }, { name: "What Didn't Go Well" }, { name: 'Action Items' }],
};
