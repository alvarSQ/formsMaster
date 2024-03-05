<template>
  <ul class="form_lists">
    <li
      class="navbar-content"
      v-for="(item, index) in props.question.answer"
      :key="index">
      <input class="form_radio" type="radio" name="question" />
      <input
        type="text"
        :placeholder="`Вариант ${index + 1}`"
        v-model="props.question.answer[index]" />
      <p class="q_del" @click="delAnswer(index)">&#10060;</p>
    </li>
    <li class="form_lists" v-if="question.isTextArea">
      <label class="navbar-content">
        <input class="form_radio" type="radio" name="question" />
        <input type="text" placeholder="Свой вариант" />
        <p class="q_del" @click="question.isTextArea = false">&#10060;</p>
      </label>
    </li>
  </ul>
  <div class="navbar-content">
    <button class="form_btn" @click="addQuestion">
      Добавить вариант ответа
    </button>
    <button class="form_btn" :disabled="question.isTextArea" @click="question.isTextArea = true">Добавить свободный ответ</button>
  </div>
  <button class="form_btn">Добавить вопрос</button>
</template>

<script setup>
import { computed, watch, ref } from 'vue'
import { useQuestionsStore } from '@/store/index.js'

const queSt = useQuestionsStore()

const props = defineProps({
  question: Object
})

const delAnswer = index => props.question.answer.splice(index, 1)
const addQuestion = () => props.question.answer.push('')
</script>
