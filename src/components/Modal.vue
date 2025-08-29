<template>
  <teleport to="#modal">
    <dialog ref="dialog">
      <header>
        <slot name="m-header">
          <h2>{{ title }}</h2>
          <button @click="close">X</button>
        </slot>
      </header>
      <main>
        <slot name="m-main" />
        <div v-if="store.getSubmittedValue">
          <h2>입력 창에서 입력한 내용 입니다.</h2>
          <span>{{ store.getSubmittedValue }}</span>
        </div>
        <div v-else>
          <h2>입력한 내용이 없습니다.</h2>
        </div>
      </main>
      <footer>
        <slot name="m-footer">
          <button @click="close">Close</button>
        </slot>
      </footer>
    </dialog>
  </teleport>
</template>

<script lang="ts" setup>
import { useFormStore } from '@/stores/form'
import { ref, watch } from 'vue'
const store = useFormStore()

const props = defineProps<{
  open: boolean
  title?: string
}>()

const emit = defineEmits<{
  (e: 'closeDialog', value: boolean): void
}>()

const dialog = ref<HTMLDialogElement | null>(null)

const close = () => {
  emit('closeDialog', false)
}
watch(
  () => props.open,
  (newValue) => {
    if (!dialog.value) return
    if (newValue) {
      dialog.value.showModal()
    } else {
      dialog.value.close()
    }
  },
)
</script>

<style>
dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  dialog {
    position: fixed;
    z-index: 999;
    inset-block-start: 30%;
    width: 300px;
    margin-left: -150px;
  }
}
</style>
