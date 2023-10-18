
import errorIcon from "../../assets/images/error-component/error-icon.png";
import closeIcon from "../../assets/images/error-component/close-icon.png";

import "./style.scss";

interface ErrorPopupProps
{
  title: string;
  description: string;
}

function ErrorPopup(props: ErrorPopupProps,)
{
  const {
    title,
    description,
  } = props;

  return (
    <div className="error-popup">
      <div className="image-container">
        <img className="error-icon" src={errorIcon} />
      </div>

      <div className="content-error-message">
        <h2 className="error-title" >{title}</h2>
        <h4 className="error-description" >{description}</h4>
      </div>

      <button className="close-popup">
        <img className="close-icon" src={closeIcon} />
      </button>

      <div className="strip-line">
        <div className="filled-part"></div>
      </div>
    </div>
  );
}

export default ErrorPopup;