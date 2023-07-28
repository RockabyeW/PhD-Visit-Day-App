<script>
import Eventlist from '../components/Eventlist.vue';
import Exploration from '../components/Exploration.vue'
</script>

<template>
  <main>
    <div class="relativeh">
      <!-- <div class="headerh">
        <header><h1 class="h1h">HOME</h1></header>
      </div> -->

      <div class="mainh">
        <b-container class="events">
        <h2>Coming events</h2>
        <div class="eventContainer">
              <div  class="event"  v-for="(Navigation, route) in this.Navigation">
                <Eventlist  :to="`/navigation/${route}`" :name="Navigation.name" :time="Navigation.time"  :location="Navigation.location" :route="`/navigation/${route}`"></Eventlist>
                <div v-if="Navigation.nav" class="text-center mt-3 navButton">
                  <b-button :href="Navigation.nav" variant="custom2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    Nav
                  </b-button>
                </div>
              </div>
          </div>

      </b-container>

      <b-container class=".container-xl">
            <h2>Professor</h2>
            <b-row>
              <b-col  cols="12" v-for="(Professor, route,index) in this.professor">
              <Exploration :to="`/explore/professor/${route}`" :name="Professor.name" :img="Professor.img" :about="Professor.about" :route="`/explore/professor/${route}`" :email="Professor.email" :focus="Professor.focus" :location="Professor.location" ></Exploration>
            </b-col>
            </b-row>

        </b-container >
        <b-container class=".container-xl">
            <h2>Lab</h2>
            <b-row>
              <b-col  cols="12" v-for="(Lab, route,index) in this.lab">
              <Exploration :to="`/explore/lab/${route}`" :name="Lab.name" :img="Lab.img" :about="Lab.about" :route="`/explore/lab/${route}`" :location="Lab.location" ></Exploration>
            </b-col>
            </b-row>

        </b-container >

      <b-container class=".container-xl">
            <h2>Attraction</h2>
            <b-row>
              <b-col  cols="12" v-for="(Landscape, route,index) in this.Attraction">
              <Exploration :to="`/explore/attration/${route}`" :name="Landscape.name" :img="Landscape.img" :about="Landscape.about" :route="`/explore/attraction/${route}`" :hours="Landscape.hours" :location="Landscape.location" ></Exploration>
            </b-col>
            </b-row>

        </b-container >

        <b-container class=".container-xl">
          <h2>Dinning</h2>
          <b-row>
              <b-col cols="12" v-for="(Dining, route, index) in this.Dining">
                <Exploration  :to="`/explore/dining/${route}`" :name="Dining.name" :img="Dining.img" :about="Dining.about" :route="`/explore/dining/${route}`" :hours="Dining.hours" :location="Dining.location"  ></Exploration>
            </b-col>
            </b-row>


        </b-container >

      </div>
    </div>

  </main>
</template>

<style scoped>
@media(min-width: 500px) {
  :deep(.event){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  :deep(.eventContainer){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

  }
  .container{
    margin-bottom: 70px;
  }
}
@media(min-width: 1100px) {
  :deep(.event){
    width: fit-content;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  :deep(.eventContainer){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

  }
  .col-12{
    width: 50%;
  }
}
@media(min-width: 1500px) {
  .col-12, .cols-6{
    width: 33%;
  }
}
  .h1h{
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  }
  .container{
    max-width: 100%;
  }

 :deep(.event){
    margin-bottom: 20px;
    position: relative;
  }

  :deep(.event .btn-custom2){
    border: none;
    background-color: brown;
    color: white !important;
    font-size:12px;
    font-weight: 500;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    --bs-btn-hover-bg: rgb(85, 0, 0) !important;
    /* position: absolute; */
    /* padding: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    top:10px;
    right: 10px; */
}
:deep(.event .btn-custom2:hover){
    background-color: rgb(131, 43, 43);
    box-shadow: 0 3px 16px 0 rgba(115, 49, 49, 0.2);
}

  .mainh {
    padding: 10px;
    height:min-content;
    overflow-y: auto;


  }
  h2{
    margin-bottom: 20px;
    margin-top: 20px;
    color: brown;
  }
  .relativeh{
    width:100%;
    height: 100%;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 0;
  }

  .headerh {
  background-color: brown;
  text-align: center;
  padding: 10px;
  color: white;
  font-size: 35px;
  border-radius: 10px 10px 0 0;
}
.navButton{
  position: absolute;
  top:5px;
  right: 10px;
}
.container{
  padding: 0;
}
</style>
