<template>
    <div class="m">
        <MineHead />
        <MineOrder />
        <MineService />
    </div>
</template>

<script>

import MineHead from '../components/Mine/MineHead';
import MineOrder from '../components/Mine/MineOrder';
import MineService from '../components/Mine/MineService';

export default {
    components: {
        MineHead,
        MineOrder,
        MineService
    }
};
</script>

<style scoped>
.m {
    margin-bottom: 1.5625rem; 
    background-color: #f9f9f9; 
}

</style>
