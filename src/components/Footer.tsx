import '../css/footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {IconButton, Stack, Typography} from "@mui/material";
import {URL_PROFILE} from "../utils/Constants.tsx";
import {newTab} from "../utils/Style.tsx";
import {useBreakpoints} from "../utils/Utils.tsx";

function Footer() {
    const {xs} = useBreakpoints();
    return (
        <div className={'footer'}>
            {xs &&
                <Typography
                    variant={'body1'}
                    fontWeight={'medium'}
                >
                    Crafted with 🌈 <br/> by <b>William Justin</b>
                </Typography>
            }
            {!xs &&
                <Typography
                    variant={'body1'}
                    fontWeight={'medium'}
                >
                    Crafted with 🌈 by <b>William Justin</b>
                </Typography>
            }
            <Stack direction={'row'} spacing={1} justifyContent={'center'} alignItems={'center'}>
                <IconButton color={'secondary'} href={URL_PROFILE.GitHub} {...newTab}>
                    <GitHubIcon fontSize={'large'}/>
                </IconButton>
                <IconButton color={'secondary'} href={URL_PROFILE.LinkedIn} {...newTab}>
                    <LinkedInIcon fontSize={'large'}/>
                </IconButton>
            </Stack>
        </div>
    )
}

export default Footer;