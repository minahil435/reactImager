import  React , {Component} from "react"
import "./Display.css"

export class Display extends Component{

    render() {
        return (
            <div>
                <img 
                    src = {this.props.bigImage}
                    alt = {this.props.bigImage}
                    />
            </div>

        )
    }
}

export default Display