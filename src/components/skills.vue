<template>
  <div>
    <div class="holder">
      <form @submit.prevent="addSkill">
      <input type="text" placeholder="Enter something" v-model="skill" v-validate="'min:5'" name="skill">
      <transition name="alert-in" enter-activ-class="animated flipInX" leave-active-class="animated flipOutX">
      <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
    </transition>
      <!-- <input type="checkbox" id="checkbox" v-model='checked'> -->
    </form>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <li v-for="(data,index) in lines" :key='index'>
          {{data.skill}}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
        </transition-group>
      </ul>
      <p> Head Above Water</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'lines',
  data(){
    return {
      checked:false,
      skill:'',
      lines:[
        {"skill":"Keep the calm before the storm"},
        {"skill":"Bar the windows and the doors"},
      ],


    }
  },
  methods: {
    addSkill(){
      this.$validator.validateAll().then((result) =>{
        if(result){
          this.lines.push({skill:this.skill})
          this.skill="";
          // console.log("this checkbox value is "+this.checked);
        } else {
          console.log('not valid');
        }
      })
  },
  remove(id){
    this.lines.splice(id,1);
  }
}
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.holder {
    background: #C6D2DA;
    width: 605px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #f0f5f5;
    border-left: 5px solid #c2d6d6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
      width: calc(100% - 40px);
      border: 0;
      padding: 20px;
      font-size: 1.3em;
      background-color: #323333;
      color: #687F7F;
    }
    .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active{
    animation: bounce-in .5s;
  }
  .alert-in-leave-active{
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i{
  float:right;
  cursor: pointer;
}
</style>
