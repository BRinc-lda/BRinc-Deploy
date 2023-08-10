import NavBar from "../../components/NavBar/NavBar";
import "./About.css";
import books from "../../assets/books.png";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";
function About() {
  return (
    <div className="aboutContainer">
      <NavBar />

      <div className="aboutUs">
        <h1>Why BRinc Library?</h1>
        <div className="aboutImgText">
          <p>
            Welcome to our online library, founded by Reuben and Bruno, two
            passionate developers committed to a sustainable future. Our journey
            began with a shared concern for the environment and a desire to make
            a positive impact. Recognizing the need to conserve precious natural
            resources, particularly the trees that are felled for traditional
            book production, we embarked on a mission to provide an eco-friendly
            alternative. Through our online library, we're dedicated to reducing
            paper consumption and promoting a greener way of accessing
            knowledge. Every digital page turned is a step towards a healthier
            planet. Join us in our endeavor to foster a more sustainable reading
            culture while still indulging in the joy of literature and learning.
            Together, let's turn a new leaf for the environment and embrace the
            digital age of reading.
          </p>
          <img src={books} alt="library photo" className="aboutImage" />
        </div>
        <NavBarMobile />
      </div>
    </div>
  );
}

export default About;
