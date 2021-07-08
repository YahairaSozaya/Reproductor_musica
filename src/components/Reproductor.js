import React from 'react';
import './styles/Reproductor.css';
import portada from '../images/disco.jpg';
import play from '../images/play.png';
import pause from '../images/pausa.png';
import music from '../images/music.mp3';
import Loading from '../components/Loading';

class Reproductor extends React.Component{

    audio=new Audio (music);
    
    state={
        play:false,
        pause:true,
        tiempo:0,
        minutos:0,
        segundos:`00`,
    }

    componentDidMount(){
        this.handleInterval();
    }


    handleTiempo=()=>{  
        if (this.state.tiempo>59){
            var minuto=Math.floor(this.state.tiempo/60);
            var segundo=Math.floor(this.state.tiempo-minuto*60);
            if (segundo<10){
                this.setState({minutos:minuto, segundos:`0${segundo}`});
            } else {
                this.setState({minutos:minuto, segundos:`${segundo}`});
            }
            
        } else {
            segundo=Math.floor(this.state.tiempo)
            if (segundo<10){
                this.setState({segundos:`0${segundo}`});
            } else{
                this.setState({segundos:`${segundo}`});
            }
            
        }
    }


    handleInterval=()=>{
        setInterval(()=>{
            let currentTime=this.audio.currentTime;
            this.setState({tiempo:currentTime});
            this.handleTiempo();
        },1000);

        document.getElementById("animacion").style.display="none";
    }
       
    

    handleToogle=()=>{
        if (this.state.pause){
            this.setState({play:true, pause:false});
            this.audio.play();
            document.getElementById("boton").src=`${pause}`;
            document.getElementById("animacion").style.display="block";
        } 

        if (this.state.play){
            this.setState({play:false, pause:true});
            this.audio.pause();
            document.getElementById("boton").src=`${play}`;
            document.getElementById("animacion").style.display="none";
        }
    
    }



    render(){
        
        return(
            <div className="contenedor">
                <div className="contenedor_portada">
                    <img className="portada" src={portada} alt="imagen de disco"></img>
                </div>

                <div  className="contenedor_animacion">
                    <div id="animacion">
                        <Loading/>
                    </div>
                </div>

                <div className="texto">
                    <h1>We are young</h1>
                    <h6>Nate Ruess</h6>
                </div> 

                <div className="boton_contenedor">
                    <img id="boton" className="boton" onClick={this.handleToogle} src={play} alt="boton reproducir-pausar"></img>  
                </div>

                <div className="temporizador_contenedor">
                    <div id="temporizador">{this.state.minutos}:{this.state.segundos}</div>
                    <div>4:12</div>
                </div>
            </div>
        )
    }
}

export default Reproductor;