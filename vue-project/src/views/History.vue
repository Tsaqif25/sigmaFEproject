<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <h1>History</h1>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <div class="row flex-nowrap" v-for="(room, index) in history" :key="index">
          <div class="card mb-3 mt-4 " style="max-width: 540px;">
          
              <div class="col-4 d-flex align-items-center">
                <img :src="room.images" style="width: 80px;" class="m-3" alt="...">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h1>{{ room.name }}</h1>
                  <p class="card-text">{{ room.description }}</p>
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
import axios from 'axios';
import navbar from '../components/navbar.vue';

export default {
  components: {
    navbar
  },
  data() {
    return {
      history: []
    };
  },
  async mounted() {
    const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
    try {
      let result = await axios.get('./src/data/inventory.json',config);
      this.history = result.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
   .card {
        display: flex;
        justify-content: space-between;
        max-width: 340px;
    }

    .btn {
        width: 100%;
    }
  }
</style>