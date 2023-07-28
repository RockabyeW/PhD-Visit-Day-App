<script>
  export default {
    name: 'Profile',
    components: {

  },
    data() {
      return {
        value: ['Extrovert', 'Frisbee'],
        editing: false,
        student: {
          name: "Xiaohan Wang",
          sex: "Male",
          cornellId: "5444833",
          netId: "xw642",
          phone: "6072795331",
          email: "xw642@cornell.edu",
        homeAddress: {
          street: "156 E State St",
          city: "Ithaca",
          state: "NY",
          country: "United States",
          relationship: "Student",
        },
        trip: {
          purpose: "PhD visit day",
          departureDate: "2023-04-25",
          departedFrom: "Ithaca",
          goingTo: "New York",
          returnDate: "2023-05-22",
          returnedFrom: "Las Vegas",
          returnedTo: "Ithaca",
        },
      }
    }
  },
    methods: {
      toggleEditing() {
        this.editing = !this.editing;
    },
    }
  }
</script>

<template>
    <main>
      <div class="relative">
      <div class="header">
        <header><h1>PROFILE</h1></header>
      </div>

      <div class="main">
        <b-button
                variant="custom2"
                size="lg"
                @click="toggleEditing"
                id="edit"
              >
                {{ editing ? "Save" : "Edit" }}
        </b-button>
        <div class="studentinfo">
          <b-container fluid>
            <h2>Student Information</h2>
            <b-row>
              <b-col xs="12" sm="6">
                <label class="mb-0"><h5>Name: </h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-0" v-if="!editing">{{ student.name }}</label>
                <b-form-input class="mb-0" type="name" v-else v-model="student.name" />
              </b-col>

              <b-col xs="12" sm="6">
                <label class="mb-0"><h5>Sex: </h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-0" v-if="!editing">{{ student.sex }}</label>
                <b-form-input class="mb-0" v-else v-model="student.sex" />
              </b-col>
            </b-row>
            <br>
            <!-- <b-row>
              <b-col xs="12" sm="6">
                <label class="mb-0"><h5>Cornell ID: </h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-0">{{ student.cornellId }}</label>
              </b-col>

              <b-col xs="12" sm="6">
                <label class="mb-0"><h5>Net ID: </h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-0">{{ student.netId }}</label>
              </b-col>
            </b-row> -->
            <br>
            <b-row>
              <b-col xs="12" sm="6">
                <label class="mb-0"><h5>Phone:</h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-0" v-if="!editing">{{ student.phone }}</label>
                <b-form-input  class="mb-3" type="tel" v-else v-model="student.phone" />
              </b-col>

              <b-col xs="12" sm="6">
                <label class="mb-0"><h5>Email:</h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-0"  v-if="!editing">{{ student.email }}</label>
                <b-form-input  class="mb-3" type="email" v-else v-model="student.email" />
              </b-col>
            </b-row>


          </b-container>
          <br>

          <b-container fluid class="address">
            <b-card bg-variant="light">
              <b-form-group
                label-cols-lg="2"
                label="Home Address"
                label-size="lg"
                label-class="font-weight-bold pt-0 font-size-24"
                class="mb-0"
              >
                <b-form-group
                  label="Street:"
                  label-for="nested-street"
                  label-cols-sm="3"
                  label-cols="5"
                  label-align-sm="right"
                  class="form-row"
                >
                <label class="mb-flex"  v-if="!editing"  >{{ student.homeAddress.street }}</label>
                <b-form-input class="mb-0"  type="street" v-else v-model="student.homeAddress.street" />
                </b-form-group>

                <b-form-group
                  label="City:"
                  label-for="nested-city"
                  label-cols-sm="3"
                  label-cols="5"
                  label-align-sm="right"
                  class="form-row"
                >
                <label v-if="!editing"  class="mb-flex">{{ student.homeAddress.city }}</label>
                <b-form-input class="mb-0"  type="city" v-else v-model="student.homeAddress.city" />
                </b-form-group>

                <b-form-group
                  label="State:"
                  label-for="nested-state"
                  label-cols-sm="3"
                  label-cols="5"
                  label-align-sm="right"
                  class="form-row"
                >
                <label v-if="!editing" class="mb-flex" >{{ student.homeAddress.state }}</label>
                <b-form-input  class="mb-0" type="state" v-else v-model="student.homeAddress.state" />
                </b-form-group>

                <b-form-group
                  label="Country:"
                  label-for="nested-country"
                  label-cols-sm="3"
                  label-cols="5"
                  label-align-sm="right"
                  class="form-row"
                >
                <label class="mb-flex" v-if="!editing">{{ student.homeAddress.country }}</label>
                <b-form-input class="mb-0"  type="country" v-else v-model="student.homeAddress.country" />
                </b-form-group>

              </b-form-group>
            </b-card>

          </b-container>

          <br>

          <b-container fluid>
            <div>
              <label for="tags-basic"><h5 id="tagHeader">Your Tags:</h5></label>
              <b-form-tags input-id="tags-basic" v-model="value" tag-variant="custom2"></b-form-tags>
            </div>
          </b-container>

        </div>

        <br>

        <div class="tripinfo">
          <b-container fluid>
            <h2 id="tripHeader">Trip Information</h2>
            <br>

            <b-form-group
                  label="Business Purpose of Trip/Expenditure:"
                  label-for="nested-country"
                  label-cols-sm="7"
                  label-cols="9"
                  label-align-sm="right"
                  id=""
                >
                <label class="mb-flex"  v-if="!editing">{{ student.trip.purpose }}</label>
                  <b-form-input class="mb-0"  v-else v-model="student.trip.purpose" />
            </b-form-group>
            <br>

            <b-row class="my-1">
              <b-col lg="4" md="12" sm="12" class="form-row2">
                <label class="mb-3"><h5>Departure Date:</h5></label>
                <div class="d-block mb-2"></div>
                <label  class="mb-3" v-if="!editing">{{ student.trip.departureDate }}</label>
                <b-form-input  class="mb-3" type="date" v-else v-model="student.trip.departureDate" />
              </b-col>
              <b-col lg="4" md="6" sm="6" class="form-row2">
                <label class="mb-3"><h5>Departed From:</h5></label>
                <div class="d-block mb-2"></div>
                <label v-if="!editing" class="mb-3" >{{ student.trip.departedFrom }}</label>
                <b-form-input class="mb-3"  v-else v-model="student.trip.departedFrom" />
              </b-col>
              <b-col lg="4" md="6" sm="6" class="form-row2">
                <label class="mb-3"><h5>Going to:</h5></label>
                <div class="d-block mb-2" ></div>
                <label class="mb-3"  v-if="!editing">{{ student.trip.goingTo }}</label>
                <b-form-input class="mb-3"  v-else v-model="student.trip.goingTo" />
              </b-col>
            </b-row>
            <br>
            <b-row class="my-1">
              <b-col lg="4" md="12" sm="12" class="form-row2">
                <label class="mb-3"><h5>Return Date:</h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-3"  v-if="!editing">{{ student.trip.returnDate }}</label>
                <b-form-input  class="mb-3" type="date" v-else v-model="student.trip.returnDate" />
              </b-col>
              <b-col lg="4" md="6" sm="6" class="form-row2">
                <label class="mb-3"><h5>Returned From:</h5></label>
                <div class="d-block mb-2"></div>
                <label class="mb-3"  v-if="!editing">{{ student.trip.returnedFrom }}</label>
                <b-form-input class="mb-3"  v-else v-model="student.trip.returnedFrom" />
              </b-col>
              <b-col lg="4" md="6" sm="6" class="form-row2">
                <label class="mb-3"><h5>Returned to:</h5></label>
                <div class="d-block mb-2"></div>
                <label  class="mb-3" v-if="!editing">{{ student.trip.returnedTo }}</label>
                <b-form-input class="mb-3"  v-else v-model="student.trip.returnedTo" />
              </b-col>
            </b-row>
            <br>

          </b-container>
        </div>
      </div>

    </div>


    </main>
