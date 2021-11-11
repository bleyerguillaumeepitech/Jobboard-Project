<template>
  <div>
    <div class="col-xl-12 row">
      <div class="col-xl-9" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
      <nav class="align-items-center col-xl-3">
        <a href="/loginuser">Se connecter</a>
        <a href="/register_user">S'inscrire</a>
        
      </nav>
      <div class="w-100 d-flex justify-content-center mb-4">
        <input type="text" placeholder="Rechercher des emplois" />
        <input type="text" placeholder="Localisation" />
      </div>
      <div id="liens" class="mb-0 w-100 text-center">
        <a id="aaa" href="ad">Les plus pertinent</a>
        <a id="bbb" href="loginuser">Dans votre ville</a>
        <a id="ccc" href="loginuser">Vos candidatures</a>
      </div>
      <div id="puboffre" class="mt-5 w-100 text-center pb-4">
        <a href="logincomp">Publier une offre ?</a>
      </div>
      <div>
        <img
          src="../img/aaa.png"
          class="displayed img-responsive"
          style="width: 30%; height: 80%"
          alt=""
        />
        <h1 class="text-center">Aucun emploi correspondant n'a été trouvé.</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#puboffre {
  border-bottom: solid #5b2333;
}

@media all and (max-width: 500px) {
  header {
    text-align: center;
    display: block !important;
  }
  nav {
    display: block !important;
    text-align: center;
  }
}

@media all and (min-width: 500px) {
  header {
    display: flex !important;
  }
  nav {
    display: flex !important;
  }
}

#navTitle {
  color: #5b2333;
}
nav > a {
  margin: 0 10px 0 10px;
  text-decoration: none;
  color: #afafaf;
  padding: 10px;
  border: solid 1px white;
  border-radius: 10px;
}

nav > a:hover {
  padding: 10px;
  color: #5b2333;
  transition: 1s;
  text-decoration: none;
  border: solid 1px #5b2333;
  border-radius: 10px;
}

#liens > a {
  margin: 3px;
  padding: 7px;
  background-color: #5b2333;
  color: white;
  transition: 1s;
  text-decoration: none;
  border: solid 1px #5b2333;
  border-radius: 15px;
}

#puboffre > a {
  margin: 3px;
  padding: 10px;
  background-color: #5b2333;
  color: white;
  transition: 1s;
  text-decoration: none;
  border: solid 1px #5b2333;
  border-radius: 0px;
}

img.displayed {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
