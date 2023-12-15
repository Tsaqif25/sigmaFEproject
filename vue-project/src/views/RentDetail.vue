<template>
    <div>


<navbar></navbar>
<br><br><br><br><br>
<div class="card mb-5" style="width: 100%;">

    <div class="container ">
        <h3 class="text-center">
            <img src="../assets//logo.svg" class=" mt-3" alt="..." style="width: 100px;">
            <br>
            <p>Ruang Meeting 3</p>
            <p>Ruang meeting berkapasitas 8 Orang
                Full AC + Proyektor</p>
        </h3>
        <br>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Start Date</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">End Data</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Qty</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Qty">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="mb-3">
      
            <button type="button" class=" button btn  btn-lg form-control text-white"> <p class="text-btn">BOOK NOW</p></button>
           
        </div>
      
    </div>
</div>

<div>

</div>
</div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import navbar from '../components/navbar.vue'
export default {
    components: {
        navbar
    },
    setup() {
    
      toast.success("Success Booked !", {
        autoClose: 2000,
      }); // ToastOptions
    
   
   },
//    components:{ToastExample}
}
</script>

<style scoped>
.button {
    width: 100% ;
height: 48px ;
top: 693px ;
left: 23px ;
gap: 10px ;
background-color: #003F62;
;

} 
.text-btn {
    font-family: Rubik;
}
</style>
