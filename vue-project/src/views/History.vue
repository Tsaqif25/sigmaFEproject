<template>
<div class="bungkus">

    <div class="container">
        <navbar></navbar>

        <h1>History</h1>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                <div class="row flex-nowrap" v-for="(room, index) in history" :key="index">
                    <div class="card mb-3 mt-4 d-flex flex-row " style="max-width: 540px;">

                        <div class="col-4 d-flex align-items-center">
                            <img :src="'https://tnrxkmc3-8080.asse.devtunnels.ms/upload/inventories/'+ room.inventory.images" style="width: 79px; height: 79px;" class="m-3 ">
                        </div>
                        <div class="col-8 mr-3">
                            <div class="card-body mr-3">
                                <!-- <h1 class="title1">{{ room.title }}</h1> -->
                                <h2 class="card-text">{{ room.description }}</h2>
                                <!-- Assuming room.startDate and room.endDate are Date objects -->
                                <div class="date">
                                <p>{{room.startDate.substr(0,10)}}-{{room.endDate.substr(0,10)}} </p>
                         
                              </div>
                              
                                <button type="button" class="btn btn-secondary btn-sm">{{room.status }}</button>
                             
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
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            return date.toLocaleDateString('id-ID', options); // Sesuaikan dengan locale yang diinginkan
        },
    },
};
</script>

<style scoped>

.card {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
}
h1 {
  font-family: Inter;
font-size: 24px;
font-weight: 600;
line-height: 29px;
letter-spacing: 0em;


};
button {
    width: 89px ;
/* height: 22px ;
top: 72px ;
left: 118px ; */
border-radius: 30px ;

}

.card-text {
  font-family: Rubik;
font-size: 18px;
font-weight: 600;
line-height: 22px;
/* letter-spacing: 0em; */
text-align: left;


}
.date {
  font-family: Inter; 
font-size: 13px;
font-weight: 400; 
line-height: 18px;
 letter-spacing: 0.5px; 
text-align: left;

}
/* @media (max-width: 768px) {
    .card {
        display: flex;
        justify-content: space-between;
        max-width: 340px;
    }

    .btn {
        width: 100%;
    }
} */

button {
    width: 89px ;
/* height: 22px ;
top: 72px ;
left: 118px ; */
border-radius: 18px ;

}
</style>
