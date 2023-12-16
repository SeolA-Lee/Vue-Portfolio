<template>
    <div class="contentWrapper">
        <div class="projectWrapper">
            <article class="projSubArticle">
                <div class="secondImg">
                    <img src="../../assets/ProjectImgs/second.svg" class="mallImg"/>
                </div>
                <div class="projectDiv">
                    <div class="projSubTitleDiv">S-Mall Website</div>
                    <hr class="projSubHr" /><br />
                    <div class="projSubDiv">
                        <div class="projCont">내용</div>
                        <div class="projContList">
                            <ul class="projContUl">
                                <li class="projContLi">사용자가 상품을 검색하고 주문할 수 있는 온라인 쇼핑몰 시스템을 구축</li>
                                <li class="projContLi">상품 정보, 주문 정보, 사용자 정보 등을 데이터베이스에 저장하고 관리</li>
                                <li class="projContLi">
                                    <div>주요 기능</div>
                                    <div class="func">사용자 : 상품 검색 및 주문 등의 기능</div>
                                    <div class="func">관리자 : 상품 추가 및 주문 처리 등의 기능</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="projSubDiv">
                        <div class="projCont">담당 역할</div>
                        <div class="projContExp">데이터베이스 구축 : MS SQL 데이터베이스 시스템을 사용하여 실제 데이터의 삽입, 갱신, 삭제, 조회를 처리하고 데이터 일관성과 무결성 유지</div>
                    </div>
                    <div class="projSubDiv">
                        <div class="projCont">성과</div>
                        <div class="projContList">
                            <ul class="projContUl">
                                <li class="projContLi">빠른 데이터 처리</li>
                                <li class="projContLi">보안 강화</li>
                                <li class="projContLi">사용자 경험</li>
                            </ul>
                            <div class="conclusion">&rArr; 이 프로젝트를 통해 데이터베이스 설계와 구축에 대한 실전 경험을 쌓을 수 있었으며 안전하고 효율적인 데이터베이스 활용 방법을 익힐 수 있었음</div>
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
    .secondImg {
        background-color: transparent;
        width: 20rem;
        height: 15rem;
        position: sticky;
        top: 15dvh;
    }
    .mallImg {
        width: 100%;
    }
</style>