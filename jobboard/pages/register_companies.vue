<template>
  <div>
    <header class="justify-content-around p-1">
      <div class="col-xl-4 offset-md-1" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
    </header>
    <div class="d-flex justify-content-center mt-5 mb-5">
      <div
        class="col-md-7 col-lg-7 col-xl-6"
        style="width: x%"
        id="identification"
      >
        <form class="col-10 offset-1 mt-5">
          <h2 class="" style="color: white">S’inscrire</h2>
          <p class="" style="color: white">
            Tenez-vous au courant des évolutions de votre monde professionnel
          </p>
          <div class="mt-5">
            <label class="text-white" for="nom">Nom de l'entreprise *</label>
            <input
              type="text"
              class="form-control"
              id="nom"
              placeholder="Nom de l'entreprise"
              v-model="name"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="nomcontact">Nom du contact *</label>
            <input
              type="text"
              class="form-control"
              id="nomcontact"
              placeholder="Nom du contact"
              v-model="contact_name"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="email">Email de contact *</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email de contact"
              v-model="email"
            />
          </div>
           <div class="mt-5">
            <label class="text-white" for="activite">Activitées de l'entreprise *</label>
            <input
              type="text"
              class="form-control"
              id="activite"
              placeholder="Activitées de l'entreprise"
              v-model="activities"
            />
          </div>
           <div class="mt-5">
            <label class="text-white" for="adresse">Adresse de l'entreprise *</label>
            <input
              type="text"
              class="form-control"
              id="adresse"
              placeholder="Adresse de l'entreprise"
              v-model="address"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="postal_code">Code postal *</label>
            <input
              type="number"
              class="form-control"
              id="postal_code"
              placeholder="Code postal"
              v-model="postal_code"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="city">Ville ou Commune *</label>
            <input
              type="text"
              class="form-control"
              id="city"
              placeholder="Ville ou Commune"
              v-model="city"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="siret">Numéro SIRET de l'entreprise *</label>
            <input
              type="number"
              class="form-control"
              id="siret"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="14"
              placeholder="SIRET" 
              v-model="siret"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="website">Site Web de l'entreprise *</label>
            <input
              type="url"
              class="form-control"
              id="website"
              placeholder="https://monsite.com"
              v-model="website"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="phone">Numéro de téléphone de contact *</label>
            <input
              type="number"
              class="form-control"
              id="phone"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="10"
              placeholder="Numéro de téléphone"
              v-model="phone"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="mdp"
              >Mot de passe (6 caractères minimum) *</label
            >
            <input
              type="password"
              class="form-control"
              id="mdp"
              min="6"
              placeholder="Mot de passe"
              v-model="password"
            />
          </div>
          <div class="d-flex justify-content-center mt-5">
            <div class="redirection justify-content-around">
              <div class="col-12">
                <button type="button" class="btn button1" @click="sign_up">S'inscrire</button>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <p class="text-center" id="inscript">
              Déjà membre de JobBoard ?<a href="/logincomp"> Se connecter</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userArray: [],
      name: '',
      contact_name: '',
      activities: '',
      address: '',
      postal_code: '',
      city: '',
      siret: '',
      website: '',
      phone: '', 
      email: '',
      password: ''
    }
  },
  methods: {
   async sign_up(){
     try {
       const response = await this.$axios.post("http://127.0.0.1:3003/api/sign-up-comp", {
         name: this.name, contact_name: this.contact_name, activities: this.activities, address: this.address, postal_code: this.postal_code, city: this.city, siret: this.siret, website: this.website, phone: this.phone, email: this.email, password: this.password 
       })
       this.userArray = response.data
       console.log(response.data)
       console.log(this.userArray)
       this.$router.push("/logincomp")
     } catch (error) {
       console.log(error)
     }
    }
  } 
}

</script>

<style>
header {
  border-bottom: solid #5b2333;
}

#navTitle {
  color: #5b2333;
}

#identification {
  background-color: #5b2333;
}

.button1 {
  background-color: white;
  color: #5b2333;
}

#inscript {
  color: #afafaf;
}

a {
  color: white;
}
</style>
