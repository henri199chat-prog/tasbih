// Copies the static web app from the repo root into ./www (Capacitor webDir).
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..', '..');
const www = resolve(here, '..', 'www');
rmSync(www, { recursive: true, force: true });
mkdirSync(www);
for (const f of ['index.html', 'style.css', 'app.js', 'data.js', 'sw.js', 'manifest.webmanifest', 'icons', 'fonts']) {
  cpSync(resolve(root, f), resolve(www, f), { recursive: true });
}
console.log('Copied web app to', www);
