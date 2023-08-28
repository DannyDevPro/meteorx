//code/index.js
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

monaco.editor.create(document.getElementById("mcode"), {
	value: "funcion init(){}"
});