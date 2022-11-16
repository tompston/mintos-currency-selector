<script setup lang="ts">
import CurrencyPicker from './CurrencyPicker.vue';
</script>

<template>
    <div class="flex-center">
        <div class="max-width-3">

            <div class="mt-4 mb-2">
                <h4 class="fw-600">Currency Picker</h4>
                <div>
                    <a href="https://github.com/tompston/mintos-currency-selector" target="_blank"
                        class="text-blue-500 fw-700 fs-9 underline" rel="noopener noreferrer">GITHUB REPO</a>
                </div>
            </div>

            <CurrencyPicker />
        </div>
    </div>
</template>

