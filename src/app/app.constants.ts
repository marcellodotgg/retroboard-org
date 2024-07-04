import { isDevMode } from '@angular/core';
import packageInfo from '../../package.json';

export const GITHUB_REPO = 'https://github.com/bytebury/retroboard-org';
export const API_ROOT = isDevMode() ? 'http://localhost:8080' : 'https://retro.bytebury.com';
export const API_WEBSOCKET_URL = isDevMode() ? 'ws://localhost:8080/ws' : 'wss://retro.bytebury.com:8081/ws';
export const APP_VERSION = packageInfo.version;

export const DEFAULT_BOARD_CONFIG = {
  name: 'My Retro',
  columns: [{ name: 'What Went Well' }, { name: "What Didn't Go Well" }, { name: 'Action Items' }],
};
