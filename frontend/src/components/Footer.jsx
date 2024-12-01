import React from "react";

function Footer () {
    return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-column">
                <h3>Follow Me</h3>
                <ul className="social-links">
                    <li>
                        <a href="https://www.linkedin.com/in/arfiarfath21/">
                            <img src="assets/icons/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ArfiArfath21">
                            <img src="assets/icons/github.svg" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/ArfathAhmedSyed">
                            <img src="assets/icons/twitter.svg" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:contact@arfath.me">
                            <img src="assets/icons/email.svg" alt="Email" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Stay Updated</h3>
                <form id="subscribeForm" action="/mailer" method="POST">
                    <input type="email" id="emailInput" name="email" placeholder="Your email address" required/>
                    <button type="submit" className="form-button">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Arfath Ahmed Syed</p>
        </div>
        <script>
            {/* document.addEventListener() */}
        </script>
    </footer>
    )
}

export default Footer;
