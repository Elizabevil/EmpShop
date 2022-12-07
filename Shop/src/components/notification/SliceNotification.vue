<template lang="pug">
button(@click="test") SliceNotification

</template>
<script setup lang="ts">
import {LogError, LogSuccess} from "../../utils/notification/Index"

const test = () => {
  LogSuccess('saaas')
}
</script>
<style lang="sass" scoped>


</style>