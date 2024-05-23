const Heading = (props) => {
  const styleObj = {
    color: "#faa02f",
    fontSize: "22px",
    textTransform: "uppercase",
  };

  const createHeading = (val) => {
    return `// ${val} //`;
  };

  return <h3 style={styleObj}>{createHeading(props.value)}</h3>;
};

export default Heading;
