import React from "react";
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}){
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    function RenderComment({comments}){
        if (comments != null){
            const list = comments.map((comment) => {
                return(  
                    <div>
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            
                        </li>
                        
                    </div>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            );
        }
        else{
            return <div></div>
        }
    }
    
    const DishDetail = (props) =>{
        console.log('Dishdetail Component render invoked');
        if (props.dish != null){
            
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <div><RenderDish dish={props.dish}/></div>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <div><RenderComment comments={props.dish.comments}></RenderComment></div>
                    </div>
                    
                </div>
               
            );
        } 
        else {
            
            return <div></div>;
        }

    }



export default DishDetail;