<template>
    <div class="contentWrapper">
        <article class="strength">
            <div class="strFile">
                <div class="frame"></div>
                <div class="myFolder">
                    <div class="strTitle">Strength</div>
                    <div class="strSubTitle">(장점 모두 보기)</div>
                </div>
                <div class="myFolderIndex" />
                <div class="allStr">
                    <div class="all">
                        <div class="allList">
                            <div class="allNum">01</div>
                            <div class="allKey">열정</div>
                        </div>
                        <div class="allExp">
                            항상 맡은 업무에 열정을<br />
                            다하는 자세로 임하며<br />
                            일을 주로 주도하여<br />
                            팀원들을 이끌어 나갑니다.
                        </div>
                    </div>
                    <div class="all">
                        <div class="allList">
                            <div class="allNum">02</div>
                            <div class="allKey">팀워크</div>
                        </div>
                        <div class="allExp">
                            팀원과의 원활한 의사소통을 유지하여<br />
                            팀 내의 불화가 발생하지 않도록 하며,<br />
                            서로의 의견을 존중하고 조율하며<br />
                            협업해 나갑니다.
                        </div>
                    </div>
                    <div class="all">
                        <div class="allList">
                            <dlv class="allNum">03</dlv>
                            <div class="allKey">유연성</div>
                        </div>
                        <div class="allExp">
                            생각한 방향성이 있더라도<br />
                            팀원의 의견을 수용함으로써<br />
                            효율적인 일처리를 위하여<br />
                            업무 처리의 계획을 바꿉니다.
                        </div>
                    </div>
                </div>
                <div class="folder" id="firstFolder">
                    <div class="backIndex" id="firstBack">01</div>
                    <div class="folderIndex" id="firstIndex">01</div>
                    <div class="str">
                        <div class="keyword">열정</div>
                        <div class="keyExp">
                            항상 맡은 업무에 열정을 다하는 자세로<br />
                            임하며 일을 주로 주도하여<br />
                            팀원들을 이끌어 나갑니다.
                        </div>
                    </div>
                </div>
                <div class="folder" id="secondFolder">
                    <div class="backIndex" id="secondBack">02</div>
                    <div class="folderIndex" id="secondIndex">02</div>
                    <div class="str">
                        <div class="keyword">팀워크</div>
                        <div class="keyExp">
                            팀원과의 원활한 의사소통을 유지하여 <br />
                            팀 내의 불화가 발생하지 않도록 하며, <br />
                            서로의 의견을 존중하고 조율하며 협업해 나갑니다.
                        </div>
                    </div>
                </div>
                <div class="folder" id="thirdFolder">
                    <div class="backIndex" id="thirdBack">03</div>
                    <div class="folderIndex" id="thirdIndex">03</div>
                    <div class="str">
                        <div class="keyword">유연성</div>
                        <div class="keyExp">
                            생각한 방향성이 있더라도<br />
                            팀원의 의견을 수용함으로써<br />
                            효율적인 일처리를 위하여<br />
                            업무 처리의 계획을 바꿉니다.
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<style scoped>
    .strength {
        font-family: 'NanumBarunGothic';
        width: 77.5rem;
    }
    .strFile {
        display: flex;
    }
    .myFolder {
        display: flex;
        flex-direction: column;
        z-index: 100;
        font-family: 'JalnanGothic';
        font-size: 3.5rem;
        width: 33.5rem;
        height: 40rem;
        text-align: center;
        justify-content: center;
        border: 0.15rem solid black;
        border-radius: 1rem;
        background-color: lightgoldenrodyellow;
    }
    .myFolder:hover ~ .allStr {
        margin-left: 42rem;
    }
    .strSubTitle {
        font-family: 'NanumBarunGothic';
        font-size: 2rem;
        margin-top: 1rem;
        margin-bottom: 2.5rem;
    }
    .myFolderIndex {
        z-index: 110;
        width: 4.5rem;
        height: 11rem;
        margin-top: 2rem;
        margin-left: -0.15rem;
        border: 0.15rem solid black;
        border-left: 0.15rem solid lightgoldenrodyellow;
        border-radius: 0 1rem 1rem 0;
        background-color: lightgoldenrodyellow;
    }
    .allStr {
        z-index: 80;
        width: 32rem;
        height: 38.5rem;
        margin-top: 0.75rem;
        margin-left: 0.75rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        border: 0.15rem solid black;
        border-radius: 1rem;
        background-color: white;
        transition: all 1s;
    }
    .all {
        display: flex;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        height: 8rem;
    }
    .allList {
        width: 10rem;
        margin-right: 0.5rem;
        font-family: 'JalnanGothic';
        font-size: 2.5rem;
        font-weight: bolder;
        text-align: center;
        flex-direction: column;
    }
    .allNum {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;
    }
    .allExp {
        font-size: 1.4rem;
        width: 21.5rem;
    }
    .folder {
        width: 32rem;
        height: 38.5rem;
        margin-top: 0.75rem;
        margin-left: 0.75rem;
        border: 0.15rem solid black;
        border-radius: 1rem;
        position: absolute;
        background-color: white;
        transition: all 1s;
    }
    .folder:hover {
        padding-left: 40rem;
    }
    .folder:hover > .str {
        margin-left: -2rem;
    }
    #firstFolder {
        z-index: 60;
    }
    #secondFolder {
        z-index: 40;
    }
    #thirdFolder {
        z-index: 20;
    }
    .backIndex {
        display: flex;
        position: absolute;
        top: 8.25rem;
        height: 11rem;
        width: 2.65rem;
        font-family: 'JalnanGothic';
        font-size: 1.5rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        padding-left: 0.7rem;
        margin-left: 31.99rem;
        border: 0.15rem solid black;
        border-left: 0.15rem solid white;
        border-radius: 0 1rem 1rem 0;
        justify-content: end;
        align-items: end;
        background-color: white;
    }
    #firstBack {
        z-index: 65;
    }
    #secondBack {
        z-index: 45;
        margin-top: 8.15rem;
    }
    #thirdBack {
        z-index: 25;
        margin-top: 16.3rem;
    }
    .folderIndex {
        display: flex;
        position: absolute;
        top: 8.4rem;
        height: 11rem;
        width: 35.5rem;
        font-family: 'JalnanGothic';
        font-size: 1.5rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        border-radius: 1rem;
        justify-content: end;
        align-items: end;
        vertical-align: text-bottom;
        background-color: transparent;
    }
    #firstIndex {
        z-index: 70;
    }
    #secondIndex {
        z-index: 50;
        margin-top: 8.15rem;
    }
    #thirdIndex {
        z-index: 30;
        margin-top: 16.3rem;
    }
    .str {
        display: flex;
        flex-direction: column;
        width: 32rem;
        height: 38.5rem;
        text-align: center;
        justify-content: center;
        transition: all 0.5s;

    }
    .keyword {
        font-family: 'JalnanGothic';
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .keyExp {
        font-size: 2rem;
        padding-bottom: 3rem;
    }
</style>