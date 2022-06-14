import React from 'react';
import './featured.scss';

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="featuredImg"/>
            <div className="featuredTitles">
               <h1>Dublin</h1> 
               <h2>123 properties</h2> 
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="featuredImg"/>
            <div className="featuredTitles">
               <h1>Austin</h1> 
               <h2>532 properties</h2> 
            </div>
        </div>

        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="featuredImg"/>
            <div className="featuredTitles">
               <h1>Reno</h1> 
               <h2>533 properties</h2> 
            </div>
        </div>
    </div>
  )
}

export default Featured;