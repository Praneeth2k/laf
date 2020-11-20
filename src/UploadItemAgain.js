import React, {useState} from "react";
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MultiStep from 'react-multistep';
import StepOne from './stepOne';
import StepFour from './stepFour';

function UploadItemAgain(props) {
    const {
        buttonLabel,
        className
      } = props;
    
    const [modal, setModal] = useState(false);
    const steps = [
        { component: <StepOne /> },
        { component: <StepFour /> }
        ]

        const prevStyle = {'background-color': 'blue',
        'border': 'none',
        'color': 'white',
        'padding': '11px',
        'text-align': 'center',
        'text-decoration': 'none',
        'display': 'inline-block',
        'font-size': '13px'}
    const nextStyle = {'background-color': '#4CAF50',
    'border': 'none',
    'color': 'white',
    'padding': '11px',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '13px'}

    
      const toggle = () => setModal(!modal);
      return (
        
        <div className = "Formupl" align="center">
        
          <Button color="danger" onClick={toggle}>{buttonLabel}Found</Button>
          <div >
          <Modal isOpen={modal} toggle={toggle} style={{width:"50rem"}}>
            
            <ModalHeader toggle={toggle} >Modal title</ModalHeader>
            <div>
            <ModalBody style={{width:"50rem"}}>        
                <div>
                    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} style={{width:"50rem",paddingLeft:"3rem"}}/>
                </div>       
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Submit</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </div>
          </Modal>
        </div>
        </div>
      );
  }

export default UploadItemAgain;