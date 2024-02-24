import '../css/project.css';
import Patchmentation from '/personal-projects/patchmentation.jpg';
import DeepFaceDrawing from '/personal-projects/deep-face-drawing.jpg';
import GrayscaleFaceColoring from '/personal-projects/grayscale-face-coloring.jpg';
import ProjectCard, {ProjectCardProps} from "./ProjectCard.tsx";
import {Stack, Typography} from "@mui/material";
import {URL_PROJECT} from "../utils/Constants.tsx";

function Project() {
    const personalProjects: ProjectCardProps[] = [
        {
            image: Patchmentation,
            title: 'Patchmentation: A Python Library for Seamless Patch Augmentation',
            tags: ['Python', 'Data Augmentation', 'Object Detection'],
            url: URL_PROJECT.Patchmentation,
        },
        {
            image: DeepFaceDrawing,
            title: 'Photo-Realistic Face Images Generation from Sketches',
            tags: ['Python', 'Generative Adversarial Network'],
            url: URL_PROJECT.DeepFaceDrawing,
        },
        {
            image: GrayscaleFaceColoring,
            title: 'Grayscale Face Image Colorization',
            tags: ['Python', 'Conditional Adversarial Network'],
            url: URL_PROJECT.GrayscaleFaceColoring,
        },
    ]

    return (
        <div className={'project'} id={"project"}>
            <Typography
                variant={'h1'}
                fontWeight={'medium'}
                textAlign={'left'}
            >
                Personal Project
            </Typography>
            <Stack className={'project-stack'} direction={'column'} spacing={4}>
                {personalProjects.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </Stack>
        </div>
    )
}

export default Project;