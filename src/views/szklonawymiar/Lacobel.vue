<script setup>
import Layout from "@/components/Layout.vue";
import {NPageHeader, NIcon, NList, NListItem, NButton} from "naive-ui";
import {
    PhoneAndroidOutlined,
    HandymanRound,
    HardwareFilled,
    HeightRound,
    RoundedCornerTwotone,
    CheckCircleSharp, PaletteRound
} from "@vicons/material";

</script>

<template>
    <Layout>
        <n-page-header @back="$router.push('/szklo-na-wymiar')" class="mb-5">
            <template #title>
                Szkło Lakierowane Lacobel
            </template>
            <n-list>
                <n-list-item>
                    <template #prefix>
                        <n-icon color="#0da3d1" size="20">
                            <PaletteRound/>
                        </n-icon>
                    </template>
                    240 kolorów RAL
                </n-list-item>
                <n-list-item>
                    <template #prefix>
                        <n-icon color="#0da3d1" size="20">
                            <HeightRound/>
                        </n-icon>
                    </template>
                    4mm, 6mm, 8mm, 10mm
                </n-list-item>
                <n-list-item>
                    <template #prefix>
                        <n-icon color="#0da3d1" size="20">
                            <HardwareFilled/>
                        </n-icon>
                    </template>
                    hartowane lub niehartowane
                </n-list-item>
                <n-list-item>
                    <template #prefix>
                        <n-icon color="#0da3d1" size="20">
                            <RoundedCornerTwotone/>
                        </n-icon>
                    </template>
                    szlifowanie lub fazowanie 10-30mm
                </n-list-item>
                <n-list-item>
                    <template #prefix>
                        <n-icon color="#0da3d1" size="20">
                            <HandymanRound/>
                        </n-icon>
                    </template>
                    sam produkt lub produkt z montażem
                </n-list-item>
            </n-list>
        </n-page-header>

        <div class="prose mb-5">
            <p>
                Szkło lakierowane <strong>Lacobel</strong> to rodzaj szkła płaskiego, który charakteryzuje się doskonałą jednolitością
                koloru oraz gładką, lśniącą powierzchnią. Proces produkcji polega na nanoszeniu warstwy lakieru na jedną
                stronę szkła, co nadaje mu elegancki wygląd i otwiera szerokie możliwości w dziedzinie projektowania
                wnętrz.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Kolorowa powierzchnia
            </h4>
            <p>Szkło Lacobel jest dostępne w różnorodnej palecie kolorów, co pozwala na dostosowanie go do
                indywidualnych preferencji klienta i harmonizację z koncepcją projektu.


            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Jednolitość koloru
            </h4>
            <p>Lakierowana powierzchnia szkła jest równomiernie pokryta, co zapewnia jednolitość koloru bez widocznych
                smug czy nierówności.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Łatwość czyszczenia
            </h4>
            <p>Gładka powierzchnia szkła lakierowanego ułatwia utrzymanie czystości, co jest istotne w przypadku
                elementów wyposażenia, takich jak blaty kuchenne czy panele ścienne.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Odporność na wilgoć
            </h4>
            <p>Szkło Lacobel jest odporne na wilgoć, co sprawia, że jest idealnym rozwiązaniem w obszarach, gdzie może
                występować kontakt z wodą, na przykład w łazienkach czy kuchniach.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Zastosowania dekoracyjne
            </h4>
            <p>Szkło lakierowane Lacobel jest powszechnie stosowane w projektach dekoracyjnych, takich jak panele
                ścienne, fronty mebli, drzwi czy elementy wystroju wnętrz. Nadaje się zarówno do nowoczesnych, jak i
                klasycznych aranżacji.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Odporność na promieniowanie UV:
            </h4>
            <p>Lakier naniesiony na szkło Lacobel często jest odporny na promieniowanie UV, co sprawia, że kolor nie
                blaknie pod wpływem światła słonecznego.
            </p>
        </div>

        <a class=" flex flex-row items-center justify-center gap-4 rounded capitalize w-full py-1.5 text-white no-underline bg-blue-400"
           href="tel:111">
            <n-icon size="20">
                <PhoneAndroidOutlined/>
            </n-icon>
            zadzwon i dowiedz sie wiecej

        </a>
    </Layout>
</template>

<style scoped>

</style>