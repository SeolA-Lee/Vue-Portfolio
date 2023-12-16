<template>
  <div>
    <div class="myPortfolio">
      <header class="myHeader">
        <!-- Header Title -->
        <div class="title">
          <router-link to="/" class="mainTitle">LEE's Portfolio</router-link>
        </div>
        <!-- Header Navs -->
        <div class="mainNav">
          <li class="mainMenu">
            <a href="#" class="mainMenuTitles">About Me</a>
            <ul class="subMenu">
              <li class="subMenuLi"><router-link to="/profile" class="subMenuTitles">Profile</router-link></li>
              <hr class="mainHr"/>
              <li class="subMenuLi"><router-link to="/strength" class="subMenuTitles">Strength</router-link></li>
            </ul>
          </li>
          <li class="mainMenu">
            <router-link to="/career" class="mainMenuTitles">Careers</router-link>
          </li>
          <li class="mainMenu">
            <router-link to="/project" class="mainMenuTitles">Projects</router-link>
          </li>
          <li class="mainMenu">
            <a href="#" class="mainMenuTitles">Activities</a>
            <ul class="subMenu">
              <li class="subMenuLi"><router-link to="/visiting_student" class="subMenuTitles">Visiting Student</router-link></li>
              <hr class="mainHr"/>
              <li class="subMenuLi"><router-link to="/club" class="subMenuTitles">club</router-link></li>
              <hr class="mainHr"/>
              <li class="subMenuLi"><router-link to="/bootcamp" class="subMenuTitles">Boot Camp</router-link></li>
            </ul>
          </li>
        </div>
      </header>
      <div class="mainView">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style src="./App.css" />