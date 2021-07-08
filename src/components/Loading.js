import React from 'react';
import '../components/styles/Loading.css';

class Loading extends React.Component{
    render(){
        return(
            <div>
                <div className="animacion_contenedor">
                    <div class="box uno"></div>
                    <div class="box dos"></div>
                    <div class="box tres"></div>
                    <div class="box cuatro"></div>
                    <div class="box cinco"></div>
                    <div class="box seis"></div>
                </div>
            </div>
        )
    }
}

export default Loading;