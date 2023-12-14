<template>
    <div>
        <nav class="navbar navbar-expand-lg mb-2 ">

            <button class="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"
                style="color:  background-color: #003F62;;">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle profileDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

    </button>
    <div class="dropdown-menu" aria-labelledby="profileDropdown">
      <a class="dropdown-item" @click="editPhoto">Edit Photo</a>
      <a class="dropdown-item" @click="signOut">Sign Out</a>
    </div>
  </div> -->
            <div class="dropdown">
                <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="../assets/03. Foto Profil IG.PNG" alt="Profile Picture"
                        style="border-radius: 50%; width: 32px; height: 32px;">
                </button>
                <ul class="dropdown-menu">
                    <li class=" d-flex justify-content-between">
                        <!-- <a href="#" class="dashboard"><i class="material-icons">dashboard</i> <span>Rental</span></a> -->
                        <router-link to="/profileEdit" class="dropdown-item  d-flex justify-content-between "
                            active-class="active1"> Edit Profile <i class="material-icons">chevron_right </i></router-link>
                    </li>
                    <li>
                        <!-- <a href="#" class="dashboard"><i class="material-icons">dashboard</i> <span>Rental</span></a> -->
                        <router-link to="" class="dropdown-item  d-flex justify-content-between " active-class="active1"
                            @click="logout"> Exit <i class="material-icons">logout </i></router-link>
                    </li>

                </ul>
            </div>

            <div class="collapse navbar-collapse  w-full" id="navbarText" style="width: 100%; background-color: #003F62;
;">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="">
                        <!-- <a href="#" class="dashboard"><i class="material-icons">dashboard</i> <span>Rental</span></a> -->
                        <router-link to="/" active-class="active"><i class="material-icons">home </i> Home</router-link>
                    </li>

                    <li class="">
                        <!-- <a href="#" class="dashboard"><i class="material-symbols-outlined"> description </i> <span>History</span></a> -->
                        <router-link to="/RentFacility" active-class="active"><i class="material-icons">description</i>
                            <span class="">Rental</span></router-link>
                    </li>
                    <li class="">
                        <router-link to="/history" active-class="active"><i class="material-icons">description</i> <span
                                class="">History</span></router-link>
                    </li>

                </ul>

            </div>
        </nav>

        <div class="mb-3">
            <input type="text" class="form-control" placeholder="Search..." aria-label="Search" aria-describedby="search">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$router.push({
                name: 'Login'
            });
        }

    }
}
</script>

<style scoped>
.navbar {
    background-color: #003F62;
    /* width: 390px; */
    height: 62px;
    /* top: 33px; */

}

.nav-link {
    display: flex;
    align-items: center;
}

.material-icons {
    margin-right: 5px;
}

@media (max-width: 768px) {

    .navbar-toggler-icon {
        height: 20px;
        background-color: #003F62;
    }

    .dropdown-menu {
        margin-left: -90px;
    }

}

.navbar-text {
    margin-left: auto;
}

ul li {
    padding: 1px 0px;
    text-decoration: none;
}

ul li .active {
    background-color: #ffffff;
    border-radius: 5px;
    color: #003f62;
}

/* ul li .active1 {
  background-color: #f52020;
    border-radius: 5px;
    color: #003f62;
} */

ul li a {
    padding: 5px 10px 5px 20px;
    line-height: 30px;
    font-size: 15px;
    position: relative;
    font-weight: 400;
    display: block;
    color: #200303;
    text-decoration: none;
    /* text-transform:capitalize; */
}

ul li a i {
    position: relative;
    margin-right: 10px;
    top: 6px;
}</style>
