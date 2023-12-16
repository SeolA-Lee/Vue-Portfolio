<template>
    <div class="contentWrapper">
        <article class="projArticle">
            <div class="projTitle">PROJECTS & CONTEST</div>
            <hr class="projHr" />
            <div class="projects">
                <router-link v-for="(project, index) in projects" :to="project.tab" :key="index">
                    <button @click="contentChange(index)" class="projBtn">
                        <img :src="project.image" class="projImg" />
                        <hr class="btnHr" />
                        <div class="btnDiv">{{ project.detail }}</div>
                        <div class="projSub">
                            <div class="projDetail">{{ project.detail }}</div>
                            <div class="projPTitle">&#35; Period</div>
                            <div class="projPeriod">&nbsp;&nbsp; {{ project.date }}</div>
                            <div class="projTTitle">&#35; Tech</div>
                            <div class="projTech">&nbsp;&nbsp; {{ project.tech }}</div>
                        </div>
                    </button>
                </router-link>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 0,
                projects: [
                    {
                        tab: "first_project",
                        detail: "Calendar App",
                        date: "2024.08~2024.11",
                        tech: "React Native",
                        image: require("../../assets/ProjectImgs/calendarApp.svg")
                    },
                    {
                        tab: "second_project",
                        detail: "Shopping Mall Website",
                        date: "2024.12~2025.02",
                        tech: "HTML5, CSS3, JavaScript",
                        image: require("../../assets/ProjectImgs/mallWeb.svg")
                    },
                    {
                        tab: "contest",
                        detail: "데이터 분석 • 활용 경진대회",
                        date: "2024.11~2024.12",
                        tech: "none",
                        image: require("../../assets/ProjectImgs/contest.svg")
                    }
                ]
            }
        },
        methods: {
            contentChange(key) {
                this.index = key;
            }
        }
    }
</script>

<style scoped>
    /* 하위 프로젝트(CalendarApp.vue, ShoppingMall.vue, Contest.vue)에 적용될 css */
    @import "./Project.css";

    .projTitle {
        font-family: 'JalnanGothic';
        font-weight: 400;
        font-size: 4rem;
        text-align: center;
    }
    .projHr {
        width: 23rem;
        border: 1px solid silver;
    }
    .projBtn {
        background-color: white;
        width: 27rem;
        height: 20.25rem;
        margin: 0.7rem;
        margin-top: 2rem;
        border-radius: 0.5rem;
        border: 0.35rem solid silver;
        font-family: 'NanumBarunGothic';
        font-size: 1.5rem;
    }
    .projBtn:hover {
        position: relative;
        bottom: 1rem;
    }
    .projBtn:hover > .projSub {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        margin-top: -19.26rem;
        margin-left: -0.75rem;
        width: 24.35rem;
        height: 19.58rem;
        border-radius: 0.5rem;
        border: 0.35rem solid darkblue;
        background-color: rgba(216, 216, 216, 0.848);
    }
    .projImg {
        width: 100%;
    }
    .btnHr {
        border: 1px solid darkgrey;
    }
    .btnDiv {
        font-family: 'JalnanGothic';
    }
    .projSub {
        display: none;
        text-align: left;
        padding-left: 2rem;
    }
    .projSub :nth-child(2n) {
        font-size: 1.7rem;
        font-weight: bold;
    }
    .projDetail {
        font-family: 'JalnanGothic';
        font-size: 1.7rem;
        font-weight: bolder;
        text-align: center;
        margin-bottom: 1rem;
        margin-right: 2rem;
    }
    .projPeriod {
        margin-bottom: 0.5rem;
    }
</style>