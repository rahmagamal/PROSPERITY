<template>
  <div>
      <nav class="navbar">
         <div class="container-fluid">
             <div class="row content">
                   
                 <div class="col-md-6 ">
                   
                   <img src="../assets/images/prt.png"  class="image"/>
                   <img src="../assets/images/logo.png"  class="imgApp"/>
                    <!--- responsive menu --->
              
                   
                      <i class="fas fa-bars  menu " @click="clickMenu()"></i>
                     

                  
                 </div>
                    <div v-if="mobile" class="mobileMenu">
                       <ul class=" ">
                         <li class="menuList" @click="clickMenu" > <a href="#" >HOME  </a>
                         </li>
                          
                         <li class="menuList" @click="clickMenu" > <a href="#aboutUs"> ABOUT </a></li>
                         <li class="menuList" @click="clickMenu" > <a href="#products"> Products </a></li>
                         <li class="menuList" @click="clickMenu" > <a href="#choose"> WHY CHOOSE US </a></li>
                         <li class="menuList" @click="clickMenu" > <a href="#careers"> CAREERS </a></li>
                         <li class="menuList" @click="clickMenu" > <a href="#contact"> CONTACT US</a></li>


                     </ul>
                      </div>
                 <div class="col-md-6  m-auto ">
                   
                   
                     <ul class=" ">
                         <li class="list "> <a href="#" class="textcolor">HOME  </a>
                         </li>
                          
                         <li class="list"> <a href="#aboutUs"> ABOUT </a></li>
                         <li class="list"> <a href="#products"> Products </a></li>
                         <li class="list"> <a href="#choose"> WHY CHOOSE US </a></li>
                         <li class="list"> <a href="#careers"> CAREERS </a></li>
                         <li class="list"> <a href="#contact"> CONTACT US</a></li>


                     </ul>
                    
                 </div>
                
             </div>

           
         
         </div>
      <!-- <div class="col-md-12"> -->
               

             <!-- </div> -->
      </nav>
        
  </div>
</template>

<script>
export default {
  data(){
      return{
         mobile:false
      }
  },

  methods:{
      clickMenu(){
          this.mobile=!this.mobile
      }
  }
}
</script>

<style>

</style>