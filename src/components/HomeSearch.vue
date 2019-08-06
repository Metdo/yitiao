<template>
    <div class="search">
        <van-search input-align="center" placeholder="防嗮" v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>

.search {
    width: 100%;
    height: 30px;
    position: fixed;
    top: 0;
}
</style>
