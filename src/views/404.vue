<template>
    <div class="notfount-page">
        <img src="../assets/images/404.png" />
        <span class="notfound-msg">
            你查看的内容已经不见了
        </span>
    </div>
</template>


<style lang="stylus" scoped>

.notfount-page
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items :center;
    img
        width:80%;
    .notfound-msg
        margin-top:10px;
        opacity: 0.5;
        font-color:gray;

    

</style>