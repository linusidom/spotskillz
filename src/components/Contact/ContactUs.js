import Form from 'react-bootstrap/Form';

export const ContactUs = () => {
    return(
        
            <div className='contact row align-items-center'>
                <div className='contactText col'>
                    
                    <div className="redLine"></div>

                    <div className="contactTitle">
                        <p className='contactHeader heroHeader'>Application Form</p>
                    </div>
                    
                    <div className="contactSubHeader">
                        <p className="contactSubHeader">Please Fill out the form to apply</p>
                    </div>    

                </div> 

                <div className='contactForm col-sm d-sm-block'>
                    <Form action='https://formspree.io/f/xdojgbrg' method="POST">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className='formLabel'>Your Name</Form.Label>
                            <Form.Control className='formControl' type="text" name='name' id='name'/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='formLabel'>Email address</Form.Label>
                            <Form.Control className='formControl' type="email" name='email' id='email'/>
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formBasicLinkedIn">
                            <Form.Label className='formLabel'>Your LinkedIn Profile</Form.Label>
                            <Form.Control className='formControl' type="text" name='linkedIn' id='linkedIn'/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label className='formLabel'>Email address</Form.Label>
                            <Form.Select className='formControl' name="course" id='course'>
                                <option checked value='frontend'>I'm interested in the Virtual FrontEnd Course</option>
                                <option value='backend'>I'm interested in the Virtual BackEnd Course</option>
                                <option value='fullstack'>I'm interested in the Virtual FullStack Course</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Text className="text-muted">
                                We'll never share your information with anyone else.
                        </Form.Text>
                        <div>
                            <button className="button contactButton" type='submit'>Submit</button>
                        </div>
                    </Form>
                </div>

            </div>
 
    )
}