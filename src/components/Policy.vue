<template>
    <div id="policy">
        <div id="header">
            <h1>{{ title }}</h1>
            <div class="tabs is-fullwidth">
                <ul>
                    <li v-for="tab in tablist" :class="tab.status">
                        <a>{{ tab.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: "นโยบาย",
            tablist: [{ title: "ทั้งหมด", status: "is-active" },
                        { title: "เศรษฐกิจ", status: ""},
                        { title: "สาธารณะสุข", status: ""},
                        { title: "สิ่งแวดล้อม", status: ""},
                        { title: "สังคม", status: ""}]
        }
    }
}
</script>

<style lang="scss" scoped>

#policy {
    min-height: 100vh;
    padding: 50px 100px 30px 100px;
}

.tabs {

    li {

        a {
            font-size: 20px;
            font-weight: 300;
        }

        &.is-active {
            
            a {
                color: #000;
                border-bottom-color: #000;
                font-weight: 400;
            }
        }
    }
    
}

h1 {
    font-weight: 500;
    font-size: 40px;
}

</style>
