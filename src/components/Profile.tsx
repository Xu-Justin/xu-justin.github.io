import '../css/profile.css';
import JustinXu from '/JustinXu.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Button, Stack, Typography} from "@mui/material";
import {limitLines, newTab} from "../utils/Style.tsx";
import {scrollToContent, useBreakpoints} from "../utils/Utils.tsx";
import {URL_PROFILE} from "../utils/Constants.tsx";

function Profile() {

    const {xs} = useBreakpoints();

    const profileSkills = [
        ['C/C++', 'Python', 'Java', 'TypeScript'],
        ['PyTorch', 'Keras', 'DVC', 'Comet ML', 'FiftyOne'],
        ['Spring Boot', 'React', 'Flask', 'Docker', 'AWS']
    ];

    return (
        <div className={'profile'}>
            <img className={'profile-image no-select'} src={JustinXu} alt={'William Justin'}/>
            <Typography
                variant={'h1'}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                textAlign={'center'}
            >
                William Justin
            </Typography>
            <Stack className={'profile-badge'} direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Button
                    variant={'contained'}
                    size={'large'}
                    href={URL_PROFILE.GitHub}
                    sx={{minWidth: 0}}
                    {...newTab}
                >
                    <GitHubIcon sx={{mr: 1}}/>
                    Xu-Justin
                </Button>
                <Button
                    variant={'contained'}
                    size={'large'}
                    href={URL_PROFILE.LinkedIn}
                    sx={{minWidth: 0, px: 2}}
                    {...newTab}
                >
                    <LinkedInIcon/>
                    &#8203; {/* Zero-Width Character to maintain MUI button height */}
                </Button>
            </Stack>
            <Stack className={'profile-skills'} direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                {profileSkills.map((profileSkillsRow, index) => (
                    <Stack className={'profile-skills-row'} direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'} key={index}>
                        {profileSkillsRow.map((skill, index) => (
                            <Typography
                                key={index}
                                variant={xs ? 'body2' : 'body1'}
                                textAlign={'center'}
                                sx={{...limitLines(1)}}
                            >
                                {skill}
                            </Typography>
                        ))}
                    </Stack>
                ))}
            </Stack>
            <div className={'profile-scroll-container'} onClick={() => scrollToContent()}>
                <Stack className={'profile-scroll'} direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <ArrowDownwardIcon fontSize={'small'}/>
                    <Typography
                        className={'no-select'}
                        variant={'caption'}
                        fontWeight={'medium'}
                        textTransform={'uppercase'}
                        letterSpacing={'2px'}
                        textAlign={'center'}
                        sx={{...limitLines(1)}}
                    >
                        Explore
                    </Typography>
                    <ArrowDownwardIcon fontSize={'small'}/>
                </Stack>
            </div>
        </div>
    )
}

export default Profile;