const Heading = props => {
  const styleObj = {
    color: "#faa02f",
    fontSize: "28px",
    textTransform: "uppercase"
  }

  const createHeading = val => {
    return `// ${val} //`
  }

  return <h1 style={styleObj}>{createHeading(props.value)}</h1>
}

export default Heading
