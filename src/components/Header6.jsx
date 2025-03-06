import GovLogo from '../assets/govlogo2.svg'
import ExportLogo from '../assets/nic.svg'
import SocialIcon from '../assets/socialMedia.svg'

const Header6 = () => {
    return (
        <>            
            <div style={{ height: '350px', backgroundColor: '#ffffff', display:'flex', fontFamily:'Poppins', color:'#FFFFFF', position:'relative'}}>
                <div style={{backgroundColor:'#D2E2D5', width:'41.54%', position:'relative'}}>
                <div style={{fontFamily:"Inter", display:'flex'}}>
                <img src={GovLogo} width={'51px'} height={'86px'} style={{marginLeft:'25px', marginTop:'32px', }} />
                <div style={{ marginTop:'25px', marginLeft:'18px',}}>
                <p style={{fontWeight:700, fontSize:'15px', lineHeight:'18.15px',  color:'#00321F'}}>Integrated Drug Addiction Monitoring System (IDAMS)</p>
                <p style={{ margin: '0px', fontSize: '15px', fontWeight: '400', color: '#000000', marginTop:'11px',lineHeight:'18.15px'}}>Department of Social Justice & Empowerment.<br />Government of India.
                        </p>
                        </div> 
                </div>
                <img src={SocialIcon} width={'290px'} height={'90px'} style={{position:'absolute', bottom:'69px', left:'120px'}}/>
                </div>
                <div style={{backgroundColor:'#ffffff', width:'.1%'}}>
                </div>
                <div style={{backgroundColor:'#D2E2D5', width:'28.19%', color:'#00321F', display:'flex', textAlign:'center',justifyContent:'center', alignItems:'center'}}>
                    <div>
                        <p style={{fontWeight:600, fontSize:'20px', lineHeight:'25px'}}>About Us</p>
                        <p style={{fontWeight:600, fontSize:'20px', lineHeight:'25px'}}>contact Us</p>
                        <p style={{fontWeight:600, fontSize:'20px', lineHeight:'25px'}}>Gallery</p>
                        <p style={{fontWeight:600, fontSize:'20px', lineHeight:'25px'}}>Terms & Conditions</p>
                        <p style={{fontWeight:600, fontSize:'20px', lineHeight:'25px'}}>Copyright Policy</p>
                    </div>
                </div>
                <div style={{backgroundColor:'#ffffff', width:'.1%'}}>
                </div>
                <div style={{backgroundColor:'#D2E2D5', width:'30%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <img src={ExportLogo} width={'353px'} height={'170px'} style={{marginTop:'-20px',}} />
                    <p style={{color:'#00321F', fontWeight:400, fontSize:'20px', lineHeight:'25px', textAlign:'center',marginInline:'20px', marginTop:'-25px'}}>This site is designed, developed, hosted and maintained by National Informatics Centre, Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment, Government of India.</p>
                </div>
                
            </div>
            <div style={{ height: '50px', backgroundColor: '#00321F', display:'flex', justifyContent:'space-between', alignItems:'center', fontFamily:'Poppins', color:'#FFFFFF', position:'relative'}}>
                <p style={{fontWeight:'400px', fontSize:'20px', lineHeight:'24.2px', marginLeft:'28px', fontFamily:"Inter"}}>No. of visitors : 3,935</p>
                <p style={{fontWeight:'400px', fontSize:'24px', lineHeight:'24.2px', marginRight:'28px'}}>Last updated on : 27 January 2025
                </p>
          </div>
        </>
    )
}

export default Header6;