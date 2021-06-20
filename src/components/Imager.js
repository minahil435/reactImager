import React, { Component } from "react"
import Display from "./Display"
import Thumbnail from "./Thumbnail"
import "./flexCenter.css"

export class Imager extends Component {
    state = {
        Images: [
            "images/1.jpg",
            "images/2.webp",
            "images/3.webp",
            "images/4.jpeg",
            "images/5.jpeg",
            "images/6.webp",
            "images/7.jpg",
            "images/8.png",
            "images/9.jpeg",
            "images/10.jpeg",
            "images/11.jpeg",
            "images/12.jpg",
        ],

        bigImage: "",
        index: 0
    }

    componentDidMount() {
        this.setState({
            bigImage: this.state.Images[0],
            index: 0
        })
    }

    randomImageGenerator = () => {
        return Math.floor(Math.random() * this.state.Images.length)

    }

    displayRandomImage = () => {
        this.setState({
            index: this.randomImageGenerator()
        })
    }

    displayRightImage = () => {
        let num = this.state.index + 1
        if (num === this.state.Images.length) {
            num = 0
        }
        this.setState({
            index: num
        })

        console.log(num)
    }

    displayLeftImage = () => {
        let num = this.state.index - 1
        if (num === -1) {
            num = this.state.Images.length - 1
        }
        this.setState({
            index: num
        })
    }

    thumbnailImage = (index) => {
        this.setState({
            index: index
        })
    }


    render() {
        return (
            <div>
                <Display
                    bigImage={this.state.Images[this.state.index]}
                />
                <div class="flexCenter">
                    <div>
                    <button onClick={this.displayRandomImage}>
                        Random
                </button></div>
                    <div>
                        <button onClick={this.displayLeftImage}>
                            {'<'}
                        </button>
                        <button onClick={this.displayRightImage}>
                            {'>'}
                        </button>
                    </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {this.state.Images.map((item, index) => {
                        return <Thumbnail
                            item={item}
                            index={index}
                            thumbnail={this.thumbnailImage}
                        />
                    })
                    }
                </div>

            </div>

        )
    }
}

export default Imager;