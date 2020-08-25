import style from '../styles/particles.module.css'
import Particles from 'react-particles-js';

const Particle = () => {
    return (
        <div className={style.particleContainer}>
            <Particles 
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}/>
        </div>
    );
};

export default Particle;