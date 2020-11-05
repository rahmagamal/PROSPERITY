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
              <!---- policy ------->
                <div class="container mt-5 setion2">
                    <h2 class="title">OUR POLICY</h2>
                    <span>To be a leader in the Trading business and continually improve our performance by providing quality product and services to our valued clients at a competitive price with customer satisfaction.</span>
                </div>

       </div>
       
         <!---------------section 3 ------------------>
        <div class="container mt-5 section3  mb-5 animate__animated ">
              <h2 class="title">our team</h2>
              <div class="row">
                <div class="col-md-3 " v-for="team in teams" :key="team.id">
                  <div class="card">
                       <h6>{{team.title}}</h6>
                       <div class="heading">
                           <ul>
                        
                         <li v-for="head in team.head" :key="head.head"><h4>{{head}}</h4></li>
              
                       </ul>
                       </div>
                       
                       <ul>
                         <li v-for="item in team.list" :key="item">{{item}}</li>
                       </ul>

                    </div>  
                  <p class="underhead mt-3">{{team.title}}</p>
                </div>
              </div>

               <div class="row">
                <div class="col-md-3 offset-md-3" v-for="team in teamsTwo" :key="team.id">
                  <div class="card">
                       <h6>{{team.title}}</h6>
                       <div class="heading">
                           <ul>
                        
                         <li v-for="head in team.head" :key="head.head"><h4>{{head}}</h4></li>
              
                       </ul>
                       </div>
                       
                       <ul>
                         <li v-for="item in team.list" :key="item">{{item}}</li>
                       </ul>

                    </div>  
                  <p class="underhead mt-3">{{team.title}}</p>
                </div>
                 <div class="col-md-3 " v-for="team in teamsThree" :key="team.id">
                  <div class="card">
                       <h6>{{team.title}}</h6>
                       <div class="heading">
                           <ul>
                        
                         <li v-for="head in team.head" :key="head.head"><h4>{{head}}</h4></li>
              
                       </ul>
                       </div>
                       
                       <ul>
                         <li v-for="item in team.list" :key="item">{{item}}</li>
                       </ul>

                    </div>  
                  <p class="underhead mt-3">{{team.title}}</p>
                </div>
              </div>
        </div>

          <!---SECTION4 ----->    
          <div class="container mt-3 section4" id="products">
             <h2 class="title">products</h2>
                <div class="row">
                  <div class="col-md-3 mt-3" v-for="img in image" :key="img+1" >
                    <img  :src="img.img"  class="image" />
                    <h6>{{img.text}}</h6>
                
                  </div>

                </div>
               

          </div>
           
           <!---section 5 -------->
           <div class="conatiner mt-5 section5" id='choose'>
                 <h2 class="title">WHY CHOOSE US?</h2>
                 <div class="row">
                         <div class="col-md-4"></div>
                 </div>
           </div>

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
  },
 
  data(){
    return{
         teams:[
           {
             id:1,
             title:'sales&marketing' ,
             head:['sales' , '& ' , 'marketing'],
             list:[
                        'Joseph Joy (Sr.Sales Manager)',
                         'Jayan Gopalan (Sales Manager)',
                        ' Saleesh Surendran(Sales Executive)',
                         'Emy Martin (Sales Executive)',
                         'Dayvis John (Sales Engineer)',
                        ' Jithin Tom (Sales Engineer)',
                        ' Ayesha Khalifa (Sales Administrator)',
                         'Daisy Mae',
             ]
           },
            {
             id:2,
             title:'FINANCE' ,
              head:['FINANCE'],
              list:[
              
                 ' Shiju Chereman (Manager/Account/Finance)',
                  'Bineesh Kumar (Accountant)',
                  'Floria Talavera (Accountant)',
                  'Vinod K George (Assistant)',
              ]
           },
           {
             id:3,
             title:'hr team' ,
              head:['hr'],
              list:[
                'Fatima Abdulla (Manager)',
                  'Amina Mubarak (PR)',
                  'Fadheela Abdulla (PR)',
                  'Dale Eslin Vaz (HR Consultant)',
              ]
           },
            {
             id:4,
             title:'PURCHASING' ,
              head:['PURCHASING'],
              list:[
                 'Abdulla Isa Al-Moosa (ED)',
                  "Shibu M John (GM)",
                  "Omana Eapen",
                  'Elvira Francisco'
              ]
           },
           {
             id:5,
             title:'LAB' ,
              head:['LAB'],
              list:[
                 'Deepa Bronson'
              ]
           },
            {
             id:6,
             title:'SAFETY & SECURITY' ,
              head:['SAFETY AND SECURITY'],
              list:[
                 'Mohan Bharath (Safety Officer)',
                  'John Britto',
                  'Gurjit Singh',
                  'Gurjit Sidhu',
                  'Munna Ali',
              ]
           },
           {
             id:7,
             title:'LOGISTICS' ,
              head:['LOGISTICS'],
              list:[
               ' Jiju (Supervisor)',
                'Fathima Abdulla',
               ' Mayyadah Abdulsattar',
              ]
           },
           {
             id:8,
             title:'QUALITY CONTROL' ,
              head:['QUALITY CONTROL'],
              list:[
               "Abdulla Isa Al-Moosa (ED)",
                'Shibu M John (GM)',
              ]
           },
           
         ],
         teamsTwo:[
            {
             id:9,
             title:'WAREHOUSE & MAINTENANCE' ,
             head:['WAREHOUSE' , '& ' , 'MAINTENANCE'],
             list:[
                   'John Britto',
                    'Sanjeev KV',
                    'Amir Ahmed',
                    'Nasir Ahmed'
             ]
           },
          
         ],
         teamsThree:[
            {
             id:10,
             title:'STORES' ,
             head:['STORES'],
             list:[
                  'Mohd Shareef',
                  'Jithin Tom (Sales Engineer)'
             ]
           },
         ],
       
             image:[
               {img:require("../assets/images/img1.jpg"),
               text:'Industrial and Commodity Chemicals'
               },
               {img:require("../assets/images/img2.jpg") ,
               text:'Water Treatment chemicals'},
               {img:require("../assets/images/img4.jpg") ,
               text:'Laboratory Chemicals & Equipment'},
               {img:require("../assets/images/img3.jpg") ,
               text:'Swimming Pools Chemicals'},
               {img:require("../assets/images/img5.jpg") ,
               text:'Laundry & Cleaning Products'},
               {img:require("../assets/images/img6.jpg") ,
               text:'Medical Supplies.'},
               {img:require("../assets/images/img7.jpg") ,
               text:'Agriculture Products'},
               {img:require("../assets/images/img8.jpg") ,
               text:'Safety Products'},
              

             ],
        
       
    }
  },
   mounted(){
    
    //  this.image="img1.jpg"
   
  },

}
</script>
