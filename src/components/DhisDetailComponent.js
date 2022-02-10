import React,{ Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List  } from 'reactstrap';

class DishDetail extends Component {

  

    renderDish(dish){
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

    renderComment(comments){
        if (comments != null){
            const list = comments.map((comment) => {
                return(  
                    <div>
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, {comment.date}</p>
                            
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

    render(){
        if (this.props.selectedDish != null){
            
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <div>{this.renderDish(this.props.selectedDish)}</div>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <div>{this.renderComment(this.props.selectedDish.comments)}</div>
                    </div>
                    
                </div>
               
            );
        } 
        else {
            return <div></div>;
        }

    }

}

export default DishDetail;