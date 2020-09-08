import React , { useState, Component, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link , NavLink , useParams, useLocation} from "react-router-dom";
import '../index.css';
import '../flexboxgrid.css';

var item = [

    {
        id: 1,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item1",
        price: "Rp.30.000"
    },
    {
        id: 2,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item2",
        price: "Rp.30.000"
    },
    {
        id: 3,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item3",
        price: "Rp.30.000"
    },
    {
        id: 4,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item4",
        price: "Rp.30.000"
    },
    {
        id: 5,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item5",
        price: "Rp.30.000"
    },
    {
        id: 6,
        img: "https://dummyimage.com/300x200/000/fff",
        name: "Item6",
        price: "Rp.30.000"
    }

];

function PDPList() {
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>(
                        <Link to={`/PDP?id=${i.id}`} className="color-black col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                            <img src={i.img} className="img_small"/>
                            <h4>{i.name}</h4>
                            <p>Esse ex minim pariatur laboris aliqua.</p>
                            <p className="bold line-through color-red">{i.price}</p>
                            <p className="bold">{i.discount}</p>
                            {/* <button class="btn-special">
                                <Link className="color-black" to={`/PDP?id=${i.id}`}>View More</Link>
                            </button> */}
                        </Link>
                    ))
                }
            </div>
        </>
    );
}


function PDPItem(){
    const [count, setCount] = useState(0);

    var query = new URLSearchParams(useLocation().search);
    return(
        <>
            <div className="row">
                {
                    item.map((i,key)=>
                        {
                            if(i.id == query.get("id")){
                                return (
                                            <div className="col-xs-offset-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 margin-top-10 text-center" key={key}>
                                                <img src={i.img} className="img_small"/>
                                                <h4>{i.name}</h4>
                                                <p>Exercitation commodo occaecat ut cillum culpa ullamco nisi mollit excepteur ut tempor ea et qui. Pariatur veniam in magna cupidatat irure quis enim est nisi pariatur consectetur dolor occaecat. Consequat officia minim incididunt incididunt cupidatat aliqua exercitation tempor. Et nulla mollit pariatur sint veniam irure pariatur Lorem labore. Labore proident tempor ad cillum mollit eu.</p>
                                                <p>Quis adipisicing consequat id eiusmod. Consequat deserunt et consequat magna. Magna consequat velit nostrud cillum ipsum anim irure in quis. Nostrud amet magna esse dolore excepteur consectetur excepteur nostrud. Voluptate incididunt do minim occaecat et. Irure ullamco quis quis et id commodo irure laborum aute exercitation Lorem eu velit. Non mollit ut duis occaecat.</p>
                                                <p className="bold">{i.price}</p>
                                                <div className="row margin-top-10 text-center">
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <button class="btn-special2" onClick={() => 
                                                            setCount(count + 1)}
                                                        > + </button>
                                                    </div>
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <input type="text" className="input-special" min="0" value={count}/>
                                                    </div>
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                        <button class="btn-special2" onClick={() =>  
                                                            {if(count> 0) {
                                                                setCount(count - 1)
                                                            }}
                                                        }> - </button>
                                                    </div>
                                                </div>
                                                <button class="btn-special margin-top-10">
                                                    <Link className="color-black" to={`/Cart`}>Buy</Link>
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


function PDP(){
    var query = new URLSearchParams(useLocation().search);
    var isQueryExist = query && query.get("id");
    return(
        <>
            {!isQueryExist && (
                <PDPList />
            )}
            {isQueryExist && (
                <PDPItem />
            )}
        </>
    );
}

export default PDP;