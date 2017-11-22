<template>
  <div class="home">
    <div class="next-section" id="section01">
        <div id="content">
            <h1>{{ title }}</h1>
            <h5>{{ subtitle }}</h5>
        </div>
        <a href="#"><span></span>เริ่มต้น</a>
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
  name: 'HelloWorld',
  data () {
    return {
      title: 'คสช.',
      subtitle: 'คณะรักษาความสงบแห่งชาติ'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#content {
  position: absolute;
  text-align: center;
  top: 67%;
  left: 49%;
  z-index: 2;
  color: #fff;
  font-family: 'Pattaya', sans-serif;
  -webkit-transform: translate(-50%, -50%);
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

#background {
  background-position: center;
  background-color: #000;
}

#background::after {
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 75%,rgba(0,0,0,1) 100%);
}

#background video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -54%) scale(0.7);
  filter: blur(10px);
}

.next-section a {
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 47%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font : normal 400 15px/1 'Kanit', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
  text-align: center;
}
.next-section a:hover {
  opacity: .5;
}

#section01 a {
  padding-top: 60px;
}
#section01 a span {
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
}
#section01 a span::after {
  position: absolute;
  top: 50%;
  /* left: 50%; */
  content: '';
  width: 16px;
  height: 16px;
  margin: -12px 0 0 -8px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
}
#section01 a span::before {
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
  -webkit-animation: sdb03 3s infinite;
  animation: sdb03 3s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb03 {
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

</style>
