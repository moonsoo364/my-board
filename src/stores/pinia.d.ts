import 'pinia'
// main.ts에서 등록한 plugin store 선언
declare module 'pinia' {
  export interface PiniaCustomProperties {
    secret: string
  }
}
