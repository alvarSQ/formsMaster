<template>
  <ul>
    <li
      class="form_lists"
      v-for="(item, index) in props.question.answer"
      :key="index">
      <label v-if="item">
        <input class="form_radio" :type="props.question.typeCheck" name="question" />
        {{ item }}
      </label>
    </li>
    <li class="form_lists" v-if="props.question.isTextArea">
      <label class="navbar-content">
        <input
          class="form_radio"
          type="radio"
          name="question"
          v-if="props.question.typeCheck === 'free'" />
        <input
          class="form_radio"
          :type="props.question.typeCheck"
          name="question"
          v-else />
        <input type="text" placeholder="Свой вариант" />
      </label>
    </li>
  </ul>
</template>

<script setup>
import { useQuestionsStore } from '@/store/index.js'
const queSt = useQuestionsStore()

const props = defineProps({
  question: Object
})

</script>
