<template>
  <div class="form_wrapper">
    <div class="form_container" v-if="hasQuestion">
      <div class="form_header">
        <h2>{{ question.title }}</h2>
        <p class="form_counter">{{ id }} из {{ queSt.getQuestions.length }}</p>
      </div>
      
      <ulQuestions :question="question" />

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
import ulQuestions from "@/components/ulQuestion.vue";
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
