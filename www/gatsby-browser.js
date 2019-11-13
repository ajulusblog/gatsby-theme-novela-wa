
/**
 * each time enter the application check session first just by once
 * @2019/11/13
 */
import { useState, useEffect } from "react"
import { silentAuth } from "@narative/gatsby-theme-novela"


export const wrapRootElement = ({ element }) => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    silentAuth(() => setLoading(false))
  })
  
  if(loading) return (<p>loading...</p>)
  
  return loading === false && <>{element}</>
};

export default {}