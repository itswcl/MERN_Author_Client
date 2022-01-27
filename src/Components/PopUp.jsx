// PopUp component to handle delete confirm window pop up

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const PopUp = (props) => {
    // default the window is close
    const [state, setState] = useState(false);
    // switch window up when it clicks
    const handleClickOpen = () => setState(true);
    // handle close once it cancels delete or confirm
    const handleClose = () => setState(false);

    const handleDelete = () => {
        // use props to call the parent function
        props.deleteAuthor(props.author._id)
        // close the window
        handleClose();
        // console.log("handleDelete");
    };
    // const handleCancel = () => {
    //     handleClose();
    //     // console.log("handleCancel");
    // };

    // check windows.confirm later

    return (
        <div>
            {/* Button to trigger the opening of the dialog */}
            <Button onClick={handleClickOpen}>Delete</Button>
            {/* Dialog that is displayed if the state open is true */}

            <Dialog open={state}>

                <DialogTitle>Delete an Author</DialogTitle>

                <DialogContent>Are you sure you want to remove {props.author.name}?</DialogContent>

                <DialogActions>
                    {/* straight to close the window set it back to false */}
                    <Button onClick={handleClose} className="btn">Cancel</Button>
                    {/* confirm then we delete the target by call parent function */}
                    <Button onClick={handleDelete} className="btn">Delete</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
};

export default PopUp;
