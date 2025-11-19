import Banner from '../components/banner'
import ProjectData from '../components/project_data'
import Description from '../components/description'
import Banner2 from '../components/banner_2'
import OtherInfo from '../components/other'
import AdoptionForm from '../components/form'

function HomePage () {
    return(
        <>
            <Banner/>
            <ProjectData/>
            <Description/>
            <Banner2/>
            <OtherInfo/>
            <AdoptionForm/>
        </>
    );
}

export default HomePage;