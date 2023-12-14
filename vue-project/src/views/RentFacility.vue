<template>
  <div>
    <navbar></navbar>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button"
          role="tab" aria-controls="home-tab-pane" aria-selected="true">Facility</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button"
          role="tab" aria-controls="profile-tab-pane" aria-selected="false">Inventory</button>
      </li>

    </ul>
    <div class="container">
      <div class="tab-content" id="myTabContent">

        <div class="tab-pane fade show" id="profile-tab-pane" role="tabpanel"  >
          <div class="row px-4" v-for="(room, index) in roomInventory" :key="room.id">
            <router-link to="/RentDetail">
              <div class="card mb-3 mt-4" style="max-width: 540px;">
                <div class="col-md-4">
                  <img :src="room.images" style="width: 80px;" class="m-3 " alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h1>{{ room.name }}</h1>
                    <p class="card-text">{{ room.description }}</p>
                    <button type="button" class="btn btn-secondary btn-sm" v-if="room.status"
                      @click="bookRoom(index)">Avaliable</button>
                    <button type="button" v-else class="btn btn-secondary btn-sm" disabled>
                      Booked
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="tab-pane fade show " id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

          <div class="row px-4" v-for="(room, index) in roomFacility " :key="room.id">
            <div class="card mb-3 mt-4 " style="max-width: 540px;">
              <div class="col-4 d-flex align-items-center">
                <img :src="room.images" style="width: 80px;" class="m-3 " alt="...">
              </div>
              <div class="col-8">
                <div class="card-body ">
                  <h1>{{ room.name }}</h1>
                  <p class="card-text">{{ room.description }}</p>

                  <button type="button" class="btn btn-secondary btn-sm  text-center" v-if="room.status"
                    @click="bookRoom(index)"> <span class="avaliable">.</span> Avaliable</button>
                  <button type="button" v-else class="btn btn-secondary btn-sm " disabled>
                    <span class="booked">.</span> Booked
                  </button>





                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import navbar from '../components/navbar.vue'
export default {
  components: {
    navbar
  },

  data() {
    return {
      roomFacility: [],
      roomInventory: []
    }
  },

  async mounted() {
    let result = await axios.get('./src/data/inventory.json');
    console.log(result.data);
    this.roomFacility = result.data.data;

    let result1 = await axios.get('./src/data/inventory.json');
    console.log(result1.data);
    this.roomInventory = result1.data.data;
  },

  methods: {
    bookRoom() {
      this.$router.push({
        name: 'RentDetail'
      });
    },

  }
}
</script>

<style scoped>
.avaliable {
  color: greenyellow;
  font-size: 1.0rem;

}

.booked {
  color: red;
  font-size: 1.0rem;
}</style>
