import Paper from "@mui/material/Paper";

const Card = (props) => {
    return (
        <Paper
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            } }
            elevation={3}
        >Card</Paper>
        )
};
export default Card;
