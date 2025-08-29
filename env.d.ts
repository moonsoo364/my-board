// @/.. 하위 경로 문법 오류 나는 것 방지 코드
declare module '*.vue' {
  import { defineComponent, type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
