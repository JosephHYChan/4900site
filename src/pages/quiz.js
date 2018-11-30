
import React from "react"
import { Link } from "gatsby"



import Layout from '../components/layout';
function quiz () {
  return(
<Layout>
<div class="topnav">
                    <Link to="/#home/">Home</Link>
                        <Link to="/updatesoft/">Updating Software</Link>
                        <Link to="/password/">Passwords</Link>
                        <Link to="/emailsec/">Email Security</Link>
                        <Link to="/sectools/">Security Tools</Link>
                    </div>
  <div class = "quiz">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSczzLa_D0cJ7qtEMJMeyiJ9jazChQ7vksGVwn97D3j4FPUw4g/viewform?embedded=true" 
  width="700" height="2497" frameborder="100" marginheight="0" marginwidth="0">Loading...</iframe>
</div>
</Layout>
  )
  }
  export default quiz