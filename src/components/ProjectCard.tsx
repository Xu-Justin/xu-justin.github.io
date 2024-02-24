import '../css/project-card.css';
import {Stack, Typography} from "@mui/material";
import {limitLines} from "../utils/Style.tsx";
import {useBreakpoints} from "../utils/Utils.tsx";

export interface ProjectCardProps {
    image: string;
    title: string;
    tags?: string[];
    url?: string;
}

function ProjectCard({image, title, tags, url}: ProjectCardProps) {
    const {xs} = useBreakpoints();

    return (
        <a className={'project-card'} href={url}>
            <img className={'project-card-image no-select'} src={image} alt={'url'}/>
            {tags &&
                <Stack
                    direction={'row'}
                    spacing={1}
                    divider={
                        <Typography className={'no-select'}>
                            •
                        </Typography>
                    }
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    {tags.map((tag, index) => (
                        <Typography
                            variant={xs ? 'caption' : 'body2'}
                            sx={{...limitLines(1)}}
                            key={index}
                        >
                            {tag}
                        </Typography>
                    ))
                    }
                </Stack>
            }
            <Typography
                variant={'h5'}
                fontWeight={'medium'}
                textAlign={'left'}
            >
                {title}
            </Typography>
        </a>
    )
}

export default ProjectCard;