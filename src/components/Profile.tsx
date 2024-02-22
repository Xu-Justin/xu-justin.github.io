import '../css/profile.css';
import JustinXu from '/JustinXu.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button, Stack, Typography} from "@mui/material";
import {URL_PROFILE_GITHUB, URL_PROFILE_LINKEDIN} from "../utils/Constants.tsx";
import {limitLines, newTab} from "../utils/Style.tsx";
import {useBreakpoints} from "../utils/Utils.tsx";

function Profile() {

    const {xs} = useBreakpoints();

    const profileSkills = [
        ['C/C++', 'Python', 'Java', 'TypeScript'],
        ['PyTorch', 'Keras', 'DVC', 'Comet ML', 'FiftyOne'],
        ['Spring Boot', 'React', 'Flask', 'Docker', 'AWS']
    ];

    return (
        <div className={'profile'}>
            <img className={'profile-image'} src={JustinXu} alt={'William Justin'}/>
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
                    href={URL_PROFILE_GITHUB}
                    sx={{minWidth: 0}}
                    {...newTab}
                >
                    <GitHubIcon sx={{mr: 1}}/>
                    Xu-Justin
                </Button>
                <Button
                    variant={'contained'}
                    size={'large'}
                    href={URL_PROFILE_LINKEDIN}
                    sx={{minWidth: 0, px: 2}}
                    {...newTab}
                >
                    <LinkedInIcon/>
                    &#8203; {/* Zero-Width Character to maintain MUI card height */}
                </Button>
            </Stack>
            <Stack className={'profile-skills'} direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                {profileSkills.map(profileSkillsRow => (
                    <Stack className={'profile-skills-row'} direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                        {profileSkillsRow.map(skill => (
                            <Typography
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
        </div>
    )
}

export default Profile;