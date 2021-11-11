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
    <div>
      <div class="text-center">
        <h2>Annonces postées</h2>
      </div>
    </div>

  <div class="d-flex justify-content-around mt-5">
      <div class="col-xl-6">
        <div>
          <div class="mb-4 mt-3 d-flex justify-content-center">
              <button
                type="button"
                class="col-sm-12 col-md-6 col-lg-6 btn btn-success float-right"
                @click="$router.push('/job')"
              >
                Create
              </button>
          </div>
        </div>
      </div>
  </div>

  <div class="col-10 offset-1">
    <div class="mt-5">
      <div
        v-for="app in applied"
        :key="app.motivation_people"
        class="mb-4 mt-4 border-bottom border-dark"
      >
        <div>
          <label class="col-6 p-0"
            >Titre: <b-form-input v-model="app.title" type="text"></b-form-input
          ></label>
        </div>
        <div>
          <label class="col-12 p-0"
            >Description:
            <b-form-input
              style="height: 50px"
              v-model="app.description"
              type="text"
            ></b-form-input
          ></label>
        </div>
        <div>
          <label class="col-6 p-0"
            >Date:
            <b-form-input
              v-model="app.date"
              type="text"
              maxlength="10"
            ></b-form-input
          ></label>
        </div>
        <div class="mb-2">
          <label class="col-6 p-0"
            >Type de contrat :<b-form-input
              v-model="app.contrat_type"
              type="text"
            ></b-form-input
          ></label>
        </div>
        <div class="mb-4 d-flex justify-content-end">
          <button
            type="button"
            class="mr-3 btn btn-danger"
            onClick="window.location.reload();"
            @click="deleteAd(urlAd + app.id)"
          >
            Delete
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick="window.location.reload();"
            @click="updateAd(urlAd + app.id, app)"
          >
            Update
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applied: ['a'],
      findId: '',
      token: [],
      name: '',
      first_name: '',
      email: '',
      creavisiblead: false,
      urlAd: 'http://127.0.0.1:3003/api/advertisements/'
    }
  },
  methods: {
    async findApplied() {
      const id = localStorage.getItem('id')

      try {
        const response = await this.$axios.get(
          `http://127.0.0.1:3003/api/advertisement/${id}`
        )

        this.applied = response.data
        for (var i = 0; i != this.applied.length; i++) {
          if (this.applied[i].date != null) {
            this.applied[i].date = this.applied[i].date.slice(0, 10)
          }
        }

        this.findId = id
        console.log(this.applied)
      } catch (error) {
        throw error
      }
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
    async updateAd(url, body) {
      try {
        console.log(body)
        const response = await this.$axios.put(url, body)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteAd(url) {
      try {
        const response = await this.$axios.delete(url)
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
    this.findApplied()
  },
}
</script>

<style>
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
}

@media all and (min-width: 500px) {
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

/* div {
  filter: blur(0px);
  -webkit-filter: blur(0px);
   
}

div:not([name="notblured"]){
    filter: blur(2px);
  -webkit-filter: blur(2px);
} */

.applied {
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  display: block;
  border: 1px solid black;
  margin-top: 150px;

  background-color: rgb(91, 35, 51);
  color: white;
  padding: 50px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
}

#ty {
  color: #afafaf;
}

#textdec {
  text-decoration: none;
  color: white;
}

#ty:hover {
  color: #5b2333;
  transition: 1s;
  border: solid 1px #5b2333;
  border-radius: 10px;
}

#a {
  text-decoration: none;
}

.wInput {
  width: 280px;
}

.more {
  background-color: #5b2333;
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