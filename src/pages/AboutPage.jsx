import Banner from '../components/banner'
import About from '../components/about' 

function AboutPage () {
    const barStyle = {
        width: '100vw',
        height: '2vw',
        backgroundColor: '#51459D',
        flexShrink: 0
    } 

    return(
        <>
            <Banner/>
             <div style={barStyle}></div>
            <About/>
        </>
    );
}

export default AboutPage;