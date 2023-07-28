<template>
  <main>
    <div class="relative">
      <div class="header">
        <header><h1>REIMBURSEMENT</h1></header>
      </div>
      <div class="main">
        <b-card class="upload-card">
          <b-row>
            <b-col class="text-center mt-3">
              <p class="fs-2">Please download the
              <b-link  href="https://www.dfa.cornell.edu/sites/default/files/travel-reimbursement-form.pdf" target="_blank">Form</b-link>
              ,<br> Sign and upload </p>
            </b-col>
          </b-row>

          <b-row>
            <b-col class="text-center">
              <input
            type="file"
            name="file"
            ref="file"
            class="custom-file-upload"
            v-on:change="handleFileUpload">
              <p v-if="fileUploaded" class="text-success">Successfully uploaded!</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="text-center">

              <b-button  variant="custom2" @click="handlesubmit">Submit</b-button>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </main>
</template>

<script>
 export default {
  data() {
    return {
      fileUploaded: false
    };
  },
  methods: {
    handleFileUpload(event) {
      this.fileUploaded = event.target.files.length > 0;
    },
    handlesubmit() {
      if (!this.fileUploaded) {
        alert('Please upload a file before submitting');
      } else {
        alert('You have successfully submitted the file');
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
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
    z-index: 12;
  }

  .main {
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0px;
    right: 0px;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .upload-card {
    width: 100%;
    max-width: 750px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .upload-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .fs-2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .relative {
    width: 100%;
    height: 100%;
    position: relative;
  }
  @media (max-width: 767px) {
.fs-2 {
font-size: 1rem;
font-weight: 500;
    }

    .upload-card {
      margin: 10px;
      padding: 15px;
    }
  }
  :deep(.btn-custom2){
    border: none;
    background-color: brown;
    color: white !important;
    font-size:12px;
    font-weight: 500;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    --bs-btn-hover-bg: rgb(85, 0, 0) !important;
    /* position: absolute; */
    /* padding: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    top:10px;
    right: 10px; */
}
.upload-card{
  border: 1px solid brown;
  background-color: rgb(252, 230, 230);
}
input{
  min-width:200px;
  margin:0 auto;
  transform: translate(20%,0);
  margin-bottom: 30px;
  margin-top: 10px;
}
.card .row .col a{
  color: brown;
}

:deep(input button){
  color: brown;
}
:deep(.event .btn-custom2:hover){
    background-color: rgb(131, 43, 43);
    box-shadow: 0 3px 16px 0 rgba(115, 49, 49, 0.2);
}
.relative{
  border: 2px brown solid;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 250, 250);
}

</style>
