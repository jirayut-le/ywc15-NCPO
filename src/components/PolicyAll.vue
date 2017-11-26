<template>
    <div id="policy_all">
        <div class="columns">
            <div class="column is-two-fifths">
                <PolicyHighlight></PolicyHighlight>
            </div>
            <div class="column" id="up">
                <PolicyCard title='พัฒนาการจัดการศึกษาจังหวัดชายแดนภาคใต้' type='การศึกษา' icon='edu' img='1'></PolicyCard>
                <PolicyCard title='ส่งเสริมให้ผู้มีรายได้น้อยมีที่อยู่อาศัย' type='เศรษฐกิจ' icon='econ' img='2'></PolicyCard>
            </div>
            <div class="column" id="down">
                <PolicyCard title='การแก้ไขปัญหาความขัดแย้งในการจัดการที่ดินป่าไม้' type='สิ่งแวดล้อม' icon='eco' img='3'></PolicyCard>
                <PolicyCard title='ส่งเสริมการกีฬาเพื่อสุขภาพ' type='สาธารณสุข' icon='health' img='4'></PolicyCard>
            </div>
            <div class="column" id="up">
                <PolicyCard title='การกำหนดการแก้ไขปัญหาขยะมูลฝอย' type='สิ่งแวดล้อม' icon='eco' img='5'></PolicyCard>
                <PolicyCard title='การพัฒนาแหล่งน้ำ (แก้ไขปัญหาอุทกภัย และภัยแล้ง)' type='สิ่งแวดล้อม' icon='eco' img='6'></PolicyCard>
            </div>
        </div>
        <a class="button is-light" disabled>
            <div class="arrow-left">⌃</div>
        </a>
        <router-link :to="{ name: 'PolicyNextPage'}" class="next-btn">
            <a class="button is-dark">
                <div class="arrow-right">⌃</div>
            </a>
        </router-link>
    </div>
  
</template>

<script>
import PolicyHighlight from './PolicyHighlight'
import PolicyCard from './PolicyCard'
export default {
    components: {
        PolicyCard,
        PolicyHighlight
    }
}
</script>

<style lang="scss" scoped>

.columns {
    margin-bottom: 0;
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
#policy_all {
    margin-top: 30px;
}

#down {
    margin-top: 25px;
}

.button {
    border-radius: 0;
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
