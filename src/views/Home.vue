<template>
  <div class="home">
   <Header />
       <!-------------Slider ---------------->
       <div class="section1">
          <hooper :itemsToShow="1" :centerMode="true"  :autoPlay="false">
              <slide class="background">
               <img class="pic" width="100%" src="../assets/images/pic3.jpg">
        <div class="contentt">
               <p class="title">complete chemical solutions </p>
              
             <button type="button" class="btn  coverBtn">SEE MORE</button>
           </div>
              </slide>
              <slide class="background bg-dark-alfa-5">
               <img class="pic bg-dark-alfa-5" width="100%" src="../assets/images/pic4.jpg">
                <div class="contentt">
               <p class="title">complete chemical solutions </p>
              
             <button type="button" class="btn  coverBtn">SEE MORE</button>
           </div>
              </slide>
               <slide class="background">
               <img class="pic" width="100%" src="../assets/images/pic5.jpg">
                  <div class="contentt">
               <p class="title">complete chemical solutions </p>
              
             <button type="button" class="btn  coverBtn">SEE MORE</button>
           </div>
              </slide>
               <!-- <slide class="background">
               <img class="pic" width="100%" src="../assets/images/pic6.jpg">
                
              </slide> -->
            

              <hooper-navigation slot="hooper-addons"></hooper-navigation>
               <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
       </div>
       
       <!----------- About us------------>
       <div class="container mt-5 section2" id="aboutUs">
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
       
         <!---------------Our team ------------------>
        <div class="container mt-5 section3  mb-5 animate__animated ">
              <h2 class="title">our team</h2>
              <div class="row">
                <div class="col-md-3 " v-for="team in teams" :key="team.id +100">
                  <div class="card">
                       <h6>{{team.title}}</h6>
                       <div class="heading">
                           <ul>
                        
                         <li v-for="head in team.head" :key="head.head+1"><h4>{{head}}</h4></li>
              
                       </ul>
                       </div>
                       
                       <ul>
                         <li v-for="item in team.list" :key="item+10">{{item}}</li>
                       </ul>

                    </div>  
                  <p class="underhead mt-3">{{team.title}}</p>
                </div>
              </div>

               <div class="row">
                <div class="col-md-3 offset-md-3" v-for="team in teamsTwo" :key="team.id+12">
                  <div class="card">
                       <h6>{{team.title}}</h6>
                       <div class="heading">
                           <ul>
                        
                         <li v-for="head in team.head" :key="head.head+1"><h4>{{head}}</h4></li>
              
                       </ul>
                       </div>
                       
                       <ul>
                         <li v-for="item in team.list" :key="item+2">{{item}}</li>
                       </ul>

                    </div>  
                  <p class="underhead mt-3">{{team.title}}</p>
                </div>
                 <div class="col-md-3 " v-for="team in teamsThree" :key="team.id+1">
                  <div class="card">
                       <h6>{{team.title}}</h6>
                       <div class="heading">
                           <ul>
                        
                         <li v-for="head in team.head" :key="head.head+1"><h4>{{head}}</h4></li>
              
                       </ul>
                       </div>
                       
                       <ul>
                         <li v-for="item in team.list" :key="item+1">{{item}}</li>
                       </ul>

                    </div>  
                  <p class="underhead mt-3">{{team.title}}</p>
                </div>
              </div>
        </div>

          <!---------------Products --------------->    
          <div class="container mt-5 section4" id="products">
             <h2 class="title">products</h2>
                <div class="row">
                  <div class="col-md-3 mt-3" v-for="img in image" :key="img+1" >
                    <img  :src="img.img"  class="image" />
                    <h6>{{img.text}}</h6>
                
                  </div>

                </div>
               

          </div>
           
           <!---Why choose us -------->
           <div class="conatiner mt-5 section5" id='choose'>
                 <h2 class="title mb-3">WHY CHOOSE US?</h2>
                 <div class="row">
                   <div class="col-md-4">
                     <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-flag mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
                      </svg>
                      <h6 class="head">SINCE 1968</h6>
                      <div class="col-md-8 m-auto">
                      <p class="pragh mt-3">Over 45 years’ experience in the chemicals industry, we are proven experts.</p>
                      
                      </div>
                   </div>
                   <div class="col-md-4">
                           <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-bullseye mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                              <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                              <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            </svg>
                            <h6 class="head">ISO 9001:2008 CERTIFIED</h6>
                            <div class="col-md-8 m-auto">
                            <p class="pragh mt-3">
                              The organization executes all operations as per quality management systems.
                            </p>
                            </div>
                   </div>
                   <div class="col-md-4">
                     <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-patch-check mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                      <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                            <h6 class="head">QUALITY ASSURANCE</h6>
                            <div class="col-md-8 m-auto">
                            <p class="pragh mt-3">
                              Well-equipped in-house laboratory for checking and testing of all inputs and outputs to meet highest level of quality standards.
                            </p>
                            </div>

                   </div>
                   <div class="col-md-4 mt-3">
                     <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-receipt mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                      <path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                            <h6 class="head">CUSTOMIZED PACKAGING</h6>
                            <div class="col-md-8 m-auto">
                            <p class="pragh mt-3">
                              We offer a variety of packaging options to suit your company and regulatory requirements, including customized labeling.
                            </p>
                            </div>
                              
                   </div>
                   <div class="col-md-4 mt-3">
                     <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-question-square mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                    </svg>
                            <h6 class="head">WAREHOUSING FACILITIES</h6>
                            <div class="col-md-8 m-auto">
                            <p class="pragh mt-3">
                              Our extensive warehousing and distribution facility means we can store your products for you to call off at your convenience.
                            </p>
                            </div>
                              
                   </div>
                 </div>
           </div>
           <!------------ Careers ------------>
           <div class="conatiner careers mt-5" id="careers">
                 <h2 class="title mb-3">careers</h2>
                 <div class="col-md-6 offset-md-3">
                 <p class="text">Serving since 1968,The Prosperity Trading & Contracting S.P.C believes in contributing &  serving the community.When we see someone in need,we ask how can help & then we follow through.Why don’t you fill in the career from below.</p>

                 </div>
                 <div class="col-md-6 m-auto">
                   <form>
                     <div class="row">
                       <div class="col-md-6">
                        <div class="form-group">
                          
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Name">
                         
                        </div>
                          <div class="form-group">
                          
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Mobile">
                         
                        </div>
                         <div class="form-group">
  
                        <textarea class="form-control" placeholder="Your Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                       </div>
                       <div class="col-md-6">
                        <div class="form-group">
                          
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Email">
                         
                        </div>
                        <div class="form-group">
                          <select id="inputState" class="form-control">
                            <option selected>Select Department</option>
                            <option>2</option>
                          </select>
                        </div>
                        <div class="form-group">
                              
                              <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>

                       </div>
                       <div class="col-md-2 offset-md-10">
                        <button type="submit" class="btn btn-primary m-auto">Send</button>
                       </div>
                     </div>
                        
                       
                      
                    </form>
                 </div>
                 
           </div>

           <!---------------Contact Us ----------------->
           <div class=" mt-5 contactUs" id="contact">
              <h2 class="title mb-3">Contact Us</h2>
              <div class=" map">
                <gmaps-map>
                  <gmaps-marker  :options="mapOptions" />
                </gmaps-map>
              </div>
           </div>
           <div class="container contactUs mt-5">
              <div class="row">
                <div class="col-md-4">
                    <div class="row">
                      <div class="col-md-2">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      </div>
                      <div class="col-md-9">
                       <p class="heading"> call us </p>
                       <p class="pragh">Head Office: Tel: +973 17730001 / 17731530 Fax: +973 17732339 Showroom: Tel: +973 17251833 Fax: +973 17244529</p>
                      </div>
                    </div>
                </div>

                <div class="col-md-4 ">
                    <div class="row">
                      <div class="col-md-2">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                          <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                      </div>
                      <div class="col-md-9">
                       <p class="heading"> ADDRESS</p>
                       <p class="pragh">Block 601,Road No-115, Building-913, Kingdom of Bahrain</p>
                      </div>
                    </div>
                </div>

                  <div class="col-md-4 mb-3">
                    <div class="row">
                      <div class="col-md-2">
                       <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                      </svg>
                      </div>
                      <div class="col-md-9">
                       <p class="heading"> EMAIL</p>
                       <p class="pragh">company@gmail.com</p>
                      </div>
                    </div>
                </div>
                 <div class="col-md-4 mb-3">
                    <div class="row">
                      <div class="col-md-2">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
                    <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                      </div>
                      <div class="col-md-9">
                       <p class="heading"> OPENING HOURS</p>

                       <p class="pragh">8 Am to 5 Pm (Saturday-Thursday)</p>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-8 m-auto">
                   <form>
                     <div class="row">
                       <div class="col-md-6">
                        <div class="form-group">
                          
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Name">
                         
                        </div>
                         <div class="form-group">
                          
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Email">
                         
                        </div>
                       
                       </div>
                       <div class="col-md-6">
                          <div class="form-group">
  
                        <textarea class="form-control" placeholder="Your Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      
                       

                       </div>
                         <div class="col-md-2 offset-md-10">
                        <button type="submit" class="btn btn-primary m-auto">Send</button>
                       </div>

                     </div>
                        
                       
                      
                    </form>
                 </div>
           </div>

            <!-------Footer ------->
    <footer class="foter mt-5">
      <div class="container-fluid">
      <div class="col-md-6 m-auto">
         <img src="../assets/images/logo.png" />
         <ul>
           <li>
             <i class="fab fa-facebook-f"></i>
           </li>
           <li>
             <i class="fab fa-twitter"></i>

             </li>
           <li>
             <i class="fab fa-instagram"></i>

           </li>

         </ul>
      </div>
      <div class="col-md-12 text-center mt-5">
      <p> Copyright ©  PROSPERITY TRADING & CONTRACTING S.P.C 2020|  made with Love by RahmaGamal </p>
      </div>
      </div>
    </footer>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
  import { Hooper, Slide ,
    Navigation as HooperNavigation
   ,Pagination as HooperPagination } from '../../node_modules/hooper';
import 'hooper/dist/hooper.css';
import { gmapsMap, gmapsMarker } from '../../node_modules/x5-gmaps'
export default {
  name: 'Home',
  components: {
    Header,
     Hooper,
      Slide,
       HooperNavigation,
       HooperPagination,
        gmapsMap,
         gmapsMarker
  },
 
  data(){
    return{
         teams:[
           {
             id:1,
             title:'sales&marketing' ,
             head:['sales'],
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
             title:'SAFTEY& SECURITY' ,
              head:['SAFTEY'],
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
              head:[' CONTROL'],
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
             head:['WAREHOUSE'],
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
               mapOptions: {
        center: { lat: -27.46, lng: 153.02 },
        zoom: 12, 
        // position: { lat: -27.46, lng: 153.02 },

      },
        
       
    }
  },
   mounted(){
    
    //  this.image="img1.jpg"
   
  },

}
</script>
