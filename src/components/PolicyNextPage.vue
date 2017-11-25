<template>
    <div id="policy_next">
        <div class="columns">
            <div class="column">
                <PolicyCard></PolicyCard>
                <PolicyCard></PolicyCard>
            </div>
            <div class="column" id="down">
                <PolicyCard></PolicyCard>
                <PolicyCard></PolicyCard>
            </div>
            <div class="column">
                <PolicyCard></PolicyCard>
                <PolicyCard></PolicyCard>
            </div>
            <div class="column" id="down">
                <PolicyCard></PolicyCard>
                <PolicyCard></PolicyCard>
            </div>
            <div class="column">
                <PolicyCard></PolicyCard>
                <PolicyCard></PolicyCard>
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
