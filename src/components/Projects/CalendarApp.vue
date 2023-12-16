<template>
    <div class="contentWrapper">
        <div class="projectWrapper">
            <article class="projSubArticle">
                <div class="firstImg">
                    <img src="../../assets/ProjectImgs/first.svg" class="calendarImg"/>
                </div>
                <div class="projectDiv">
                    <div class="projSubTitleDiv">Calendar Application</div>
                    <hr class="projSubHr" /><br />
                    <div class="projSubDiv">
                        <div class="projCont">내용</div>
                        <div class="projContList">
                            <ul class="projContUl">
                                <li class="projContLi">사용자 친화적이고 기능적인 캘린더 애플리케이션 앱 개발 프로젝트</li>
                                <li class="projContLi">사용자가 일정을 관리하고 시간을 효율적으로 활용할 수 있도록 도와주는 목적</li>
                                <li class="projContLi">주요 기능 : 일정 추가/수정/삭제, 일정 카테고리 설정, 알림 기능, 공유 일정, 반복 일정 설정 등의 캘린더 기본 기능 + To-Do List 기능</li>
                            </ul>
                        </div>
                    </div>
                    <div class="projSubDiv">
                        <div class="projCont">담당 역할</div>
                        <div class="projContExp">프론트엔드 개발 : 앱의 사용자 인터페이스 및 사용자 경험을 개선하기 위해 React를 사용</div>
                    </div>
                    <div class="projSubDiv">
                        <div class="projCont">성과</div>
                        <div class="projContList">
                            <ul class="projContUl">
                                <li class="projContLi">다양한 플랫폼 제공 : Android와 iOS 플랫폼에서 모두 작동 가능</li>
                                <li class="projContLi">사용자 만족도 향상</li>
                                <li class="projContLi">앱 성능 최적화</li>
                                <li class="projContLi">To-Do List 기능의 추가로 인한 사용자 확보</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <div class="otherProj">
                <router-link to="/project" class="otherLink">
                    <button class="forOtherProj">다른 프로젝트 보러 가기</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .firstImg {
        background-color: white;
        width: 20rem;
        height: 37rem;
        border-radius: 2.7rem;
        position: sticky;
        top: 15dvh;
    }
    .calendarImg {
        width: 100%;
    }
</style>