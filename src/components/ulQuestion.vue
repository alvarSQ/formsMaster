<template>
  <ul>
    <li
      class="form_lists"
      v-for="(item, index) in props.question.answer"
      :key="index">
      <label v-if="item">
        <input
          class="form_radio"
          :id="props.question.id"
          :type="props.question.typeCheck"
          :value="item"
          @click="getAnswer"
          name="question" />
        {{ item }}
      </label>
      {{ props.question.resultSurvey }}
    </li>
    <li class="form_lists" v-if="props.question.isTextArea">
      <label class="navbar-content">
        <input
          class="form_radio"
          type="radio"
          :value="props.question.freeAnswer"
          @click="getAnswer"
          name="question"
          :id="props.question.id"
          v-if="props.question.typeCheck === 'free'" />
        <input
          class="form_radio"
          :id="props.question.id"
          :type="props.question.typeCheck"
          :value="props.question.freeAnswer"
          @click="getAnswer"
          :disabled="!props.question.freeAnswer"
          name="question"
          v-else />
        <input
          type="text"
          placeholder="Свой вариант"
          v-model="props.question.freeAnswer" />
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import { useQuestionsStore } from '@/store/index.js'
const queSt = useQuestionsStore()

const q = ref([])

const props = defineProps({
  question: Object
})

const getAnswer = e => {
  let cv = props.question.resultSurvey
  if (e.target.checked && e.target._value) {
    props.question.resultSurvey.push(e.target._value)
  }
  if (props.question.typeCheck === 'radio' && props.question.resultSurvey.length >= 2) {    
    cv.shift()
  }
  if (!e.target.checked) {
    cv = props.question.resultSurvey.filter(el => el !== e.target._value)
  }
  props.question.resultSurvey = cv
}


const toАnswer = () => {}

const answerFree = () => {
  props.question.answer.forEach((el, index) => {})
}
</script>
