/**
 * Created by FXY on 2018/3/13.
 */
import React, { Component } from 'react';

class ImgFigure extends Component {
    render() {
        let imagesData = this.props.imagesData;
        return (
            <figure>
                <img src={imagesData.imageURL} alt={imagesData.title}/>
                <figcaption>
                    <h2>{imagesData.title}</h2>
                </figcaption>
            </figure>
        );
    }
}

export default ImgFigure;