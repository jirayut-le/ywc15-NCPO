<template>
    <div id="policy_detail" class="has-text-left">
        <div class="columns">
            <div class="column is-one-third">
                <policyList title='พัฒนาการจัดการศึกษาจังหวัดชายแดนภาคใต้' type='การศึกษา' icon='edu' img='1'></policyList>
                <policyList title='ส่งเสริมให้ผู้มีรายได้น้อยมีที่อยู่อาศัย' type='เศรษฐกิจ' icon='econ' img='2'></policyList>
                <policyList title='การแก้ไขปัญหาความขัดแย้งในการจัดการที่ดินป่าไม้' type='สิ่งแวดล้อม' icon='eco' img='3'></policyList>
                <policyList title='ส่งเสริมการกีฬาเพื่อสุขภาพ' type='สาธารณสุข' icon='health' img='4'></policyList>
                <policyList title='การกำหนดการแก้ไขปัญหาขยะมูลฝอย' type='สิ่งแวดล้อม' icon='eco' img='5'></policyList>
                 <a class="button is-light" disabled>
            <div class="arrow-left">⌃</div>
        </a>
        <!-- <router-link :to="{ name: 'PolicyNextPage'}" class="next-btn"> -->
            <a class="button is-dark">
                <div class="arrow-right">⌃</div>
            </a>
        <!-- </router-link> -->
            </div>
            <div class="column">
                <h5>{{ date }}</h5>
                <h1>{{ title }}</h1>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="../assets/teacher.jpg" alt="Placeholder image">
                    </figure>
                </div>   
                <div id="article">{{ article }}</div>
            </div>
        </div>

    </div>
  
</template>

<script>
import PolicyList from '@/components/PolicyList'
export default {
    components: {
        PolicyList
    },
  data() {
      return {
          title: "ปฏิรูปครู โดยเน้นการผลิตและพัฒนาครูคุณภาพ และให้คนเก่งคนดีมาเป็นครู",
          short_des: "สมศ.สะท้อนวิกฤตทางการศึกษาไทยในระดับขั้นพื้นฐานว่ามีสถานศึกษาที่จัดการศึกษาได้มาตรฐานขั้นต่ำประมาณ 1 ใน 3 และอีกประมาณ 2 ใน 3 ไม่ได้มาตรฐาน",
          type: "การศึกษา",
          date: "12 เมษายน 2017",
          article: " วิทยากร  เชียงกูล (2551 : 55) ได้สรุปปัญหาการศึกษาขั้นพื้นฐานจากการประเมินคุณภาพภายนอกของการศึกษาขั้นพื้นฐานรอบแรก (พ.ศ. 2544 – 2548)โดย สมศ.สะท้อนวิกฤตทางการ ศึกษาไทยในระดับขั้นพื้นฐานว่ามีสถานศึกษาที่จัดการศึกษาได้มาตรฐานขั้นต่ำประมาณ1ใน 3 และอีกประมาณ 2 ใน 3 (มากกว่า 20,000 แห่ง)ไม่ได้มาตรฐาน ผู้เรียนส่วนใหญ่มีผลสัมฤทธิ์ทางการเรียนต่ำ ขาดความคิดสร้างสรรค์และขาดนิสัยการใฝ่รู้ใฝ่เรียนซึ่งเป็นพื้นฐานสำคัญของการเรียน ผู้ เรียนมีแนวโน้มที่จะเป็นเด็กดีและมีความสุขแต่ไม่เก่งเท่าที่ควรขาดแคลนครูทั้งปริมาณและคุณภาพ ครูได้มาตรฐานเฉพาะวุฒิการศึกษาแต่วิธีการสอนที่เน้นผู้เรียนเป็นสำคัญยังไม่ได้มาตรฐาน ส่วนผู้ บริหารก็ด้อยฝีมือทางการบริหารด้านวิชาการ แต่ภาวะผู้นำและการบริหารทั่วไปพอได้มาตรฐาน"
      }
  }
}
</script>


<style lang="scss" scoped>

#policy_detail {
    margin-top: 30px;
}

h1 {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;
}

h5 {
    color: #5C5C5C;
    font-size: 20px;
    margin-bottom: 5px;
}

#article {
    font-size: 20px;
    margin-top: 20px;
    font-weight: 300;
}

.arrow {
    &-left {
        margin-left: 8px;
        font-size: 25px;
        transform: rotate(-90deg);
    }
    &-right {
        margin-right: 8px;
        font-size: 25px;
        transform: rotate(90deg);
    }
}

img {
    animation: zoom 0.5s ease-in-out;
}

@keyframes zoom {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

</style>
