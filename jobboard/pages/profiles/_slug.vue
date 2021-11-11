<template>
  <div>
    <header class="justify-content-around p-1">
      <div class="col-sm-12 offset-sm-6 col-md-6 offset-md-1 row" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
      <nav v-if="this.token.length > 0">
        <NuxtLink to="/ad">
          {{ people.name }}
        </NuxtLink>
        <a href="/" @click="logout">Deconnexion</a>
      </nav>
      <nav class="align-items-center" v-else>
        <a href="/loginuser">Login</a>
        <a href="/register_user">Register</a>
      </nav>
      <!-- <div>
        <img
          src="../../img/avatar.png"
          alt="Avatar"
          class="img-fluid col-6 col-md-3 col-lg-2 col-xl-2 float-right mt-2"
        />
      </div> -->
    </header>
    <div class="d-flex justify-content-center mt-5 mb-5">
      
      <div
        class=" row col-md-7 col-lg-7 col-xl-6"
        style="width: x%"
        id="disabledProfile"
      >
        <div class="col-12 text-center mt-5">
          <h2 class="border-bottom" style="color: white">
            Votre Profil
          </h2>
          
          <!-- <p class="text-center" style="color: white">
            Ici vous pouvez consulter votre profil tel qu'il apparaitra sur le
            site.
          </p> -->
        </div>
      <div class="col-xl-6">
        <div class="mt-5 offset-1"> 
          <h2 class="text-white" for="nom">
            <strong><em>{{ people.first_name }}</em> <em>{{ people.name }}</em></strong>
          </h2>
        </div>
        <div v-if="people.birth_date !== null" class="mt-2 offset-1">
          <h7 class="text-white" for="contact">
            <strong><em>{{ people.birth_date.slice(0, 10) }}</em></strong>
          </h7>
          <br />
        </div>
        <div class="mt-2 offset-1">
          <h7 class="text-white" for="mail">
            <strong><em>{{ people.phone }}</em></strong>
          </h7>
          <br />
        </div>
        <div class="mt-2 offset-1">
          <h7 class="text-white" for="address">
            <strong><em>{{ people.email }}</em></strong>
          </h7>
          <br />
        </div>
        <div class="mt-2 offset-1">
          <h7 class="text-white" for="siret">
            <strong><em>{{ people.address }}</em></strong>
          </h7>
          <br />
        </div>
        <div class="mt-2 offset-1">
          <h7 class="text-white" for="website">
            <strong><em>{{ people.postal_code }}</em> <em>{{ people.city }}</em></strong>
          </h7>
          <br />
        </div>
        <div class="mt-2 offset-1 text-align-center">
          <h7 class="text-white" for="contact">
            <strong><em>{{ people.website }}</em></strong>
          </h7>
          <br />
        </div>
        </div>
        <div class="col-xl-6">
          <img
            class="rounded-circle mt-4 mb-1"
            src="../../img/epitech.png"
            alt="paysage1"
            width="70%"
            height="auto"
          />
          <div class="mt-2 offset-1 text-align-center">
        </div>
        <div class="offset-1 text-align-items ">
          <button
            class="btn text-black bg-white m-2 text-center"
            @click="showProfilDetails"
          >
            Modifier votre profil
          </button>
        </div>
      </div>
      <!--<div class="display-block"> -->

        <!-- <div class="mt-5 offset-1">
          <h3 class="text-white" for="contact">
            <ins>Photo de profil:</ins>
          </h3>
          <br />
          <h5 class="" style="color: grey">
            <strong
              ><em>{{ people.picture }}</em></strong
            >
          </h5>
        </div> -->
      <!--  </div> -->
      </div>
    </div>

    <div class="d-flex justify-content-center mt-5 mb-5" id="">
      <div
        class="col-md-7 col-lg-7 col-xl-6"
        id="identification"
        style="display: none; width: 100%"

      >
        <div id="titleAd" class="mt-4 mx-3 text-center">
          <h2 class="" style="color: white">Modifier le profil</h2>
        </div>
        <form class="col-10 offset-1 mt-5">
          <div class="mt-3 row offset-1">
            <h6 class="col-4 p-0" style="color: white">Prénom *</h6>
            <h6 class="col-4 offset-2 p-0" style="color: white">Nom *</h6>
          </div>
          <div class="offset-1 mb-5">
            <input type="text" class="col-5 rounded" v-model="people.name" />
            <input
              type="text"
              class="col-5 rounded offset-1"
              v-model="people.first_name"
            />
          </div>
          <!-- <div class="mt-4">
            <h6 class="" style="color: white">Description *</h6>
            <input
              type="text"
              class="col-12 rounded"
              aria-describedby="basic-addon1"
              style="height: 100px"
            />
          </div> -->
          <div class="mt-4 row">
            <h6 class="col-12" style="color: white">Adresse *</h6>
          </div>
          <div class="">
            <input
              type="text"
              class="col-12 rounded"
              v-model="people.address"
            />
          </div>
          <div class="mt-4 row">
            <h6 class="col-12" style="color: white">Email *</h6>
          </div>
          <div class="">
            <input type="text" class="col-12 rounded" v-model="people.email" />
          </div>
          <div class="mt-5 row offset-1">
            <h6 class="col-4 p-0" style="color: white">Ville *</h6>
            <h6 class="col-3 p-0" style="color: white">Code Postal *</h6>
            <h6 class="col-3 offset-1 p-0" style="color: white">Téléphone *</h6>
          </div>
          <div class="offset-1">
            <input type="text" class="col-3 rounded" v-model="people.city" />
            <input
              type="text"
              class="col-3 offset-1 rounded"
              v-model="people.postal_code"
            />
            <input
              type="text"
              class="col-3 offset-1 rounded"
              v-model="people.phone"
            />
          </div>
          <div class="mt-5 row offset-1">
            <h6 class="col-4 p-0" style="color: white">Date de naissance *</h6>
            <h6 class="col-3 p-0" style="color: white">CV: *</h6>
            <h6 class="col-3 offset-1 p-0" style="color: white">Website: *</h6>
          </div>
          <div class="offset-1">
            <input
              type="text"
              class="col-3 rounded"
              v-model="people.birth_date"
            />
            <input type="file" class="col-3 offset-1 rounded" accept=".pdf" />
            <input
              type="text"
              class="col-3 offset-1 rounded"
              v-model="people.website"
            />
          </div>
          <div class="d-flex justify-content-end mt-3">
            <div class="redirection justify-content-around">
              <div class="col-12 p-0">
                <h6 class="text-center" id="button">
                  <button class="btn" @click="sendData(people)">
                    continuer
                  </button>
                </h6>
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
      txtinput: 'samuel.cadau@epitech.eu',
      token: [],
      name: '',
      first_name: '',
      email: '',
      update: [],
      adPeople: {
        first_name: null,
        name: null,
        email: null,
        password: null,
        address: null,
        postal_code: null,
        city: null,
        phone: null,
        birth_date: null,
        cv: null,
        website: null,
        picture: null,
        registered: null,
        last_login: null,
        gender: null,
      },
    }
  },
  async asyncData({ params, $axios }) {
    const people = await $axios.$get(
      `http://127.0.0.1:3003/api/people/${params.slug}`
    )
    console.log(people)
    return { people }
  },
  methods: {
     
    async sendData(body) {
      try {
        const response = await this.$axios.put(
          `http://127.0.0.1:3003/api/people/${this.people.id}`,
          body
        )
       alert('Modification effectuée')
        this.update = response
        console.log(this.update)
      } catch (error) {
        alert('Echec de la modification')
        throw error
      }
       
    },
      
    showProfilDetails() {

      var x = document.getElementById('identification')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    async getToken() {
      let tokenLoc = (tokenLoc = localStorage.getItem('token'))
      try {
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
        console.log(response)
      } catch (err) {
        if(err.response.status === 401){
          this.$router.push("/loginuser")
        }

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
    selectFunc() {
      if (this.select == 'E-mail') {
        this.text = 'Adresse E-mail *'
        this.txtinput = 'samuel.cadau@epitech.eu'
      } else {
        this.txtinput = 'samuelcadau.com'
        this.text = 'Adresse de site web *'
      }
    },
  },
  mounted() {
    this.getToken()
  },
}
</script>


<style>
#disabledProfile {
  background-color: #5b2333;
}
.row {
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
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
  color: #5b2333 !important;
}

.redirection > div > h6 > a:hover {
  text-decoration: none !important;
  color: black !important;
  transition: 1s;
}

.redirection > div > h6:hover {
  padding: 5px;
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
  box-sizing: border-box;
  border-radius: 20px;
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
</style>