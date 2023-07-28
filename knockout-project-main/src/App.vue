<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- <div>
    <b-navbar toggleable type="dark" variant="outline-danger">

      <b-navbar-toggle target="navbar-toggle-collapse">
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="`/`">Home</b-nav-item>
          <b-nav-item :to="`/schedule`">Schedule</b-nav-item>
          <b-nav-item :to="`/networking`">Networking</b-nav-item>
          <b-nav-item :to="`/reimbursement`">Reimbursement</b-nav-item>
          <b-nav-item href="#">Profile</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div> -->
    <b-nav>
      <b-nav-item :to="`/`" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" >
          <path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z"/>
        </svg>
      </b-nav-item>
      <br>
      <b-nav-item :to="`/schedule`">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-calendar2-week" viewBox="0 0 16 16" >
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
        </svg>
      </b-nav-item>
      <br>
      <b-nav-item :to="`/networking`">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </b-nav-item>
      <br>
      <b-nav-item :to="`/reimbursement`">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
        </svg>
      </b-nav-item>
      <br>
      <b-nav-item :to="`/profile`">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>
      </b-nav-item>
  </b-nav>

  <RouterView id="router"/>

</template>

<style scoped>

  @media(min-width: 300px) {
    #app{
    display: flex;
    flex-direction: column-reverse;
  }
  .nav{
    position: fixed;
    bottom:0;
    z-index: 3;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row !important;
    background-color: brown;
    align-items: center;
    width: 100%;
    height: 60px;

  }
  #router{
    width: 100%;
    height: 100vh;
    padding: 0;
    position: relative;
  }
}
@media(min-width: 1024px) {
  #app{
    display: flex;
    background-color: brown;
    height: 100vh;
    --bs-nav-link-hover-color: white;
    --bs-nav-link-color: white;
    flex-direction: row !important;
    width: 100%;
    justify-content: start;
  }

  #router{
    width: 100%;
    height: 100vh;
    padding: 30px;
    position: relative;
    margin-left: 70px;
  }
  .nav{
    display: flex;
    position: fixed;
    width: 70px;
    flex-direction: column !important;
    background-color: brown;
    height: 100vh;
    justify-content: flex-start;
    padding-top: 60px;
    align-items: center;
  }
}
svg{
    color: white;
    width: 30px;
    height: 30px;
  }
.nav .nav-item{
  width: fit-content;
  padding: 0;
}

:deep(.active){
  background-color: rgb(240, 240, 240);
  padding: 8px;
  border-radius: 8px;
}
:deep(.active svg){
  color: brown;
}
</style>
