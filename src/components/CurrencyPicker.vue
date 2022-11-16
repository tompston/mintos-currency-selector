<script setup lang="ts">
import {
    default_currency_options,
    appendToCurrencyArrayAndRemoveFromDefaultArray
} from "../lib"
import { Ref, ref } from 'vue'

const currency_options: Ref<string[]> = ref(default_currency_options)
const selected_currencies: Ref<string[]> = ref([])


</script>

<template>

    <div class="grid grid-cols-2 gap-4">
        <!-- Default currency grid -->
        <div>
            <h6 class="fs-9 mb-3 fw-700 opacity-60">CURRENCY OPTIONS</h6>
            <div class="flex flex-row gap-2 flex-wrap">
                <div v-for="currency in currency_options" v-bind:key="currency">
                    <button class="currency_btn" @click="
                    appendToCurrencyArrayAndRemoveFromDefaultArray(currency, selected_currencies, currency_options)">
                        {{ currency }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Selected Currency grid -->
        <div>
            <h6 class="fs-9 mb-3 fw-700 opacity-60">SELECTED CURRENCY</h6>
            <div class="flex flex-row gap-2 flex-wrap">
                <div v-for="currency in selected_currencies" v-bind:key="currency">

                    <div class="relative">
                        <div class="currency_btn">{{ currency }}</div>
                        <button
                            @click="
                            appendToCurrencyArrayAndRemoveFromDefaultArray(currency, currency_options, selected_currencies)"
                            class="flex-center delete_currency_btn">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
/* Currency Button classes */
.currency_btn {
    @apply bg-gray-100 px-3 py-1 transition-colors;
    font-size: var(--fs-9);
    border-radius: var(--border-rad-4);
    color: rgb(130, 130, 130);
    font-weight: 700;
    /* disable-text-select util class */
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    user-select: none;
}

.currency_btn:hover {
    @apply bg-gray-200;
    color: rgb(83, 83, 83);
}

.currency_btn:active {
    @apply bg-gray-600 transition-none text-white;
}

/* Delete button classes */
.delete_currency_btn {
    @apply absolute top-0 right-0 text-[9px] bg-gray-500 text-white w-5 h-5 -m-2 transition-colors;
    font-weight: 700;
    border-radius: 999px;
}

.delete_currency_btn:hover {
    @apply bg-gray-700
}

.delete_currency_btn:active {
    @apply bg-white transition-none text-black;
}
</style>