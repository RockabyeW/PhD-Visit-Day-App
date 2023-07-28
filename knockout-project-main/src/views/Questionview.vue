<script setup>
import detail from "../components/detail.vue"
</script>

<script>
  export default {
    name: 'HomeView',
    components: {

  },
    data() {
      return {
        all: true,
        prof: false,
        iphds: false,
        cphds: false,
        other: false,
        activeTab: "all",
        form: {
          Title: '',
          Description: '',
          Genre: null
        },
        genres: [{ text: 'Select One', value: null }, 'Professor', 'Incoming PhDs', 'Current PhDs', 'Other'],
        show: true,
        posted:false,
        all: true,
        prof: false,
        iphds: false,
        cphds: false,
        other: false,
        activeTab: "all",
        submittedQuestions: [],
        homepage:true,
        questionpost:false,
        questionnew:false,
        questionview:false,
        selected:""
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const newQuestion = {
          filter: this.form.Genre,
          title: this.form.Title,
          route: `custom-route-${this.submittedQuestions.length + 1}`
        };
        this.submittedQuestions.push(newQuestion);
        alert("Successfully Posted!")
        this.posted = true
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.Title = ''
        this.form.Description = ''
        this.form.Genre = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      changeall(newTab) {
        this.all=true;
        this.prof=false;
        this.iphds=false;
        this.cphds=false;
        this.other=false;
        this.activeTab = newTab;
      },
      changeprof(newTab) {
        this.all=false;
        this.prof=true;
        this.iphds=false;
        this.cphds=false;
        this.other=false;
        this.activeTab = newTab;
      },
      changeiphds(newTab) {
        this.all=false;
        this.prof=false;
        this.iphds=true;
        this.cphds=false;
        this.other=false;
        this.activeTab = newTab;
      },
      changecphds(newTab) {
        this.all=false;
        this.prof=false;
        this.iphds=false;
        this.cphds=true;
        this.other=false;
        this.activeTab = newTab;
      },
      changeother(newTab) {
        this.all=false;
        this.prof=false;
        this.iphds=false;
        this.cphds=false;
        this.other=true;
        this.activeTab = newTab;
      },
      getFilterClass(filter) {
        return filter.toLowerCase().replace(/\s+/g, "-");
      },
      questionpostclick(){
        this.questionpost=true;
        this.homepage=false;
        this.questionnew=false;
      },
      questionnewclick(){
        this.questionpost=false;
        this.homepage=false;
        this.questionnew=true;
      },
      questionviewclick(){
        this.questionpost=false;
        this.homepage=true;
        this.questionnew=false;
      }
    },
    watch: {
    '$route': {
      immediate: true,
      handler: function (to) {
        if (to.path.startsWith('/question/')) {
          this.homepage = true;
          this.questionpost = false;
          this.questionnew = false;
        }
        this.selected=this.$route.params.q_num;
      },

    },
  },
  }
</script>

<template>


<main>
  <div class="relative">
      <div class="header">
        <header><h1>NETWORKING</h1></header>
      </div>
      <div class="topsettle">
            <div class="category">

              <b-nav tabs>
                <b-nav-item disabled >Filter: </b-nav-item>
                <b-nav-item :active="activeTab === 'all'" @click="changeall('all')">All</b-nav-item>
                <b-nav-item :active="activeTab === 'professor'" @click="changeprof('professor')">Professor</b-nav-item>
                <b-nav-item :active="activeTab === 'incoming_phds'" @click="changeiphds('incoming_phds')">Incoming PhDs</b-nav-item>
                <b-nav-item :active="activeTab === 'current_phds'" @click="changecphds('current_phds')">Current PhDs</b-nav-item>
                <b-nav-item :active="activeTab === 'other'" @click="changeother('other')">Other</b-nav-item>
              </b-nav>
            </div>
        </div>
      <div class="outer">
        <div id="side1">
        <div class="create">
          <b-button class="w-100" variant="custom2" @click="questionpostclick">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            Create one!
          </b-button>
        </div>
      <div class="navbar" v-if="all">
        <div>
          <b-button  class="w-100" variant="outline-secondary" v-for="(question, route) in questions.all" v-bind:style="selected==route? 'border: 2px brown solid;' : 'border: 1px grey solid;'" :id="route" :to="`/question/${route}`" >
            <span :class="getFilterClass(question.filter)">{{ question.filter }}</span> {{ question.title }}
          </b-button>
        </div>
        <b-button v-if="submittedQuestions.length > 0 " class="w-100" variant="outline-secondary" v-for="(question, index) in submittedQuestions" :key="index" @click="questionnewclick">
          <span :class="getFilterClass(question.filter)">{{ question.filter }}</span> {{ question.title }}
        </b-button>

      </div>
      <div class="navbar" v-if="iphds">
        <div>
          <b-button  class="w-100" variant="outline-secondary" v-for="(question, route) in questions.iphds" :to="`/question/${route}`" >
            <span :class="getFilterClass(question.filter)">{{ question.filter }}</span> {{ question.title }}
          </b-button>
        </div>

      </div>
      <div class="navbar" v-if="cphds">
        <div>
          <b-button  class="w-100" variant="outline-secondary" v-for="(question, route) in questions.cphds" :to="`/question/${route}`" v-bind:style="selected==route? 'border: 2px brown solid;' : 'border: 1px grey solid;'" >
            <span :class="getFilterClass(question.filter)">{{ question.filter }}</span> {{ question.title }}
          </b-button>
        </div>

      </div>
      <div class="navbar" v-if="other">
        <div>
          <b-button  class="w-100" variant="outline-secondary" v-for="(question, route) in questions.other" :to="`/question/${route}`" v-bind:style="selected==route? 'border: 2px brown solid;' : 'border: 1px grey solid;'">
            <span :class="getFilterClass(question.filter)">{{ question.filter }}</span> {{ question.title }}
          </b-button>
        </div>

      </div>
      <div class="navbar" v-if="prof">
        <div>
          <b-button  class="w-100" variant="outline-secondary" v-for="(question, route) in questions.prof" :to="`/question/${route}`" v-bind:style="selected==route? 'border: 2px brown solid;' : 'border: 1px grey solid;'">
            <span :class="getFilterClass(question.filter)">{{ question.filter }}</span> {{ question.title }}
          </b-button>
        </div>

      </div>
      </div>


        <div id="side2" class="main">
          <div v-if="homepage" class="questionview">
            <detail :title="questions.all[$route.params.q_num].title" :detail="questions.all[$route.params.q_num].detail" :Answer1="questions.all[$route.params.q_num].Answer1" :QName="questions.all[$route.params.q_num].QName" :A1Name="questions.all[$route.params.q_num].A1Name" :A1date="questions.all[$route.params.q_num].A1date" :Qdate="questions.all[$route.params.q_num].Qdate" :Answer2="questions.all[$route.params.q_num].Answer2"  :A2Name="questions.all[$route.params.q_num].A2Name" :A2date="questions.all[$route.params.q_num].A2date" :filter="questions.all[$route.params.q_num].filter"></detail>
        </div>

          <div v-if="questionnew" class="questionview">
            <detail  title="What are some interdisciplinary research collaborations between different departments at Cornell that professors are involved in?" detail="I'm interested in working on research projects that involve collaboration between different fields." QName="Xiaohan Wang" Qdate="2023-5-3" sfilter="Professor">
            </detail>
          </div>


          <div v-if="questionpost" class="questionpost">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Title:"
                label-for="input-1"

              >
                <b-form-input
                  id="input-1"
                  v-model="form.Title"

                  required
                  placeholder="Enter title"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                <b-form-textarea
                  id="input-2"
                  v-model="form.Description"
                  required
                  placeholder="Enter description"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group id="input-group-3" label="Genre:" label-for="input-3">
                <b-form-select
                  id="input-3"
                  v-model="form.Genre"
                  :options="genres"
                  required
                ></b-form-select>
              </b-form-group>

              <br>
              <div></div>



              <b-button type="submit" variant="danger" size="lg">Post</b-button>
              <p></p>
              <b-button type="reset" size="sm" variant="danger">Reset</b-button>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card> -->
        </div>

      </div>
      </div>

</div>
</main>

</template>

<style scoped>

span{
    padding: 1px;
    padding-left: 6px;
    padding-right: 6px;
}
.incoming-phds {
      background-color: #f787ab; /* Green */
      border-radius: 5px 5px 5px 5px;
      font-size: 12px;

    }

    .current-phds {
      background-color: #f49b5b; /* Blue */
      border-radius: 5px 5px 5px 5px;
      font-size: 12px;
    }

    .other {
      background-color: #fcca7f; /* Orange */
      border-radius: 5px 5px 5px 5px;
      font-size: 12px;
    }

    .professor {
      background-color: #f9958e; /* Red */
      border-radius: 5px 5px 5px 5px;
      font-size: 12px;
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
  border-radius: 10px 10px 0 0;
}

h1{
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  .choosequestion{
    font-size: 30px;
    font-weight:900;
    color: brown;
    text-align: center;
    transform: translate(0,-60px);
  }
  .category{
    width:100%;
  }
  .topsettle{
    align-items: start;
    display: flex;
    padding-top: 10px;
    width: 100%;
  }

@media (min-width: 350px) {
  .main{
    position:relative;

    width: 100%;
    overflow-y: auto;
    max-height:455px;
  }

  .outer{
    height: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #side1{
    top:30px;
    padding: 10px;
    height: 30%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  #side2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    border-top: 2px solid brown;
  }



}

  @media (min-width: 1100px) {
    .main{
    position:relative;

    width: 100%;
    overflow-y: auto;
    top:10px;
    max-height:730px;
  }

    :deep(.btn){
      font-size: 13px;
    }
    .outer{
      flex-direction: row;
      border: none;
    }
    #side1{
    border: none;
    padding: 10px;
    height: 100%;
    max-height: 750px;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  #side2{
    border: none;
  }

  }
  :deep(.btn-custom2){
      border: none;
      background-color: brown;
      color: white !important;
      font-size:14px;
      font-weight: 500;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      --bs-btn-hover-bg: rgb(116, 0, 0);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
  }

  .relative{
    border: 2px solid brown;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    height: 100%;
    background-color: rgb(255, 250, 250);
  }
  .header{
    border-radius: 0;
    position: relative;
  }
  .navbar, .create{
    width: 100%;
    position: relative;
    top:0;
  }
  .navbar{
    height: 100%;
    overflow: scroll;

  }
  :deep(.nav-link){
    color: brown;
  }
  :deep(.navbar .btn), .create{
    margin-bottom: 8px;
  }
  :deep(.navbar .btn){
    color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  :deep(.navbar .btn:hover){
    background-color: white;
  }
  .questionview{
    position:absolute;
    top:0px;
    padding:30px;
  }

  .selected{
    border: 2px brown solid;
  }

  </style>
