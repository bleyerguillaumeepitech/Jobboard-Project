<template>
  <div>
    <header>
      <div class="col-xl-12 row">
        <div class="col-xl-11" id="divTitle">
          <h1><a href="/" id="navTitle">JobBoard</a></h1>
        </div>
        <div class="col-xl-1">
          <img
            class="rounded-circle mt-2 mb-2"
            src="../img/epitech.png"
            alt="paysage1"
            width="60"
            height="50"
          />
        </div>
      </div>
    </header>
    <div class="d-flex justify-content-center mt-5 mb-5">
      <div
        class="col-md-7 col-lg-7 col-xl-6"
        style="width: x%"
        id="identification"
      >
        <div class="col-10 offset-1 mt-5">
          <h2 class="text-center" style="color: white">Votre Profil</h2>
          <p class="text-center" style="color: white">Ici vous pouvez consulter votre profil tel qu'il apparaitra sur le site.</p>
        </div>
        <div class="mt-5 offset-1">
            <h3 class="text-white" for="nom"><ins>Nom de l'entreprise : </ins></h3><br>
            <h5 class="" style="color: grey"><strong><em>EPITECH SCHOOL</em></strong></h5>
        </div>
        <div class="mt-5 offset-1"> 
            <h3 class="text-white" for="activite"><ins>Domaine d'activitées de l'entreprise :</ins></h3><br>
            <h5 class="" style="color: grey"><strong><em>Ecole référente de l'expertise informatique, du digital et de l'innovation.</em></strong></h5>
        </div>
        <div class="mt-5 offset-1">
            <h3 class="text-white" for="address"><ins>Adresse de l'entreprise :</ins></h3><br>
            <h5 class="" style="color: grey"><strong><em>21 rue Mirès 13002 Marseille.</em></strong></h5>
        </div>
        <div class="mt-5 offset-1">
            <h3 class="text-white" for="siret"><ins>Numéro de SIRET de l'entreprise :</ins></h3><br>
            <h5 class="" style="color: grey"><strong><em>Numéro: 11010121</em></strong></h5>
        </div>
        <div class="mt-5 offset-1">
          <h3 class="text-white" for="website"><ins>Site Web de l'entreprise :</ins></h3><br>
          <h5 class="" style="color: grey"><strong><em>EPITECH.eu</em></strong></h5>
        </div>
        <div class="mt-5 offset-1">
          <h3 class="text-white" for="tel"><ins>Numéro de téléphone de l'entreprise</ins></h3><br>
          <h5 class="" style="color: grey"><strong><em>01 44 08 01 37</em></strong></h5>
        </div>
        <div class="mt-5 offset-1">
          <h3 class="text-white" for="mail"><ins>Email de contact de l'entreprise</ins></h3><br>
          <h5 class="" style="color: grey"><strong><em>Marseille@EPITECH.eu</em></strong></h5>
        </div>
        <div class="mt-5 offset-1">
          <h3 class="text-white" for="contact"><ins>Nom du contact au sein de l'entreprise</ins></h3><br>
          <h5 class="" style="color: grey"><strong><em>SCADUTO Enzo / Enzo1.scaduto@EPIETCH.eu</em></strong></h5>
        </div>
        <div class="mt-5 offset-1">
          <p class="text-center" id="modification">Vous souhaitez modifier votre profil ?<a href="/modif"> Cliquez ici.</a></p>
        </div>
              
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
header {
  border-bottom: solid #5b2333;
}

.rounded-circle {
  position: relative;
  border-radius: 50%;
}

#navTitle {
  color: #5b2333;
}

img {
  box-shadow: 1px 1px 12px #555;
}

#identification {
  background-color: #5b2333;
}

.button1 {
  background-color: white;
  color: #5b2333;
}

#modification {
  color: grey;
}


</style>