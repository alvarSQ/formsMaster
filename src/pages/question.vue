<template>
  <div class="form_wrapper">
    <div class="form_container" v-if="hasQuestion">
      <div class="form_header">
        <h2>{{ question.title }}</h2>
        <p class="form_counter">{{ id }} из {{ queSt.getQuestions.length }}</p>
      </div>

      <ulQuestions :question="question" />

      <div class="answer_string">
       <b>Ваш ответ:</b> {{ question.resultSurvey.join(', ') }}
      </div>

      <button class="form_btn" :disabled="question.isAnswer" @click="toАnswer">Ответить</button>
      <div class="navbar-content">
        <button
          class="form_btn"
          :disabled="isMinPage"
          @click="toBack">
          Назад
        </button>
        <button
          class="form_btn"
          v-if="isMaxPage"
          @click="toEnd">
          Закончить
        </button>
        <button
          class="form_btn"
          v-else
          @click="toForward">
          Вперед
        </button>
        
      </div>
    </div>
    <notFound v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import notFound from '@/pages/notFound.vue'
import ulQuestions from '@/components/ulQuestion.vue'
import { useQuestionsStore } from '@/store/index.js'
const queSt = useQuestionsStore()
const router = useRouter()
const route = useRoute()

const toАnswer = () => {
  const newAnswer = {
    title: question.value.title,
    answer: question.value.resultSurvey
  }
  if (question.value.resultSurvey[0]) {
    queSt.jsonAnswer.push(newAnswer)
  }
  question.value.isAnswer = true
}

const toForward = () => {
  router.push({ name: 'question', params: { id: question.value.id + 1 } })
}
const toBack = () => {
  router.push({ name: 'question', params: { id: question.value.id - 1 } })
}
const toEnd = () => {
  queSt.json = JSON.stringify(queSt.jsonAnswer);
  queSt.isJson = false
  router.push({ name: 'json' })
}

const id = computed(() => parseInt(route.params.id))
const validId = computed(() => /^[1-9]+\d*$/.test(id.value))
const question = computed(() => queSt.getQuestionById(id.value))
const hasQuestion = computed(
  () => validId.value && question.value !== undefined
)

const isMaxPage = computed(() => id.value >= queSt.getQuestions.length)
const isMinPage = computed(() => id.value <= 1)

</script>
