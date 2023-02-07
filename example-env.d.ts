// overriding @types/node's process.env for auto-completion
// 1. check if @types/node is installed
// 2. create .d.ts and override ProcessEnv
// 3. include the .d.ts file in tsconfig's include prop
// 4. enjoy auto-completion

declare namespace NodeJS {
  export interface ProcessEnv {
    FOO: string;
    AUTHOR: string;
  }
}
