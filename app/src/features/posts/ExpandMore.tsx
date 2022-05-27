import { IconButton, IconButtonProps, styled } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const Expand = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ExpandMore = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => { setExpanded(!expanded); };


    return (

        <Expand
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </Expand>

    )
}

export default ExpandMore