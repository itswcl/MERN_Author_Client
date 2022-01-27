import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const PopUp = (props) => {

    const [state, setState] = useState(false);

    const handleClickOpen = () => setState(true);
    const handleClose = () => setState(false);

    const handleDelete = () => {
        props.deleteAuthor(props.author._id)
        handleClose();
        // console.log("handleDelete");
    };
    const handleCancel = () => {
        handleClose();
        // console.log("handleCancel");
    };

    return (
        <div>
            {/* Button to trigger the opening of the dialog */}
            <Button onClick={handleClickOpen}>Delete</Button>
            {/* Dialog that is displayed if the state open is true */}

            <Dialog open={state}>

                <DialogTitle>Delete an Author</DialogTitle>

                <DialogContent>Are you sure you want to remove {props.author.name}?</DialogContent>

                <DialogActions>
                    <Button onClick={handleCancel} className="btn">Cancel</Button>
                    <Button onClick={handleDelete} className="btn">Delete</Button>
                </DialogActions>

            </Dialog>
        </div>
    );
};

export default PopUp;
