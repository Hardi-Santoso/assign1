import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink , useParams} from "react-router-dom";
import '../index.css';
import '../flexboxgrid.css';

var item = [

    {
        id: 1,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item1",
        price: "Rp.30.000",
    },
    {
        id: 2,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item2",
        price: "Rp.30.000",
    },
    {
        id: 3,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item3",
        price: "Rp.30.000",
    },
    {
        id: 4,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item4",
        price: "Rp.30.000",
    },
    {
        id: 5,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item5",
        price: "Rp.30.000",
    },
    {
        id: 6,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item6",
        price: "Rp.30.000",
    }

];

function CategoryList(){
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>(
                        <Link to={`/Category/${i.id}`} className="color-black col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                            <img src={i.img} className="img_small"/>
                            <h4>{i.name}</h4>
                            <p>Esse ex minim pariatur laboris aliqua.</p>
                            <p className="bold">{i.price}</p>
                            {/* <button class="btn-special">
                                <Link className="color-black" to={`/Category/${i.id}`}>View More</Link>
                            </button> */}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

function CategoryItem(){
    var { Id } = useParams();
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>
                        {
                            if(i.id == Id){
                                return (
                                            <div className="col-xs-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                                                <img src={i.img} className="img_small"/>
                                                <h4>{i.name}</h4>
                                                <p>Anim officia in do nulla exercitation qui laboris. In sit nisi cupidatat sunt enim laboris in eu est officia voluptate et adipisicing. Nostrud officia anim ad id id. Nulla amet aliqua labore nostrud do reprehenderit eu sunt nostrud dolor veniam ad cillum amet.</p>
                                                <p className="bold">{i.price}</p>
                                                <button class="btn-special">
                                                    <Link className="color-black" to={`/PDP?id=${i.id}`}>View Details</Link>
                                                </button>
                                            </div>
                                        );
                            }
                                
                            
                        }

                        // {   i.id == Id ?                           
                            
                        //     :
                        //     ""
                        // }   
                        
                    )
                }
            </div>
        </>
    );
}

function Category(){
    return(
        <>
            <Switch>
                <Route exact path="/Category">
                    <CategoryList />
                </Route>
                <Route path={`/Category/:Id`}>
                    <CategoryItem />
                </Route>
            </Switch>    
        </>
    );
}


export default Category;