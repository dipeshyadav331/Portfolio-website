import {react} from 'react';
import "./projectDescription.scss";

const ProjectDescription = ({handleClick})=> {
    const onChildClick = () => {
        handleClick();
    }

    return(
        <div className="projectDescription">
                Jai Baba Ki
                <button onClick={onChildClick} className='close'> Close </button>
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
                Jai Shri Shyam
                <br />
        </div>
    );
}

export default ProjectDescription;