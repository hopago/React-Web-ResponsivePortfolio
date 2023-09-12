import './about.css';
import Award from '../../img/award.png';


const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                  src="https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg" 
                  alt="" 
                  className="a-img" 
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Is is a long established fact that a reader will be create a readable content.
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ad.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, quae.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, iure?
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design</h4>
                    <p className="a-award-desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, cumque.
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
