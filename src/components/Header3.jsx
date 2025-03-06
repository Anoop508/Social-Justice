import Login from '../assets/h3img1.svg'
import Register from '../assets/h3img2.svg'
import FlipCard from './FlipCard'
import { useState } from 'react'

const Header3 = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    return (
        <>
            <div style={{ height: '67.95px', backgroundColor: '#899A5C', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily:'Poppins'
             }}>
                <div style={{display:'flex'}}>
                    <div style={{fontSize: '20px', fontWeight:600, lineHeight:'25px',  marginLeft:'30px', marginRight:'28px', color: (isHovered1 ? '#FFFFFF' : '#00321F') , cursor: "pointer"}}  onMouseLeave={() => setIsHovered1(false)}  onMouseEnter={() => setIsHovered1(true)}>
                    Home 
                    </div>
                    <div style={{fontSize: '20px', fontWeight:600, lineHeight:'25px' , marginInline:'28px', color: (isHovered2 ? '#FFFFFF' : '#00321F') , cursor: "pointer"}} onMouseLeave={() => setIsHovered2(false)}  onMouseEnter={() => setIsHovered2(true)}>
                    About Us
                    </div>
                    <div style={{fontSize: '20px', fontWeight:600, lineHeight:'25px' , marginInline:'28px', color: (isHovered3 ? '#FFFFFF' : '#00321F') , cursor: "pointer"}} onMouseLeave={() => setIsHovered3(false)}  onMouseEnter={() => setIsHovered3(true)}>
                    Contact Us
                    </div>
                    <div style={{fontSize: '20px', fontWeight:600, lineHeight:'25px' , marginInline:'28px', color: (isHovered4 ? '#FFFFFF' : '#00321F') , cursor: "pointer"}} onMouseLeave={() => setIsHovered4(false)}  onMouseEnter={() => setIsHovered4(true)}>
                    User Guide
                    </div>
                </div>
                <div style={{marginTop:'10px'}} >
                   <img src={Login} width={'172.06px'} height={'35.18px'} style={{ marginLeft: '20px' }} />
                   <img src={Register} width={'164.24px'} height={'35.18px'} style={{ marginRight: '21px', marginLeft: '28px' }} />
                </div>
            </div>
            <div>
        
        
      </div>
      
      {/* <div style={{display:'flex', justifyContent:'space-evenly', paddingBlock:'20px'  }}>
        <FlipCard front={'front1'} back={'back1'}/>
        <FlipCard front={'front2'} back={'back2'}/>
        <FlipCard front={'front3'} back={'back3'}/>
        </div> */}
        </>
    )
}

export default Header3;