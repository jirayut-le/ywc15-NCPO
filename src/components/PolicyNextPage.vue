<template>
    <div id="policy_next">
        <div class="columns">
            <div class="column" id="up">
                <PolicyCard title='ป้องกันและแก้ไขปัญหาการเกิดอุบัติเหตุในการจราจร' type='สาธารณสุข' icon='health' img='7'></PolicyCard>
                <PolicyCard title='ขยายการก่อสร้างทางด่วนพิเศษ หรือที่เรารู้จักกันคือมอเตอร์เวย์' type='เศรษฐกิจ' icon='econ' img='8'></PolicyCard>
            </div>
            <div class="column" id="down">
                <PolicyCard title='ส่งเสริมการกีฬาเพื่อสุขภาพ' type='สาธารณสุข' icon='health' img='4'></PolicyCard>
                <PolicyCard title='พัฒนาการจัดการศึกษาจังหวัดชายแดนภาคใต้' type='การศึกษา' icon='edu' img='1'></PolicyCard>
            </div>
            <div class="column" id="up">
                <PolicyCard title='การพัฒนาแหล่งน้ำ (แก้ไขปัญหาอุทกภัย และภัยแล้ง)' type='สิ่งแวดล้อม' icon='eco' img='6'></PolicyCard>
                <PolicyCard title='ส่งเสริมให้ผู้มีรายได้น้อยมีที่อยู่อาศัย' type='เศรษฐกิจ' icon='econ' img='2'></PolicyCard>
            </div>
            <div class="column" id="down">
                <PolicyCard title='การแก้ไขปัญหาความขัดแย้งในการจัดการที่ดินป่าไม้' type='สิ่งแวดล้อม' icon='eco' img='3'></PolicyCard>
                <PolicyCard title='การกำหนดการแก้ไขปัญหาขยะมูลฝอย' type='สิ่งแวดล้อม' icon='eco' img='5'></PolicyCard>
            </div>
            <div class="column" id="up">
                <PolicyCard title='ขยายการก่อสร้างทางด่วนพิเศษ หรือที่เรารู้จักกันคือมอเตอร์เวย์' type='เศรษฐกิจ' icon='econ' img='8'></PolicyCard>
                <PolicyCard title='ส่งเสริมการกีฬาเพื่อสุขภาพ' type='สาธารณสุข' icon='health' img='4'></PolicyCard>
            </div>
        </div>
        <router-link :to="{ name: 'PolicyAll'}" class="next-btn">
            <a class="button is-dark">
                <div class="arrow-left">⌃</div>
            </a>
        </router-link>
        <router-link :to="{ name: 'PolicyNextPage'}" class="next-btn">
            <a class="button is-dark">
                <div class="arrow-right">⌃</div>
            </a>
        </router-link>
    </div>
  
</template>

<script>
import PolicyCard from './PolicyCard'
export default {
    components: {
        PolicyCard
    }
}
</script>

<style lang="scss" scoped>

#policy_next {
    margin-top: 30px;
}

#down {
    margin-top: 25px;
}

#up {
    animation: move-down 0.5s ease-in-out;
}

#down {
    animation: move-up 0.5s ease-in-out;
}

@keyframes move-down {
    from {
        transform: translateY(-20px);
    }

    to {
        transform: translateY(0);
    }
}

@keyframes move-up {

    from {
        transform: translateY(20px);
    }

    to {
        transform: translateY(0);
    }
    
}

.columns {
    margin-bottom: 0;
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
</style>
