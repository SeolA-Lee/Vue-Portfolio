<template>
    <div class="contentWrapper">
        <article class="careerArticle">
            <div class="careerTitle">CAREERS</div>
            <hr class="careerHr" />
            <div class="careerMain">
                <div class="crItem">
                    <div class="crTitle">👩🏻‍💻 INTERNSHIP</div>
                    <div class="crSub">
                        <div class="internDate">2024.12~2025.02</div>
                        <div class="internExp">(주)OOO 개발자(Web Frontend)</div>
                    </div>
                    <div class="crSub">
                        <div class="internDate">2026.01~2026.05</div>
                        <div class="internExp">(주)XXX (웹개발 및 운영)</div>
                    </div>
                </div>
                <div class="crItem">
                    <div class="crTitle">🪪 LICENSE</div>
                    <div class="crSub">
                        <div class="lcsDate">2022.08</div>
                        <div class="lcsExp">자동차운전면허증</div>
                        <div class="lcsSource">경찰청</div>
                    </div>
                    <div class="crSub">
                        <div class="lcsDate">2023.12</div>
                        <div class="lcsExp">네트워크관리사 2급</div>
                        <div class="lcsSource">한국정보통신자격협회</div>
                    </div>
                    <div class="crSub">
                        <div class="lcsDate">2024.01</div>
                        <div class="lcsExp">컴퓨터활용능력 1급</div>
                        <div class="lcsSource">대한상공회의소</div>
                    </div>
                    <div class="crSub">
                        <div class="lcsDate">2024.09</div>
                        <div class="lcsExp">리눅스마스터 2급</div>
                        <div class="lcsSource">한국정보통신자격협회</div>
                    </div>
                    <div class="crSub">
                        <div class="lcsDate">2025.03</div>
                        <div class="lcsExp">정보처리기사</div>
                        <div class="lcsSource">한국산업인력공단</div>
                    </div>
                </div>
                <div class="crItem">
                    <div class="crTitle">🗣️ SEPCIFICS</div>
                    <div class="crSub">
                        <div class="etcExp">TOEIC 850점</div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<style scoped>
    .careerTitle {
        font-family: 'JalnanGothic';
        font-weight: 400;
        font-size: 4rem;
        text-align: center;
        position: sticky;
        top: 7rem;

    }
    .careerHr {
        width: 10rem;
        border: 1px solid silver;
        position: sticky;
        top: 12rem;

    }
    .crItem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        border-radius: 1rem;
        border: 2px solid silver;
        box-shadow: 0.5rem 0.5rem 0.5rem silver;
        margin-top: 3rem;
        padding: 2rem;
        height: 20rem;
        position: sticky;
        top: 14rem;
        /* bottom: 0.5rem; */
    }
    .crItem:nth-child(3) {
        margin-bottom: 16.8rem;
    }
    .crTitle {
        font-family: 'JalnanGothic';
        font-weight: 400;
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    .crSub {
        display: flex;
        font-family: 'NanumBarunGothic';
        font-size: 1.7rem;
        margin: 0.5rem;
    }
    .internDate {
        /* background-color: blue; */
        width: 19rem;
    }
    .internExp {
        /* background-color: blueviolet; */
        width: 27rem;
    }
    .lcsDate {
        /* background-color: blue; */
        width: 10rem;
    }
    .lcsExp, .lcsSource {
        /* background-color: blueviolet; */
        width: 18rem;
    }
    .etcExp {
        /* background-color: violet; */
        width: 46rem;
    }
</style>