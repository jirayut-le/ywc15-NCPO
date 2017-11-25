<template>
    <div id="navbar">
        <div id="logo">
            <img src="../assets/Logo.png">
        </div>
        <div id="menu">
            ☰
        </div>
    </div>
  
</template>

<style lang="scss" scoped>

#navbar {
    position: fixed;
    z-index: 5;
    top: 0;
    margin: 50px;
    width: 90%;
    animation: fadeintop 2.5s;

    #logo {
        float: left;
        img {
            max-width:50px;
            max-height:50px;
            width: auto;
            height: auto;
        }
    }

    #menu {
        float: right;
        font-size: 35px;
        margin: -12px;
        color: #fff;
    
        &:hover {
            opacity: 0.5;
        }
    }
}

@keyframes fadeintop {
    0% {
        opacity: 0;
        top: -1rem;
    }

    100% {
        opacity: 1;
        top : 0;
    }
}

</style>
