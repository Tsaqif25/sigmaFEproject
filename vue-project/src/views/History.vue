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
                <img :src="'https://tnrxkmc3-8080.asse.devtunnels.ms/upload/inventories/'+ room.inventory.images"
                                        style="width: 180px;" class="m-3 " alt="...">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h1>{{ room.title }}</h1>
                  <p class="card-text">{{ room.description }}</p>
<!-- Assuming room.startDate and room.endDate are Date objects -->
<p>{{room.startDate.substr(0,10)}}</p>
<p>{{room.endDate.substr(0,10)}}</p>

                  <p>{{ room.status }}</p>
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
        const token = sessionStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
        let result = await axios.get('https://tnrxkmc3-8080.asse.devtunnels.ms/api/v1/history', config);
        let data = result.data.data
        this.history = data
        console.log(history);
   

        // let result1 = await axios.get('https://tnrxkmc3-8080.asse.devtunnels.ms/api/v1/inventories');
        // console.log("Inventories data: ", result1.data);
        // this.roomInventory = result1.data.data;
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('id-ID', options); // Sesuaikan dengan locale yang diinginkan
},
},
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