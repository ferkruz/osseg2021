import React,{Component} from "react"
import Producto from "../Components/Producto"


import LoginAfiPres from '../Components/LoginAfiPres'
import MenuAfi from '../Components/MenuAfi';
import CarouselIndex from '../Components/CarouselIndex';
import CarouselTel from '../Components/CarouselTel';
import ModalExample from '../Components/ModalExample';
import Pokemon from '../Components/Pokemon';

import CartillaAfi from "./CartillaAfi";


class Home extends Component{
    constructor(){
        super()
        this.state={
            productos:[
                {
                    sku:"Manzana",
                    nombre:"Manzana",
                    precio:"800$",
                    stock:12
                },
                {
                    sku:"Manzana2",
                    nombre:"Manzana2",
                    precio:"800$",
                    stock:52
                }, 
                {
                    sku:"Manzana3",
                    nombre:"Manzana3",
                    precio:"800$",
                    stock:42
                },
            ],
            titulo:"Home",
            boolValue: true,
            

            
            
        }
    }
    handleClick = ()=>{
        this.setState({
            productos:[
                {
                    sku:"Manzana0000",
                    nombre:"Manzana0000",
                    precio:"800$",
                    stock:12
                }
            ]            
        })
    }

    handleClickTitulo = ()=>{
        this.setState({
            titulo:"Home Modificado",
            boolValue: !this.state.boolValue,
        })

    }
    render(){
        
        return(
            <>
                <div  className="ftco-animate fadeInUp ftco-animated">

                
                <CarouselIndex />
                <LoginAfiPres />
                <CarouselTel />
                <ModalExample/>
                <MenuAfi />
                <Pokemon/>

                <div>{this.state.titulo}<h3>{this.state.boolValue.toString()}</h3></div>
                <div className="Producto">
                    <div className="container">
                        <div className="row">
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">SKU</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad disponible</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            {this.state.productos.map(producto=><Producto sku={producto.sku} nombre={producto.nombre} precio={producto.precio}  stock={producto.stock}/>)}
                            </table>
                        </div>
                    </div>
                </div>
                
                <button onClick={this.handleClick}>Cambiar Frutas</button>
                <button onClick={this.handleClickTitulo}>Cambiar Titulo</button>

                </div>
            </>
        )
    }
    /*
    function (producto){
        return <Fruta nombre={producto.nombre} calorias={producto.calorias}  />
    }*/
}
export default Home