import "./App.css";
import Card from "./Card.js";
import {useState} from 'react'
function App() {


  let free ={
    title:"FREE",
    price:"0",
    user:"Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityaccess:"Community Access",
    communityaccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subdomain:"Free Subdomain",
    subdomainEnabler:false,
    statusReport:"Monthly Status Reports",
    statusReportEnabler:false
  } 
  let pluse ={
    title:"PLUSE",
    price:"9",
    user:"5 User",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityaccess:"Community Access",
    communityaccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    subdomainEnabler:true,
    statusReport:"Monthly Status Reports",
    statusReportEnabler:false
  }
  let pro ={
    title:"PRO",
    price:"49",
    user:"Unlimited User",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityaccess:"Community Access",
    communityaccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subdomain:"Free Subdomain",
    prefixsubdomain:"Unlimited",
    subdomainEnabler:true,
    statusReport:"Monthly Status Reports",
    statusReportEnabler:true
  }

  return <>
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
      
      {/* <!-- Free Tier --> */}
      <Card type={free}/>
      {/* <!-- Plus Tier --> */}
      <Card type={pluse}/>
      {/* <!-- Pro Tier --> */}
      <Card type={pro}/>
    </div>
  </div>
</section>
  </>
  
}

export default App;
