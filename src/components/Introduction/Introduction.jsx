import './Introduction.css'

export function ProjectBlock(){
    return (
        <div className="project-block">
            <ProjectCorpus></ProjectCorpus>
            <img 
            className="schematic"
            src="src/assets/Home Page/Simple Flow - Website.png"/>
        </div>
    )
}

function ProjectCorpus(){
    return (
        <div className="project-corpus">
            <h1 className="project-title">The Pipeline</h1>
            <p 
            className="project-text" 
            id="project-1-p">The possibility of resorting to the Mouse Stereotaxic Brain Atlas allows for precise surgeries on the animal's brain. This tool has found a robust foundation for the wild-type mouse. However, that is not the case for multiple transgenic mice, as many of them have slight differences in the brain sizes, shapes, etc. This leads to imprecise electrode positioning and lack of reproducibility for studies that use these models. To fight this, the NeuroFrame pipeline presents itself as a <b>quick</b>, <b>precise</b>, and <b>efficient</b> way of extracting a specific brain atlas for each situation. As a proof of concept, on this website, you can find the results of applying this pipeline to the brain of the parkinsonian mouse model.</p>
            <p 
            className="project-text"
            id="project-2-p">This <b>automatic</b> pipeline uses MRI, μCT, and MIRACL-generated segmentations to output the center coordinates of each segment for every mouse. After analyzing the entire population, it provides an average transgenic mouse atlas for later stereotaxic surgery.</p>
        </div>
    )
}