<template>
  <div class="home">
   <Header />
       <!-------------section1 ---------------->
       <div class="section1">
          <hooper :itemsToShow="1" :centerMode="true"  :autoPlay="false">
              <slide class="background">
               <img class="pic" width="100%" src="../assets/images/pic11.jpg">
      
              </slide>
              <slide class="background bg-dark-alfa-5">
               <img class="pic bg-dark-alfa-5" width="100%" src="../assets/images/pic2.jpg">
                <div class="contentt">
               <p class="title">complete chemical solutions </p>
              
             <button type="button" class="btn  coverBtn">SEE MORE</button>
           </div>
              </slide>
               <slide class="background">
               <img class="pic" width="100%" src="../assets/images/pic3.png">
                
              </slide>
               <slide class="background">
               <img class="pic" width="100%" src="../assets/images/pic4.png">
                
              </slide>
            

              <hooper-navigation slot="hooper-addons"></hooper-navigation>
               <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
       </div>
       
       <!----------- section 2 ------------>
       <div class="container mt-3 section2" id="aboutUs">
              <h2 class="title">about us</h2>
              <div class="col-md-12 word">
                <strong>Since 1968 The Prosperity Trading has met the ever-growing demand of all Chemicals requirements serving the Govt. & Semi-Govt. sectors including Private sectors in Kingdom of Bahrain..</strong>
              </div>
              <div class="col-md-12 mt-3">
                <p>Acting as a catalyst the founder Director Late Mr. Isa Abdulla Al Moosa purified the business morals & ethics and established the presence in the industry.
                      Due to the management knowledge and strategy, The Prosperity Trading Company reached to a wonderful extent and extended its wings to become major suppliers for Basic and Specialty Chemicals catering the needs of various industries in a very short time.
                    <br />Based on the demands, growth and development, the organization has begun the supply of Water Treatment Chemicals that are related to Boilers Systems, Desalination Units, Cooling Towers, Chilled Water Systems, Swimming Pools. Besides, supply Process Chemicals to the Petrochemical, Oil & Gas Industry. The organization supplies other chemical products
                    <br />elated to industries like the Fiberglass, Paint Manufactures, Laundries, and Cleaning Materials etc. Furthermore, the organization has progressed ahead with other Projects such as Chemicals blending of different strength and purity, Sewage Conditioner, Cleaners etc.
                      Chemically speaking The Prosperity Trading & Contracting Co. S.P.C. has the right to shout the loudest in supplying all kinds of Chemicals, delivering the value and enhancing the customer satisfaction. Yes, it’s the chemistry that keeps us leaders in business.
                </p>
                <p> Chemically speaking The Prosperity Trading & Contracting Est. has the right to shout the loudest in supplying all kinds of Chemicals, delivering the value and enhancing the customer satisfaction. Yes, it’s the chemistry that keeps us leaders in business.</p>
              </div>
                <div class="container mt-5 setion2">
                    <h2 class="title">OUR POLICY</h2>
                    <span>To be a leader in the Trading business and continually improve our performance by providing quality product and services to our valued clients at a competitive price with customer satisfaction.</span>
                </div>

       </div>
       <!---- policy ------->
         
              


  </div>
</template>

<script>

import Header from '@/components/Header.vue'
  import { Hooper, Slide ,
    Navigation as HooperNavigation
   ,Pagination as HooperPagination } from '../../node_modules/hooper';
import 'hooper/dist/hooper.css';
export default {
  name: 'Home',
  components: {
    Header,
     Hooper,
      Slide,
       HooperNavigation,
       HooperPagination
  }
}
</script>
