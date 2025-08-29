<template>
  <h2>모달에 전달할 값을 입력하고 버튼을 누르세요.</h2>
  <div>
    <input
      type="text"
      v-model="inputValue"
      @keyup.enter="store.setSubmittedValue(inputValue)"
      placeholder="값을 입력하세요"
    />
    <button @click="store.setSubmittedValue(inputValue)">확인</button>
    <div v-if="store.getSubmittedValue">
      <span>입력한 값: {{ store.getSubmittedValue }}</span>
    </div>
  </div>
  <h2>모달을 열어보세요.</h2>
  <div>
    <button @click="toggleModal(true)">Open modal</button>
  </div>
  <Modal :open="openModal" title="Hello World" @closeDialog="toggleModal" />
</template>

<script lang="ts" setup>
// setup : script 태그안에 추가할 경우 defineComponent, export default을 자동으로 생성한다.
import Modal from '@/components/Modal.vue'
import { useFormStore } from '@/stores/form'
import { ref } from 'vue'
const store = useFormStore()

const openModal = ref<boolean>(false)
const inputValue = ref<string>('')
// getters 는 read-only 객체로 선언되어 있어 직접 값 변경이 불가능함
// Cannot assign to 'getSubmittedValue' because it is a read-only property.ts-plugin(2540)
// const handleTest = () => {
//   store.getSubmittedValue = '11'
// }
const toggleModal = (newValue: boolean) => {
  openModal.value = newValue
}
</script>
