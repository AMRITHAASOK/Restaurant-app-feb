import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';


function Restreview({re}) {
    console.log(re);
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
       Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-fade-text">
         {
            re?.map((item)=>(

                <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title><p>{item.name}</p></Card.Title>
                  <Card.Text>
                  <div>
                 
                    <p>{item.date}</p>
                    <p>{item.rating}</p>
                    <p>{item.comments}</p>
                </div>
                  </Card.Text>
                </Card.Body>
              </Card>  
                
            ))
         }
        </div>
      </Collapse>
    </div>
    
  )
}

export default Restreview