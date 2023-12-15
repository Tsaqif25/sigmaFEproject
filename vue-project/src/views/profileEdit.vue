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
  <img src="../assets/03. Foto Profil IG.png" width="134px" height="134px" alt="">
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
                        <input v-model="user.name" type="text" class="form-control" id="name" aria-describedby="nameHelp">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input v-model="user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input v-model="user.phone" type="number" class="form-control" id="phone" aria-describedby="phoneHelp">
                    </div>
                    <div class="mb-3">
                        <label for="employeeId" class="form-label">ID Pegawai</label>
                        <input v-model="user.employeeId" type="number" class="form-control" id="employeeId" aria-describedby="employeeIdHelp">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="user.password" type="password" class="form-control" id="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                    <br><br><br><br><br><br>
                </form>
            </div>

        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                phone: '',
                employeeId: '',
                password: '',
            },
        };
    },
    methods: {
        updateProfile() {
            // Use Axios to make a PUT or POST request to update the user's profile
            axios.put('/api/update-profile', this.user)
                .then(response => {
                    // Handle success
                    console.log('Profile updated successfully:', response.data);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error updating profile:', error);
                });
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
