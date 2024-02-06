import { Card, Chip, Grid, Typography } from '@mui/material';
import React from 'react'

const CustomCard = ({ data }) => (
    <Card sx={{ backgroundColor: "#f0f0f0", px: "10px", py: "10px", borderRadius: "8px" }}>
        <Grid container justifyContent="space-between">
            <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>{data.code}</Typography>
            <Chip
                label={data.chipLabel}
                sx={{
                    height: "25px",
                    backgroundColor: data.chipBackgroundColor,
                    color: "white",
                    "& .MuiChip-label": {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        whiteSpace: "nowrap",
                    },
                }}
            />
        </Grid>
        <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>{data.title}</Typography>
        <Grid sx={{ pt: "7px" }} container justifyContent="space-between" alignItems="center">
            <Chip
                label={data.subChipLabel}
                sx={{
                    borderRadius: "7px",
                    height: "22px",
                    backgroundColor: data.subChipBackgroundColor,
                    "& .MuiChip-label": {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        whiteSpace: "nowrap",
                    },
                }}
            />
            <Grid>
                <Typography sx={{ fontSize: "12px" }}>{data.subtitle}</Typography>
                <Typography sx={{ fontSize: "13px" }}>{data.date}</Typography>
            </Grid>
        </Grid>
    </Card>
);

export default CustomCard