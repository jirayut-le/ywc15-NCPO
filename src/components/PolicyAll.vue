<template>
    <div id="policy_all">
        <div class="columns">
            <div class="column is-two-fifths">
                <PolicyHighlight></PolicyHighlight>
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
