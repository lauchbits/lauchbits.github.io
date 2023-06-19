import './Project.css'
import projectData from "./projectData.json"

function Project() {

    return (
        <>
        {projectData.info.map((idk, index) => (
            <div className='border-container'>
                <a href={projectData.info[index].link} target='_blank'>
                    <div className='link-div-border'>
                        <div className='link-background' style={{backgroundImage: `url(${"img/background-" + parseInt(index+1) + ".png"})`}}></div>
                    </div>
                </a>
            </div>
          ))}
        </>
    );
}



export default Project;