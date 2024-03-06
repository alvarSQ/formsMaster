<template>
  <ul class="form_lists">
    <template v-if="props.question.typeCheck !== 'free'">
      <li
        class="navbar-content"
        v-for="(item, index) in props.question.answer"
        :key="index">
        <input
          class="form_radio"
          :type="props.question.typeCheck"
          name="question" />
        <input
          type="text"
          :placeholder="`Вариант ${index + 1}`"
          v-model="props.question.answer[index]" />
        <p class="q_del" @click="delAnswer(index)">&#10060;</p>
      </li>
    </template>
    <li class="form_lists" v-if="question.isTextArea">
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
        <p class="q_del" @click="question.isTextArea = false">&#10060;</p>
      </label>
    </li>
  </ul>
  <div class="navbar-content">
    <button class="form_btn" @click="addAnswer">Добавить вариант ответа</button>
    <button
      class="form_btn"
      :disabled="question.isTextArea"
      @click="question.isTextArea = true">
      Добавить свободный ответ
    </button>
  </div>
  <button class="form_btn" @click="addQuestion">Добавить вопрос</button>
</template>

<script setup>
import { computed, watch, ref } from 'vue'
import { useQuestionsStore } from '@/store/index.js'

const queSt = useQuestionsStore()

const props = defineProps({
  question: Object
})

const delAnswer = index => props.question.answer.splice(index, 1)
const addAnswer = () => props.question.answer.push('')
const addQuestion = () => {
  const newQ = {
    id: queSt.getQuestions.reduce((max, el) => (el.id > max ? el.id : max), 0) + 1,
    title: '',
    answer: [],
    typeCheck: 'radio',
    isTextArea: false,
    isActiv: true
  }  
  queSt.getQuestions.push(newQ)
  queSt.triggerActiv(newQ.id)
}
</script>
