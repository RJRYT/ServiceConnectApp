import About from "../components/About";
import Header from "../components/header";
import ProviderHeader from "../components/ProviderHeader";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Images from "../components/Images";
import Video from "../components/Video";
import Submitbutton from "../components/submitbutton";
// import background from "../assets/providerprofile/th.jpg"
import banner from "../assets/providerprofile/banner.jpg";

function ProviderProfile() {
    return (
        <div className="min-h-screen w-full bg-gray-100 scrollbar-hide">
            <Header title="PROFILE" />
            <img className="h-[40vh] w-full p-1" src={banner} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">

                <ProviderHeader />
                <About />
                <Services />
                <Reviews />
                <Images />
                <Video />

            </div>
            <div className="flex justify-center ">
                <Submitbutton title="Book service" />
            </div>
        </div>


    )
}
export default ProviderProfile;