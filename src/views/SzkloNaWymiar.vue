<script setup>
import Layout from "@/components/Layout.vue";
import {NCard, NThing, NDivider, NList, NListItem, NIcon, NButton} from "naive-ui"
import {DownloadRound, HardwareFilled, RoundedCornerTwotone, HandymanRound, HeightRound, PaletteRound} from "@vicons/material";
</script>

<template>
    <Layout>
            <n-thing>
                <template #avatar>
                    <n-icon size="25" color="#0da3d1"><DownloadRound/></n-icon>
                </template>

                <template #header>
                    Szkło Float
                </template>

                <template #description>
                    <n-list>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HeightRound/></n-icon>
                            </template>
                            4mm, 6mm, 8mm, 10mm
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HardwareFilled/></n-icon>
                            </template>
                            hartowane lub niehartowane
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><RoundedCornerTwotone/></n-icon>
                            </template>
                            szlifowanie lub fazowanie 10-30mm
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HandymanRound/></n-icon>
                            </template>
                            sam produkt lub produkt z montażem
                        </n-list-item>
                    </n-list>
                </template>

                <template #action>
                    <n-button @click="$router.push('/szklo-na-wymiar/float')" class="w-full" type="info">
                        Dowiedz sie wiecej
                    </n-button>
                </template>
            </n-thing>

            <n-divider />

            <n-thing>
                <template #avatar>
                    <n-icon size="25" color="#0da3d1"><DownloadRound/></n-icon>
                </template>

                <template #header>
                    Szkło OptiWhite
                </template>

                <template #description>
                    <n-list>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HeightRound/></n-icon>
                            </template>
                            4mm, 6mm, 8mm, 10mm
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HardwareFilled/></n-icon>
                            </template>
                            hartowane lub niehartowane
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><RoundedCornerTwotone/></n-icon>
                            </template>
                            szlifowanie lub fazowanie 10-30mm
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HandymanRound/></n-icon>
                            </template>
                            sam produkt lub produkt z montażem
                        </n-list-item>
                    </n-list>
                </template>

                <template #action>
                    <n-button @click="$router.push('/szklo-na-wymiar/optiwhite')" class="w-full" type="info">
                        Dowiedz sie wiecej
                    </n-button>
                </template>
            </n-thing>

            <n-divider />

            <n-thing>
                <template #avatar>
                    <n-icon size="25" color="#0da3d1"><DownloadRound/></n-icon>
                </template>

                <template #header>
                    Szkło Lakierowane
                </template>

                <template #description>
                    <n-list>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><PaletteRound/></n-icon>
                            </template>
                            240 kolorów RAL
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HeightRound/></n-icon>
                            </template>
                            4mm, 6mm, 8mm, 10mm
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HardwareFilled/></n-icon>
                            </template>
                            hartowane lub niehartowane
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><RoundedCornerTwotone/></n-icon>
                            </template>
                            szlifowanie lub fazowanie 10-30mm
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <n-icon color="#0da3d1" size="20"><HandymanRound/></n-icon>
                            </template>
                            sam produkt lub produkt z montażem
                        </n-list-item>
                    </n-list>
                </template>

                <template #action>
                    <n-button @click="$router.push('/szklo-na-wymiar/lacobel')" class="w-full" type="info">
                        Dowiedz sie wiecej
                    </n-button>
                </template>
            </n-thing>

    </Layout>
</template>

<style scoped>

</style>