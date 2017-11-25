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

        </div>
    </div>
</template>

<<script>
export default {
  data () {
      return {
          header: "คณะรักษาความสงบแห่งชาติ",
          description: 'หรือ คสช. (อังกฤษ: National Council for Peace and Order (NCPO) เดิมใช้ชื่อ National Peace and Order Maintaining Council (NPOMC) ) เป็นคณะผู้ยึดอำนาจการปกครอง โดยรัฐประหารยึดอำนาจการปกครอง เมื่อวันที่ 22 พฤษภาคม พ.ศ. 2557 ตั้งแต่เวลา 16:30 น. หลังเมื่อวันที่ 20 พฤษภาคม ประกาศกฎอัยการศึกทั่วราชอาณาจักร พร้อมทั้งจัดตั้งกองอำนวยการรักษาความสงบเรียบร้อย (กอ.รส.) ได้สองวัน และมีพลเอก ประยุทธ์ จันทร์โอชา เป็นหัวหน้าคณะ',
          logo: [   { img: "", des: "กองบัญชาการกองทัพไทย" }, 
                    { img: "", des: "กองทัพบก" },
                    { img: "", des: "กองทัพเรือ"},
                    { img: "", des: "กองทัพอากาศ"},
                    { img: "", des: "ศูนย์บรรเทาสาธารณภัย กองทัพไทย"} ]
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
        h1 {
            font-weight: 500;
            font-size: 30px;
        }

        h4 {
            margin-top: 5px;
            font-weight: 400;
            font-size: 15px;
        }
    }

    
}



</style>
