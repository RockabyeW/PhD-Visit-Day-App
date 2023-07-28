<script setup>
import Event from '@/components/Event.vue'
import Exploration from '@/components/Exploration.vue'
defineProps({
  itinenaryMode: {
    type: Boolean
  }
});
</script>

<script>
export default {
  data() {
    return {
      days:[
      [1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    availability:[
      [1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1],
    ],
      Fixture_selectedType:
      {"Professor":this.professor,
       "Lab":this.lab,
       "Attraction":this.Attraction,
       "Dining":this.Dining
      },
      selectedOption: Object,
      selectedDay: 'Day',
      selectedDayIndex: Number,
      selectedEvent:Object,
      selectedType:"",
      selectedDuration:Number,
      TimeList:[],
      selectedTime: 'Hour',
      modifyEventMode:false,
      selectTimeMode:false,
      availabilityOverlayMode:false,
      overlay: false,
      firstCreated:true,
      exploreOverlay: false,
      timeFrom: 'From',
      timeTo:'To',
      fixedTime:false,
      mousedownMode:false
    }
  },
  watch:{
    overlay(newVar, old) {
        this.$emit('darkOverlayMode',newVar);
    },
    selectedType(newVar, old) {
       if(newVar=='Professor'||newVar=='Lab'){
        this.fixedTime=true;
       }else{
        this.fixedTime=false;
       }
    },

  },
  mounted() {
    this.resetInput();
    let eventList=[];
    this.selectedType='none';
    eventList=this.schedule;
      let index=0;
      for (let days in eventList){
          for (let events in eventList[days]) {
            let event=eventList[days][events];
            this.updateSchedule(index,event);
        }
        index++;
      }

  },
  methods: {
    changeDay(i){
      let day="Day"+String(i+1);
      this.selectedDay='Day '+(i+1);
      this.selectedDayIndex=i;
      if(this.fixedTime){
        this.TimeList=this.selectedOption.hours[day].split(",");
      }else{
        let [start,end]=this.convertTimeStringToNumber(this.selectedOption.hours);
        this.TimeList=[];
        for(let i=start; i<=end;i++){
          if(i<=12){
            this.TimeList.push(i+':00 AM');
          }else{
            this.TimeList.push(i-12+':00 PM');
          }
        }
      }
    },
    confirmEvent(){
      if(!this.fixedTime){
        let time=this.timeFrom+' - '+this.timeTo;
      }

      let e={};
      e ={
          "name": this.selectedOption.name,
          "hours": this.selectedTime,
          "type": this.selectedType,
          "day": this.selectedDayIndex+1,
          "duration": this.selectedDuration,
          "location":this.selectedOption.location,
          "itinenary": false
      }
      this.updateSchedule(this.selectedDayIndex,e);
      this.overlay=false;
      if(this.firstCreated==true){
        this.$emit('newScheduleCreated');
        this.overlay=false;
      }
      this.resetInput();
    },
    updateSchedule(index,event){
      let time=this.convertTimeStringToNumber(event.hours);
      let start=time[0];
      let end=time[1];
      this.days[index][start-8]=event;
      for(let i= 1;i<event.duration;i++){
        this.days[index][start+i-8]=0;
      }
    },

    confirmTimeslot(d,t){
      if(this.fixedTime){
        this.selectedDuration=this.selectedOption.duration;
      }else{
        this.selectedDuration=this.timeTo-this.timeFrom;
      }
      let start=t+8;
      let end=t+8+this.selectedDuration;
      if(start>12){
        start=String(start-12)+':00 PM'
        end=String(end-12)+':00 PM'
      }else if(end<=12){
        start=String(start)+':00 AM'
        end=String(end)+':00 AM'
      }else{
        start=String(start)+':00 AM'
        end=String(end-12)+':00 PM'
      }
      this.availabilityOverlayMode=false;
        this.overlay=true;
        this.changeDay(d);
        this.timeFrom=start;
        this.timeTo=end;
        let time=this.timeFrom+' - '+this.timeTo;
        this.selectedTime=time;
    }
    ,
    mousedown(d,t){
      this.mousedownMode=true;
      this.availability[d][t]=2;
      this.selectedDayIndex=d;
      this.timeFrom=t;
    },
    mouseon(d,t){
      if(this.mousedownMode&&d==this.selectedDayIndex){
        this.availability[d][t]=2;
      }
    },
    mouseup(d,t){
      this.availability[d][t]=2;
      this.mousedownMode=false;
      this.availabilityOverlayMode=false;
      this.timeTo=t+1;
      this.confirmTimeslot(this.selectedDayIndex,this.timeFrom);
      this.overlay=true;

  },
    selectTimeslot(){
      this.overlay=false;
      this.selectTimeMode=true;
      let index=0;
      if(this.fixedTime==false){
        this.availability=[[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1]];
        let time=this.convertTimeStringToNumber(this.selectedOption.hours);
        let start=time[0];
        let end=time[1];
        for(let i=start; i<end; i++){
          this.availability[0][i-8]=0;
          this.availability[1][i-8]=0;
          this.availability[2][i-8]=0;
        }
      }else{
        this.availability=[[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1]];
        for(let day in this.selectedOption.hours){
        let slot=this.selectedOption.hours[day].split(",");
        for(let t in slot){
          let time=this.convertTimeStringToNumber(slot[t]);
          let start=time[0];
          let end=time[1];
          this.availability[index][start-8]=0;
          for(let i= 1;i<this.selectedOption.duration;i++){
            this.availability[index][start+i-8]=2;
          }
        }
        index++;
      }
      }
      this.availabilityOverlayMode=true;
    },
    viewEvent(event){
      this.selectedEvent=event;
      this.modifyEventMode=true;
      if(event.type=="Professor"){
        this.selectedType='Professor';
        this.fixedTime=true;
      }else if(event.type=="Lab"){
        this.selectedType='Lab';
        this.fixedTime=true;
      }else if(event.type=="Attraction"){
        this.selectedType='Attraction';

        this.fixedTime=false;
      }else if(event.type=="Dining"){
        this.selectedType='Dining';

        this.fixedTime=false;
      }else{
        this.selectedType='none';
      }
      if(event.itinenary){
        this.selectedDayIndex=event.day-1;
        this.selectedDay='Day '+event.day;
      }
      else{
        this.selectedOption=this.Fixture_selectedType[this.selectedType][event.name];
        this.changeDay(event.day-1);
      }
      this.selectedTime=event.hours;
        let time=event.hours.split('-');
        this.timeFrom=time[0];
        this.timeTo=time[1];
        this.overlay=true;
    },
    deleteEvent(){
      let time=this.convertTimeStringToNumber(this.selectedEvent.hours);
      let start=time[0];
      let end=time[1];
      for(let i= start;i<end;i++){
        this.days[this.selectedEvent.day-1][i-8]=1;
      }
      this.overlay=false;
      this.modifyEventMode=false;
      if(this.firstCreated==true){
        this.$emit('newScheduleCreated');
      }
    },
    changeEvent(){
      this.deleteEvent();
      this.confirmEvent();
      this.modifyEventMode=false;
    },
    selectAttraction(){
      this.exploreOverlay=true;
    },
    select(index){
        let arr=document.querySelectorAll(".selected");
        for (let i = 0; i < arr.length; i++) {
          arr[i].classList.remove("selected");
        }
        let e=document.getElementById('c'+index);
        e.classList.add("selected");
      },
      confirmExploration(){
        this.exploreOverlay=false;
      },
      convertTimeStringToNumber(time){
        let slot=time.split("-");
        let start=0;
        let end=0;
        if(slot[0].includes("PM")){
          start=parseInt(slot[0].substring(0,slot[0].length-3))+12;
          end=parseInt(slot[1].substring(0,slot[1].length-3))+12;
        }else if(slot[1].includes("AM")){
          start=parseInt(slot[0].substring(0,slot[0].length-3));
          end=parseInt(slot[1].substring(0,slot[1].length-3));
        }else{
          start=parseInt(slot[0].substring(0,slot[0].length-3));
          end=parseInt(slot[1].substring(0,slot[1].length-3))+12;
        }
        return [start,end];
      },
      resetInput(){
        this.selectedType='none'
        this.selectedDay='Day';
        this.selectedTime='Hour';
        this.selectedOption={'name':'Options'};
      }
}
}
</script>

<template>
  <div class="schedule">
      <b-container>
        <b-col id="outerColumn">
          <b-row class="header" >
              <b-col cols="3" class="time"><h3>Time</h3></b-col>
              <b-col ><h3>Day 1</h3></b-col>
              <b-col ><h3>Day 2</h3></b-col>
              <b-col ><h3>Day 3</h3></b-col>
        </b-row>
        <b-row class="outer">
          <b-col id="timeCol" class="time" cols="3">
            <b-row class="notEvent" v-for="n in 12" >
              <h5 v-if="7+n<12">{{ 7+n }} am</h5>
              <h5 v-else-if="7+n==12">{{ 7+n }} pm</h5>
              <h5 v-else>{{ n-5 }} pm</h5>
            </b-row>
          </b-col>
          <b-col class="day" v-for="day,index in days">
            <b-row v-for="(event,i) in day" v-show="event!=0" v-bind:style= "typeof event==='object' ? 'height:'+event.duration*60+'px;' : 'height: 60px;'">
              <p class="notEvent" v-if="event==1">      </p>
              <Event id="hover" @click="viewEvent(event)" class="event" v-else-if="event!=0" :event="event"/>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-row class="outer availabilityOverlay" v-show="availabilityOverlayMode==true">
        <b-col class="time" cols="3" >
              <b-row class="notEvent" v-for="n in 12" ></b-row>
            </b-col>
            <b-col  class="day"  v-for="day,index in availability" >
              <b-row style="height: 60px;" v-for="(event,i) in day">
              <b-button @mousedown="mousedown(index,i)" @mouseup="mouseup(index,i)" @mouseenter="mouseon(index,i)"  class="notEvent green" v-if="event==0&&fixedTime==false">
                    </b-button>
              <b-button v-else  @click="confirmTimeslot(index,i)" class="notEvent green" v-if="event==0">
              </b-button>
              <b-button  @mousedown="mousedown(index,i)" @mouseup="mouseup(index,i)" class="notEvent black" v-if="event==2">     </b-button>
                <p  v-else>      </p>
              </b-row>
            </b-col>
      </b-row>

    </b-container>

    <b-button id="addEvent" variant="custom2" @click="resetInput(); overlay=true; ">+</b-button>





    <div id="eventChoice" class="overlay" v-show="overlay==true&&selectedType=='none'">
      <b-button variant="custom2" class="closeOverlay" @click="resetInput(); overlay=false; ">X</b-button>
      <b-button variant="custom2" @click="selectedType='Professor'; fixedTime=true; overlay=true; ">Professor</b-button>
      <b-button variant="custom2" @click="selectedType='Lab'; fixedTime=true; overlay=true; ">Lab</b-button>
      <b-button variant="custom2" @click="selectedType='Attraction'; fixedTime=false; overlay=true; ">Attractions</b-button>
      <b-button variant="custom2" @click="selectedType='Dining'; fixedTime=false; overlay=true; ">Dining</b-button>
    </div>
    <div id="eventDetail" class="overlay" v-show="overlay==true&&selectedType!='none'">
      <b-button variant="custom2" class="closeOverlay" @click="resetInput();modifyEventMode=false; overlay=false; ">X</b-button>
        <h1 v-if="modifyEventMode==false">Add Event for {{selectedType}}</h1>
        <h1 v-else>Modify Event for {{selectedType}}</h1>
        <div id="selectOption" class="selection" >
            <h3>{{selectedType}} List:</h3>
            <b-dropdown id="dropdown-options" class=" m-md-2" variant="custom3" :text='selectedOption.name'>
              <b-dropdown-item-button v-for="option in Fixture_selectedType[selectedType]" @click="selectedOption=option">{{option.name}} </b-dropdown-item-button>
            </b-dropdown>
            <b-button  variant="custom2" @click="selectAttraction">Explore</b-button>
        </div>

        <div id="selectTime" class="selection">
            <h3>Time:</h3>
            <b-dropdown id="dropdown-day" class=" m-md-2" variant="custom3" :text="selectedDay" >
              <b-dropdown-item-button v-if="fixedTime==false" v-for="index in 3" @click="changeDay(index-1)">Day {{ index }}</b-dropdown-item-button>
              <b-dropdown-item-button v-else v-for="(time,day,index) in selectedOption.hours" @click="changeDay(index)">Day {{ index+1 }} </b-dropdown-item-button>
            </b-dropdown>

            <b-dropdown v-if="fixedTime==false" id="dropdown-from" class=" m-md-2" variant="custom3" :text="timeFrom" >
              <b-dropdown-item-button v-for="time in TimeList" @click="timeFrom=time">{{time}}</b-dropdown-item-button>
            </b-dropdown>
            <b-dropdown v-if="fixedTime==false" id="dropdown-to" class=" m-md-2" variant="custom3" :text="timeTo" >
              <b-dropdown-item-button v-for="time in TimeList" @click="timeTo=time">{{time}} </b-dropdown-item-button>
            </b-dropdown>
            <b-dropdown v-else id="dropdown-time" class=" m-md-2" variant="custom3" :text="selectedTime" >
              <b-dropdown-item-button v-for="time in TimeList" @click="selectedTime=time">{{time}} </b-dropdown-item-button>
            </b-dropdown>
            <b-button variant="custom2" @click="selectTimeslot">Select</b-button>
        </div>
        <b-button variant="custom2" v-if="modifyEventMode==false" @click="confirmEvent">Confirm</b-button>
        <div id="buttonGroup" v-else>
          <b-button variant="custom2" @click="deleteEvent()">Delete</b-button>
          <b-button variant="custom2" @click="changeEvent()">Change</b-button>
        </div>

    </div>
    <div id="exploreOptions" class="overlay" v-show="overlay==true&&exploreOverlay==true">
      <b-button variant="custom2" class="closeOverlay" @click=" exploreOverlay=false; ">X</b-button>
      <b-container id="exploration">
            <h2>{{ selectedType }}</h2>
            <b-row>
              <b-col  cols="12" v-for="(option, route,index) in Fixture_selectedType[selectedType]">
              <Exploration v-if="selectedType=='Professor'" @click="selectedOption=option; select(index);" :name="option.name" :img="option.img" :about="option.about" :email="option.email" :focus="option.focus" :location="option.location" :index="index"></Exploration>
              <Exploration v-else-if="selectedType=='Lab'" @click="selectedOption=option; select(index);" :name="option.name" :img="option.img" :about="option.about" :location="option.location" :index="index"></Exploration>
              <Exploration v-else @click="selectedOption=option; select(index);" :name="option.name" :img="option.img" :about="option.about"  :hours="option.hours" :location="option.location" :index="index"></Exploration>
            </b-col>
            </b-row>
            <b-button id="confirmExplore" variant="custom2" @click="confirmExploration">Confirm</b-button>
        </b-container >
    </div>
  </div>


</template>

<style scoped>
  @media(min-width: 350px) {
    #buttonGroup{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 80%;
    }
    :deep(.btn-custom3){
        border: 1px solid brown;
        background-color: white;
        color: brown !important;
        font-size:12px;
        font-weight: 500;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        --bs-btn-hover-bg: rgb(116, 0, 0);
    }
    :deep(.btn-custom2){
      border: none;
      background-color: brown;
      color: white !important;
      font-size:12px;
      font-weight: 500;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      --bs-btn-hover-bg: rgb(116, 0, 0);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
  }
    .overlay{
      width: 90%;
    }
    .col-12{
      width: 100%;
    }
    h5,h3{
      font-size: 16px;
    }
  #exploration .row{
    padding: 10px;
    padding-top: 0;
  }
  .schedule{
    margin-bottom: 250px;
  }
  }
  @media(min-width: 1200px) {
    #buttonGroup{
      width: 50%;
    }
    :deep(.btn-custom3),:deep(.btn-custom2){

    font-size:18px;

  }
    h3{
      font-size:24px;
      font-weight: 600;
    }
    .overlay{
      width: 99%;
    }
    .col-12{
      width: 50%;
    }
    #exploration .row{
      padding: 10px;
      padding-top: 0;
    }
  }
  @media(min-width: 1650px) {
    .col-12{
      width: 33%;
    }
    #exploration .row{
    padding-top: 10px;
  }
  }

 .row, .header .col-3{
  border: rgb(213, 119, 119) 1px solid;
 }
 .row .nothing{
  display: none;
  height: 0;
 }
 .schedule .container{
  height: auto;
  max-width: 100%;
  margin: 0;
  padding:0;
  display: flex;
  justify-content: center;

 }
 #exploreOptions{
  padding: 0;
  justify-content: space-between;
  align-items: center;
 }
 #exploration{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 0;
    padding-bottom: 20px;
 }
 #exploration h2{
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
  background-color: brown;
  color: white;
  padding: 10px;
 }
 #exploration .row{
  border: none;
  justify-content: space-between;

 }
 #confirmExplore{
  position: absolute;
  bottom: 20px;
  z-index: 10;
 }

 .outer{
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  border: 1.5px solid brown;
  border-top: 0;
  background-color: rgb(255, 250, 250);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 }

 .day .notEvent, .time .notEvent{
  height: 60px;
 }
