<template>
  <div class="form_wrapper">
    <div class="form_container">
      <input type="text" placeholder="Название">
      <textarea placeholder="Описание"></textarea>
    </div>
    <div class="form_container">
      <div class="navbar-content">
        <input type="text" placeholder="Вопрос">
        <select name="form">
          <option value="one">Один из списка</option>
          <option value="several">Несколько из списка</option>
          <option value="free">Свободный ответ</option>
        </select>
      </div>
      <Questions />
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

<script>
import Questions from "@/components/varQuestions.vue";
export default {
  components: {
    Questions
  }
}
</script>
