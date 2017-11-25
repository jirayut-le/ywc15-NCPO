<template>
    <div id="policy_all">
        <div class="columns">
            <div class="column is-two-fifths">
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
        <router-link :to="{ name: 'PolicyNextPage'}">Next</router-link>
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

#policy_all {
    margin-top: 30px;
}

#down {
    margin-top: 25px;
}

</style>
