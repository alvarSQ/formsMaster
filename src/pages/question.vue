<template>
    <div class="form_wrapper">
        <div class="form_container" v-if="hasQuestion">
            <div class="navbar-content">
                <h2>Для чего вы используете Findmykids?</h2>
                <p>{{ id }} из {{ queSt.getQuestions.length }}</p>
            </div>
            <ul>
                <li class="form_lists" v-for="(item, index) in question.answer" :key="index">
                    <label>
                        <input class="form_radio" type="radio" name="question">
                        {{ item }}
                    </label>
                </li>
                <li class="form_lists"><label class="navbar-content"><input class="form_radio" type="radio"
                            name="question">
                        <input type="text" placeholder="Свой вариант">
                    </label></li>
            </ul>
            <button class="form_footer">
                Ответить
            </button>
            <div class="navbar-content">
                <button class="form_footer">
                    Назад
                </button>
                <button class="form_footer">
                    Вперед
                </button>
            </div>
        </div>
        <notFound v-else />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import notFound from '@/pages/notFound.vue'
import { useQuestionsStore } from "@/store/index.js";
const queSt = useQuestionsStore();
const route = useRoute()

const id = computed(() => parseInt(route.params.id))
const validId = computed(() => /^[1-9]+\d*$/.test(id.value))
const question = computed(() => queSt.getQuestionById(id.value))
const hasQuestion = computed(() => validId.value && question.value !== undefined)

</script>