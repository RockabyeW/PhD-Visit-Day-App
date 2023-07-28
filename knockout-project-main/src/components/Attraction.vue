<script setup>
import { routeLocationKey } from 'vue-router';

defineProps({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  hours: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
});

</script>
<script>
  export default {
    data(){
      return{
        isSelected:false
      }

    },
    methods:{
      reroute(){
        if(this.route!="none")
        this.$router.replace({ path: this.route })
      }
    }
}
</script>

<template>
  <b-row>
      <div class="mb-3">
        <b-card
            @click="reroute(); "
            overlay
            :img-src="`${baseDir}images/${img}`"
            img-alt="Card Image"
            text-variant="white"
            class="mb-2"
            :id="'c'+index"
        >
            <div class="overlay">
                <h2>{{ name }}</h2>
                <div id="details">
                  <h5>Open: {{ hours }}</h5>
                  <h5>@{{ location }}</h5>
                </div>

              <p>
                {{about}}
              </p>

            </div>

        </b-card>

        </div>

      </b-row>
</template>



<style scoped>

@media(min-width: 400px) {
  h2{
      font-size: 24px;
    }
    p{
      font-size: 12px;
    }
    .overlay{
    height: 60%;

  }
  #details{
    margin-bottom: 5px;
  }
}
 @media(min-width: 600px) {
  h2{
      font-size: 24px;
    }
    p{
      font-size: 12px;
    }
    .overlay{
    height: 45%;

  }
  #details{
    margin-bottom: 5px;
  }
}

@media(min-width: 900px) {
  h2{
      font-size: 28px;
    }
    p{
      font-size: 12px;
    }
    .overlay{
    height: 30%;
    }
    #details{
    margin-bottom: 10px;
    }
  }
  @media(min-width: 1250px) {
  h2{
      font-size: 24px;
    }
    p{
      font-size: 12px;
    }
    .overlay{
    height: 45%;
    }
    #details{
    margin-bottom: 10px;
    }
  }
@media(min-width: 1500px) {
  .overlay{
    height: 60%;
  }
  #details{
    margin-bottom: 10px;
    }
}
.selected{
  border: 4px solid brown !important;
}
h2{
  margin-top: 5px;
  margin-bottom: 10px;
}
h5{
  font-size: 10px;
  font-weight: 600;
  font-style: italic;
}
#details{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
:deep(.card){
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: 1px solid brown;
  border-radius: 10px;
  overflow: hidden;
}
:deep(.card:hover){
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
.overlay{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: justify;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}


</style>
