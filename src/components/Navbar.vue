<template>
    <div class="navbar">
        <div class="logo">
            <img src="../assets/Logo.png">
        </div>
        <div class="menu">
            ☰
        </div>
    </div>
  
</template>

<style lang="scss" scoped>

.navbar {
    position: relative;
    z-index: 5;
    top: 0;
    margin: 50px;

    .logo {
        float: left;
        img {
            max-width:50px;
            max-height:50px;
            width: auto;
            height: auto;
        }
    }

    .menu {
        float: right;
        font-size: 35px;
        color: #fff;
    }
}

</style>
