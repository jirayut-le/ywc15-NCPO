<template>
<div id="policy_card">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        
      </div>
      <div class="media-content">
        <p class="has-text-left">Title</p>
      </div>
      <div id="small-icon">
        Type
        <figure class="image is-24x24 is-pulled-right" >
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      </figure>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
    
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
