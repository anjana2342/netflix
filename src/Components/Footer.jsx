import "../App.css"

const Footer = () =>{
    return(
        <footer className="netflix-footer">
            <div className="footer-container">
                <p className="contact">Questions?Contact us</p>
                <div className="footer-columns">
                    <ul className="footer-column">
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                         <li><a href="#">Corporate Information</a></li>
                         <li><a href="#">Legal Notices</a></li>

                    </ul>

                    <ul className="footer-column">
                         <li><a href="#">Help Centre</a></li>
                         <li><a href="#">Jobs</a></li>
                        <li><a href="#">Terms of Use</a></li>
                           <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Only on Netflix</a></li>
          </ul>
                    <ul className="footer-column">
            <li><a href="#">Account</a></li>
            <li><a href="#">Redeem gift cards</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
            <li><a href="#">Advert choices</a></li>
          </ul>
                <ul className="footer-column">
            <li><a href="#">Media Centre</a></li>
            <li><a href="#">Buy gift cards</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Guarantee</a></li>
          </ul>

          <div className="language-selector">
            <select >
                <option value="">English</option>
            </select>
          </div>
             </div>

            </div>

        </footer>

    )
}
export default Footer;