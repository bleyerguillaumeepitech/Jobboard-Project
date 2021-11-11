<template>
  <div>
    <header class="col-12 mb-1 justify-content-around p-1">
      <div class="" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
      <nav v-if="this.token.length > 0">
        <NuxtLink :to="'../companies/' + `${this.id}`">
          {{ this.name }}
        </NuxtLink>

        <a href="/" @click="logout">Deconnexion</a>
      </nav>
      <nav class="align-items-center" v-else>
        <a href="/loginuser">Login</a>
        <a href="/register_user">Register</a>
      </nav>
    </header>

    <div class="d-flex justify-content-center mt-5">
      <h3 style="color: #5b2333;">Trouvez le talent qui manque a votre entreprise rapidement !</h3>  
    </div>   

    <div class="d-flex justify-content-center mt-5 mb-5">
      <div class=" col-md-7 col-lg-7 col-xl-6" id="identification">
          <form class="col-10 offset-1 mt-5">
                <div class="mt-5">
                    <h6 class="" style="color: white">Titre *</h6>
                    <input type="text" class="form-control" v-model="adCrea.title" aria-describedby="basic-addon1">
                </div>
                <div class="mt-5">
                    <h6 class="" style="color: white">Description *</h6>
                    <input type="text" class="form-control" v-model="adCrea.description" aria-describedby="basic-addon1" style="height: 100px">
                </div>
                <div class="mt-5">
                    <h6 class="" style="color: white">Date *</h6>
                    <input type="date" class="form-control" v-model="adCrea.date" aria-describedby="basic-addon1">
                </div>
                <div class="mt-5">
                    <h6 class="" style="color: white">Type de contrat *</h6>
                    <input type="text" class="form-control" v-model="adCrea.contrat_type" aria-describedby="basic-addon1">
                </div>
                <div class="d-flex justify-content-center mt-5">
                  <div class="redirection justify-content-around">
                    <div class="col-12">
                      <h4 class="text-center" id="button"><a onClick="window.location.reload();" @click="createAd(adCrea)">Créer</a> </h4>
                    </div>
                  </div>
                </div>
          </form>
          <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adCrea: {
        "title": null,
        "description": null,
        "date": null,
        "contrat_type": null,
        "companie_id": null,
      },
      token: [],
      name: '',
      first_name: '',
      email: '',
    }
  },
  methods: {
    async createAd(body) {
      this.adCrea.companie_id = localStorage.getItem('id')
      try {
        const response = await this.$axios.post(
          'http://127.0.0.1:3003/api/advertisements', body
        )
      } catch (err) {
        console.log(err)
      }
    },
    async asyncData({ $axios }) {
      const people = await $axios.$get('http://127.0.0.1:3003/api/people')
      return { people }
    },
    async getToken() {
      try {
        let tokenLoc = (tokenLoc = localStorage.getItem('token'))
        const response = await this.$axios.get(
          'http://127.0.0.1:3003/api/secret-route',
          {
            headers: {
              Authorization: 'Bearer ' + tokenLoc,
            },
          }
        )
        this.token = localStorage.getItem('token')
        this.name = localStorage.getItem('name')
        this.email = localStorage.getItem('email')
        this.first_name = localStorage.getItem('first_name')
        this.id = localStorage.getItem('id')
        this.roles = localStorage.getItem('roles')
      } catch (err) {
        console.log(err)
      }
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      localStorage.removeItem('first_name')
      localStorage.removeItem('roles')

      this.$router.push('/')
    },
  },
  mounted() {
      this.getToken()
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
  #test {
    padding: 0px 0px 0px 0px;
    font-size: 11px;
    font-weight: bold;
  }
  #pad {
    padding: 0px 5px 0px 5px;
  }
  #jsp {
    padding: 50px 0px 50px 0px;
    margin: 50px 0px 0px 0px;
  }
  header {
    text-align: center;
  }
}

@media all and (min-width: 500px) {
  .redirection {
    display: flex !important;
  }
  header {
    display: flex !important;
  }
  nav {
    display: flex !important;
  }
  #test {
    font-size: 23px;
    font-weight: bold;
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
</style>