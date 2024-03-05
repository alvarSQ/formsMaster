<template>
    <div class="form_wrapper">
        <div class="form_container">
            <h2>{{ queSt.getOnePage.title }}</h2>
            <p class="form_description">
                {{ queSt.getOnePage.description }}
            </p>
            <button class="form_btn"
                @click="$router.push({ name: 'question', params: { id: queSt.getQuestions[0].id } })">
                Начать опрос
            </button>
        </div>
    </div>
</template>
<script setup>
import { useQuestionsStore } from "@/store/index.js";
const queSt = useQuestionsStore();

</script>