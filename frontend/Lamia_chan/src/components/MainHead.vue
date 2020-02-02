<template>
    <div class="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <router-link class="navbar-brand" to="/">Lamia Chan</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to="/">Манга </router-link><span class="sr-only">(current)</span>
            <a class="nav-item nav-link" href="#">Поиск</a>

            <!--
              <router-link class="nav-item nav-link" to="/about">О нас</router-link>
              <a class="nav-item nav-link" href="#">Сотрудничество</a>
            -->
          </div>
        </div>
      </nav>
    </div>
</template>




<script>
export default {
    
}
</script>