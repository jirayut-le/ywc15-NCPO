<template> 
    <div id="policy_small_list">
        
        <div class="card-content">
    <div class="media">
      <div class="media-left">
          <figure class="image is-96x96 is-pulled-right" >
          <img :src="getImg(img)" alt="Placeholder image">
        </figure>
        
      </div>
      <div class="media-content">
        <p class="has-text-left">{{title}}</p>
      </div>
      <div id="small-icon">
        {{type}}
        <figure class="image is-24x24 is-pulled-right" >
          <img :src="getSrc(icon)"  alt="Placeholder image">
        </figure>
      </div>
    </div>
  </div>
        

    </div>
</template>



<script>
export default {
  props: [ 'title', 'type', 'icon', 'img'],
  methods: {
    getSrc(name) {
        var images = require.context('../assets/icon/', false, /\.jpg$/);
        return images('./' + name + ".jpg")
    },
    getImg(name) {
        var images = require.context('../assets/policy/sqaure/', false, /\.jpg$/);
        return images('./' + name + ".jpg")
    },

}
}
    
</script>

<style lang="scss" scoped>
#policy_small_list {
    margin-bottom: 20px;
    background-color:#F7F7F7;
    animation: fade-left 0.5s ease-in-out;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 0px 5px #dfdfdf;
    }
}

@keyframes fade-left {

    from {
        opacity: 0;
        transform: translateX(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
    
}

.card-content {
    padding: 0;
}

p {
    padding-top: 10px;
}

#small-icon {
  position: absolute;
  display: inline-block ;
  font-size: 12px;
  bottom: 0;
  right: 0;

  figure {
    margin-left: 5px;
  }
}

</style>

