<template>
  <b-row>
      <div class="mb-3">
        <b-card
            @click="this.$router.replace({ path: route })"
            overlay
            :img-src="`${baseDir}images/${img}`"
            img-alt="Card Image"
            text-variant="white"
            class="mb-2"
        >
            <div class="overlay">
                <h2>{{ name }}</h2>
              <p>
                {{about}}
              </p>

            </div>

        </b-card>

        </div>

      </b-row>
</template>

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
  route: {
    type: String,
    required: true
  }
});
</script>

<style scoped>

@media(min-width: 400px) {
  h2{
      font-size: 24px;
    }
    p{
      font-size: 12px;
    }
    .overlay{
    height: 50%;

  }
}
 @media(min-width: 750px) {
  h2{
      font-size: 28px;
    }
    p{
      font-size: 14px;
    }
    .overlay{
    height: 30%;

  }
}
@media(min-width: 1050px) {
  h2{
      font-size: 28px;
    }
    p{
      font-size: 14px;
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
    height: 35%;

  }
  }
@media(min-width: 1500px) {
  .overlay{
    height: 50%;

  }
}

h2{
  margin-top: 5px;
  margin-bottom: 10px;
}
:deep(.card){
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: 1px solid brown;
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
