<template>
    <div>
        <HomeSearch />
        <ClassSidebar />
        <router-view />
    </div>
</template>

<script>

import HomeSearch from '../components/HomeSearch';
import ClassSidebar from '../components/Classify/ClassSidebar';


export default {
    components: {
        HomeSearch,
        ClassSidebar
    }
}
</script>

<style scoped>
    

</style>
