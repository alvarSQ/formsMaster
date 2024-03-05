<template>
    <ul class="form_lists">
        <li class="navbar-content">
            <input class="form_radio" type="radio" name="question">
            <input type="text" placeholder="Вариант 1" v-model="queSt.getQuestions[0].answer[0]">
            <p class="q_del">&#10060;</p>
        </li>
        <li class="navbar-content">
            <input class="form_radio" type="radio" name="question">
            <input type="text" placeholder="Вариант 2" v-model="queSt.getQuestions[0].answer[1]">
            <p class="q_del">&#10060;</p>
        </li>
        <li class="navbar-content">
            <input class="form_radio" type="radio" name="question">
            <input type="text" placeholder="Вариант 3" v-model="queSt.getQuestions[0].answer[2]">
            <p class="q_del">&#10060;</p>
        </li>
    </ul>
    <textarea placeholder="Свободный ответ"></textarea>
</template>

<script setup>
import { useQuestionsStore } from "@/store/index.js";
const queSt = useQuestionsStore();

</script>