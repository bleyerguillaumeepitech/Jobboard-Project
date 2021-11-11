<template>
  <div>
    <header class="d-flex p-1">
      <div class="col-sm-12 offset-sm-6 col-md-6 offset-md-1 row" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
      <div>
        <img src="../img/avatar.png" alt="Avatar" class="img-fluid col-6 col-md-3 col-lg-2 col-xl-2 float-right mt-2">
      </div>
    </header> 

    <div class="d-flex justify-content-center mt-5 mb-5">
      <div class=" col-md-7 col-lg-7 col-xl-6" id="identification">
          <div id="titleAd" class="mt-4 mx-3 text-center">
            <h2 class="" style="color: white">Détails de l’offre de l’emploi</h2>
          </div>
          <form class="col-10 offset-1 mt-5">
              <div>
                 <h5 class="" style="color: white">Ajoutez un descriptif au poste</h5> 
              </div>
                <div class="mt-4">
                    <h6 class="" style="color: white">Description *</h6>
                    <input type="text" class="form-control" aria-describedby="basic-addon1" style="height: 100px">
                </div>
                <div class="mt-5">
                    <h5 class="" style="color: white">Ajoutez des compétences</h5>
                    <p style="color: #afafaf">Ajoutez des mots-clés dans la liste des compétences pour que les bons candidats remarquent votre offre d’emploi (sélectionnez-en 10 au maximum)</p>
                </div>
                <div class="mt-5">
                    <h5 class="" style="color: white">Comment souhaitez-vous recevoir vos candidatures ?</h5>
                </div>
                <div class="mt-3 row ">
                    <h6 class="col-6" style="color: white">Recevoir les candidatures par</h6>
                    <h6 class="col-6 p-0" style="color: white">{{this.text}}</h6>
                </div>
                <div class="">
                    <select v-model="select" @change="selectFunc" class="col-5 mt-1 rounded">     
                        <option value="E-mail">E-mail</option> 
                        <option value="Site Web">Site Web</option> 
                    </select>
                    <input type="text" :placeholder="this.txtinput" class="col-6 rounded float-right">
                </div>
                <div class="d-flex justify-content-end mt-3">
                    <div class="redirection justify-content-around">
                        <div class="col-12 p-0">
                            <h6 class="text-center" id="button"><a href="">Continuer</a> </h6>
                        </div>
                    </div>
                </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        select: 'E-mail',
        text: 'Adresse E-mail *',
        txtinput: 'samuel.cadau@epitech.eu'
    }
  },
  methods: {
      selectFunc() {
          if(this.select == "E-mail"){
              this.text = "Adresse E-mail *";
              this.txtinput = "samuel.cadau@epitech.eu";
          } else {
              this.txtinput = "samuelcadau.com";
              this.text = "Adresse de site web *";
          }
          
          
      }
  },
}
</script>


<style>

body {
  overflow-x: hidden;
}

img {
  border-radius: 50%;
}

header {
    border-bottom: solid;
    border-bottom-color: #5b2333;
}

#titleAd {
    border-bottom: solid;
    border-block-width: 1px;
    border-bottom-color: white;
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

.redirection > div > h6 {
  margin: 10px 0px 10px 10px;
  text-decoration: none;
  color: #5b2333;
  padding: 5px;
  border: solid 1px #5b2333;
  border-radius: 10px;
}

.redirection > div > h6 > a {
  text-decoration: none !important;
  color: #5b2333  !important;
}

.redirection > div > h6 > a:hover {
  text-decoration: none !important;
  color: black  !important;
  transition: 1s;
}

.redirection > div > h6:hover {
  padding: 5px;
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
    box-sizing: border-box;
    border-radius: 20px;
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