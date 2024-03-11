<template>
  <div class="form_wrapper">
    <div class="form_container">
      <div class="navbar-content">
        <input
          type="text"
          placeholder="Название"
          v-model="queSt.getOnePage.title" />
          <input type="file" id="form_file" accept=".json" @change="queSt.handleFileUpload"/>
        <button @click="startForm">Готово</button>

      </div>
      <textarea
        placeholder="Описание"
        v-model="queSt.getOnePage.description"></textarea>
    </div>
    <div class="form_container" v-for="item in queSt.getByActiv" :key="item.id">
      <div class="navbar-content">
        <input type="text" placeholder="Вопрос" v-model="item.title" />
        <select name="form" v-model="item.typeCheck">
          <option value="radio">Один из списка</option>
          <option value="checkbox">Несколько из списка</option>
          <option value="free">Свободный ответ</option>
        </select>
      </div>
      <varQuestions :question="item" />
    </div>

    <div
      class="form_container"
      v-for="item in queSt.getByNoActiv"
      :key="item.id">
      <div class="form_header">
        <h2 @click="queSt.triggerActiv(item.id)">{{ item.title }}</h2>
        <p class="q_del" style="margin-top: 8px" @click="delQuestion(item.id)">
          &#10060;
        </p>
      </div>
      <ulQuestions :question="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import varQuestions from '@/components/varQuestions.vue'
import ulQuestions from '@/components/ulQuestion.vue'
import { useRouter } from 'vue-router'
import { useQuestionsStore } from '@/store/index.js'

const queSt = useQuestionsStore()
const router = useRouter()

const startForm = () => {
  const maxid = Math.max(...queSt.getQuestions.map(el => el.id))
  if (maxid > queSt.getQuestions.length) {
    queSt.validId()
  }
  if (queSt.validQuestions) {
    return alert('Заполни все поля')
  }  
  router.push({ name: 'question-start' })
}

const delQuestion = id => queSt.questions.splice(id - 1, 1)
</script>
