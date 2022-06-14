import React from 'react';
import './propertyList.scss';

function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="" 
            className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="" 
            className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Apartements</h1>
                <h2>233 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1616064959886-a500e5c38e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="" 
            className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>


        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1573047330191-fb342b1be381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="" 
            className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="" 
            className="pListImg" 
            />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}
export default PropertyList;
