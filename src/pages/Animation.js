import arrow from '../assets/arrow.png'
import eye from '../assets/eye.svg'
import ear from '../assets/ear.svg'
import hand from '../assets/hand.svg'
import frame1 from '../assets/Traditional media.svg'
import frame2 from '../assets/Techdataflow.svg'
import './animation.css'

const Animation = () => {
    return (
        <div style={{width: '100%', height: '80%', backgroundColor: '#492B7C'}}>
            <img class="arrow1" src={arrow} width={'6.8%'} height={'auto'}>
            </img>
            <img class="arrow2" src={arrow} width={'6.8%'} height={'auto'}>
            </img>
            <img class="arrow3" src={arrow} width={'6.8%'} height={'auto'}>
            </img>
            <img class="arrow4" src={arrow} width={'6.8%'} height={'auto'}>
            </img>
            <img class="eye1" src={eye} width={'9%'} height={'auto'}>
            </img>
            <img class="eye2" src={eye} width={'9%'} height={'auto'}>
            </img>
            <img class="ear" src={ear} width={'7%'} height={'auto'}>
            </img>
            <img class="hand" src={hand} width={'8%'} height={'auto'}>
            </img>
            <img class="frame1" src={frame1} width={'43.5%'} height={'auto'}>
            </img>
            <img class="frame2" src={frame2} width={'75%'} height={'auto'}>
            </img>
        </div>
    )
}

export default Animation