<script setup>
import Schedule from '@/components/Schedule.vue'
import { Components } from 'bootstrap-vue-next';
</script>

<script>
export default {
  component:{
    Schedule
  },
  data() {
    return {
      schedules:[1],
      selectedScheduleIndex:0,
      num_schedule:1

    }
  },
  methods:{
    createNew(){
      if(this.selectedScheduleIndex==this.schedules.length-1){
        this.schedules.push(1);
        this.selectedScheduleIndex=this.schedules.length-2;
        document.getElementById("dropdown-schedule").innerText="Customized Schedule "+(this.selectedScheduleIndex+1);
      }
    },
    changeSchedule(index){
      if(index==this.schedules.length-1){
        document.getElementById("dropdown-schedule").innerText="ITINENARY";
        this.selectedScheduleIndex=this.schedules.length-1;
      }else{
        document.getElementById("dropdown-schedule").innerText="Customized Schedule "+(index+1);
        this.selectedScheduleIndex=index;
      }
    },
    darkOverlay(data){
      if(data==true){
        document.getElementById("darkOverlayOutside").style.visibility = "visible";
      }else{
        document.getElementById("darkOverlayOutside").style.visibility = "hidden";
      }
    }
  }
}
</script>

<template>
 <div>
  <div id="container">
      <header>
        <!-- <h1 v-if="selectedScheduleIndex==0">ITINENARY</h1>
        <h1 v-else>Customized Schedule {{ selectedScheduleIndex }}</h1> -->
          <b-dropdown id="dropdown-schedule"
           text="ITINENARY" variant="custom" right class=" m-2">
            <b-dropdown-item  @click="changeSchedule(schedules.length-1)">ITINENARY</b-dropdown-item>
            <b-dropdown-item v-for="(e,index) in schedules">
              <div v-if="index!=schedules.length-1" @click="changeSchedule(index)">Customized Schedule {{ index+1 }}</div>
            </b-dropdown-item>
          </b-dropdown>

      </header>

      <Schedule  v-for="(element,index) in schedules" v-on:newScheduleCreated="createNew" v-on:darkOverlayMode="darkOverlay" :itinenaryMode="index==schedules.length-1" v-show="index==selectedScheduleIndex"/>

 </div>
 <div id="darkOverlayOutside"></div>
 </div>

</template>

<style scoped>
    @media(min-width: 350px) {
      header{
      position: relative;
      background-color: brown;
      display: flex;
      height: 40px;

      width: 100%;
      justify-content: center;
      z-index: 2;
      align-items: center;
      border-radius: 0 0 0 0;
  }


      :deep(.btn-custom){
        font-size: 30px;
        font-weight: 800;
      }
  }
  @media(min-width: 1024px) {
    header{
        border-radius: 10px 10px 0 0;

       height: 70px;
      }
    :deep(.btn-custom){
      font-size: 38px;
      font-weight: 800;
  }
  }
  #darkOverlayOutside{
      visibility: hidden;
      display: block;
      background-color: black;
      opacity: 0.9;
      position: absolute;
      top:0;
      left:0;
      z-index: 2;
      width: 100%;
      height: 100vh;
  }
  #container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
  }


  h1{
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  }
  :deep(.btn-custom){
    border: none;
    background-color: transparent;
    color: white !important;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    --bs-btn-hover-bg: none;
}
:deep(header .dropdown-menu){
  width: 300px !important;
  text-align: center;
  background-color: white;
  border: 2px solid brown;
}
:deep(header .dropdown-menu .dropdown-item){
  font-weight: 500 !important;
  font-size: 18px;
  color: brown !important;
  padding: 0;
}

</style>
