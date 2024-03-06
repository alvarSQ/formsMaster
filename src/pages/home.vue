<template>
  <div class="form_wrapper">
    <div class="form_container">
      <div class="navbar-content">
        <input type="text" placeholder="Название" v-model="queSt.getOnePage.title">
        <button @click="$router.push({ name: 'question-start'})">Готово</button>
      </div>
      <textarea placeholder="Описание" v-model="queSt.getOnePage.description"></textarea>
    </div>
    <div class="form_container" v-for="item in queSt.getQuestions" :key="item.id">
      <div class="navbar-content">
        <input type="text" placeholder="Вопрос" v-model="item.title">
        <select name="form" v-model="item.typeCheck">
          <option value="radio">Один из списка</option>
          <option value="checkbox">Несколько из списка</option>
          <option value="free">Свободный ответ</option>
        </select>
      </div>

      <varQuestions :question="item" />
      
    </div>
    
  </div>
</template>

<script setup>
import varQuestions from "@/components/varQuestions.vue";
import { useQuestionsStore } from "@/store/index.js";
const queSt = useQuestionsStore();

</script>
