import React from "react";

import { Dialog,DialogTitle,DialogContent } from "@material-ui/core";
export default function Popup(props){
    const {title,children,openPopup,setOpenPopup}=props;
    return (
        
        <div class="modal-dialog modal-dialog-scrollable">
            {children}
        
      </div>             
            
                
             
       
        
    )
}