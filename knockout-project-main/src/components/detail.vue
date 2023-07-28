<script setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },

  QName: {
    type: String,
    required: true
  },

  Answer1: {
    type: String,

  },
  A1Name: {
    type: String,

  },
  A1date: {
    type: String,

  },

  Answer2: {
    type: String,

  },
  A2Name: {
    type: String,

  },
  A2date: {
    type: String,

  },


  Qdate: {
    type: String,
    required: true
  },

  filter:{
    type: String,
    required: true
  }

})


</script>
<script>
  export default {
    data() {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        reply1: false,
        reply2: false,
        reply3: false,
        reply4: false,
        temp1:'',
        temp2:'',
        temp3:'',
        temp4:'',
        currentDateTime: "",


      }
    },
  methods:{
    getCurrentDateTime() {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      this.currentDateTime = now.toLocaleTimeString("en-US", options);
    },
    visiblereply1(){
      this.show1=true
    },
    confirm1(){
      this.show1=false;
      this.reply1=true;
      this.getCurrentDateTime();

    },
    visiblereply2(){
      this.show2=true
    },
    confirm2(){
      this.show2=false;
      this.reply2=true;
      this.getCurrentDateTime();

    },
    visiblereply3(){
      this.show3=true
    },
    confirm3(){
      this.show3=false;
      this.reply3=true;
      this.getCurrentDateTime();

    },
    visiblereply4(){
      this.show4=true
    },
    confirm4(){
      this.show4=false;
      this.reply4=true;
      this.getCurrentDateTime();

    },
    resetTempValues() {
      this.temp1 = '';
      this.temp2 = '';
      this.temp3 = '';
      this.temp4 = '';
    },

  },

  watch:{
    $route() {
      this.resetTempValues();
    },
  }
}

</script>

<template>
  <b-card class="Question" header-tag="header">
    <p class="title">{{ title }}</p>
    <p class="filter">Genre: {{ filter }}</p>
    <p class="QName">{{ QName }}</p>
    <p class="Qdate">{{ Qdate }}</p>
    <p class="detail">{{ detail }}</p>
    <b-button class="mt-3" variant="outline-danger" @click="visiblereply3">Answer</b-button>
    <div v-if="show3" class="mt-3">
      <b-form-textarea v-model="temp3"></b-form-textarea>
      <b-button class="mt-3" @click="confirm3" variant="outline-danger">Confirm</b-button>
    </div>
  </b-card>
  <h2>Answers:</h2>
  <div class="Answer">
    <b-card v-if="Answer1" class="answer-card">
      <p class="A1name">{{ A1Name }}</p>
      <p class="A1date">{{ A1date }}</p>
      <p class="Answer1">{{ Answer1 }}</p>
      <b-button class="w-100" v-if="Answer1" variant="outline-danger" @click="visiblereply1">Reply</b-button>
      <div v-if="show1" class="mt-3">
        <b-form-textarea v-model="temp1"></b-form-textarea>
        <b-button class="mt-3" @click="confirm1" variant="outline-danger">Confirm</b-button>
      </div>

      <b-card v-if="reply1" class="reply-card">
        <p class="reply-header"><span class="username">Xiaohan Wang</span> at <span class="datetime">{{ currentDateTime }}</span> replied:</p>
        <p class="reply-text">{{temp1}}</p>
      </b-card>
    </b-card>
    <b-card v-if="Answer2" class="answer-card">
      <p class="A2name">{{ A2Name }}</p>
      <p class="A2date">{{ A2date }}</p>
      <p class="Answer2">{{ Answer2 }}</p>
      <b-button v-if="Answer2" class="w-100" variant="outline-danger" @click="visiblereply2">Reply</b-button>
      <div v-if="show2" class="mt-3">
        <b-form-textarea v-model="temp2"></b-form-textarea>
        <b-button class="mt-3" @click="confirm2" variant="outline-danger">Confirm</b-button>
      </div>
      <b-card v-if="reply2" class="reply-card">
        <p class="reply-header"><span class="username">Xiaohan Wang</span> at <span class="datetime">{{ currentDateTime }}</span> replied:</p>
        <p class="reply-text">{{temp2}}</p>
      </b-card>
    </b-card>
  </div>

  <div v-if="reply3" class="newAnswer">
    <b-card class="answer-card">
      <p class="A1name">Xiaohan Wang</p>
      <p class="A1date">2023-04-25</p>
      <p class="Answer1">{{ temp3 }}</p>
      <b-button v-if="reply3" @click="visiblereply4" variant="outline-danger">Reply</b-button>
      <div v-if="show4" class="mt-3">
        <b-form-textarea v-model="temp4"></b-form-textarea>
        <b-button class="mt-3" @click="confirm4" variant="outline-danger">Confirm</b-button>
      </div>
      <b-card v-if="reply4" class="reply-card">
        <p class="reply-header"><span class="username">Xiaohan Wang</span> at <span class="datetime">{{ currentDateTime }}</span> replied:</p>
        <p class="reply-text">{{temp4}}</p>
      </b-card>
    </b-card>
  </div>
</template>

<style>
  .Question {
    width: 100%;
    margin: auto auto 30px;
    padding: 20px;
  }

  .title {
    font-size: 40px;
    font-weight: 400;
    color: #3b3b3b;
  }

  .QName,
  .A1name,
  .A2name {
    color: #4c8bf5;
  }

  .Qdate,
  .A1date,
  .A2date {
    color: #6c757d;
  }

  .detail,
  .Answer1,
  .Answer2 {
    color: #2d2d2d;
  }

  .answer-card {
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
  }
  .reply-card {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
  }

  .reply-header {
    font-weight: bold;
  }

  .username {
    color: #4c8bf5;
  }

  .datetime {
    color: #6c757d;
  }

  .reply-text {
    color: #2d2d2d;
  }

  @media screen and (max-width: 767px) {
    .Question {
      width: 100%;
    }

    .title {
      font-size: 24px;
    }

    .answer-card {
      padding: 10px;
    }
  }
  .reply-card {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
  }

  .reply-header {
    font-weight: bold;
  }

  .username {
    color: #4c8bf5;
  }

  .datetime {
    color: #6c757d;
  }

  .reply-text {
    color: #2d2d2d;
  }
  .filter{
    color:brown
  }

</style>
