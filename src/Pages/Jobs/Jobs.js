import React,{useEffect, useState} from 'react';
import JobDetails from './JobDetails';


const Jobs = () => {

    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        fetch('https://powerful-wave-67954.herokuapp.com/jobs')
        .then(res =>res.json())
        .then(data => setJobs(data));
    },[])

    return (
        <div>
            <div className='text-center my-12'>
                <h1 className="text-3xl text-bold">BROWSE OPEN POSITIONS BY CATEGORY</h1>
                <p>We are always on the lookout for talanted people</p>

            </div>

            <div className="text-center">
               {
                jobs.map(job =><JobDetails key={job._id} job={job}>

                </JobDetails>)
               }
            </div>


        </div>
    );
};

export default Jobs;