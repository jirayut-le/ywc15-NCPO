<template>
    <div id="about">
        <div id="description" >
            <div class="columns" id="content">
                <img src="../assets/Logo.png" class="column">
                <div class="column has-text-left" id="text">
                    <h1>{{ header }}</h1>
                    <h4>{{ description }}</h4>
                </div>
            </div>
        </div>
        <div class="army_list">
            <h1> {{ title_army }}</h1>
            <div class="columns">
                <div class="column" v-for="logo in logos">
                    <figure class="image is-96x96" >
                        <img :src="getSrc(logo.name)" alt="Placeholder image">
                        <div> {{ logo.des }}</div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
      return {
          header: "คณะรักษาความสงบแห่งชาติ",
          description: 'หรือ คสช. (อังกฤษ: National Council for Peace and Order (NCPO) เดิมใช้ชื่อ National Peace and Order Maintaining Council (NPOMC) ) เป็นคณะผู้ยึดอำนาจการปกครอง โดยรัฐประหารยึดอำนาจการปกครอง เมื่อวันที่ 22 พฤษภาคม พ.ศ. 2557 ตั้งแต่เวลา 16:30 น. หลังเมื่อวันที่ 20 พฤษภาคม ประกาศกฎอัยการศึกทั่วราชอาณาจักร พร้อมทั้งจัดตั้งกองอำนวยการรักษาความสงบเรียบร้อย (กอ.รส.) ได้สองวัน และมีพลเอก ประยุทธ์ จันทร์โอชา เป็นหัวหน้าคณะ',
          logos: [  { name: "army1", img: "../assets/army/army1.png", des: "กองบัญชาการกองทัพไทย" }, 
                    {  name: "army2",img: "../assets/army/army2.png", des: "กองทัพบก" },
                    {  name: "army3",img: "../assets/army/army3.png", des: "กองทัพเรือ"},
                    {  name: "army4",img: "../assets/army/army4.png", des: "กองทัพอากาศ"},
                    {  name: "army5",img: "../assets/army/army5.png", des: "ศูนย์บรรเทาสาธารณภัย กองทัพไทย"} ],
          title_army: "เครื่องหมายของส่วนราชการที่เข้าร่วม"
      } 
  },
  methods: {
    getSrc(name) {
        var images = require.context('../assets/army/', false, /\.png$/);
        return images('./' + name + ".png")
    }
}
}
</script>


<style lang="scss" scoped>

#description {
    background-color: #f8f8f8;
    padding: 100px 200px 100px 200px;

    img {
        height: auto; 
        width: auto; 
        max-width: 350px; 
        max-height: 196px;
    }

    #text {
        margin-left: 20px;
        

        h4 {
            margin-top: 5px;
            font-weight: 400;
            font-size: 15px;
        }
    }
}

.army_list {
    padding: 100px 200px 100px 200px;

    .columns {
        margin-bottom: 40px;
    }

    h1 {
        margin-bottom: 40px;
    }

    img {
        margin-bottom: 20px;
        border-radius: 100px;
    }
}

h1 {
    font-weight: 500;
    font-size: 30px;
}
</style>
