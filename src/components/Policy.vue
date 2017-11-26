<template>
    <div id="policy">
        <div id="header">
            <h1>{{ title }}</h1>
            <div class="tabs is-fullwidth">
                <ul>
                    <li v-for="tab in tablist" :class="tab.status">
                        <router-link :to="{ name: 'PolicyAll'}">
                        {{ tab.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view class="fade-router"/>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title: "นโยบาย",
            tablist: [{ title: "ทั้งหมด", status: "is-active" },
                        { title: "เศรษฐกิจ", status: ""},
                        { title: "สาธารณสุข", status: ""},
                        { title: "สิ่งแวดล้อม", status: ""},
                        { title: "การศึกษา", status: ""}]
        }
    }
}
</script>

<style lang="scss" scoped>

.fade-router {
    animation: fade 0.5s ease-in-out;
}

@keyframes fade {
    from {
        opacity: 0;

    }

    to {
        opacity: 1;
    }
    
}

#policy {
    min-height: 100vh;
    padding: 50px 100px 30px 100px;
}

.tabs {

    li {

        a {
            font-size: 20px;
            font-weight: 300;
            transition: all 0.3s ease-in-out;
            &:hover {
                background-color: rgba(0,0,0,0.03);
                transform: scale(1.05);
            }
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
