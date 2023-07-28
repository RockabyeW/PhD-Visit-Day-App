<template>
  <main>
    <div class="relativeh">

      <div class="mainh">
        <div class="b-container">
          <b-row class="justify-content-center">
            <b-col cols="12" md="8" lg="6">
              <b-card
                :img-src="`${baseDir}images/${this.Attraction[this.$route.params.place].img}`"
                img-alt="Landscape Image"
                img-top
                class="mb-3 shadow rounded"
              >
                <b-card-title class="mb-3">{{this.Attraction[this.$route.params.place].name}}</b-card-title>
                <b-card-text>
                  <strong>About:</strong> {{ this.Attraction[this.$route.params.place].about}}
                </b-card-text>
                <b-card-text>
                  <strong>Hours:</strong> {{ this.Attraction[this.$route.params.place].hours}}
                </b-card-text>
                <b-card-text>
                  <strong>Location:</strong> {{ this.Attraction[this.$route.params.place].location}}
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
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0px;
    right: 0px;
    padding: 10px;
    height: 88vh;
    overflow-y: auto;
  }
  :deep(.card){
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: 1px solid brown;
  overflow-x:hidden;
  }
  .relativeh {
    width: 100%;
    height: 100%;
    position: relative;
  }


</style>
