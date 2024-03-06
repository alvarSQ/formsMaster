<template>
  <div class="form_wrapper">
    <div class="form_container" v-if="hasQuestion">
      <div class="navbar-content">
        <h2>Для чего вы используете Findmykids?</h2>
        <p>{{ id }} из {{ queSt.getQuestions.length }}</p>
      </div>
      <ul>
        <li
          class="form_lists"
          v-for="(item, index) in question.answer"
          :key="index">
          <label>            
            <input class="form_radio" :type="question.typeCheck" name="question"/>
            {{ item }}
          </label>
        </li>
        <li class="form_lists" v-if="question.isTextArea">
          <label class="navbar-content">
            <input class="form_radio" type="radio" name="question"  v-if="question.typeCheck === 'free'"  />
            <input class="form_radio" :type="question.typeCheck" name="question" v-else />
            <input type="text" placeholder="Свой вариант" />
          </label>
        </li>
      </ul>
      <button class="form_btn">Ответить</button>
      <div class="navbar-content">
        <button class="form_btn" :disabled="isMinPage" @click="$router.push({ name: 'question', params: { id: question.id - 1 } })">Назад</button>
        <button class="form_btn" :disabled="isMaxPage" @click="$router.push({ name: 'question', params: { id: question.id + 1 } })">Вперед</button>
      </div>
    </div>
    <notFound v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import notFound from '@/pages/notFound.vue'
import { useQuestionsStore } from '@/store/index.js'
const queSt = useQuestionsStore()
const route = useRoute()


const id = computed(() => parseInt(route.params.id))
const validId = computed(() => /^[1-9]+\d*$/.test(id.value))
const question = computed(() => queSt.getQuestionById(id.value))
const hasQuestion = computed(() => validId.value && question.value !== undefined)
const isMaxPage = computed(() => id.value >= queSt.getQuestions.length)
const isMinPage = computed(() => id.value <= 1)
</script>
