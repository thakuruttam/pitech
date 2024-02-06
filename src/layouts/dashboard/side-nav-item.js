import NextLink from "next/link";
import { Box, ButtonBase } from "@mui/material";

export const SideNavItem = (props) => {
    const { active = false, disabled, external, icon, path, title } = props;

    const linkProps = path ?
        external ?
        {
            component: "a",
            href: path,
            target: "_blank",
        } :
        {
            component: NextLink,
            href: path,
        } :
        {};

    return ( <
        li >
        <
        ButtonBase sx = {
            {
                alignItems: "center",
                borderRadius: 1,
                display: "flex",
                justifyContent: "center",
                pl: "16px",
                pr: "16px",
                py: "6px",
                textAlign: "center",
                width: "100%",
                ...(active && {
                    backgroundColor: "rgb(249 253 253 / 22%)",
                }),
                "&:hover": {
                    backgroundColor: "rgb(249 253 253 / 22%)",
                },
            }
        } {...linkProps } >
        {
            icon && ( <
                Box component = "span"
                sx = {
                    {
                        alignItems: "center",
                        color: "#76d97fc4",
                        display: "inline-flex",
                        justifyContent: "center",
                        height: "40px",

                        ...(active && {
                            color: "#76d97fc4",
                        }),
                    }
                } >

                { icon }

                <
                /Box>
            )
        } <
        /ButtonBase> <
        /li>
    );
};