import PropTypes from "prop-types";
import styles from "./ImageWrapper.module.sass";

function ImageWrapper({ children, width, height, ...restProps }) {
  const containerStyles = { width, height };

  return (
    <div
      {...restProps}
      style={containerStyles}
      className={styles.imageContainer}
    >
      {children}
    </div>
  );
}

export default ImageWrapper;

// props.children - патерн, який дозволяє ділитися версткою та стилями

ImageWrapper.defaultProps = {
  width: "50px",
  height: "50px",
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