.row button{
  border-radius: 0;
  background-color: transparent;
  border: 0;
}
.event{
   background-color: gray;
}
#addEvent{
  position: absolute;
  bottom: 20px;
  right:20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-color: brown;
  opacity: 0.95 ;
  font-size: 30px;
  line-height: 0;
  padding: 0;
}
.schedule{
  position: relative;
  width: 100%;
  height: auto;

}
.overlay{
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 100%;
  background-color: white;
  border: 2px solid brown;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  border-radius: 10px;
  color: brown;
  z-index: 3;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(255, 132, 132, 0.2);
}
.selection{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  max-width: 600px;
}
#eventChoice{
  display: flex;
  flex-direction: column;
  justify-content: center;

}
#eventChoice button{
  margin-bottom: 20px;

}

.container .green{
  background-color: green;
  opacity: 0.58;
}
.container .black{
  background-color: grey;
  opacity: 0.8;
}

.availabilityOverlay{
  position: absolute;
  top:40px;
  height: auto;
  background-color: transparent;
}

#hover{
  cursor: pointer;
}

#hover:hover{
  background-color: rgb(86, 86, 86);
}
.header{
  width: 100%;
  text-align: center;
  border: 1px solid brown;
  border-top: 0;
  border-bottom: 0;
  height: 40px;
  color: brown;
}

#outerColumn{
  display: flex;
  flex-direction: column;
  align-items: center ;
  height: fit-content;
}
.header h3{
  margin-bottom: 0;
}
h5{
  color: brown;
}

h1{
  font-size:32px;
  font-weight: 800;
}


.time{
  width: 100px;
  text-align: center;
}
.header .col, .header .time{
  border: 1px solid brown;
  background-color: rgb(250, 193, 193);
  align-items: center;
  display: flex;
  justify-content: center;
}
#timeCol{
  background-color: rgb(246, 208, 208);
}
.closeOverlay{
  position: absolute;
  left: 10px;
  top:10px;
  z-index: 10;
}


:deep(.btn-custom2:hover){
    background-color: rgb(131, 43, 43);
    box-shadow: 0 3px 16px 0 rgba(115, 49, 49, 0.2);
}


:deep(.selection .dropdown-menu){
  min-width: fit-content;
  text-align: left;
  background-color: white;

}
:deep(.selection .dropdown-menu .dropdown-item){
  font-weight: 500 !important;
  font-size: 18px;
  width: fit-content;
  color: brown !important;
  padding-left: 10px;
}
</style>
