<script>
export default {
  name: 'SignOut',
  mounted (){
    this.signOut()
  },
  methods:{
    signOut(){
      localStorage.removeItem('userType')
      localStorage.removeItem('email')
      localStorage.removeItem('userId')
      window.dispatchEvent(new Event("storage"));

      this.$router.push({name : 'SignIn'})

    }
  }
}



</script>
<template>
 
</template>
<style>
</style>