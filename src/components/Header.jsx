// import icon1 from '../assets/icon1.png'
import icon2 from '../assets/Icon2.svg'
import icon3a from '../assets/Icon3a.svg'
import icon3b from '../assets/Icon3b.svg'
import icon4 from '../assets/Icon4.svg'
import Linebreak from '../assets/Line.svg'
import Vector from '../assets/Vector.svg'

const Header = () =>{
    return(
        <>
        <div style={{height:'80px', margin:'0px', padding:'0px', backgroundColor:'#00321F', display:'flex', justifyContent:'space-between', alignItems:'center', 
            fontFamily:"Inter"
            }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h1 style={{ fontSize: '20px', fontWeight:'700', color:'#FFFFFF', marginLeft:'32px', 
                
                }}>भारत सरकार</h1>
            <img src={Linebreak} width={'.7px'} height={'45px'} style={{ marginInline: '20px' }} />
            <h1 style={{fontSize: '20px', fontWeight:'700', color:'#FFFFFF'}}>Government of India.</h1>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h1 style={{ fontSize: '24px', fontWeight:'500', color:'#FFFFFF', marginRight: '28px'}}>Skip To Main Content</h1>
            <img src={Linebreak} width={'.7px'} height={'80px'}/>
            <img src={Vector} width={'31.51px'} height={'31.51px'} style={{ marginInline: '11px', objectFit:'cover' }} />
            <img src={Linebreak} width={'.7px'} height={'80px'} />
            <img src={icon2} width={'45px'} height={'41px'} style={{ marginLeft: '9px', marginRight:'13px' }} />
            <img src={Linebreak} width={'.7px'} height={'80px'}/>
            <img src={icon3a} width={'28px'} height={'28px'} />
            {/* <img src={Linebreak} width={'1px'} height={'80px'} style={{ marginLeft: '4px' }} /> */}
            <img src={icon3b} width={'32px'} height={'32px'} />
            <img src={Linebreak} width={'.7px'} height={'80px'}/>
            <img src={icon4} width={'33px'} height={'33px'} style={{ marginLeft: '15px', marginRight:'12px' }} />
            </div>
        </div>
        </>
    )
}

export default Header;