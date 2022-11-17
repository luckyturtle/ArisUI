import React from 'react';
import { Row, Col, Input, Button} from 'antd';
import './style.css';

const MaxInput = (props) => {
    return (
        <div className='max-btn-input'>
            <Row className='label'>
                {props.isCompleted?
                    <>{props.type} {props.token} Balance: {props.balance}</>
                    :
                    <>{props.type} ib{props.token} Balance: {props.balance}</>
                }
            </Row>
            <Row style={{marginTop:"0.5rem"}}>
                <div style={{width:"70%"}}>
                    <Input className='c-inputMax__input'/>
                </div>
                <div style={{width:"30%"}}>
                    <Button
                        style={{width:"100%"}}
                        className='c-inputMax_btn'
                    >
                        Max
                    </Button>
                </div>
            </Row> 
        </div>
    )
  }
export default MaxInput
  