<template>
    <div>
        <br>
        <!-- {{ store.count }} -->
        <!-- <el-button @click="store.increment">加一</el-button> -->
        <!-- <el-button @click="store.doubleCount">乘二</el-button> -->
        <el-input style="width: 250px;" v-model="searchValue"></el-input>
        <el-button @click="search">搜索</el-button>
        <h3 v-html="paragraph"></h3>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue';
// import { userService } from '../config/api';
// import { userUrl } from '../config/url';
// import { useCounterStoreForSetup } from '../store';
// const store=useCounterStoreForSetup();
let searchValue=ref<string>('')
let defaultParagraph=`我曾经看过山和大海，陈才敏大sb，陈才敏陈才敏大sb，陈才敏大sb，哈哈哈，一二三四五，上山打老虎`
let paragraph=ref<string>(defaultParagraph);
const search=()=>{
    let value=searchValue.value;
    if(value.length>defaultParagraph.length)return;
    let len=value.length;
    let l=0;
    let res=''
    while(l<defaultParagraph.length-len){
        let str=equalStr(l,len);
        if(str==value){
            res+=getStyleSearch(str);
            l+=len
        }else{
            res+=defaultParagraph[l];
            l++
        }
    }
    paragraph.value=res
}

const equalStr=(i:number,len:number)=>{
    let str='';
    for(;;i++){
        str+=defaultParagraph[i];
        if(str.length==len)return str
    }
}
const getStyleSearch=(str:string)=>{
    return `<span style="background-color: #FDCC00;">${str}</span>`
}

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
