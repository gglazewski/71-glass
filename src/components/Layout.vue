<script setup>
import {NDrawer, NDrawerContent, NButton, NIcon, NList, NListItem} from "naive-ui";
import {MenuOutlined, PhotoSizeSelectSmallSharp, CropSquareSharp, PhoneAndroidRound, ImageFilled} from "@vicons/material";
import {ref} from "vue";

const menuOpened = ref(false);

</script>

<template>
    <header class="py-5 px-1">
        <div class="container mx-auto flex flex-row justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap">
            <router-link to="/"><img class="w-[100px] cursor-pointer" alt="logo" src="/logo.png"></router-link>

            <n-button class="sm:hidden absolute left-5 top-5" @click="menuOpened = !menuOpened">
                <n-icon size="20"><MenuOutlined/></n-icon>
            </n-button>

            <nav class="mt-10 sm:mt-0 w-full sm:w-1/3">
                <n-drawer v-model:show="menuOpened">
                    <n-drawer-content>
                        <n-list>
                            <n-list-item>
                                <router-link to="/szklo-na-wymiar" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white flex flex-row gap-5 items-center">
                                    <n-icon size="20"><PhotoSizeSelectSmallSharp/></n-icon> Szklo Na Wymiar
                                </router-link>
                            </n-list-item>

                            <n-list-item>
                                <router-link to="/szklane-panele" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white flex flex-row gap-5 items-center">
                                    <n-icon size="20"><CropSquareSharp/></n-icon> Szklane Panele
                                </router-link>
                            </n-list-item>

                            <n-list-item>
                                <router-link to="/galeria" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white flex flex-row gap-5 items-center">
                                    <n-icon size="20"><ImageFilled/></n-icon> Galeria
                                </router-link>
                            </n-list-item>

                            <n-list-item>
                                <router-link to="/#kontakt" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white flex flex-row gap-5 items-center">
                                    <n-icon size="20"><PhoneAndroidRound/></n-icon> Kontakt
                                </router-link>
                            </n-list-item>
                        </n-list>
                    </n-drawer-content>
                </n-drawer>

                <ul class="hidden sm:flex flex-row p-0 justify-between list-none">
                    <li class="text-center font-bold uppercase p-1">
                        <router-link to="/szklo-na-wymiar" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white">Szklo Na Wymiar</router-link>
                    </li>

                    <li class="rounded text-center font-bold uppercase p-1">
                        <router-link to="/szklane-panele" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white">Szklane Panele</router-link>
                    </li>

                    <li class="rounded text-center font-bold uppercase p-1">
                        <router-link to="/#kontakt" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white">Galeria</router-link>
                    </li>

                    <li class="rounded text-center font-bold uppercase p-1">
                        <router-link to="/#kontakt" class="rounded no-underline text-black hover:bg-[#0da3d1] p-1 hover:text-white">Kontakt</router-link>
                    </li>
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