import boy from '../assets/Boy.svg'
import wallpaper from '../assets/Wallpaper.svg'
import button from '../assets/ReadMore.svg'

const Header4 = () => {
    return (
        <>
            <img src={wallpaper} width={'100%'} height={'320px'} style={{objectFit:'cover'}}/>
            <div style={{ height: '650px', backgroundColor: '#00321F', marginTop:'-4px', display:'flex', fontFamily:'Poppins', color:'#FFFFFF', position:'relative'}}>
            <img src={boy} width={'408.77px'} height={'538.87px'} style={{marginTop:'80.19px', marginLeft:'98px'}} />
            <div style={{width:'672.91px', marginTop:'30px',position:'absolute', right:'30px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1 style={{fontSize:'40px', fontWeight:700, lineHeight:'60px',margin:'0px', textAlign:'center', letterSpacing:'0%'}}>About us</h1>
                <p style={{fontSize:'24px', fontWeight:400, lineHeight:'36px', margin:'0px', textAlign:'center'}}>
                    The Ministry of Social Justice and Empowerment (MSJE) has taken an initiative to establish a Integrated Drug Addiction Monitoring System (IDAMS) so that data on help seekers at centres funded by the Ministry is collected in a systematic way. As a centre funded by the ministry, your participation in this exercise is extremely valuable. You are required to submit a form online for each new patient seeking treatment/ rehabilitation/counselling (for alcohol or any other drug) at your centre.
                </p>
                {/* <img src={button} width={'183px'} height={'49px'}/>
                <h1>Read more</h1> */}
                <div style={{ position: "relative", display: "inline-block", marginTop:'30px',alignContent:'center' }}>
                        <img
                            src={button}
                            alt="Sample"
                            style={{ width:'183px' , height:'49px'} }
                        />
                        {/* <p
                            style={{
                            position: "absolute",
                            top: "-50%",
                            left: "9%",
                            fontWeight:700,
                            fontSize:'28px',
                            color:'#141517',
                            // color: "white",
                            // padding: "10px",
                            // borderRadius: "5px",
                            }}
                        >
                            Read More
                        </p> */}
                        </div>


            </div>
            </div>
        </>
    )
}

export default Header4;