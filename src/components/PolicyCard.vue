<template>
<router-link :to="{ name: 'PolicyDetail'}">
<div id="policy_card">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="getImg(img)" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        
      </div>
      <div class="media-content">
        <p class="has-text-left">{{title}}</p>
      </div>
      <div id="small-icon">
        {{ type }}
        <figure class="image is-24x24 is-pulled-right" >
          <img :src="getSrc(icon)" alt="Placeholder image">
      </figure>
      </div>
    </div>
  </div>
</div>
</div>
</router-link>
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
        var images = require.context('../assets/policy/', false, /\.jpg$/);
        return images('./' + name + ".jpg")
    },

}
}
    
</script>

<style lang="scss" scoped>

.card {
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #F7F7F7;
}

#policy_card {
    margin-bottom: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(0.97);
      box-shadow: 0px 0px 10px #dfdfdf;
    }
}

.card-content {
    padding: 0.5rem;
    padding-bottom: 50px;
    margin-left: -12px;
}

.media-content {
    color: #4A4A4A;
    font-weight: 400;
    font-size: 15px;
}

#small-icon {
  display: inline-block ;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;

  figure {
    margin-left: 5px;
  }
}

</style>
