<template>
  <div>
    <h1>Hello World!</h1>
    <input
      type="text"
      v-model="inputValue"
      @keyup.enter="handleSubmit"
      placeholder="값을 입력하세요"
    />
    <button @click="handleSubmit">확인</button>
    <div v-if="submittedValue">
      <span>입력한 값: {{ submittedValue }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 입력값 (양방향 바인딩)
const inputValue = ref<string>('')

// span에 출력할 최종 값
const submittedValue = ref<string>('')

// 버튼 클릭 또는 Enter 키 입력 시 실행
const handleSubmit = () => {
  submittedValue.value = inputValue.value
}
</script>

<style scoped>
/* 선택사항: 스타일 */
</style>
