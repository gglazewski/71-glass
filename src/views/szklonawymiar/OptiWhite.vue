<script setup>
import Layout from "@/components/Layout.vue";
import {NPageHeader, NIcon, NList, NListItem, NCarousel} from "naive-ui";
import {
    PhoneAndroidOutlined,
    HandymanRound,
    HardwareFilled,
    HeightRound,
    RoundedCornerTwotone,
    CheckCircleSharp
} from "@vicons/material";

</script>

<template>
    <Layout>
        <n-page-header @back="$router.push('/szklo-na-wymiar')" class="mb-5">
            <template #title>
                Szkło OptiWhite
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
                Szkło OptiWhite to rodzaj szkła o wysokiej przejrzystości i minimalnej zawartości żelaza, co sprawia, że
                jest ono bardziej bezbarwne niż tradycyjne szkło. Standardowe szkło może zawierać pewne ilości
                zanieczyszczeń, zwłaszcza żelaza, które wpływają na jego kolor, nadając mu lekkozielonkawy lub
                niebieskawy odcień. Szkło OptiWhite eliminuje te zabarwienia, co sprawia, że jest idealne do zastosowań,
                gdzie czystość koloru i doskonała przezroczystość są kluczowe.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Wysoka przezroczystość
            </h4>
            <p>Szkło OptiWhite cechuje się znacznie wyższą przejrzystością w porównaniu do tradycyjnego szkła, co
                pozwala na maksymalne przenikanie światła bez zakłóceń kolorystycznych.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Brak zabarwień
            </h4>
            <p>Dzięki minimalnej zawartości żelaza, szkło OptiWhite jest praktycznie bezbarwne, co sprawia, że jest
                doskonałe do zastosowań, gdzie istotna jest neutralność koloru.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Precyzyjna reprodukcja kolorów
            </h4>
            <p>Szkło to doskonale reprodukuje kolory, co jest istotne w przypadku projektów, gdzie istnieje potrzeba
                zachowania dokładności kolorów, na przykład w branży sztuki czy projektowaniu wnętrz.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Estetyka i elegancja
            </h4>
            <p>OptiWhite często jest wykorzystywane w projektach, gdzie estetyka i elegancja są kluczowe, takich jak
                luksusowe wnętrza, wystawy sztuki czy projekty designerskie.
            </p>

            <h4 class="flex flex row items-center gap-2">
                <n-icon color="#0da3d1" size="20">
                    <CheckCircleSharp/>
                </n-icon>
                Zastosowania dekoracyjne
            </h4>
            <p>Szkło OptiWhite może być również stosowane w projektach dekoracyjnych, takich jak szklane meble, ściany
                szklane czy artystyczne instalacje, gdzie czystość koloru odgrywa istotną rolę.
            </p>
        </div>


        <a class="mb-5 flex flex-row items-center justify-center gap-4 rounded capitalize w-full py-1.5 text-white no-underline bg-blue-400"
           href="tel:111">
            <n-icon size="20">
                <PhoneAndroidOutlined/>
            </n-icon>
            zadzwon i dowiedz sie wiecej
        </a>

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