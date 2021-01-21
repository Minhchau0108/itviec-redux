import React, { useState, useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Card, Badge, Container } from 'react-bootstrap';
import { jobAction } from '../redux/actions/job.actions';

const JobsList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');

    const dispatch = useDispatch()
    const jobList = useSelector((state) => state.job.jobs)
    const loading = useSelector((state) => state.job.loading)

    useEffect(() => {
        dispatch(jobAction.getJobData())
    }, [dispatch]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleClick = ()=>{
        setQuery(searchTerm);
    }

    return (
        <Container>
            <div className="input-group mt-5 mb-3">
                <input type="text" onChange={handleChange} value={searchTerm} className="form-control" placeholder="Search Title"/>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Search</button>
            </div>
            {loading ? <h1>Loading</h1>: 
                        (jobList.filter(job => job.title.includes(query) || job.tags.includes(query)).map((job) => (
		                <Card key={job.id} className="my-2">
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Text>
                                    City: {job.city}
                                </Card.Text>
                                {job.tags.map((t,index) => (<Badge variant="success" className="mx-2" key={index}>{t}</Badge>))}
                            </Card.Body>
                            <Link to={`/jobs/${job.id}`} key={job.id}>View Detail</Link>
                        </Card>
	        )))}
        </Container>
    )
}

export default JobsList
