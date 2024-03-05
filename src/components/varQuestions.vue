<template>
    <ul class="form_lists">
        <li class="navbar-content" v-for="(item, index) in props.question.answer" :key="index">
            <input class="form_radio" type="radio" name="question">
            <input type="text" :placeholder="`Вариант ${index + 1}`" v-model="props.question.answer[index]">
            <p class="q_del">&#10060;</p>
        </li>
    </ul>
</template>

<script setup>
import { computed, watch, ref } from 'vue'
import { useQuestionsStore } from "@/store/index.js";
import question from '@/pages/question.vue';
const queSt = useQuestionsStore();

const props = defineProps({
    question: Object
})

</script>