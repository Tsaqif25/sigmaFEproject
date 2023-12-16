<template>
<div class="card text-white">
    <div class="d-flex justify-content-start container m-2">
        <router-link to="/">
            <span class="material-symbols-outlined" style="color: #000;">
                arrow_back
            </span>
        </router-link>
    </div>
    <div class="text-center ">
        <div class="card-body mt-3">
            <p class="">Edit Profile</p>
        </div>

        <div class="card-body mb-4 text-center">
            <img :src="'https://tnrxkmc3-8080.asse.devtunnels.ms/upload/user-profiles/'+img" alt="Profile Picture" style="border-radius: 50%; width: 50px; height: 50px;">
            <br><br><br>
            <div class="d-flex justify-content-center">
                <div class="input-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile" @change="handleImageChange" accept="image/*" tes />
                        <label class="custom-file-label text-center" for="inputGroupFile">Choose file</label>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="d-flex justify-content-end">
        <div class="container text-black">
            <div class="container text-black">
                <form @submit.prevent="updateProfile">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input v-model="profile.name" type="text" class="form-control" id="name" aria-describedby="nameHelp">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="profile.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input v-model="profile.phone" type="number" class="form-control" id="phone" aria-describedby="phoneHelp">
                    </div>
                    <div class="mb-3">
                        <label for="employeeId" class="form-label">ID Pegawai</label>
                        <input v-model="profile.userId" type="number" class="form-control" id="employeeId" aria-describedby="employeeIdHelp">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="profile.password" type="password" class="form-control" id="password">
                    </div> 
                    <button type="submit" class="btn btn-primary" v-on:click="updateProfile">Update</button>
                    <br><br><br><br><br><br>
                </form>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import { toast } from 'vue3-toastify';
import axios from 'axios';
export default {
    data() {
return {
        
    profile: {
        name: '',
        email: '',
        phone: '',
        employeeId: '',
        password: '',
        img:''
    }
        }    },

    async mounted() {
        try {
        const id = this.$route.params.id
        const token = sessionStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };
        let result = await axios.get('https://tnrxkmc3-8080.asse.devtunnels.ms/api/v1/profile',config)
        let data = result.data
        console.log(data)
        this.profile = data.profile ;
        this.img = data.profile.images;
    }
    catch(error) {
        console.error('Error fetching profile data:', error);
    }
    },

    methods: {
  async updateProfile() {
    try {
      const id = this.$route.params.id;
      const token = sessionStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      let result = await axios.put(`https://tnrxkmc3-8080.asse.devtunnels.ms/api/v1/profile`, {
        name: this.profile.name,
        email: this.profile.email,
        phone: this.profile.phone,
        password:this.profile.password
      }, config);

      let data = result.data;
      console.log('Profile update success', data);
      toast.success("Berhasil Diedit ", {
                autoClose: 1000,
            });
    } catch (error) {
      console.log('Profile update failed', error);
    }
  },
},

    handleImageChange(event) {
        const file = event.target.files[0];
        // Validate the file type and size (optional)
        // ...
        // Read the file content
        const reader = new FileReader();
        reader.onload = (e) => {
            // Get the image data URL
            const imageDataUrl = e.target.result;
            // Update the image source with the new data URL
            this.profileImage = imageDataUrl;
        };
        reader.readAsDataURL(file);
    },

}
</script>

<style scoped>
.card {
    height: 180px !important;
    background-color: #003F62;
}

.card-body img {
    margin-top: -40px;
}
</style>
