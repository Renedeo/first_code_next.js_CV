import React from "react";
import Stack from "@mui/material/Stack";
import {
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider,
    LinearProgress
}
    from "@mui/material";

const linguisticSkills = [
    {
        language: "French",
        level: {
            "Avancé": 75
        }
    },
    {
        language: "Anglais",
        level: {
            "Intermédiaire": 50
        }
    }
];

const mapLevelToColor = (level: string) => {
    switch (level) {
        case "Courant":
            return "#4CAF50"; // Green
        case "Avancé":
            return "#4CAF50"; // Green
        case "Intermédiaire":
            return "#FFC107"; // Yellow
        case "Débutant":
            return "#2196F3"; // Blue
        default:
            return "#9E9E9E"; // Gray
    }
};

const LinguisticSkills = () => {
    return (
        <Stack>
            {/* <Divider textAlign="left" sx={{ marginTop: "20px" }}> */}
            {/* </Divider> */}
            <List>
                {linguisticSkills.map((skill, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography
                                        fontSize="15px"
                                    >
                                        {skill.language}
                                    </Typography>
                                    <Typography
                                        fontSize="10px"
                                        style={{ color: mapLevelToColor(Object.keys(skill.level)[0]) }}
                                    >
                                        {Object.keys(skill.level)[0]}
                                    </Typography>
                                </Stack>
                            }
                            secondary={
                                <LinearProgress
                                    variant="determinate"
                                    value={skill.level[Object.keys(skill.level)[0]]}
                                    sx={{ width: "100%", marginTop: "8px" }}
                                />
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
};

export default LinguisticSkills;
