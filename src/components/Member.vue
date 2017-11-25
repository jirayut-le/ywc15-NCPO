<template>
    <div id="member">
        <div id="title">{{ title }}</div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: "บุคลากร"
        }
    }

}
</script>


<style lang="scss" scoped>

#member {
    height: 100vh;
    padding: 50px 100px 50px 100px;
    background-image: linear-gradient(-180deg,#3f3f3f 0%, #3f3f3f 50%,#000000 100%);
}

#title {
    color: #fff;
    font-weight: 500;
    font-size: 40px;
}

</style>
