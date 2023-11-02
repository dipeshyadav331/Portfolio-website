import FlatCard from "../../cards/flatcard/FlatCard";
import myLinks from "../../Object Files/links";
import thankyou from "../../assets/good.png";

const ThankYou = ( {eemail} ) => {
  return (
    <div className="thank_you_main">
      <FlatCard className="a-b" customClass="thank-you ">
        <div className="thank-you-home">
          <h1>{eemail}</h1>
          <p className="thank-you-desc">
          I will reply to your message on your mail soon.
          </p>
          <div className="connect">
            <div className="connect-text"> Connect with me on my socials:</div>
            <div className="flex project-links-cont left__align">
              {myLinks.map((items) => {
                return (
                  <a
                    key={items.id}
                    href={items.links}
                    className="project-links contact-links thankyou_link"
                    target=" blank"
                  >
                    <i className={items.icons}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="thankyou__img__cont">
          <img src={thankyou} alt="3d thumb" className="thankyou_img" />
        </div>
      </FlatCard>
    </div>
  );
};

export default ThankYou;