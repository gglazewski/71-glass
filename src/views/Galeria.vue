<script setup>
import Layout from "@/components/Layout.vue";

import {NCarousel} from "naive-ui";
</script>

<template>
    <Layout>
        <n-carousel>
            <img src="@/assets/img1.jpeg" class="w-full" />
            <img src="@/assets/img2.jpeg" class="w-full" />
            <img src="@/assets/img3.jpeg" class="w-full" />
            <img src="@/assets/img4.jpeg" class="w-full" />
            <img src="@/assets/img5.jpeg" class="w-full" />
        </n-carousel>
    </Layout>
</template>

<style scoped>

</style>