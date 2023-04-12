<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <!-- call my prop item -->
            <slot :item="goal" another-prop="..."></slot>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            goals:['finish the course', 'learn vue' ]
        }
    }
}
</script>