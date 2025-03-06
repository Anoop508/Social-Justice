import ViewAll from '../assets/ViewAll.svg'
import Carousel from './Carousel';
import FlipCard from './FlipCard';

const Header5 = () => {
    return (
        <>            
            <div style={{ height: '141px', backgroundColor: '#DCFDF0', display:'flex', fontFamily:'Poppins', position:'relative', justifyContent:'center'}}>
            <h1 style={{margin:'0px',fontFamily:"Inter", color:'#00321F', fontWeight:700, fontSize:'32px', lineHeight:'38.37px',marginTop:'26px'}}>Awareness/outreach activities by IRCA’s</h1>
            <img src={ViewAll} height={'44px'} width={'142px'} style={{position:'absolute', top:'26px', right:'23px'}} />
            </div>
            <div style={{backgroundColor: '#DCFDF0',}}>
            <Carousel />
            </div>
            {/* <div style={{display:'flex', justifyContent:'space-around', alignItems:'center' }}>
                <FlipCard front={'Hello'} back={'Hello1'} />
                <FlipCard front={'Hello'} back={'Hello1'} />
                <FlipCard front={'Hello'} back={'Hello1'} />
            </div> */}
        </>
    )
}

export default Header5;