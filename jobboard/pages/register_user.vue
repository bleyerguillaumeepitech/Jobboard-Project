<template>
  <div>
    <header class="justify-content-around p-1">
      <div class="col-xl-4 offset-md-1" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
    </header>
    <div class="d-flex justify-content-center mt-5">
      <div
        class="col-md-7 col-lg-7 col-xl-6"
        style="height: 105vh"
        id="identification"
      >
        <form class="col-10 offset-1 mt-5">
          <h2 class="" style="color: white">S’inscrire</h2>
          <p class="" style="color: white">
            Tenez-vous au courant des évolutions de votre monde professionnel
          </p>
          <div class="mt-5">
            <label class="text-white" for="nom">Nom</label>
            <input
              type="text"
              class="form-control"
              id="nom"
              placeholder="Nom"
              v-model="name"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="prenom">Prénom</label>
            <input
              type="text"
              class="form-control"
              id="prenom"
              placeholder="Prénom"
              v-model="first_name"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="mt-5">
            <label class="text-white" for="mdp"
              >Mot de passe (6 caractères minimum)</label
            >
            <input
              type="password"
              class="form-control"
              id="mdp"
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
              Déjà membre de JobBoard ?<a href="/loginuser"> Se connecter</a>
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
      first_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
   async sign_up(){
     try {
       const response = await this.$axios.post("http://127.0.0.1:3003/api/sign-up", {
         name: this.name, first_name: this.first_name, email: this.email, password: this.password
       })
       this.userArray = response.data
       console.log(response.data)
       console.log(this.userArray)
       this.$router.push("/loginuser")
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