import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BQM2ivBB.js","_app/immutable/chunks/disclose-version.DZ49Zhap.js","_app/immutable/chunks/runtime.BIEvs8s_.js","_app/immutable/chunks/props.CWMHgwMQ.js","_app/immutable/chunks/store.XdhP3dF7.js","_app/immutable/chunks/attributes.D3ohRQCy.js"];
export const stylesheets = ["_app/immutable/assets/0.DPn7ZtuJ.css"];
export const fonts = [];
