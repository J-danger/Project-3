import React from 'react';  
import { Input, TextArea, FormBtn } from '../Form/Form'
 

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<Input   
  value={this.state.title}
  onChange={this.handleInputChange}
  name="title"
  placeholder="Title (required)"
  />

<TextArea  
  value={this.state.body}
  onChange={this.handleInputChange}
  name="body"
  placeholder="What do you want to say? (required)"
  />
<FormBtn 
  disabled={!(this.state.title && this.state.body)}
  onClick={this.handleFormSubmit}
  />
<button className="submit">Close</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;