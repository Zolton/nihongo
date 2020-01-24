import React, { useState, useEffect } from "react";
import HeaderLink from "../EveryPage/HeaderLinks";
import FooterLinks from "../EveryPage/FooterLinks";

//import axiosWithAuth from "../security/AxiosWithAuth";

function Error404 () {

    return (<div>
        <HeaderLink />
      <p>Hello from Error404</p>
      <FooterLinks/>
      </div>
    )
}



export default Error404