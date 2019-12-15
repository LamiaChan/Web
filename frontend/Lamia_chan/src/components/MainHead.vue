<template>
    <div class="content">


            <header>
        <div class="header-wrapper">
        <img src="http://acmelogos.com/images/logo-8.svg" alt="" class="logo">
        
        <nav>
        <router-link to="/about" key="link_about">+ About</router-link>
        <router-link to="/blog" active-class="grey">+ Блог</router-link>
        <router-link to="/projects">+ Проекты</router-link>
        <router-link to="/contacts">+ Контакты</router-link>
        </nav>
        </div>
        </header>
      <router-view></router-view>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Lamia_chan</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Главная <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Манга</a>
            <a class="nav-item nav-link" href="#">Поиск</a>
            <a class="nav-item nav-link" href="#">О нас</a>
            <a class="nav-item nav-link" href="#">Сотрудничество</a>
          </div>
        </div>
      </nav>
    </div>
</template>




<script>
export default {
    
}
</script>