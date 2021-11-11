<template>
  <div>
    <header class="justify-content-around p-1">
      <div class="" id="divTitle">
        <h1 id="navTitle" v-b-toggle.sidebar-no-header>JobBoard</h1>
      </div>
      <nav v-if="this.token.length > 0">
        <NuxtLink :to="'profiles/' + `${this.id}`">
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
      <b-sidebar
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow
      >
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title" class="mb-5">Crud Admin</h4>
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item
                  active
                  @click="
                    visiblead = !visiblead
                    visiblecomp = false
                    visiblepeople = false
                  "
                  ><span style="color: #5b2333"
                    >Advertisements</span
                  ></b-nav-item
                >
                <b-nav-item
                  @click="
                    visiblecomp = !visiblecomp
                    visiblead = false
                    visiblepeople = false
                  "
                  ><span style="color: #5b2333">Companie</span></b-nav-item
                >
                <b-nav-item
                  @click="
                    visiblepeople = !visiblepeople
                    visiblead = false
                    visiblecomp = false
                  "
                  ><span style="color: #5b2333">People</span></b-nav-item
                >
              </b-nav>
            </nav>
            <b-button
              class="fixed-bottom mb-3"
              variant="dark"
              block
              @click="hide"
              >Close Sidebar</b-button
            >
          </div>
        </template>
      </b-sidebar>
    </div>
    <div class="d-flex justify-content-around mt-5">
      <div class="col-xl-6">
        <div>
          <div class="mb-4 mt-3 d-flex justify-content-center">
            <div
              class="col-6 mr-5"
              v-if="
                visiblead == true &&
                visiblecomp == false &&
                visiblepeople == false
              "
            >
              <button
                type="button"
                class="col-sm-12 col-md-6 col-lg-6 btn btn-success float-right"
                @click="
                  creavisiblead = !creavisiblead
                  creavisiblecomp = false
                  creavisiblepeople = false
                "
              >
                Create
              </button>
            </div>
            <div
              class="col-6 mr-5"
              v-if="
                visiblecomp == true &&
                visiblead == false &&
                visiblepeople == false
              "
            >
              <button
                type="button"
                class="col-sm-12 col-md-6 col-lg-6 btn btn-success float-right"
                @click="
                  creavisiblecomp = !creavisiblecomp
                  creavisiblepeople = false
                  creavisiblead = false
                "
              >
                Create
              </button>
            </div>
            <div
              class="col-6 mr-5"
              v-if="
                visiblepeople == true &&
                visiblecomp == false &&
                visiblead == false
              "
            >
              <button
                type="button"
                class="col-sm-12 col-md-6 col-lg-6 btn btn-success float-right"
                @click="
                  creavisiblepeople = !creavisiblepeople
                  creavisiblead = false
                  creavisiblecomp = false
                "
              >
                Create
              </button>
            </div>
            <div
              class="col-6"
              v-if="
                visiblead == true &&
                visiblecomp == false &&
                visiblepeople == false
              "
            >
              <button
                type="button"
                class="col-sm-12 col-md-6 col-lg-6 btn btn-danger"
                onClick="window.location.reload();"
                @click="deleteAllAd()"
              >
                Delete All
              </button>
            </div>
            <div
              class="col-6"
              v-if="
                visiblecomp == true &&
                visiblead == false &&
                visiblepeople == false
              "
            >
              <button
                type="button"
                class="col-sm-12 col-md-6 col-lg-6 btn btn-danger"
                onClick="window.location.reload();"
                @click="deleteAllComp()"
              >
                Delete All
              </button>
            </div>
            <div
              class="col-6"
              v-if="
                visiblepeople == true &&
                visiblecomp == false &&
                visiblead == false
              "
            >
              <button
                type="button"
                class="col-sm-12 col-md-6 col-lg-6 btn btn-danger"
                onClick="window.location.reload();"
                @click="deleteAllPeople()"
              >
                Delete All
              </button>
            </div>
          </div>

          <div class="mt-5 pt-5 d-flex justify-content-center">
            <div
              class="col-12 p-2 offset-2 mr-5"
              v-if="
                visiblead == true &&
                visiblecomp == false &&
                visiblepeople == false
              "
            >
              <div class="col-12 row">
                <div class="ml-3">
                <b-form-input
                  class="mr-1"
                  placeholder="Recherche ..."
                  type="text"
                  v-model="search"
                />
                </div>
                <div class="">
                <button
                  type="button"
                  class="btn btn-danger m-0"
                  @click="
                    searchAd = []
                    filterAd()
                  "
                >
                  Envoyer
                </button>
                </div>
              </div>

              <div
                id="pop_up"
                v-for="findAd in searchAd"
                :key="findAd.id"
                class="mb-4 mt-4 border-bottom border-dark"
              >
                <div>
                  <label class="col-6 p-0"
                    >Titre:
                    <b-form-input
                      v-model="findAd.title"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-12 p-0"
                    >Description:
                    <b-form-input
                      style="height: 50px"
                      v-model="findAd.description"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-6 p-0"
                    >Date:
                    <b-form-input
                      v-model="findAd.date"
                      type="text"
                      maxlength="10"
                    ></b-form-input
                  ></label>
                </div>
                <div class="mb-2">
                  <label class="col-6 p-0"
                    >Type de contrat :<b-form-input
                      v-model="findAd.contrat_type"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div class="d-flex justify-content-end">
                  <button
                    type="button"
                    class="mr-3 btn btn-danger"
                    onClick="window.location.reload();"
                    @click="deleteAd(urlAd + findAd.id)"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick="window.location.reload();"
                    @click="updateAd(urlAd + findAd.id, findAd)"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col-12 p-2 offset-2 mr-5"
              v-if="
                visiblecomp == true &&
                visiblead == false &&
                visiblepeople == false
              "
            >
              <div class="col-7 d-flex justify-content-start">
                <b-form-input
                  class="col-6 mr-1"
                  placeholder="Recherche ..."
                  type="text"
                  v-model="search"
                />
                <button
                  type="button"
                  class="col-3 btn btn-danger m-0"
                  @click="
                    searchComp = []
                    filterComp()
                  "
                >
                  Envoyer
                </button>
              </div>

              <div
                id="pop_up"
                v-for="findComp in searchComp"
                :key="findComp.id"
                class="mb-4 mt-4 border-bottom border-dark"
              >
                <div>
                  <label class="col-5 p-0"
                    >Nom de l'Entreprise:
                    <b-form-input
                      v-model="findComp.name"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Activité de l'Entreprise:
                    <b-form-input
                      v-model="findComp.activities"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Adresse de l'Entreprise:
                    <b-form-input
                      v-model="findComp.address"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Code Postal de l'Entreprise:
                    <b-form-input
                      v-model="findComp.postal_code"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Ville de l'Entreprise:
                    <b-form-input
                      v-model="findComp.city"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >SIRET de l'Entreprise:
                    <b-form-input
                      v-model="findComp.siret"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Mot de passe de l'Entreprise:
                    <b-form-input
                      v-model="findComp.password"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Nombre d'employé de l'Entreprise:
                    <b-form-input
                      v-model="findComp.number_employes"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Site de l'Entreprise:
                    <b-form-input
                      v-model="findComp.website"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Téléphone de l'Entreprise:
                    <b-form-input
                      v-model="findComp.phone"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div class="mb-2">
                  <label class="col-5 p-0"
                    >Email de l'Entreprise:
                    <b-form-input
                      v-model="findComp.email"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Nom du Contact de l'Entreprise:
                    <b-form-input
                      v-model="findComp.contact_name"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div class="mb-4 mt-3 d-flex justify-content-end">
                  <button
                    type="button"
                    class="mr-3 btn btn-danger"
                    onClick="window.location.reload();"
                    @click="deleteComp(urlComp + findComp.id)"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick="window.location.reload();"
                    @click="updateComp(urlComp + findComp.id, findComp)"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>

            <div
              class="col-12 p-2 offset-2 mr-5"
              v-if="
                visiblepeople == true &&
                visiblead == false &&
                visiblecomp == false
              "
            >
              <div class="col-7 d-flex justify-content-start">
                <b-form-input
                  class="col-6 mr-1"
                  placeholder="Recherche ..."
                  type="text"
                  v-model="search"
                />
                <button
                  type="button"
                  class="col-3 btn btn-danger m-0"
                  @click="
                    searchPeople = []
                    filterPeople()
                  "
                >
                  Envoyer
                </button>
              </div>

              <div
                id="pop_up"
                v-for="findPeople in searchPeople"
                :key="findPeople.id"
                class="mb-4 mt-4 border-bottom border-dark"
              >
                <div>
                  <label class="col-5 p-0"
                    >Prénom:
                    <b-form-input
                      v-model="findPeople.first_name"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Nom:
                    <b-form-input
                      v-model="findPeople.name"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Email:
                    <b-form-input
                      v-model="findPeople.email"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Mot de passe:
                    <b-form-input
                      v-model="findPeople.password"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Adresse:
                    <b-form-input
                      v-model="findPeople.address"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Code Postal:
                    <b-form-input
                      v-model="findPeople.postal_code"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Ville:
                    <b-form-input
                      v-model="findPeople.city"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Téléphone:
                    <b-form-input
                      v-model="findPeople.phone"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Date de naissance:
                    <b-form-input
                      v-model="findPeople.birth_date"
                      type="text"
                      maxlength="10"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >CV:
                    <b-form-input
                      v-model="findPeople.cv"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Site Internet:
                    <b-form-input
                      v-model="findPeople.website"
                      type="text"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Photo de Profil:
                    <b-form-input
                      v-model="findPeople.picture"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div>
                  <label class="col-5 p-0"
                    >Date d'inscription:
                    <b-form-input
                      v-model="findPeople.registered"
                      type="text"
                      maxlength="10"
                    ></b-form-input
                  ></label>
                  <label class="col-5 offset-1 p-0"
                    >Dernière connexion:
                    <b-form-input
                      v-model="findPeople.last_login"
                      type="text"
                      maxlength="10"
                    ></b-form-input
                  ></label>
                </div>
                <div class="mb-2">
                  <label class="col-11 p-0"
                    >Sexe:
                    <b-form-input
                      v-model="findPeople.gender"
                      type="text"
                    ></b-form-input
                  ></label>
                </div>
                <div class="mb-4 mt-3 d-flex justify-content-end">
                  <button
                    type="button"
                    class="mr-3 btn btn-danger"
                    onClick="window.location.reload();"
                    @click="deletePeo(urlPeo + findPeople.id)"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick="window.location.reload();"
                    @click="updatePeo(urlPeo + findPeople.id, findPeople)"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12" id="pop_up" v-if="creavisiblead == true">
          <h3 class="mb-4" style="color: white">Création :</h3>
          <div>
            <label class="col-6 mb-4"
              >Titre:
              <b-form-input v-model="adCrea.title" type="text"></b-form-input
            ></label>
          </div>
          <div>
            <label class="col-12 mb-4"
              >Description:
              <b-form-input
                style="height: 50px"
                v-model="adCrea.description"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div>
            <label class="col-6 mb-4"
              >Date:
              <b-form-input v-model="adCrea.date" type="text" maxlength="10"></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-6 mb-4"
              >Type de contrat :<b-form-input
                v-model="adCrea.contrat_type"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mt-3 d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-light"
              onClick="window.location.reload();"
              @click="createAd(adCrea)"
            >
              Envoyer
            </button>
          </div>
        </div>
        <div class="col-12" id="pop_up" v-if="creavisiblecomp == true">
          <h3 class="mb-5" style="color: white">Création :</h3>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Nom de l'Entreprise:
              <b-form-input v-model="adComp.name" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Activité de l'Entreprise:
              <b-form-input
                v-model="adComp.activities"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Adresse de l'Entreprise:
              <b-form-input v-model="adComp.address" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Code Postal de l'Entreprise:
              <b-form-input
                v-model="adComp.postal_code"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Ville de l'Entreprise:
              <b-form-input v-model="adComp.city" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >SIRET de l'Entreprise:
              <b-form-input v-model="adComp.siret" type="text"></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Mot de passe de l'Entreprise:
              <b-form-input v-model="adComp.password" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Nombre d'employé de l'Entreprise:
              <b-form-input
                v-model="adComp.number_employes"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Site de l'Entreprise:
              <b-form-input v-model="adComp.website" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Téléphone de l'Entreprise:
              <b-form-input v-model="adComp.phone" type="text"></b-form-input
            ></label>
          </div>
          <div class="mb-5">
            <label class="col-5 p-0"
              >Email de l'Entreprise:
              <b-form-input v-model="adComp.email" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Nom du Contact de l'Entreprise:
              <b-form-input
                v-model="adComp.contact_name"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mt-3 d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-light"
              onClick="window.location.reload();"
              @click="createComp(adComp)"
            >
              Envoyer
            </button>
          </div>
        </div>
        <div class="col-12" id="pop_up" v-if="creavisiblepeople == true">
          <h3 class="mb-5" style="color: white">Création :</h3>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Prénom:
              <b-form-input
                v-model="adPeople.first_name"
                type="text"
              ></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Nom:
              <b-form-input v-model="adPeople.name" type="text"></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Email:
              <b-form-input v-model="adPeople.email" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Mot de passe:
              <b-form-input
                v-model="adPeople.password"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Adresse:
              <b-form-input
                v-model="adPeople.address"
                type="text"
              ></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Code Postal:
              <b-form-input
                v-model="adPeople.postal_code"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Ville:
              <b-form-input v-model="adPeople.city" type="text"></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Téléphone:
              <b-form-input v-model="adPeople.phone" type="text"></b-form-input
            ></label>
          </div>
          <div>
            <label class="col-5 p-0"
              >Date de naissance:
              <b-form-input
                v-model="adPeople.birth_date"
                type="text"
                maxlength="10"
              ></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >CV:
              <b-form-input v-model="adPeople.cv" type="text"></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Site Internet:
              <b-form-input
                v-model="adPeople.website"
                type="text"
              ></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Photo de Profil:
              <b-form-input
                v-model="adPeople.picture"
                type="text"
              ></b-form-input
            ></label>
          </div>
          <div class="mb-2">
            <label class="col-5 p-0"
              >Date d'inscription:
              <b-form-input
                v-model="adPeople.registered"
                type="text"
                maxlength="10"
              ></b-form-input
            ></label>
            <label class="col-5 offset-1 p-0"
              >Dernière connexion:
              <b-form-input
                v-model="adPeople.last_login"
                type="text"
                maxlength="10"
              ></b-form-input
            ></label>
          </div>
          <div class="mb-5">
            <label class="col-11 p-0"
              >Sexe:
              <b-form-input v-model="adPeople.gender" type="text"></b-form-input
            ></label>
          </div>
          <div class="mt-3 d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-light"
              onClick="window.location.reload();"
              @click="createPeople(adPeople)"
            >
              Envoyer
            </button>
          </div>
        </div>
        <div
          class="mt-5 offset-1"
          v-if="visiblead && visiblecomp == false && visiblepeople == false"
        >
          <div
            v-for="ad in advertisements"
            :key="ad.id"
            class="mb-4 mt-4 border-bottom border-dark"
          >
            <div>
              <label class="col-6 p-0"
                >Titre:
                <b-form-input v-model="ad.title" type="text"></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-12 p-0"
                >Description:
                <b-form-input
                  style="height: 50px"
                  v-model="ad.description"
                  type="text"
                ></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-6 p-0"
                >Date:
                <b-form-input v-model="ad.date" type="text" maxlength="10"></b-form-input
              ></label>
            </div>
            <div class="mb-2">
              <label class="col-6 p-0"
                >Type de contrat :<b-form-input
                  v-model="ad.contrat_type"
                  type="text"
                ></b-form-input
              ></label>
            </div>
            <div class="mb-4 d-flex justify-content-end">
              <button
                type="button"
                class="mr-3 btn btn-danger"
                onClick="window.location.reload();"
                @click="deleteAd(urlAd + ad.id)"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-warning"
                onClick="window.location.reload();"
                @click="updateAd(urlAd + ad.id, ad)"
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div
          class="mt-5 offset-1"
          v-if="visiblecomp && visiblead == false && visiblepeople == false"
        >
          <div
            v-for="comp in compagnies"
            :key="comp.id"
            class="mb-4 border-bottom border-dark"
          >
            <div>
              <label class="col-5 p-0"
                >Nom de l'Entreprise:
                <b-form-input v-model="comp.name" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Activité de l'Entreprise:
                <b-form-input
                  v-model="comp.activities"
                  type="text"
                ></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Adresse de l'Entreprise:
                <b-form-input v-model="comp.address" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Code Postal de l'Entreprise:
                <b-form-input
                  v-model="comp.postal_code"
                  type="text"
                ></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Ville de l'Entreprise:
                <b-form-input v-model="comp.city" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >SIRET de l'Entreprise:
                <b-form-input v-model="comp.siret" type="text"></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Mot de passe de l'Entreprise:
                <b-form-input v-model="comp.password" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Nombre d'employé de l'Entreprise:
                <b-form-input
                  v-model="comp.number_employes"
                  type="text"
                ></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Site de l'Entreprise:
                <b-form-input v-model="comp.website" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Téléphone de l'Entreprise:
                <b-form-input v-model="comp.phone" type="text"></b-form-input
              ></label>
            </div>
            <div class="mb-2">
              <label class="col-5 p-0"
                >Email de l'Entreprise:
                <b-form-input v-model="comp.email" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Nom du Contact de l'Entreprise:
                <b-form-input
                  v-model="comp.contact_name"
                  type="text"
                ></b-form-input
              ></label>
            </div>
            <div class="mb-4 mt-3 d-flex justify-content-end">
              <button
                type="button"
                class="mr-3 btn btn-danger"
                onClick="window.location.reload();"
                @click="deleteComp(urlComp + comp.id)"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-warning"
                onClick="window.location.reload();"
                @click="updateComp(urlComp + comp.id, comp)"
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div
          class="mt-5 offset-1"
          v-if="visiblepeople && visiblead == false && visiblecomp == false"
        >
          <div
            v-for="peo in people"
            :key="peo.id"
            class="mb-4 border-bottom border-dark"
          >
            <div>
              <label class="col-5 p-0"
                >Prénom:
                <b-form-input
                  v-model="peo.first_name"
                  type="text"
                ></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Nom:
                <b-form-input v-model="peo.name" type="text"></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Email:
                <b-form-input v-model="peo.email" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Mot de passe:
                <b-form-input v-model="peo.password" type="text"></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Adresse:
                <b-form-input v-model="peo.address" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Code Postal:
                <b-form-input
                  v-model="peo.postal_code"
                  type="text"
                ></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Ville:
                <b-form-input v-model="peo.city" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Téléphone:
                <b-form-input v-model="peo.phone" type="text"></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Date de naissance:
                <b-form-input
                  v-model="peo.birth_date"
                  type="text"
                ></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >CV: <b-form-input v-model="peo.cv" type="text"></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Site Internet:
                <b-form-input v-model="peo.website" type="text"></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Photo de Profil:
                <b-form-input v-model="peo.picture" type="text"></b-form-input
              ></label>
            </div>
            <div>
              <label class="col-5 p-0"
                >Date d'inscription:
                <b-form-input
                  v-model="peo.registered"
                  type="text"
                  maxlength="10"
                ></b-form-input
              ></label>
              <label class="col-5 offset-1 p-0"
                >Dernière connexion:
                <b-form-input
                  v-model="peo.last_login"
                  type="text"
                  maxlength="10"
                ></b-form-input
              ></label>
            </div>
            <div class="mb-2">
              <label class="col-11 p-0"
                >Sexe:
                <b-form-input v-model="peo.gender" type="text"></b-form-input
              ></label>
            </div>
            <div class="mb-4 mt-3 d-flex justify-content-end">
              <button
                type="button"
                class="mr-3 btn btn-danger"
                onClick="window.location.reload();"
                @click="deletePeo(urlPeo + peo.id)"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-warning"
                onClick="window.location.reload();"
                @click="updatePeo(urlPeo + peo.id, peo)"
              >
                Update
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
      compagnies: [],
      people: [],
      token: [],
      roles: "",
      adCrea: {
        title: null,
        description: null,
        date: null,
        contrat_type: null,
      },
      searchAd: [],
      adComp: {
        name: null,
        activities: null,
        address: null,
        postal_code: null,
        city: null,
        siret: null,
        password: null,
        number_employes: null,
        website: null,
        phone: null,
        email: null,
        contact_name: null,
      },
      searchComp: [],
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
      searchPeople: [],
      urlAd: '',
      urlComp: '',
      urlPeo: '',
      name: '',
      visiblead: false,
      visiblecomp: false,
      visiblepeople: false,
      creavisiblead: false,
      creavisiblecomp: false,
      creavisiblepeople: false,
      search: null,
      rolesArray: [],
    }
  },
  methods: {
    async Admin() {
      try {
        const response = await this.$axios.post(
          'http://127.0.0.1:3003/api/admin',
          {
            roles: localStorage.getItem('roles')
          }
        )
        this.rolesArray = response.data
        console.log(response)
      } catch (error) {
        if(error.response.status === 401){
          this.$router.push("/ad")
        }
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
      localStorage.removeItem('roles')

      this.$router.push('/')
    },
    async showAd() {
      try {
        const response = await this.$axios.get(
          'http://127.0.0.1:3003/api/advertisements'
        )
        this.advertisements = response.data
        for (var i = 0; i != this.advertisements.length; i++) {
          if (this.advertisements[i].date != null) {
            this.advertisements[i].date = this.advertisements[i].date.slice(0, 10)
          }
        }
        this.urlAd = response.config.url
        this.urlAd = this.urlAd + '/'
      } catch (err) {
        console.log(err)
      }
    },
    async showComp() {
      try {
        const response = await this.$axios.get(
          'http://127.0.0.1:3003/api/compagnies'
        )
        this.compagnies = response.data
        this.urlComp = response.config.url
        this.urlComp = this.urlComp + '/'
      } catch (err) {
        console.log(err)
      }
    },
    async showPeople() {
      try {
        const response = await this.$axios.get(
          'http://127.0.0.1:3003/api/people'
        )
        this.people = response.data
        for (var i = 0; i != this.people.length; i++) {
          if (this.people[i].birth_date != null) {
            this.people[i].birth_date = this.people[i].birth_date.slice(0, 10)
          }
          if (this.people[i].last_login != null) {
            this.people[i].last_login = this.people[i].last_login.slice(0, 10)
          }
          if (this.people[i].registered != null) {
            this.people[i].registered = this.people[i].registered.slice(0, 10)
          }
        }
        this.urlPeo = response.config.url
        this.urlPeo = this.urlPeo + '/'
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
    async updateComp(url, body) {
      try {
        const response = await this.$axios.put(url, body)
      } catch (err) {
        console.log(err)
      }
    },
    async updatePeo(url, body) {
      try {
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
    async deleteComp(url) {
      try {
        const response = await this.$axios.delete(url)
      } catch (err) {
        console.log(err)
      }
    },
    async deletePeo(url) {
      try {
        const response = await this.$axios.delete(url)
      } catch (err) {
        console.log(err)
      }
    },
    async createAd(body) {
      try {
        const response = await this.$axios.post(
          'http://127.0.0.1:3003/api/advertisements',
          body
        )
      } catch (err) {
        console.log(err)
      }
    },
    async createComp(body) {
      try {
        const response = await this.$axios.post(
          'http://127.0.0.1:3003/api/compagnies',
          body
        )
      } catch (err) {
        console.log(err)
      }
    },
    async createPeople(body) {
      try {
        const response = await this.$axios.post(
          'http://127.0.0.1:3003/api/people',
          body
        )
      } catch (err) {
        console.log(err)
      }
    },
    async deleteAllComp() {
      try {
        const response = await this.$axios.delete(
          'http://127.0.0.1:3003/api/compagnies'
        )
      } catch (err) {
        console.log(err)
      }
    },
    async deleteAllPeople() {
      try {
        const response = await this.$axios.delete(
          'http://127.0.0.1:3003/api/people'
        )
      } catch (err) {
        console.log(err)
      }
    },
    async deleteAllAd() {
      try {
        const response = await this.$axios.delete(
          'http://127.0.0.1:3003/api/advertisements'
        )
      } catch (err) {
        console.log(err)
      }
    },
    async filterAd() {
      var count = 0
      var tmp = 0
      if (this.search != null) {
        this.search = this.search.replace(/\s/g, '|')
      }
      var rgxp = new RegExp(this.search, 'gi')
      if (this.search != null) {
        while (count < this.advertisements.length) {
          if (
            this.advertisements[count].title.match(rgxp) ||
            this.advertisements[count].description.match(rgxp)
          ) {
            console.log(this.advertisements[count])
            this.searchAd[tmp] = this.advertisements[count]
            tmp++
          }
          count++
        }
        this.search = null
      }
    },
    async filterComp() {
      var count = 0
      var tmp = 0
      if (this.search != null) {
        this.search = this.search.replace(/\s/g, '|')
      }
      var rgxp = new RegExp(this.search, 'gi')
      if (this.search != null) {
        while (count < this.compagnies.length) {
          if (this.compagnies[count].name.match(rgxp)) {
            console.log(this.compagnies[count])
            this.searchComp[tmp] = this.compagnies[count]
            tmp++
          }
          count++
        }
        this.search = null
      }
    },
    async filterPeople() {
      var count = 0
      var tmp = 0
      if (this.search != null) {
        this.search = this.search.replace(/\s/g, '|')
      }
      var rgxp = new RegExp(this.search, 'gi')
      if (this.search != null) {
        while (count < this.people.length) {
          if (
            this.people[count].name.match(rgxp) ||
            this.people[count].first_name.match(rgxp)
          ) {
            console.log(this.people[count])
            this.searchPeople[tmp] = this.people[count]
            tmp++
          }
          count++
        }
        this.search = null
      }
    },
  },
  mounted() {
    this.showAd()
    this.showComp()
    this.showPeople()
    this.getToken()
    this.Admin()
    console.log(this.creavisiblecomp)
    console.log(this.token)
  },
}
</script>


<style>
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

#pop_up {
  border: 1px solid black;
  position: relative;

  background-color: rgb(91, 35, 51);
  color: white;
  padding: 50px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
}

.wInput {
  width: 280px;
}

#more {
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