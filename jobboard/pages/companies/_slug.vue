<template>
  <div>
    <header class="col-12 mb-1 justify-content-around p-1">
      <div class="col-xl-12 row">
        <div class="col-xl-9" id="divTitle">
          <h1><a href="/" id="navTitle">JobBoard</a></h1>
        </div>
        <div class="col-xl-3">
          <nav>
            <NuxtLink :to="'../dashboard_companies/' + `${this.compagnie.id}`">
              Dashboard
            </NuxtLink>
            <a href="/" @click="logout">Deconnexion</a>
          </nav>
        </div>
      </div>
    </header>

    <div class="d-flex justify-content-center mt-5 mb-5">
      <div
        class="row col-md-7 col-lg-7 col-xl-6"
        style="width: x%"
        id="identification"
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
              <strong><em>{{ compagnie.name }}</em></strong>
            </h2>
          </div>
          <div class="mt-2 offset-1">
            <h6 class="text-white" for="activite">
              <strong><em>{{ compagnie.activities }}</em></strong>
            </h6>
          </div>
          <div class="mt-2 offset-1">
            <h6 class="text-white" for="siret">
              <strong><em>{{ compagnie.siret }}</em></strong>
            </h6>
          </div>
          <div class="mt-2 offset-1">
            <h6 class="text-white" for="address">
              <strong><em>{{ compagnie.address }}</em> <em>{{ compagnie.postal_code }}</em> <em>{{ compagnie.city }}</em></strong>
            </h6>
          </div>
          <div class="mt-2 offset-1">
            <h6 class="text-white" for="contact">
              <strong><em>{{ compagnie.contact_name }}</em></strong>
            </h6>
          </div>
          <div class="mt-2 offset-1">
            <h6 class="text-white" for="mail">
              <strong><em>{{ compagnie.phone }}</em></strong>
            </h6>
          </div>
          <div class="mt-2 offset-1">
            <h6 class="text-white" for="tel">
              <strong><em>{{ compagnie.email }}</em></strong>
            </h6>
          </div>
          <div class="mt-2 offset-1">
            <h6 class="text-white" for="website">
              <strong><em>{{ compagnie.website }}</em></strong>
            </h6>
          </div>
        </div>
        <div class="col-xl-6 mx-auto text-center">
          <img class="rounded-circle mt-4 mb-1" src="../../img/epitech.png" alt="paysage1" width="70%" height="auto"/>
          <div class="mt-2 mb-1 text-align-items ">
          <button
            class="btn text-black bg-white m-2 text-center"
            @click="showProfilDetails"
          >
            Modifier votre profil
          </button>
        </div>
        </div>
        
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5 mb-5" id="">
      <div
        class="col-md-7 col-lg-7 col-xl-6"
        id="modifcomp"
        style="display: none"
      >
        <div id="titleAd" class="mt-4 mx-3 text-center">
          <h2 class="" style="color: white">Modifier le profil</h2>
        </div>
        <form class="col-10 offset-1 mt-5">
          <div class="mt-3 row offset-1">
            <h6 class="col-4 p-0" style="color: white">Entreprise *</h6>
            <h6 class="col-4 offset-2 p-0" style="color: white">Activité *</h6>
          </div>
          <div class="offset-1 mb-5">
            <input type="text" class="col-5 rounded" v-model="compagnie.name" />
            <input
              type="text"
              class="col-5 rounded offset-1"
              v-model="compagnie.activities"
            />
          </div>
          <div class="mt-4 row">
            <h6 class="col-12" style="color: white">Adresse *</h6>
          </div>
          <div class="">
            <input
              type="text"
              class="col-12 rounded"
              v-model="compagnie.address"
            />
          </div>
          <div class="mt-4 row">
            <h6 class="col-12" style="color: white">Email *</h6>
          </div>
          <div class="">
            <input
              type="text"
              class="col-12 rounded"
              v-model="compagnie.email"
            />
          </div>
          <div class="mt-5 row offset-1">
            <h6 class="col-4 p-0" style="color: white">Ville *</h6>
            <h6 class="col-3 p-0" style="color: white">Code Postal *</h6>
            <h6 class="col-3 offset-1 p-0" style="color: white">Téléphone *</h6>
          </div>
          <div class="offset-1">
            <input type="text" class="col-3 rounded" v-model="compagnie.city" />
            <input
              type="text"
              class="col-3 offset-1 rounded"
              v-model="compagnie.postal_code"
            />
            <input
              type="text"
              class="col-3 offset-1 rounded"
              v-model="compagnie.phone"
            />
          </div>
          <div class="mt-5 row offset-1">
            <h6 class="col-3 p-0" style="color: white">Siret *</h6>
            <h6 class="col-3 p-0" style="color: white">Nombre d'employé: *</h6>
            <h6 class="col-3 p-0" style="color: white">Website: *</h6>
            <h6 class="col-3 p-0" style="color: white">Nom du contact: *</h6>
          </div>
          <div class="offset-1 row">
            <input
              type="text"
              class="col-3 rounded"
              v-model="compagnie.siret"
            />
            <input
              type="text"
              class="col-3 rounded"
              v-model="compagnie.number_employes"
            />
            <input
              type="text"
              class="col-3 rounded"
              v-model="compagnie.website"
            />
            <input
              type="text"
              class="col-3 rounded"
              v-model="compagnie.contact_name"
            />
          </div>
          <div class="d-flex justify-content-center mt-3">
            <div class="redirection justify-content-around">
              <div class="col-12 text-center p-0">
                <h6 class="" id="button">
                  <button class="btn bg-white" @click="sendData(compagnie)">
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
        id:'',
        update: []
    }
  },
  async asyncData({ params, $axios }) {
    const compagnie = await $axios.$get(
      `http://127.0.0.1:3003/api/compagnies/${params.slug}`
    )
    console.log(compagnie)
    return { compagnie }
  },
  methods: {
      async sendData(body) {
      try {
        const response = await this.$axios.put(
          `http://127.0.0.1:3003/api/compagnies/${this.compagnie.id}`,
          body
        )
       
        alert('Modification effectuée')
        this.update = response
        console.log(this.update)
      } catch (error) {
        alert('Echèc de la modification')
        throw error
      }
    },
    showProfilDetails() {
      var x = document.getElementById('modifcomp')
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
        this.id = localStorage.getItem('id')
        console.log(response)
      } catch (err) {
        if (err.response.status === 401) {
          this.$router.push('/loginuser')
        }
      }
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      this.$router.push('/')
    },
  },
}
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

#identification {
  background-color: #5b2333;
}

#modifcomp {
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