<template>
    <div class="contentWrapper">
        <article class="myProfile">
            <div class="sideProfile">
                <img src="../assets/IntroImgs/me.svg" class="me" />
                <div class="movePage">
                    <button class="page" @click="setPage(1)">&lt;</button>
                    <button class="page" @click="setPage(1)">1</button>
                    <button class="page" @click="setPage(2)">2</button>
                    <button class="page" @click="setPage(2)">&gt;</button>
                </div>
            </div>
            <hr class="clip" />
            <div class="profileDiv">
                <div class="page1" v-show="currentPage === 1">
                    <div class="profile">
                        <div class="introTitle">👩🏻‍💻 PROFILE</div>
                        <div class="profSub">
                            <div class="profItem">Name</div>
                            <div class="profItemSub">이설아</div>
                        </div>
                        <div class="profSub">
                            <div class="profItem">Birth</div>
                            <div class="profItemSub">2003.12.01.</div>
                        </div>
                        <div class="profSub">
                            <div class="profItem">Tel.</div>
                            <div class="profItemSub">010-9600-4436</div>
                        </div>
                        <div class="profSub">
                            <div class="profItem">E-mail</div>
                            <div class="profItemSub">
                                <a href="mailto:dlcodus1201@naver.com" class="link">dlcodus1201@naver.com</a>
                            </div>
                        </div>
                        <div class="profSub">
                            <div class="profItem">GitHub</div>
                            <div class="profItemSub">
                                <a href="http://www.github.com/SeolA-Lee" target="_self" class="link">github.com/SeolA-Lee</a>
                            </div>
                        </div>
                    </div>
                    <div class="education">
                        <div class="introTitle">🎓 EDUCATION</div>
                        <div class="eduSub">
                            <div class="eduDate">2019.03~2022.02</div>
                            <div class="eduName">반송고등학교 졸업</div>
                        </div>
                        <div class="eduSub">
                            <div class="eduDate">2022.03~2026.08</div>
                            <div class="eduName">
                                <div id="eduCol">가천대학교 글로벌캠퍼스</div>
                                <div id="eduMaj">IT융합대학 컴퓨터공학부/컴퓨터공학전공</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page2" v-show="currentPage === 2">
                    <div class="skill">
                        <div class="introTitle">⚙️ SKILL</div>
                        <div class="skList">
                            <div class="skSub">
                                <div class="skField">Frontend</div>
                                <hr class="skHr" />
                                <div class="skImg">
                                    <img src="../assets/IntroImgs/SkillImg/HTML5.svg" class="fronts" />
                                    <img src="../assets/IntroImgs/SkillImg/CSS3.svg" class="fronts" />
                                    <img src="../assets/IntroImgs/SkillImg/Javascript.svg" class="fronts" />
                                    <img src="../assets/IntroImgs/SkillImg/React.svg" class="fronts" />
                                </div>
                            </div>
                            <div class="skSub">
                                <div class="skField">Backend</div>
                                <hr class="skHr" />
                                <div class="skImg">
                                    <img src="../assets/IntroImgs/SkillImg/Python.svg" class="backs" />
                                    <img src="../assets/IntroImgs/SkillImg/Java.svg" class="backs" />
                                </div>
                            </div>
                            <div class="skSub">
                                <div class="skField">Version Control</div>
                                <hr class="skHr" />
                                <div class="skImg">
                                    <img src="../assets//IntroImgs/SkillImg/GitHub.svg" class="gits" />
                                    <img src="../assets/IntroImgs/SkillImg/git.svg" class="gits" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1
        };
    },
    methods: {
        setPage(pageNumber) {
            this.currentPage = pageNumber;
        }
    }
};
</script>

<style scoped>
    .myProfile{
        display: flex;
        background-color: white;
        padding: 1rem;
        border-radius: 1rem;
        border: 0.2rem solid silver;
        box-shadow: 0.5rem 0.5rem 0.5rem silver;

    }
    .sideProfile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .me {
        width: 18rem;
        margin-bottom: 2rem;
        pointer-events: none;
    }
    .movePage {
        margin-bottom: 2rem;
    }
    .page {
        font-family: 'NanumBarunGothic';
        font-weight: bold;
        font-size: 1rem;
        height: 2.5rem;
        width: 1.7rem;
        background-color: whitesmoke;
        border: 1px solid silver;
    }
    .page:hover {
        background-color: white;
    }
    .clip {
        position: absolute;
        border: 0.1rem solid gray;
        top: 10rem;
        width: 3rem;
        transform: rotate(-45deg);
        
    }
    .profileDiv {
        flex-direction: column;
        display: flex;
        font-family: 'NanumBarunGothic';
        font-size: 2.3rem;
        padding-left: 3rem;
        height: 42rem;
        width: 60rem;
        /* background-color: aqua; */
    }
    .page1 {
        /* background-color: green; */
        padding-left: 2.5rem;
    }
    .page1, .page2 {
        display: flex;
        flex-direction: column;
        /* background-color: blue; */
        height: 42rem;
        justify-content: center;
        /* align-items: center; */
    }
    .introTitle {
        font-family: 'JalnanGothic';
        font-weight: 400;
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    .profile {
        margin-bottom: 4rem;
        /* background-color: skyblue; */
    }
    .profSub, .eduSub {
        display: flex;
        margin-left: 1rem;
        margin-bottom: 0.6rem;
        /* background-color: palegreen; */
    }
    .profItem {
        width: 11rem;
        font-weight: 700;
        /* background-color: blue; */
    }
    .profItemSub {
        width: 30rem;
        /* background-color: gray; */
    }
    .link {
        text-decoration: none;
        color: black;
    }
    .link:hover {
        color: darkblue;
        font-weight: bold;
    }
    .eduDate {
        width: 22rem;
        /* background-color: blue; */
    }
    .eduName {
        width: 26rem;
        /* background-color: gray; */
    }
    #eduMaj {
        font-size: 1.3rem;
    }
    .skill {
        /* display: none; */
        /* flex-direction: column; */
        /* background-color: brown; */
    }
    .skList {
        display: flex;
        margin-top: 2rem;
        /* background-color: blue; */
    }
    .skSub {
        /* flex-direction: row; */
        font-weight: 700;
        text-align: center;
        width: 18rem;
        background-color: white;
        border: 0.1rem solid silver;
        border-radius: 1rem;
        box-shadow: 0.2rem 0.2rem 0.2rem silver;
        margin-left: 1rem;
    }
    .skSub:hover {
        position: relative;
        bottom: 1rem;
    }
    .skField {
        padding-top: 0.5rem;
    }
    .skHr {
        width: 15rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border: 1px solid silver;
    }
    .skImg {
        display: flex;
        height: 17rem;
        /* background-color: aquamarine; */
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

    }
    .fronts, .backs {
        width: 7rem;
        height: 7rem;
        /* background-color: aqua; */
    }
    .gits {
        width: 5.5rem;
        height: 5.5rem;
        margin: 1rem;
        /* background-color: aqua; */

    }
</style>