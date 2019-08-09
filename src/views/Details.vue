<template>
    <div class="details">
        <DetailsSwipe />
        <DetailsData />
        <DetailsBuy />
    </div>
</template>

<script>

import DetailsSwipe from '../components/Details/DetailsSwipe';
import DetailsData from '../components/Details/DetailsData';
import DetailsBuy from '../components/Details/DetailsBuy';


export default {
    components: {
        DetailsSwipe,
        DetailsData,
        DetailsBuy
    },
    async created() {
        let {params} = this.$route;

        await this.$axios("https://www.easy-mock.com/mock/5d400b1f2c0fb9351245b95b/example/palacelist")
        .then(({data}) => {
            let datas = data.filter(item => item.id == params.ids);
        })

    }


}
</script>

<style>
.details {
    margin-bottom: 50px;
    background: #f9f9f9;
}
</style>
