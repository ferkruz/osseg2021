import React,{Component} from "react"
import Button from 'react-bootstrap/Button';
import { MDBIcon } from 'mdb-react-ui-kit';

class Producto extends Component{
    constructor(){
        super()
        this.state={ stockTotal: 55555 }
    }

    handleClick = ()=>{
        this.setState({            
            stockTotal: this.props.stock-1
        })
    }

    /*handleClick = ()=>{
        this.setState({            
            stockTotal: this.state.stockTotal-1
        })
    }*/
    
    
    render(){
        console.log(this.props)
        console.log(this.state)
        return(
            <>
            <h3>{this.state.stockTotal}</h3>
                <tbody>
                    <tr>
                    <th scope="row">{this.props.sku}</th>
                    <td>{this.props.nombre}</td>
                    <td>{this.props.precio}</td>
                    <td>{this.props.stock}</td>
                    <td><Button onClick={this.handleClick} className="btn btn-sm" type="button">Comprar <MDBIcon fa icon='shopping-cart' /></Button></td>
                    </tr>
                </tbody>
            </>
    )
}
}

export default Producto;