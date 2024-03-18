currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/hello.json]
{
  "hello": "world"
}

//// [/src/src/index.ts]
import hello from "../hello.json"
export default hello.hello


//// [/src/tsconfig.json]
{
  "compilerOptions": {
    "composite": true,
    "moduleResolution": "node",
    "module": "commonjs",
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "outDir": "dist",
    "skipDefaultLibCheck": true,
    "rootDir": "src"
  },
  "include": [
    "src/**/*"
  ]
}



Output::
/lib/tsc --b /src/tsconfig.json --v --explainFiles --listEmittedFiles
[[90m12:00:12 AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90m12:00:13 AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/tsconfig.tsbuildinfo' does not exist

[[90m12:00:14 AM[0m] Building project '/src/tsconfig.json'...

TSFILE: /src/dist/index.js
TSFILE: /src/dist/index.d.ts
TSFILE: /src/tsconfig.tsbuildinfo
lib/lib.d.ts
  Default library for target 'es5'
src/hello.json
  Imported via "../hello.json" from file 'src/src/index.ts'
src/src/index.ts
  Matched by include pattern 'src/**/*' in 'src/tsconfig.json'
exitCode:: ExitStatus.Success


//// [/src/dist/index.d.ts]
declare const _default: string;
export default _default;


//// [/src/dist/index.js]
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var hello_json_1 = __importDefault(require("../hello.json"));
exports.default = hello_json_1.default.hello;


//// [/src/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../lib/lib.d.ts","./hello.json","./src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"6651571919-{\n  \"hello\": \"world\"\n}",{"version":"-17927595516-import hello from \"../hello.json\"\nexport default hello.hello\n","signature":"6785192742-declare const _default: string;\nexport default _default;\n"}],"root":[3],"options":{"allowSyntheticDefaultImports":true,"composite":true,"esModuleInterop":true,"module":1,"outDir":"./dist","rootDir":"./src","skipDefaultLibCheck":true},"fileIdsList":[[2]],"referencedMap":[[3,1]],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./dist/index.d.ts"},"version":"FakeTSVersion"}

//// [/src/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../lib/lib.d.ts",
      "./hello.json",
      "./src/index.ts"
    ],
    "fileNamesList": [
      [
        "./hello.json"
      ]
    ],
    "fileInfos": {
      "../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./hello.json": {
        "version": "6651571919-{\n  \"hello\": \"world\"\n}",
        "signature": "6651571919-{\n  \"hello\": \"world\"\n}"
      },
      "./src/index.ts": {
        "original": {
          "version": "-17927595516-import hello from \"../hello.json\"\nexport default hello.hello\n",
          "signature": "6785192742-declare const _default: string;\nexport default _default;\n"
        },
        "version": "-17927595516-import hello from \"../hello.json\"\nexport default hello.hello\n",
        "signature": "6785192742-declare const _default: string;\nexport default _default;\n"
      }
    },
    "root": [
      [
        3,
        "./src/index.ts"
      ]
    ],
    "options": {
      "allowSyntheticDefaultImports": true,
      "composite": true,
      "esModuleInterop": true,
      "module": 1,
      "outDir": "./dist",
      "rootDir": "./src",
      "skipDefaultLibCheck": true
    },
    "referencedMap": {
      "./src/index.ts": [
        "./hello.json"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../lib/lib.d.ts",
      "./hello.json",
      "./src/index.ts"
    ],
    "latestChangedDtsFile": "./dist/index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1113
}

