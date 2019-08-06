<template>
    <div>
        <LifeGrid />
        <LifePosted />
        <LifeArticle />
        <LifeRecommended />

    </div>
</template>

<script>

import LifeGrid from '../components/Life/LifeGrid';
import LifePosted from '../components/Life/LifePosted';
import LifeArticle from '../components/Life/LifeArticle';
import LifeRecommended from '../components/Life/LifeRecommended';

export default {
    components: {
        LifeGrid,
        LifePosted,
        LifeArticle,
        LifeRecommended
    }
}
</script>

<style>

</style>
