<template>
<router-link :to="{ name: 'PolicyDetail'}">
<div id="policy_card_hi">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/teacher.jpg" alt="Placeholder image">
    </figure>
    <figure class="image is-48x48 is-pulled-right" id="icon">
          <img src="../assets/icon/edu.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <!-- <div class="media"> -->
      <div class="media-left">
        
      </div>
      <div class="media-content">
        <p class="has-text-left">{{ title }}</p>
      </div>
    <!-- </div> -->

    <div class="content has-text-left">
      {{ short_des }}
    </div>

    <div class="catagories has-text-left">
        ● {{ type }}
    </div>
  </div>
</div>
</div>
</router-link>
</template>

<script>
export default {
    data() {
        return {
            title: "ปฏิรูปครู โดยเน้นการผลิตและพัฒนาครูคุณภาพ และให้คนเก่งคนดีมาเป็นครู",
            short_des: "สมศ.สะท้อนวิกฤตทางการศึกษาไทยในระดับขั้นพื้นฐานว่ามีสถานศึกษาที่จัดการศึกษาได้มาตรฐานขั้นต่ำประมาณ 1 ใน 3 และอีกประมาณ 2 ใน 3 ไม่ได้มาตรฐาน",
            type: "การศึกษา"
        }
    }
}
    
</script>

<style lang="scss" scoped>

@keyframes zoom {
    from {
        transform: scale(0.95);
    }
    to {
        transform: scale(1);
    }
    
}

.card {
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
}

.content {
    font-size: 14px;
    margin-bottom: 10px;
    color: #959595;
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
    font-size: 25px;
    margin-bottom: 10px;
}

#policy_card_hi {
    animation: zoom 0.5s ease-in-out;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(0.97);
    }
}

.catagories {
    color: #f6a623;
}

</style>
