
"use client"
import React, { useState } from 'react'
import Diskcard from './Diskcard'

import Dropdowndownload from './Dropdown';
import Unfinished from './Unfinshed';
import Finished from './Finished';



const SideBar = () => {
 

  return (
<div>
<Dropdowndownload/>
<Unfinished/>
<Finished/>
</div>

  
  )
}

export default SideBar