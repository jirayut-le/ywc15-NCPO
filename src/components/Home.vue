<template>
  <div class="home">
    <div class="next-section" id="section01">
        <div id="content">
            <h1>{{ title }}</h1>
            <h5>{{ subtitle }}</h5>
        </div>
        <a href="#"><span></span>เริ่มต้น</a>
    </div>
    <div class="figure">
      <img src="../assets/prayoot.png">
    </div>
    <div id="background">
      <video playsinline autoplay muted loop>
          <source src="../assets/video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'คสช.',
      subtitle: 'คณะรักษาความสงบแห่งชาติ'
    }
  }
}
</script>

<style lang="scss" scoped>

#content {
  position: absolute;
  text-align: center;
  top: 67%;
  left: 49%;
  z-index: 2;
  color: #fff;
  font-family: 'Pattaya', sans-serif;
  transform: translate(-50%, -50%);

  h1 {
    padding-left: 20px;
    font: 140px 'Pattaya', sans-serif;
  }

  h5 {
    margin-top: -15%;
    font: 25px 'Pattaya', sans-serif;
  }
  
}

.figure {
  background-position: center;
  img {
    z-index: 1;
    position: absolute;
    transform: scale(0.7) translate(-80%, -20%);
    animation: fadeinbottom 4s;
  }
}

#background {
  background-position: center;
  background-color: #000;

  &::after {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 75%,rgba(0,0,0,1) 100%);
  }

  video {
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%) scale(0.7);
    filter: blur(10px);
  }
}

.next-section a {
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 47%;
  z-index: 3;
  display: inline-block;
  transform: translate(0, -50%);
  color: #fff;
  font : normal 400 15px/1 'Kanit', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
  text-align: center;
  animation: fadeinbottombounce 1.5s;

  &:hover {
    opacity: .5;
  }
}

#section01 a {
  padding-top: 60px;
  
  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 46px;
    height: 46px;
    margin-left: -23px;
    border: 1px solid #fff;
    border-radius: 100%;
    box-sizing: border-box;
    text-align: center;

    &::after {
      position: absolute;
      top: 50%;
      /* left: 50%; */
      content: '';
      width: 16px;
      height: 16px;
      margin: -12px 0 0 -8px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transform: rotate(-45deg);
      box-sizing: border-box;
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      content: '';
      width: 44px;
      height: 44px;
      box-shadow: 0 0 0 0 rgba(255,255,255,.1);
      border-radius: 100%;
      opacity: 0;
      animation: sdb03 3s infinite;
      box-sizing: border-box;
    }
  }
}

@keyframes sdb03 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 60px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeinbottom {
    0% {
        opacity: 0;
        bottom: -45%;
    }

    100% {
        opacity: 1;
        bottom: -35.5%;
    }
    
}

@keyframes fadeinbottombounce {
  0% {
    opacity: 0;
    bottom: -3rem;
    transform: scale(0.6);
  }

  70% {
    opacity: 1;
    bottom: 0.2rem;
    
  }

  100% {
    bottom: 0;
  }
    
}

</style>
