<template>
  <body>
  <h1>This is Home</h1>
    <div>
      <form>
        <input type="text" placeholder="writeSomething"/>
        <input type="submit" @click="submit()"/>
      </form>
      <h3>return {{success}}</h3>
    </div>
  </body>
</template>

<script>
  export default ({
    data(){
      return{
        success : 1,
      }
    },
    methods: {
      submit() {
        this.$axios({
          method: 'post',
          url:'/connectVue'
        })
          .then(response => {
            var success = response.data.success;
            this.success = success;
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }
  })
</script>

<style scoped>

</style>