</template>

<style scoped>

@media(min-width: 300px) {
    :deep(.form-row){
    width: 100%;
  }
  .main{
    margin-bottom: 40px;
  }
}
@media(min-width: 800px) {
    :deep(.form-row){
    width: 50%;
  }
  .main{
    margin-bottom: 0px;
  }
}
.blank{
  height:50px;
}
.header {
  position: absolute;
  height: 70px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: brown;
  text-align: center;
  padding: 10px;
  color: white;
  font-size: 35px;
}

  h1{
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  }

  .main {
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0px;
    right: 0px;
    padding: 10px;
    overflow-y: auto;


  }
  :deep(.card-body){
    background-color: white;
  }

  .relative{
    top:0px;
    width:100%;
    height: 100%;
    position:relative;
    border-radius: 10px;
    border: 2px solid brown;
    overflow: hidden;
    background-color: rgb(255, 250, 250);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  :deep(.col-sm-6){
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  :deep(.mb-flex){
    display: flex;
    flex-direction: columns;
    align-items: center;
    justify-content: flex-start;
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
  }
  :deep(.col-form-label){
    font-size: 17px;
    font-weight: 500;
  }
  :deep(.form){
    display: flex;
    flex-direction: columns;
    align-items: center;
    justify-content: flex-start;
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
  }
  :deep(.font-size-20){
    font-size: 25px;
  }

  :deep(.col){
    flex-wrap: wrap;
    display: flex;

  }
  :deep(.form-row2){
    display: flex;
    justify-content: flex-start;
  }
  label h5{
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 0;
    margin-right: 10px;
  }
  label{
    align-items: center;
  }
  h2{
    margin-bottom: 20px;
    margin-top: 10px;
  }
  #tagHeader{
    margin-bottom: 15px;
  }
  :deep(.bg-custom2){
    border: none;
    background-color: brown;
    color: white !important;
    font-size:12px;
    font-weight: 500;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    --bs-btn-hover-bg: rgb(85, 0, 0) !important;
}
:deep(.btn-custom2){
    border: none;
    background-color: brown;
    color: white !important;
    font-size:12px;
    font-weight: 500;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    --bs-btn-hover-bg: rgb(85, 0, 0) !important;
}

:deep(.btn-custom2:hover){
    background-color: rgb(131, 43, 43);
    box-shadow: 0 3px 16px 0 rgba(115, 49, 49, 0.2);
}
#tripHeader{
  margin-bottom: 0;
}
#edit{
  position: absolute;
  right:20px;
  top: 20px;
}
  </style>
