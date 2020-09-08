import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
import '../index.css';
import '../flexboxgrid.css';

var Buy = [
    {
        id: 1,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item1",
        price: "Rp.30.000",
        discount: "Rp15.000"
    },
    {
        id: 2,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item2",
        price: "Rp.30.000",
        discount: "Rp15.000"
    },
    {
        id: 3,
        img: "https://dummyimage.com/600x400/000/fff",
        name: "Item3",
        price: "Rp.30.000",
        discount: "Rp15.000"
    }
]

function Home ()
{
    return(
        <>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-10 text-center">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                        <h4>Picture</h4>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                        <h4>Product Name</h4>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                        <h4>Product Detail</h4>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                        <h4>Price</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    Buy.map((i,key)=>(
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-top-10 text-center" key={key}>
                            <div className="row">
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                                    <img src={i.img} className="img_small2"/>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                                    <h4>{i.name}</h4>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                                    <p>Esse ex minim pariatur laboris aliqua.</p>
                                </div>
                                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-center">
                                    <p className="bold">{i.discount}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <hr/>
            <div className="row">
                <div className="col-xs-offset-10 col-xs-2">
                    <p className="bold">
                        Total: Rp. 45,000
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;