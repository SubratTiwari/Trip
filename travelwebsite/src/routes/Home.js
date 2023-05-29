import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName ="hero"
        heroImg ="https://raw.githubusercontent.com/tech2etc/React-Trippy-Tour-Website-Template/main/src/assets/12.jpg"
        title ="Your Journey Your Story"
        text="Choose your Favourite Destination"
        buttonText= "Travel Plan"
        url ="/"
        btnClass= "show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>

    );
}

export default Home;