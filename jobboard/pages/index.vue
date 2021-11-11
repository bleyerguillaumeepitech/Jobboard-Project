<template>
  <div>
    <header class="justify-content-around p-1">
      <div class="" id="divTitle">
        <h1 id="navTitle">JobBoard</h1>
      </div>
      <nav v-if="this.token.length > 0">

          <NuxtLink :to="'profiles/' + `${this.id}`" v-if="this.first_name !== null">
            {{ this.name }}
          </NuxtLink>
        
          <NuxtLink :to="'companies/' + `${this.id}`"  v-else>
            {{ this.name }}
          </NuxtLink>

        <a href="/" @click="logout">Deconnexion</a>
      </nav>
      <nav class="align-items-center" v-else>
        <a href="/loginuser">Connexion</a>
        <a href="/register_user">S'enregister</a>
      </nav>
    </header>
    <div>
      <div class="d-flex justify-content-center">
        <img
          src="../img/imgcrop.png"
          class="img-fluid"
          style="width: 65%; height: 65%"
          alt=""
        />
      </div>
    </div>

    <div class="d-flex justify-content-center mt-5">
      <div class="redirection justify-content-around">
        <div class="col-xl-6 col-md-6 col-sm-12">
          <h4 class="text-center"><a href="./ad">Chercher un emploi</a></h4>
        </div>
        <div class="col-xl-6 col-md-6 col-sm-12">
          <h4 href="" class="text-center">
            <a href="/logincomp">Poster une offre</a>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: [],
      name: '',
      first_name: '',
      email: '',
    }
  },
  methods: {
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

img {
  border-radius: 0%;
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
  .redirection {
    display: flex !important;
  }
}

@media all and (max-width: 500px) {
  .redirection {
    display: block !important;
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

.redirection > div {
  margin: 10px;
}

.redirection > div > h4 {
  margin: 10px 10px 10px 10px;
  text-decoration: none;
  color: #afafaf;
  padding: 10px;
  border: solid 1px #afafaf;
  border-radius: 10px;
}

.redirection > div > h4 > a {
  text-decoration: none !important;
  color: #afafaf !important;
}

.redirection > div > h4 > a:hover {
  text-decoration: none !important;
  color: #5b2333 !important;
  transition: 1s;
}

.redirection > div > h4:hover {
  padding: 10px;
  color: #5b2333;
  transition: 1s;
  text-decoration: none;
  border: solid 1px #5b2333;
  border-radius: 10px;
}

.redirection > div > h4:hover {
  padding: 10px;
  color: #5b2333;
  transition: 1s;
  text-decoration: none;
  border: solid 1px #5b2333;
  border-radius: 10px;
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