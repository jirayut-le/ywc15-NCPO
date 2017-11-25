<template>
<router-link :to="{ name: 'PolicyDetail'}">
<div id="policy_card_hi">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
    <figure class="image is-48x48 is-pulled-right" id="icon">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <!-- <div class="media"> -->
      <div class="media-left">
        
      </div>
      <div class="media-content">
        <p class="has-text-left">Title</p>
      </div>
    <!-- </div> -->

    <div class="content has-text-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
    </div>

    <div class="catagories has-text-left">
        ● Type
    </div>
  </div>
</div>
</div>
</router-link>
</template>

<script>
    
</script>

<style lang="scss" scoped>

.card {
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
}

.content {
    font-size: 14px;
}

#icon {
    transform: translateY(-24px);
}

#policy_card {
    margin-bottom: 20px;
}

.card-content {
    padding: 0rem;
    padding-top: 15px;
}

.media-content {
    color: #000;
    font-weight: 400;
    font-size: 30px;
}

#policy_card_hi {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(0.97);
    }
}

</style>
