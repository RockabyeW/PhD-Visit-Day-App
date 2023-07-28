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
    required: false
  },
  location: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: false
  },
  index: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  focus: {
    type: String,
    required: false
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
        if(this.route)
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

            :img-src="`${baseDir}images/${img}`"
            img-alt="Card Image"
            text-variant="white"
            class="mb-2"
            :id="'c'+index"
        >
            <div class="cardDetail">
                  <h2>{{ name }}</h2>

                  <h5 v-if="focus">{{ focus }}</h5>
                <div class="details">
                  <h5 v-if="hours">Open: {{ hours }}</h5>
                  <h5 v-if="email">{{ email }}</h5>
                  <h5>@ {{ location }}</h5>
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

@media(min-width: 350px) {

  h2{
      font-size: 24px;
    }
    p, h5{
      font-size: 12px;
    }
    .overlay{
    height: 60%;

  }

}
 @media(min-width: 600px) {
  h2{
      font-size: 28px;
    }
    p,h5{
      font-size: 14px;
    }
    .overlay{
    height: 45%;

  }

}

@media(min-width: 1100px) {
  h2{
      font-size: 24px;
    }
    p{
      font-size: 12px;
    }
    .overlay{
    height: 30%;
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

  }
@media(min-width: 1500px) {
  .overlay{
    height: 60%;
  }

}
.selected{
  border: 4px solid brown !important;
}
h2{
  margin-top: 1px;
  margin-bottom: 8px;
}
h5{
  font-size: 10px;
  font-weight: 600;
  font-style: italic;
  padding-bottom: 0;
  margin-bottom: 5px;
}
.details{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
:deep(.card){
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: 1px solid rgb(103, 27, 27);
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(103, 27, 27);
  height: 550px;
}
:deep(.card-img){
  height: 350px;
  object-fit: cover;
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
p{
  margin-top: 5px;
}

</style>
