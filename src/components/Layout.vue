<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<template>
    <header class="py-5 px-1">
        <div class="container mx-auto flex flex-row justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap">
            <div><router-link to="/"><img class="w-[100px] cursor-pointer" alt="logo" src="/logo.png"></router-link></div>
            <nav class="mt-10 sm:mt-0">
                <ul class="list-none flex flex-row gap-5">
                    <li class="p-2 rounded text-center font-bold uppercase"><router-link to="/szklo-na-wymiar">Szklo Na Wymiar</router-link></li>
                    <li class="p-2 rounded text-center font-bold uppercase"><router-link to="/szklane-panele">Szklane Panele</router-link></li>
                    <li class="p-2 rounded text-center font-bold uppercase"><router-link to="/#kontakt">Kontakt</router-link></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="py-5 px-1">
        <div class="container mx-auto">
            <slot>
                Fallback
            </slot>
        </div>
    </main>

    <footer class="h-[200px] pt-5 px-1">
        <div class="container mx-auto flex flex-row justify-between flex-wrap sm:flex-nowrap gap-5">
            <div class="w-full sm:w-1/3">
                <h3>O Firmie</h3>
                <p>Twoja stara</p>
            </div>

            <div class="w-full sm:w-1/3">
                <h3>Informacje</h3>
                <p>Twoja stara</p>
            </div>

            <div class="w-full sm:w-1/3">
                <h3>Kontakt</h3>
                <p>Twoja stara</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer h3 {
    font-weight: bold;
}
</style>