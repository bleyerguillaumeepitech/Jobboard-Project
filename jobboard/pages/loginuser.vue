<template>
  <div>
    <header class="p-1">
      <div class="col-sm-12 offset-sm-6 col-md-6 offset-md-1" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
    </header>

    <div class="d-flex justify-content-center mt-5">
      <div class="col-md-7 col-lg-7 col-xl-6" id="identification">
        <form class="col-10 offset-1 mt-5">
          <h2 class="" style="color: white">S’identifier</h2>
          <p class="" style="color: white">
            Tenez-vous au courant des évolutions de votre monde professionnel
          </p>
          <b-alert v-model="showDismissibleAlert" variant="danger" >
            {{errorA}}
          </b-alert>
          <div class="mt-5">
            <h6 class="" style="color: white">E-mail *</h6>
            <input
              type="email"
              class="form-control"
              aria-describedby="basic-addon1"
              v-model="email"
            />
          </div>
          <div class="mt-5">
            <h6 class="" style="color: white">Mot de passe *</h6>
            <input
              type="password"
              class="form-control"
              aria-describedby="basic-addon1"
              v-model= "password"
            />
          </div>
          <div class="mt-1">
            <small class="" style="color: white"
              ><a href="/mdpforgot" id="mdp">Mot de passe oublié ?</a></small
            >
          </div>
          <div class="d-flex justify-content-center mt-2">
            <div class="redirection justify-content-around">
              <div class="col-12">
                <button type="button" class="btn button1" @click="login">S'identifier</button>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <p id="new">Nouveau sur JobBoard ?</p>
            <a href="/register_user" class="mx-1" id="mdp">S'inscrire</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
w
<script>
export default {
  data() {
    return {
      userArray: [],
      email: '',
      password: '',
      errorA: '',
      showDismissibleAlert: false
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post(
          'http://127.0.0.1:3003/api/login',
          {
            email: this.email,
            password: this.password,
          }
        )

        this.userArray = response.data
        console.log(this.userArray)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.user.name)
        localStorage.setItem('id', response.data.user.id)
        localStorage.setItem('email', response.data.user.email)
        localStorage.setItem('first_name', response.data.user.first_name)
        localStorage.setItem('roles', response.data.user.roles)


        this.$router.push('/ad')
      } catch (error) {
         if(error.response.status === 401){
          this.errorA = "Email or password is incorrect!"
          this.showDismissibleAlert = true
        }
        console.log(error)
      }
    },
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
  color: #5b2333 !important;
}

.redirection > div > h4 > a:hover {
  text-decoration: none !important;
  color: black !important;
  transition: 1s;
}

.redirection > div > h4:hover {
  padding: 10px;
  color: black;
  transition: 1s;
  text-decoration: none;
  border: solid 2px black;
  -webkit-box-shadow: 2px 5px 16px 0px black, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 2px 5px 16px 0px black, 5px 5px 15px 5px rgba(0, 0, 0, 0);
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
  color: #ffffff !important;
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

.button1 {
  background-color: white;
  color: #5b2333;
}

</style>