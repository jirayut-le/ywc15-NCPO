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
        <div id="control_page">
            previous next
        </div>
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

</style>
