import React, {useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { jobAction } from '../redux/actions/job.actions';


const JobDetail = () => {
    const { id } = useParams();
    const job = useSelector(state => state.job.selectedJob)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(jobAction.getSingleJob(id))
    }, [dispatch,id]);
    
    return (
        <div>
            This is job detail {id}
            {job !== null && (
                    <Card>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Text>Salary: {job.salary}</Card.Text>
                        <Card.Text>Description: {job.description}</Card.Text>
                        <Card.Text>Address: {job.district}, {job.city}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {job.tags.map((t,index) => (<ListGroupItem key={index}>{t}</ListGroupItem>))}
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                        {job.benefits.map((t,index) => (<ListGroupItem key={index}>{t}</ListGroupItem>))}
                    </ListGroup>
                    <Link to="/jobs">Come back Lists Job</Link>
                    </Card>
            )}
        </div>
    )
}

export default JobDetail
