import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

function AlertDialog(props) {
    const {handleClick, render} = props;
    return (
      <div>        
        <Dialog
          open={render}
          onClose={handleClick}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Welcome to Coinfo"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Unfortunately since this is just a project I am only using free apis.
              Therefore, history/graph data is only available
              with the top coins(Bitcoin, Etherium, etc). Enjoy the site!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClick} color="primary">
              Rip
            </Button>            
          </DialogActions>
        </Dialog>
      </div>
    );
  
}

export default AlertDialog;