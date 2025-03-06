import govlogo from '../assets/governmentLogo.svg'
import img2 from '../assets/h2img2.svg'

const Header2 = () => {
    return (
        <>
            <div style={{ height: '130px', backgroundColor: '#F6F3C3', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily:"Inter"
             }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                    <img src={govlogo} width={'65px'} height={'110px'} style={{ marginLeft: '6px' }} />
                    <div style={{ marginLeft: '10px' }}>
                        <h1 style={{ margin: '0px', fontSize: '20px', fontWeight: '700', color: '#2A777C' }}>Integrated Drug Addiction Monitoring System (IDAMS)</h1>
                        <p style={{ margin: '0px', fontSize: '15px', fontWeight: '400', color: '#000000', marginTop:'11px',lineHeight:'18.15px'}}>Department of Social Justice & Empowerment.<br />Government of India.
                        </p>                            
                    </div>
                   
                </div>
                 <img src={img2} width={'586.11px'} height={'116px'} style={{marginRight:'14.89px'}} />
            </div>
           
        </>
    )
}

export default Header2;