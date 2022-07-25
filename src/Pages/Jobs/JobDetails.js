import React from 'react';

const JobDetails = ({ job }) => {

    const { category, jobs } = job;
    return (
        <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                {category}
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <select name="job" className="select select-bordered bg-primary w-full max-w-xs">
                    {
                        jobs.map((job, index) => <option
                            key={index}
                            value={job}
                        >{job}</option>)
                    }
                </select>
                
                <button class="btn btn-warning">Remove</button>
            </div>
        </div>
    );
};

export default JobDetails;