<template>
    <div>
        {{ store.count }}
        <el-button @click="store.increment">加一</el-button>
        <el-button @click="store.doubleCount">乘二</el-button>
    </div>
</template>

<script lang='ts' setup>
import { reactive } from 'vue';
// import { userService } from '../config/api';
// import { userUrl } from '../config/url';
import { useCounterStoreForSetup } from '../store';
const store=useCounterStoreForSetup();
const state = reactive({
    userName: ''
})

// getUser()

// function getUser() {
//     userService.getUser(userUrl.get, '').then((resp: any) => {
//         console.log(resp)
//         state.userName = resp.data;
//     })
// }
</script>

<style scoped>

</style>
