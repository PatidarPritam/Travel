import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> Travel</h1>
          <p>Choose Your favourite destination. </p>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/pritam-patidar-2565291b3">
            <i className="fa-brands fa-linkedin"> </i>
          </a>
          <a href="https://instagram.com/pritam_patidar_?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D">
            <i className="fa-brands fa-instagram-square"> </i>
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook-square"> </i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"> </i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4> Project</h4>
          <a href="/"> ChangeLog </a>
          <a href="/">Status </a>
          <a href="/"> Licence</a>
          <a href="/"> All Versions</a>
        </div>
        <div>
          <h4> Community</h4>
          <a href="https://github.com/PatidarPritam"> GitHub</a>
          <a href="/">Issues</a>
          <a href="https://patidarpritam.github.io/TextUtils-React/">
            {" "}
            Project
          </a>
          <a href="/"> Twitter</a>
        </div>
        <div>
          <h4> Help</h4>
          <a href="/"> Support </a>
          <a href="/">Troubleshooting</a>
          <a href="https://contactus.pritampatidar29.repl.co/"> ContactUs</a>
          <a href="https://contactus.pritampatidar29.repl.co/"> MailUs</a>
        </div>
        <div>
          <h4> Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy </a>
          <a href="/">Licence</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
