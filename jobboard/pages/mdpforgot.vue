<template>
  <div>
    <header class="p-1 ">
      <div class="col-sm-12 offset-sm-6 col-md-6 offset-md-1" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
    </header>   

    <div class="d-flex justify-content-center mt-5">
      <div class=" col-md-7 col-lg-7 col-xl-6" id="identification">
          <form class="col-10 offset-1 mt-5">
                <h2 class="" style="color: white">Mot de passe oublié ?</h2>
                <p class="" style="color: white">Réinitialisez le mot de passe en deux étapes rapides</p>
                <div class="mt-5">
                    <input type="text" class="form-control" placeholder="E-mail ou téléphone" aria-describedby="basic-addon1">
                </div>
                <div class="d-flex justify-content-center mt-2">
                  <div class="redirection justify-content-around">
                    <div class="col-12">
                      <h4 class="text-center" id="button"><a href="">Réinitialiser le mot de passe</a> </h4>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <h6 class="mb-5" style="color: white"><a href="/loginuser" id="mdp">Retour</a></h6>
                </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
body {
  overflow-x: hidden;
}

header {
    border-bottom: solid;
    border-bottom-color: #5b2333;
}

@media all and (min-width: 2000px) {
  #identification {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.3333%;
    max-width: 33.333333%;
  }
}

@media all and (max-width: 500px) {
  .redirection {
    display: block !important;
  }
  header {
    text-align: center;
  }
}

@media all and (min-width: 500px) {
  .redirection {
    display: flex !important;
  }
}

.redirection > div {
  margin: 10px;
}

.redirection > div > h4 {
  margin: 10px 10px 10px 10px;
  text-decoration: none;
  color: #5b2333;
  padding: 10px;
  border: solid 1px #5b2333;
  border-radius: 10px;
}

.redirection > div > h4 > a {
  text-decoration: none !important;
  color: #5b2333  !important;
}

.redirection > div > h4 > a:hover {
  text-decoration: none !important;
  color: black  !important;
  transition: 1s;
}

.redirection > div > h4:hover {
  padding: 10px;
  color: black;
  transition: 1s;
  text-decoration: none;
  border: solid 2px black;
  -webkit-box-shadow: 2px 5px 16px 0px black, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 2px 5px 16px 0px black, 5px 5px 15px 5px rgba(0,0,0,0);
  border-radius: 10px;
}

#identification {
    background-color: #5b2333;
}

#navTitle {
  text-decoration: none !important;
  color: #5b2333;
}

#button {
  background-color: #ffffff;
}

#new {
  color: #afafaf;
}

#mdp {
  text-decoration: none !important;
  color: #ffffff  !important;
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
</style>