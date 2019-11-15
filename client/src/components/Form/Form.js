import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useAuth0 } from "../../react-auth0-spa";
import "./Form.css"

// This file exports the Input, TextArea, and FormBtn components

export function UserName(props){
 
  return(
      <>
     <div className="form-group" {...props}>
       
     </div>
     </>
  
  )
}

const useStyles = makeStyles(theme => ({
  root: {  
    '& label.Mui-focused': {
      color: 'white',
    }, 
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '& label': {
      color: 'white',
    },      
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'red',
        textColor: 'white'
      }         
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350,
    
  }
}));


export function Input(props) {
  const { isAuthenticated } = useAuth0();
  var classes = useStyles();
  return (
    <div className="formContainer">
    {!isAuthenticated &&
     <></>
    }
    {isAuthenticated && 
     <>     
     <div className="form-group">   
     <div id="titleField">
       <TextField 
       className={classes.root} 
       id="standard-full-width" 
       label="Title" 
       color="secondary"  
       style={{ 
         marginRight: 8,
         width: 350
         }}
       fullWidth
       variant="outlined"
       {...props} 
       />
       </div> 
     </div>
     </>
    }
    </div>  
  );
}

export function PostTextArea(props) {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  return (
    <div className="formContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&
      <div>       
      <form className={classes.root} id="textForm" noValidate autoComplete="off">
        <TextField 
          id="standard-error"
          label="Body"
          multiline
          rows="10"         
          className={classes.textField}
          margin="normal"
          variant="outlined"            
          {...props} 
          />     
      </form>
      </div>      
      }
    </div>
  );
}

export function CommentTextArea(props) {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  return (
    <div className="formContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&
      <div>       
      <form className={classes.root} id="commentForm" noValidate autoComplete="off">
        <TextField 
          id="standard-error"
          label="Reply"
          multiline
          rows="10"         
          className={classes.textField}
          margin="normal"
          variant="outlined"            
          {...props} 
          />     
      </form>
      </div>      
      }
    </div>
  );
}

export function FormBtn(props) {
  const { isAuthenticated } = useAuth0();  
  return (
    <div className="submitContainer">
      {!isAuthenticated && 
      <></>
      }
      {isAuthenticated &&     
      <button 
      id="submitPost" 
      {...props} 
      style={{ 
        float: "none", 
        marginBottom: 10 }} 
        className="submitButton">
        Submit
      </button>         
      }
    </div>
  );
}