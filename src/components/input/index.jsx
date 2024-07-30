const Inputs = ({props, onChange, value, name}) => {
    return (
      <div>
          <label>{props}<input type="text" onChange={onChange} value={value} name={name} /></label>
          
      </div>
    )
  }
  
  export default Inputs;