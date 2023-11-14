const ImageBackgroundNoText = ({ backgroundImage }) => {
  return (
    <div
      className="image-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default ImageBackgroundNoText;
