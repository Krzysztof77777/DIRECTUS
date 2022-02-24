import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loader = (props) => {
  return (
    <div className={props.className}>
      <FontAwesomeIcon icon={faCircleNotch} />
    </div>
  );
};

export default Loader;
