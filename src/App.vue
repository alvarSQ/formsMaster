<template>
  <router-view name="json" />
  <div class="wapper" v-if="queSt.isJson">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useQuestionsStore } from '@/store/index.js'
const queSt = useQuestionsStore()

</script>
