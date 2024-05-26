import React from 'react'
import Card from './Card'

function App() {
  let  data = [
    {
      plan:"FREE",
      price:0,
      user:"single user",
      userEnabler:true,
      storage:"5 GB storage",
      storageEnabler:true,
      puplicproject:"unlimited public project",
      publicprojectEnabler:true,
      communityaccess:"community access",
      communityaccessEnabler:true,
      privateproject:"unlimited private project",
      privateprojectEnabler:false,
      support:"dedicated phone support",
      supportEnabler:false,
      subdomain:"free subdomain",
      subdomainEnabler:false,
      statusreport:"monthly tatus report",
      statusreportEnabler:false,
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 users",
      userEnabler:true,
      storage:"50 GB storage",
      storageEnabler:true,
      puplicproject:"unlimited public project",
      publicprojectEnabler:true,
      communityaccess:"community access",
      communityaccessEnabler:true,
      privateproject:"unlimited private project",
      privateprojectEnabler:true,
      support:"dedicated phone support",
      supportEnabler:true,
      subdomain:"free subdomain",
      subdomainEnabler:true,
      statusreport:"monthly status report",
      statusreportEnabler:false,
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimite user",
      userEnabler:true,
      storage:"150 GB",
      storageEnabler:true,
      puplicproject:"unlimited public project",
      publicprojectEnabler:true,
      communityaccess:"communityaccess",
      communityaccessEnabler:true,
      privateproject:"unlimited",
      privateprojectEnabler:true,
      support:"dedicated phone support",
      supportEnabler:true,
      subdomain:"free subdomain",
      subdomainEnabler:true,
      statusreport:"monthly status report",
      statusreportEnabler:true,
    }
  ]
  return (
    <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return<Card key={i} data={e}/>
        })
      }
    </div>
  </div>
</section>
    </>
  )
}

export default App
