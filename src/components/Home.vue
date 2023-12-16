<template>
    <div class="contentWrapper">
        <article class="homeArticle">
            <img src="../assets/homeImg.svg" class="mainImg" />
            <div class="homePage">이설아's Web Portfolio</div>
            <hr class="homeHr" />
            <div class="hello">
                <pre class="homeMsg">{{ displayText }}</pre>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: "안녕하세요 :) 성장하는 개발자 이설아입니다. ",
                displayText: " ",
                count: 0
            };
        },
        mounted() {
            this.sayingHello();
        },
        methods: {
            sayingHello() {
                this.interval = setInterval(() => {
                    this.displayText += this.content[this.count];
                    this.count++;

                    if(this.count >= this.content.length) {
                        this.count = 0;
                        this.displayText = "";
                    }
                }, 200);
            }
        }
    }
</script>

<style scoped>
    .homeArticle {
        text-align: center;
        min-height: 63dvh;
        padding-top: 4.5rem;
        /* background-color: aliceblue; */
    }
    .mainImg {
        width: 10rem;
        pointer-events: none;
    }
    .homePage {
        font-family: 'JalnanGothic';
        font-weight: 500;
        font-size: 6rem;
    }
    .homeHr {
        width: 10rem;
        border-top: 0.2rem solid silver;
    }
    .homeMsg {
        font-family: 'NanumBarunGothic';
        font-weight: 400;
        font-size: 3rem;
    }
</style>