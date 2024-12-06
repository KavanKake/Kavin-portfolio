export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","My_projects/.DS_Store","My_projects/Ecopant - game/.DS_Store","My_projects/Ecopant - game/EcoPant.py","My_projects/Ecopant - game/Ecopant.zip","My_projects/Ecopant - game/Homepage.py","My_projects/Ecopant - game/Main.py","My_projects/Ecopant - game/assets/.DS_Store","My_projects/Ecopant - game/assets/Board copy.png","My_projects/Ecopant - game/assets/Board.png","My_projects/Ecopant - game/assets/Cola flaske.png","My_projects/Ecopant - game/assets/Ecopant Logo.png","My_projects/Ecopant - game/assets/Ecopant forside.png","My_projects/Ecopant - game/assets/Fanta orange flaske.png","My_projects/Ecopant - game/assets/L1.png","My_projects/Ecopant - game/assets/L2.png","My_projects/Ecopant - game/assets/L3.png","My_projects/Ecopant - game/assets/L4.png","My_projects/Ecopant - game/assets/M1.png","My_projects/Ecopant - game/assets/M2.png","My_projects/Ecopant - game/assets/M3.png","My_projects/Ecopant - game/assets/M4.png","My_projects/Ecopant - game/assets/NPC 1 1.png","My_projects/Ecopant - game/assets/NPC 1 2.png","My_projects/Ecopant - game/assets/NPC 1 3.png","My_projects/Ecopant - game/assets/NPC 1 4.png","My_projects/Ecopant - game/assets/NPC 1 5.png","My_projects/Ecopant - game/assets/NPC 1 6.png","My_projects/Ecopant - game/assets/NPC 1 7.png","My_projects/Ecopant - game/assets/NPC 1 8.png","My_projects/Ecopant - game/assets/NPC 1 9.png","My_projects/Ecopant - game/assets/NPC 10.png","My_projects/Ecopant - game/assets/NPC 2.png","My_projects/Ecopant - game/assets/NPC 3.png","My_projects/Ecopant - game/assets/NPC 4.png","My_projects/Ecopant - game/assets/NPC 5.png","My_projects/Ecopant - game/assets/NPC 6.png","My_projects/Ecopant - game/assets/NPC 7.png","My_projects/Ecopant - game/assets/NPC 8.png","My_projects/Ecopant - game/assets/NPC 9.png","My_projects/Ecopant - game/assets/P1.png","My_projects/Ecopant - game/assets/P2.png","My_projects/Ecopant - game/assets/P3.png","My_projects/Ecopant - game/assets/Panteposen.png","My_projects/Ecopant - game/assets/R1.png","My_projects/Ecopant - game/assets/R2.png","My_projects/Ecopant - game/assets/R3.png","My_projects/Ecopant - game/assets/R4.png","My_projects/Ecopant - game/assets/Solo flaske.png","My_projects/Ecopant - game/assets/Sprite flaske.png","My_projects/Ecopant - game/assets/Standing.png","My_projects/Ecopant - game/assets/map 1.png","My_projects/Ecopant - game/assets/npc 46.png","My_projects/Ecopant - game/assets/npc31.png","My_projects/Ecopant - game/assets/npc32.png","My_projects/Ecopant - game/assets/npc33.png","My_projects/Ecopant - game/assets/npc34.png","My_projects/Ecopant - game/assets/npc35.png","My_projects/Ecopant - game/assets/npc36.png","My_projects/Ecopant - game/assets/npc37.png","My_projects/Ecopant - game/assets/npc38.png","My_projects/Ecopant - game/assets/npc39.png","My_projects/Ecopant - game/assets/npc41.png","My_projects/Ecopant - game/assets/npc42.png","My_projects/Ecopant - game/assets/npc43.png","My_projects/Ecopant - game/assets/npc44.png","My_projects/Ecopant - game/assets/npc45.png","My_projects/Ecopant - game/assets/npc47.png","My_projects/Ecopant - game/assets/npc48.png","My_projects/Ecopant - game/assets/npc49.png","My_projects/Ecopant - game/assets/start button.jpeg","My_projects/Ecopant - game/assets/start.png","My_projects/Python/Calculator.py","My_projects/Python/Dekryptert_melding.py","My_projects/Python/Gjett_tallet.py","My_projects/Python/Primtallsjekk-kopi.py","My_projects/Python/Stein, saks, papir-kopi.py","My_projects/Python/bankkonto.py","My_projects/Python/krytpert_kode.py","My_projects/Python/ordsjekk-kopi.py","My_projects/Quizgame/.DS_Store","My_projects/Quizgame/Controlles-kopi.py","My_projects/Quizgame/Frontpage-kopi.py","My_projects/Quizgame/Main_code-kopi.py","My_projects/Quizgame/WhoWantsToBeAMillionaire.zip","My_projects/Quizgame/WhoWantsToBeAMillionare-kopi 3.py","My_projects/Quizgame/assets/.DS_Store","My_projects/Quizgame/assets/1 penger-kopi.png","My_projects/Quizgame/assets/10 penger-kopi.png","My_projects/Quizgame/assets/11 penger-kopi.png","My_projects/Quizgame/assets/12 penger-kopi.png","My_projects/Quizgame/assets/13 penger-kopi.png","My_projects/Quizgame/assets/14 penger-kopi.png","My_projects/Quizgame/assets/15 penger-kopi.png","My_projects/Quizgame/assets/2 penger-kopi.png","My_projects/Quizgame/assets/3 penger-kopi.png","My_projects/Quizgame/assets/4 penger-kopi.png","My_projects/Quizgame/assets/5 penger-kopi.png","My_projects/Quizgame/assets/50-kopi.mp3","My_projects/Quizgame/assets/5050-kopi.png","My_projects/Quizgame/assets/6 penger-kopi.png","My_projects/Quizgame/assets/7 penger-kopi.png","My_projects/Quizgame/assets/8 penger-kopi.png","My_projects/Quizgame/assets/9 penger-kopi.png","My_projects/Quizgame/assets/Ai A-kopi.jpg","My_projects/Quizgame/assets/Ai B-kopi.jpg","My_projects/Quizgame/assets/Ai C-kopi.jpg","My_projects/Quizgame/assets/Ai D-kopi.jpg","My_projects/Quizgame/assets/Applause-kopi.mp3","My_projects/Quizgame/assets/Ask the crowd-kopi.png","My_projects/Quizgame/assets/Ask-kopi.mp3","My_projects/Quizgame/assets/Call friend 2-kopi.png","My_projects/Quizgame/assets/Call friend-kopi.png","My_projects/Quizgame/assets/Feil A-kopi.jpg","My_projects/Quizgame/assets/Feil B-kopi.jpg","My_projects/Quizgame/assets/Feil C-kopi.jpg","My_projects/Quizgame/assets/Feil D-kopi.jpg","My_projects/Quizgame/assets/Feil lyd-kopi.mp3","My_projects/Quizgame/assets/Flertallet A-kopi.png","My_projects/Quizgame/assets/Flertallet B-kopi.png","My_projects/Quizgame/assets/Flertallet C-kopi.png","My_projects/Quizgame/assets/Flertallet D-kopi.png","My_projects/Quizgame/assets/Forside-kopi.png","My_projects/Quizgame/assets/Frontpage-kopi.jpeg","My_projects/Quizgame/assets/Hovedlyd-kopi.mp3","My_projects/Quizgame/assets/Money and leave-kopi.jpg","My_projects/Quizgame/assets/Phone-kopi.png","My_projects/Quizgame/assets/Play botton-kopi.jpeg","My_projects/Quizgame/assets/Play1-kopi.png","My_projects/Quizgame/assets/Play12-kopi.png","My_projects/Quizgame/assets/Quit 2-kopi.png","My_projects/Quizgame/assets/Quit-kopi.png","My_projects/Quizgame/assets/Regler-kopi.jpg","My_projects/Quizgame/assets/Riktig A-kopi.jpg","My_projects/Quizgame/assets/Riktig B-kopi.jpg","My_projects/Quizgame/assets/Riktig C-kopi.jpg","My_projects/Quizgame/assets/Riktig D-kopi.jpg","My_projects/Quizgame/assets/Riktig lyd-kopi.mp3","My_projects/Quizgame/assets/Siste penger-kopi.png","My_projects/Quizgame/assets/Spørsmål-kopi.jpg","My_projects/Quizgame/assets/Start-kopi.png","My_projects/Quizgame/assets/You Lost-kopi.jpg","My_projects/Quizgame/assets/robot-kopi.mp3","My_projects/Quizgame/assets/take money-kopi.png","My_projects/Quizgame/video-kopi.py","My_projects/html,css,js/Vikingtokt.zip","favicon.png"]),
	mimeTypes: {".zip":"application/zip",".png":"image/png",".jpeg":"image/jpeg",".mp3":"audio/mpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CVI5e64C.js","app":"_app/immutable/entry/app.bQ4JVC07.js","imports":["_app/immutable/entry/start.CVI5e64C.js","_app/immutable/chunks/entry.kL7zCAHI.js","_app/immutable/chunks/runtime.BIEvs8s_.js","_app/immutable/entry/app.bQ4JVC07.js","_app/immutable/chunks/runtime.BIEvs8s_.js","_app/immutable/chunks/store.XdhP3dF7.js","_app/immutable/chunks/disclose-version.DZ49Zhap.js","_app/immutable/chunks/props.CWMHgwMQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aboutme",
				pattern: /^\/aboutme\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contactme",
				pattern: /^\/contactme\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/extrapages",
				pattern: /^\/extrapages\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/HTML,CSS,JS",
				pattern: /^\/projects\/HTML,CSS,JS\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects/other",
				pattern: /^\/projects\/other\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projects/python",
				pattern: /^\/projects\/python\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/projects/python/basic_python",
				pattern: /^\/projects\/python\/basic_python\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/projects/python/python_games",
				pattern: /^\/projects\/python\/python_games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
