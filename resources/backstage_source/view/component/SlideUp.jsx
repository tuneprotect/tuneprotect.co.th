import React from "react";
import Slide from "@material-ui/core/Slide";

const SlideUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default SlideUp;
