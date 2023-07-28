<script>
  export default {
  data() {
    return {
      type:this.$route.params.type,
      Fixture_selectedType:
      {"professor":this.professor,
       "lab":this.lab,
       "attraction":this.Attraction,
       "dining":this.Dining
      }
    }
  }
}
    </script>
<template>
  <main>
    <div class="relativeh">

      <div class="mainh">

        <div class="b-container">
          <b-button class="closeOverlay" variant="custom2" :to="'/'">X</b-button>
          <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
              <b-card
                :img-src="`${baseDir}images/${Fixture_selectedType[type][this.$route.params.place].img}`"
                img-alt="Landscape Image"
                img-top
                class="mb-3 shadow rounded"
              >
                <b-card-title class="mb-3">{{Fixture_selectedType[type][this.$route.params.place].name}}</b-card-title>
                <b-card-text v-if="type=='professor'">
                  <strong>Contact:</strong> {{ Fixture_selectedType[type][this.$route.params.place].email}}
                </b-card-text>
                <b-card-text v-if="type=='professor'">
                  <strong>Area of Interest:</strong> {{ Fixture_selectedType[type][this.$route.params.place].focus}}
                </b-card-text>
                <b-card-text>
                  <strong>About:</strong> {{ Fixture_selectedType[type][this.$route.params.place].about}}
                </b-card-text>
                <b-card-text v-if="type=='attraction'||type=='dining'">
                  <strong>Hours:</strong> {{ Fixture_selectedType[type][this.$route.params.place].hours}}
                </b-card-text>
                <b-card-text>
                  <strong>Location:</strong> {{ Fixture_selectedType[type][this.$route.params.place].location}}
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .h1h {
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  .mainh {
    position: relative;
    padding: 20px;
    height: 100%;
    overflow-y: auto;
  }
  :deep(.card){
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: 1px solid (103, 27, 27);
  overflow-x:hidden;
  background-color: rgb(103, 27, 27);
  color: white;
  }
  .relativeh {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .b-container{
    position: relative;
    display: flex;
    flex-direction: column;
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
      width: fit-content;
  }
    :deep(.closeOverlay){
    position: absolute;
    left: 10px;
    top:10px;
    z-index: 10;
  }
</style>
