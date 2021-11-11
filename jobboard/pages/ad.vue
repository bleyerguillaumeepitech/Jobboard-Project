<template>
  <div>
    <header class="col-12 mb-1 justify-content-around p-1">
      <div class="" id="divTitle">
        <h1><a href="/" id="navTitle">JobBoard</a></h1>
      </div>
      <nav v-if="this.token.length > 0">
        <div id="" v-if="this.first_name !== null" >
          <NuxtLink class="text-decoration-none" :to="'profiles/' + `${this.id}`">
            <span id="io">{{ this.name }}</span>
          </NuxtLink>
          <NuxtLink class="text-decoration-none" :to="'dashboard_people/' + `${this.id}`">
            <span id="io">Dashboard</span>
          </NuxtLink>
        </div>

        <div id="text" v-else>
          <NuxtLink class="text-decoration-none" :to="'companies/' + `${this.id}`">
            <span id="io">{{ this.name }}</span>
          </NuxtLink>
          <NuxtLink class="text-decoration-none" :to="'dashboard_companies/' + `${this.id}`">
            <span id="io">Dashboard</span>
          </NuxtLink>
        </div>
        <div v-if="this.roles == 1">
          <NuxtLink class="text-decoration-none" to='/admin'>
            <span id="io">Admin</span>
          </NuxtLink>
        </div>
        <span v-else></span>
        <a href="/" @click="logout" class="ml-0">Deconnexion</a>
      </nav>
      <nav class="align-items-center" v-else>
        <a href="/loginuser">Connexion</a>
        <a href="/register_user">S'enregister</a>
      </nav>
    </header>
    <div
      class="row col-12 d-flex justify-content-center mb-5 align-items-center"
    >
      <div class="m-1 ml-2">
        <input
          type="text"
          class="wInput"
          placeholder="Rechercher des emplois..."
          v-model="search"
        />
      </div>
      <div class="m-1">
        <input type="text" placeholder="Localisation" v-model="localisation" />
      </div>
      <div>
        <button
          type="button"
          class="btn border ml-2"
          @click="
            searchAd = []
            show = true
            filterAd(), (localisation = null)
          "
          id="ty"
        >
          Envoyer
        </button>
      </div>
    </div>

    <div v-if="show == true" class="d-md-flex justify-content-around">
      <div class="col-xl-6 border-right">
        <div
          class="rounded border p-3 mt-3 mb-3"
          v-for="ad in searchAd"
          :key="ad.id"
        >
          <div class="row mb-4">
            <div id="test" class="col-sm-12 col-md-6 col-lg-6">
              {{ ad.title }}
            </div>
            <br />
            <div
              class="col-6 d-md-flex justify-content-end px-0"
              v-bind:style="styleContrat"
            >
              {{ ad.contrat_type }}
            </div>
            <div
              class="col-sm-12 col-md-6 col-lg-6 d-md-flex"
              v-bind:style="styleName"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path
                  d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
                />
              </svg>
              <span class="ml-2" v-bind:style="styleName">{{ ad.name }}</span>
            </div>
            <div class="col-sm-12 col-md-7 col-lg-7 d-md-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-map"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                />
              </svg>
              <span class="ml-2" v-bind:style="styleContrat"
                >{{ ad.city }}
              </span>
            </div>
          </div>
          <br />
          <div class="d-flex justify-content-end">
            <button class="btn text-white more" @click="showDetail(ad)">
              <a id="textdec" href="#pad"> Montrer Plus </a>
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6" id="pad">
        <div id="myDIV" class="rounded mx-3">
          <div class="pb-3">
            <div id="test">
              {{ result.title }}
            </div>
            <div>{{ result.name }}, {{ result.city }}</div>
            <div v-bind:style="styleContrat">
              {{ diffAd }}
            </div>
          </div>
          <div class="pb-5 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-briefcase"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <span class="ml-2">{{ result.contrat_type }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              />
            </svg>
            <span class="ml-1">{{ result.number_employes }} employés</span>
          </div>
          <div v-if="descLength > 200">
            <span v-if="!readMoreActivated && desc !== null">{{
              desc.slice(0, 200)
            }}</span>
            <button
              type="button"
              class="btn btn-outline-secondary p-1 ml-1"
              v-if="readMoreActivated == false"
              @click="readMoreActivated = !readMoreActivated"
            >
              Plus ...
            </button>
            <span v-if="readMoreActivated" v-html="desc"></span>
            <button
              type="button"
              class="btn btn-outline-secondary p-1 ml-1"
              v-if="readMoreActivated == true"
              @click="readMoreActivated = !readMoreActivated"
            >
              Moins ...
            </button>
          </div>
          <div v-if="descLength < 200">
            {{ result.description }}
          </div>
          <div class="mt-5">
            <button @click="showForm" class="btn text-white more">
              <a id="textdec" href="#jsp"> Postuler </a>
            </button>
          </div>
          <div
            class="applied rounded offset-1 col-sm-12 col-md-10 col-lg-10"
            id="jsp"
            style="display: none"
          >
            <div name="notblured" class="col-12">
              <form>
                <h4 class="col-12 p-0 mb-4">{{ result.title }}</h4>
                <label class="col-6 mb-4 p-0" for="nom"
                  >Nom
                  <input
                    v-model="name"
                    class=""
                    type="text"
                    name="nom"
                    id="nom"
                  />
                </label>
                <label class="col-6 mb-4 p-0" for="nom"
                  >Prenom
                  <input
                    v-model="first_name"
                    class=""
                    type="text"
                    name="nom"
                    id="nom"
                  />
                </label>
                <label class="col-6 mb-4 p-0" for="Email"
                  >Email
                  <input
                    v-model="email"
                    class="col-12"
                    type="text"
                    name="Email"
                    id="Email"
                  />
                </label>
                <label class="col-12 mb-4 p-0" for="textarea"
                  >Messages
                  <br />
                  <textarea
                    class=""
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="10"
                    v-model="motivation_people"
                  ></textarea>
                </label>
              </form>
            </div>
            <div class="d-flex justify-content-center mt-5">
              <button @click="appliedFunc" class="btn text-white border more">
                Envoyer
              </button>

              <button @click="showForm" class="btn text-white border more ml-2">
                Quitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="show == false" class="d-md-flex justify-content-around">
      <div class="col-xl-6 border-right">
        <div
          class="rounded border p-3 mt-3 mb-3"
          v-for="ad in advertisements"
          :key="ad.id"
        >
          <div class="row mb-4">
            <div id="test" class="col-sm-12 col-md-6 col-lg-6">
              {{ ad.title }}
            </div>
            <br />
            <div
              class="col-6 d-md-flex justify-content-end px-0"
              v-bind:style="styleContrat"
            >
              {{ ad.contrat_type }}
            </div>
            <div
              class="col-sm-12 col-md-6 col-lg-6 d-md-flex"
              v-bind:style="styleName"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-building"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                />
                <path
                  d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
                />
              </svg>
              <span class="ml-2" v-bind:style="styleName">{{ ad.name }}</span>
            </div>
            <div class="col-sm-12 col-md-7 col-lg-7 d-md-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-map"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                />
              </svg>
              <span class="ml-2" v-bind:style="styleContrat"
                >{{ ad.city }}
              </span>
            </div>
          </div>
          <br />
          <div class="d-flex justify-content-end">
            <button class="btn text-white more" @click="showDetail(ad)">
              <a id="textdec" href="#pad"> Montrer Plus </a>
            </button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6" id="pad">
        <div id="myDIV" class="rounded mx-3">
          <div class="pb-3">
            <div id="test">
              {{ result.title }}
            </div>
            <div>{{ result.name }}, {{ result.city }}</div>
            <div v-bind:style="styleContrat">
              {{ diffAd }}
            </div>
          </div>
          <div class="pb-5 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-briefcase"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <span class="ml-1 mr-3">{{ result.contrat_type }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
              />
            </svg>
            <span class="ml-1">{{ result.number_employes }} employés</span>
          </div>
          <div v-if="descLength > 200">
            <span v-if="!readMoreActivated && desc !== null">{{
              desc.slice(0, 200)
            }}</span>
            <button
              type="button"
              class="btn btn-outline-secondary p-1 ml-1"
              v-if="readMoreActivated == false"
              @click="readMoreActivated = !readMoreActivated"
            >
              Plus ...
            </button>
            <span v-if="readMoreActivated" v-html="desc"></span>
            <button
              type="button"
              class="btn btn-outline-secondary p-1 ml-1"
              v-if="readMoreActivated == true"
              @click="readMoreActivated = !readMoreActivated"
            >
              Moins ...
            </button>
          </div>
          <div v-if="descLength < 200">
            {{ result.description }}
          </div>
          <div class="mt-5">
            <button @click="showForm" class="btn text-white more">
              <a id="textdec" href="#jsp"> Postuler </a>
            </button>
          </div>
          <div
            class="applied rounded offset-1 col-sm-12 col-md-10 col-lg-10"
            id="jsp"
            style="display: none"
          >
            <div name="notblured" class="col-12">
              <form>
                <h4 class="col-12 p-0 mb-4">{{ result.title }}</h4>
                <label class="col-6 mb-4 p-0" for="nom"
                  >Nom
                  <input
                    v-model="name"
                    class=""
                    type="text"
                    name="nom"
                    id="nom"
                  />
                </label>
                <label class="col-6 mb-4 p-0" for="nom"
                  >Prenom
                  <input
                    v-model="first_name"
                    class=""
                    type="text"
                    name="nom"
                    id="nom"
                  />
                </label>
                <label class="col-6 mb-4 p-0" for="Email"
                  >Email
                  <input
                    v-model="email"
                    class="col-12"
                    type="text"
                    name="Email"
                    id="Email"
                  />
                </label>
                <label class="col-12 mb-4 p-0" for="textarea"
                  >Messages
                  <br />
                  <textarea
                    class=""
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="10"
                    v-model="motivation_people"
                  ></textarea>
                </label>
              </form>
            </div>
            <div class="d-flex justify-content-center mt-5">
              <button @click="appliedFunc" class="btn text-white border more">
                Envoyer
              </button>

              <button @click="showForm" class="btn text-white border more ml-2">
                Quitter
              </button>
            </div>
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
      id: '',
      result: [],
      advertisements: [],
      searchAd: [],
      token: [],
      name: '',
      first_name: '',
      email: '',
      motivation_people: '',
      btn: '',
      applied: [],
      roles: '',
      localisation: null,
      styleTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
      styleTitleAd: {
        fontSize: '23px',
        fontWeight: 'bold',
      },
      styleContrat: {
        color: 'rgb(175, 175, 175)',
      },
      styleName: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
      readMoreActivated: false,
      desc: null,
      descLength: null,
      dateAd: null,
      diffAd: null,
      search: null,
      show: false,
      adComp: [],
    }
  },
  async asyncData({ $axios }) {
    const people = await $axios.$get('http://127.0.0.1:3003/api/people')
    return { people }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm
    },
  },

  methods: {
    async filterAd() {
      var count = 0
      var tmp = 0
      var tmp2 = 0
      if (this.search != null) {
        this.search = this.search.replace(/\s/g, '|')
      }
      var rgxp = new RegExp(this.search, 'gi')
      if (
        this.search != null ||
        (this.search == null && this.localisation != null)
      ) {
        while (count < this.advertisements.length) {
          if (
            this.advertisements[count].title.match(rgxp) ||
            this.advertisements[count].description.match(rgxp) ||
            this.localisation != null
          ) {
            if (this.localisation == null) {
              this.searchAd[tmp] = this.advertisements[count]
              tmp++
            }
            if (this.localisation != null) {
              if (
                this.localisation.toLowerCase() ==
                this.advertisements[count].city.toLowerCase()
              ) {
                this.searchAd[tmp2] = this.advertisements[count]
                tmp2++
              }
            }
          }
          count++
        }
        if (this.searchAd[0] != null) {
          this.showDetail(this.searchAd[0])
        } else {
          console.log('ICI', this.searchAd)
          this.$router.push('/nofound_connect')
        }
        this.search = null
      } else {
        if (this.advertisements[0] != null) {
          this.showDetail(this.advertisements[0])
        } else {
          this.$router.push('/nofound_nologin')
        }
        this.show = false
      }
    },
    async ad() {
      try {
        let tokenLoc = (tokenLoc = localStorage.getItem('token'))
        const response = await this.$axios.get('http://127.0.0.1:3003/api/ad', {
          headers: {
            Authorization: 'Bearer ' + tokenLoc,
          },
        })
        this.token = localStorage.getItem('token')
        this.name = localStorage.getItem('name')
        this.email = localStorage.getItem('email')
        this.first_name = localStorage.getItem('first_name')
        this.id = localStorage.getItem('id')
      } catch (err) {
        console.log(err)
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
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      localStorage.removeItem('first_name')
      localStorage.removeItem('roles')

      this.$router.push('/')
    },
    async showAd() {
      try {
        const response = await this.$axios.get(
          'http://127.0.0.1:3003/api/advertisements'
        )
        this.advertisements = response.data
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async appliedFunc() {
      try {
        const response = await this.$axios.post(
          'http://127.0.0.1:3003/api/applied',
          {
            advertisement_id: this.result.id,
            people_id: localStorage.getItem('id'),
            motivation_people: this.motivation_people,
          }
        )
        this.applied = response.data

        alert('Candidature envoyée!')
        this.$router.app.refresh()
        console.log(response.data)
      } catch (error) {
        throw err
      }
    },
    showDetail(table) {
      var x = document.getElementById('myDIV')
      var description = null
      var date = null
      var pattern = /(\d{4})\.(\d{2})\.(\d{2})/
      var dt = null

      if (x.style.display === 'none') {
        x.style.display = 'block'
      }
      if (table != null) {
        this.result = table
        this.desc = this.result.description
        description = this.desc

        if (description != null) {
          this.descLength = description.length
        }
        if (this.result.date != null) {
          this.result.date = this.result.date.slice(0, 10)
          date = this.result.date
          dt = new Date(date.replace(pattern, '$3-$2-$1'))

          this.dateAd = this.modifDate(dt)
        }

        this.id = localStorage.getItem('id')
      }

      console.log(this.id)
    },
    modifDate(date) {
      const regex = /-([^-]+)-/g
      const dt = new Date(date)
      const curDate = new Date()
      const today = curDate.getDate()
      const currentMonth = curDate.getMonth() + 1
      const currentYear = curDate.getFullYear()
      var diff = null

      const monthNames = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ]
      const day = dt.getDate()
      const monthIndex = dt.getMonth()
      const year = dt.getFullYear()

      if (currentYear == year) {
        if (currentMonth != monthIndex + 1) {
          diff = currentMonth - (monthIndex + 1)
          if (diff >= 1) {
            this.diffAd = 'Il y a ' + diff + ' mois'
          }
        } else {
          if (today != day) {
            diff = today - (day + 1)
            if (diff > 1) {
              this.diffAd = 'Il y a ' + diff + ' jour'
            }
            if (diff == 1) {
              this.diffAd = 'Hier'
            }
          } else {
            this.diffAd = "Aujourd'hui"
          }
        }
      } else {
        diff = currentYear - year
        if (diff >= 1) {
          if (diff == 1) {
            this.diffAd = 'Il y a ' + diff + ' année'
          }
          this.diffAd = 'Il y a ' + diff + ' années'
        }
      }

      var str = day + ' ' + monthNames[monthIndex] + ' ' + year

      console.log(str)
      return str
    },
    showBtn() {
      var x = document.getElementById('myDIV')
      if (x.style.display === 'none') {
        x.style.display = 'block'
      } else {
        x.style.display = 'none'
      }
    },
    showForm() {
      var x = document.getElementById('jsp')

      if (x.style.display === 'block') {
        x.style.display = 'none'
      } else {
        x.style.display = 'block'
      }
    },
  },
  mounted() {
    this.showAd()
    this.getToken()
    this.showBtn()
    this.roles = localStorage.getItem('roles')
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
  align-items: center;

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
  border: solid 1px #afafaf;
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
  border-color: #5b2333;
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

#io {
  margin: 0 0px 0 10px;
  text-decoration: none;
  color: #afafaf;
  padding: 10px;
  border: solid 1px white;
  border-radius: 10px;
}

#io:hover {
  padding: 10px;
  color: #5b2333;
  transition: 1s;
  text-decoration: none;
  border: solid 1px #5b2333;
  border-radius: 10px;
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