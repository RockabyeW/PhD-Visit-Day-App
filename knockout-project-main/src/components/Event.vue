<script setup>
    defineProps({
      event:{
        type: Object,
        required:true
      }
    })
</script>
<script>
  export default {

    created() {
      if(this.event.type=='Professor'){
        this.color="#d16262";
      }else if(this.event.type=='Lab'){
        this.color="#f04a4a";
      }else if(this.event.type=='Attraction'){
        this.color="#9e7070";
      }else if(this.event.type=='Dining'){
        this.color="#6e3b3b";
      }
    }
}
</script>

<template>
    <div v-bind:style="'background-color:'+color">
      <h5 v-if="event.type=='Professor'">Meet With <strong>{{ event.name }}</strong></h5>
      <h5 v-else><strong>{{ event.name }}</strong></h5>
      <h5 >@ {{ event.location }}</h5>
    </div>
</template>

<style scoped>
  @media(min-width: 350px) {
    h5{
      color: white;
      font-weight: 300;
      font-size: 11px;
    }
  }
  @media(min-width: 1024px) {
    h5{
      color: white;
      font-weight: 300;
      font-size: 18px;
    }
  }
  h5{
    color: white;
  }
  div{
    padding-top: 3px;
    box-shadow: 0px 2px 8px 2px rgba(105, 38, 38,0.4);
}
div:hover{
  box-shadow: 0px 2px 8px 4px rgba(105, 38, 38,0.4);
}

</style>
