<template>
  <div> 
  <navbar></navbar>
  <br><br><br><br><br><br><br><br><br><br>
  <p class="judulhome">Welcome, Rafi Purwa Syahputra!</p>

  <img src="" alt="">
  <p class="texthome">Optimize Your Operations with Easy and Fast Inventory Lending.</p>

  <div class="d-flex justify-content-center align-items-center">
 
  <router-link to="/RentFacility" class="btn  button btn-primary  d-flex justify-content-center align-items-center"> <span class="text-center d-flex align-items-center justify-content-center">Get Started</span>  </router-link>
</div>
</div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    },
}
</script>

<style scoped>
.judulhome{
  font-family: Lato;
font-size: 20px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.01em;
text-align: center;

}
.texthome {
  font-family: Lato;
font-size: 20px;
font-style: italic;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: center;


}

.button {
  margin: auto;
  width: 170px ;
height: 52px ;
top: 604px ;
left: 108px ;
border-radius: 40px ;
background-color:  #003F62;
;

}


</style>