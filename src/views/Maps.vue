<template>
  <div class="maps">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Look at all the Maps!</h1>
    <img
      src="https://maps.googleapis.com/maps/api/staticmap?center=Aldwych+House,+Aldwych,+London
      &zoom=14
      &size=600x300
      &maptype=roadmap
      &markers=color:blue%7Clabel:A%7C51.5135059,-0.1182435
      &markers=color:green%7Clabel:B%7C51.5172068,-0.1228792
      &markers=color:red%7Clabel:C%7C51.5174514,-0.1261115
      &markers=color:pink%7Clabel:D%7C53.4777139,-2.2454031
      &scale=1
      &key=AIzaSyDZpudFDxoIf64FASyuZgcclNMSBLCtDm0"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "maps",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss">
h1 {
  color: $color-foreground;
}
</style>
