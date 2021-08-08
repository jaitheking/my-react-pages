import React,{Component } from 'react'

export default class Contact extends Component{
    render(){
        return(
            <div>
               <div className="card light-blue darken-4 z-depth-0">
                   <div className="card-content">
                       <h6 className="white-text">
                           <strong># IN CASE YOU WANT TO REACH ME</strong>
                       </h6>
                       <hr/>
                       <p className="grey-text text-lighten-3 pt">
                           Currently residing in <a href="https://goo.gl/maps/wK8iEcVy73kLvGP66">Bayan Lepas, Penang</a>.
                       </p>
                       <p className="grey-text text-lighten-3 pt">
                           Phone: +60183142235
                           <br/>
                           Email: <a href="mailto:jaiprashanth4858@gmail.com">jaiprashanth4858@gmail.com</a>
                           <br/>
                           Website: <a href="https://github.com/jaitheking/thisismesite">My Github Page</a>
                       </p>
                   </div>
               </div>
            </div>
        )
    }
}