<script setup>
import Layout from "@/components/Layout.vue";
import {NPageHeader, NIcon, NList, NListItem, NButton} from "naive-ui";
import {PhoneAndroidOutlined, HandymanRound, HardwareFilled, HeightRound, RoundedCornerTwotone, CheckCircleSharp} from "@vicons/material";

</script>

<template>
    <Layout>
        <n-page-header @back="$router.push('/szklo-na-wymiar')" class="mb-5">
            <template #title>
                Szkło Float
            </template>
            <n-list>
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
                Szkło <strong>Float</strong> to rodzaj płaskiego szkła o wysokiej jakości, szeroko stosowanego w różnych dziedzinach
                przemysłu. Nazwa "Float" pochodzi od procesu produkcji, w którym rozgrzane surowce szklane (takie jak
                piasek, soda i wapno) stopniowo przemieszczają się na powierzchni roztopionego cynku w celu uzyskania
                jednolitej i gładkiej powierzchni. Ten proces umożliwia produkcję szkła o doskonałej równości grubości,
                co sprawia, że jest to idealne do zastosowań, gdzie wymagana jest przezroczystość i estetyka.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Wysoka przezroczystość</h4>
            <p>Szkło Float charakteryzuje się doskonałą przezroczystością, co sprawia, że jest idealne do zastosowań,
                gdzie istotne jest przepuszczanie światła, takie jak okna, witryny sklepowe czy balustrady.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>Jednolita grubość</h4>
            <p>Proces produkcji zapewnia równomierne rozłożenie grubości szkła na całej jego powierzchni. To istotne w
                przypadku projektów, gdzie konieczna jest precyzja i równomierność.</p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>Gładka powierzchnia</h4>
            <p>Szkło Float ma gładką, płaską powierzchnię, co sprawia, że jest atrakcyjne wizualnie i łatwe do
                utrzymania w czystości.</p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>Wielostronne zastosowania</h4>
            <p>Dzięki swoim właściwościom, szkło Float znajduje zastosowanie w różnych dziedzinach, takich jak
                budownictwo, projektowanie wnętrz, produkcja mebli, a także w przemyśle motoryzacyjnym.</p>
        </div>


        <a class=" flex flex-row items-center justify-center gap-4 rounded capitalize w-full py-1.5 text-white no-underline bg-blue-400" href="tel:111">
            <n-icon size="20"><PhoneAndroidOutlined/></n-icon>
            zadzwon i dowiedz sie wiecej

        </a>
    </Layout>
</template>

<style scoped>

</style>