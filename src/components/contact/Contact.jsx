import './contact.css';
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';


const Contact = () => {

    const formRef = useRef();

    const [done,setDone] = useState(false);

    const theme = useContext(ThemeContext);

    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Receive Data from user_form
        
        // emailjs.sendForm(
        //     REACT_APP_SERVICE_ID,
        //     REACT_APP_TEMPLATE_ID,
        //     formRef.current,
        //     REACT_APP_USER_ID
        // )
        // .then(
        //     (result) => {
        //         console.log(result);
        //         setDone(true);
        //     },
        //     (error) => {
        //         console.log(error.text);
        //     }
        // );

    };

  return (
    <div className="c">
        <div className="c-bg" style={{ backgroundColor: darkMode && "#999" }}></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contact Me</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +82 10 8721 6498
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        ghwns818@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        GangNam, Seoul
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story? </b>Get in touch.
                    Always freelancing if the right project comes along!
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Name' name='user_name' />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder='Subject' name='user_subject' />
                    <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="email" placeholder='Email' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} name="message" rows="5" placeholder='Message'></textarea>
                    <button>Submit</button>
                    {done &&
                        <div className="doneMessage">
                            Thank you for submit!
                        </div>
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
