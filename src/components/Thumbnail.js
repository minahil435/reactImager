import React, {Component} from "react";
import "./thumbnail.css"


export class Thumbnail extends Component {
    render (){
        return (
            <div>
                <img
                    style = {{ height:150, width:150 }}
                    src = {this.props.item}
                    alt = {this.props.item}
                    onClick = {() => this.props.thumbnail(this.props.index)}
                    />
            </div>
        )
    }
}

export default Thumbnail;