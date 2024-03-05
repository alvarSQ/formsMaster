<template>
  <div class="form_wrapper">
    <div class="form_container">
      <input type="text" placeholder="Название" v-model="queSt.getOnePage.title">
      <textarea placeholder="Описание" v-model="queSt.getOnePage.description"></textarea>
    </div>
    <div class="form_container">
      <div class="navbar-content">
        <input type="text" placeholder="Вопрос" v-model="queSt.getQuestions[0].title">
        <select name="form" v-model="queSt.selectOption">
          <option value="one">Один из списка</option>
          <option value="several">Несколько из списка</option>
          <option value="free">Свободный ответ</option>
        </select>
      </div>
      <varQuestions />
      <div class="navbar-content">
        <button class="form_footer">
          Добавить вариант ответа
        </button>
        <button class="form_footer">
          Добавить свой ответ
        </button>
      </div>
      <button class="form_footer">
        Добавить вопрос
      </button>
    </div>
  </div>
</template>

<script setup>
import varQuestions from "@/components/varQuestions.vue";
import { useQuestionsStore } from "@/store/index.js";
const queSt = useQuestionsStore();

</script>
