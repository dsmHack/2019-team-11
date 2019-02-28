import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import {
    ADDRESS_MODAL_TITLE,
    ADDRESS_MODAL_INPUT_PLACEHOLDER
} from "../constants/address";
import "./address.css";

import {actions} from "../dux/address";
import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        address: state.address
    }
}

const AddressModal = (props) => {
    return (
        <Card className="modal">
            <CardHeader className="title" title={ADDRESS_MODAL_TITLE} />
            <CardContent>
                <TextField
                    className="address"
                    type="text"
                    onChange={handleOnChange}
                    placeholder={ADDRESS_MODAL_INPUT_PLACEHOLDER}
                />
            </CardContent>
            <CardActions>
                <Button
                    className="nextButton"
                    size="medium"
                    variant="contained"
                    color="primary"
                    onClick={() => {}}
                >
                    NEXT
        </Button>;
            </CardActions>
        </Card>
    );

    function handleOnChange(e){
        props.addAddress(e.target.value);
    }
}

export default connect(mapStateToProps, actions)(AddressModal);
