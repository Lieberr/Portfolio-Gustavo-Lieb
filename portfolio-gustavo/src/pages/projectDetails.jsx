import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";



const ProjectDetailsPage = () => {

    const {id} = useParams();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { 
        const fetchProject = async () => {
            try{
                const res = await fetch(`/api/projects/${id}`);
                if (!res.ok) throw new Error('Failed to fetch Project');
                const data = await res.json();
                console.log(data);
                setProject(data);
            } catch (err){
                setError(err.message);
                console.log(err);
            } finally{
                setLoading(false)
            }
        }

        fetchProject();
     }, [id])


    return ( 

        <div>oi</div>
        
     );
}
 
export default ProjectDetailsPage;