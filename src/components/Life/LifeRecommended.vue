<template>
    <div class="recommended"> 
        <ul>
            <li>
                <img src="https://asset.yit.com/YITIAO/MATERIAL/ba0073edf73f5026a6f2d093fcd2b6c4_335X140.jpeg?x-oss-process=image/resize,m_mfit,limit_1,w_335,h_140" alt="" /> 
            </li>
            <li>
                <img src="https://asset.yit.com/YITIAO/MATERIAL/9f851d1fd33e636317e600cfba72b881_335X140.jpeg?x-oss-process=image/resize,m_mfit,limit_1,w_335,h_140" alt="">
            </li>
            <li>
                <img src="https://asset.yit.com/YITIAO/MATERIAL/b7307f830c09a8805520350c4c06d376_335X140.jpeg?x-oss-process=image/resize,m_mfit,limit_1,w_335,h_140" alt="">
            </li>
            <li>
                <img src="https://asset.yit.com/YITIAO/MATERIAL/22ad1a6139d74838d9e1c809b9800af9_335X140.jpeg?x-oss-process=image/resize,m_mfit,limit_1,w_335,h_140" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>



* {
    list-style: none;
}

.recommended {
    margin-bottom: 0.2rem;
        ul {
            box-sizing: border-box;
            padding: 0.3rem;
            background-color: #fff;
                li:nth-child(2n+1) {
                    margin-right: 0.2rem;
                }
                li {
                    display: inline-block;
                    margin-bottom: 0.2rem;
                    
                        img {
                            width: 4.45rem;
                            height: 1.4rem;
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: cover;
                            background-color: rgba(0, 0, 0, 0.3);

                        }
                }
        }
}





</style>
