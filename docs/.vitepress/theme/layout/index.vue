<!-- .vitepress/theme/Layout/index.vue -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Comment from './Comment.vue'
</script>

<template>
    <DefaultTheme.Layout>
        <template #doc-after>
            <Comment />
        </template>
    </DefaultTheme.Layout>
</template>