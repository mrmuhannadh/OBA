import React from 'react'
import '../../Style/footerStyle.css'
import Form from 'react-bootstrap/Form';
import * as Icon from 'react-bootstrap-icons'
import AOS from 'aos'

const Footer = () => {
  return (
    <>
      <div className='footerSet'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 sideOne'>
              <div className='row'>
                <div className='col-md-12 d-flex flex-column justify-content-start align-items-start'>
                  <h3 data-aos="zoom-in-up">Contact with us</h3>
                </div>
              </div>
              <div className='row myFormSet' data-aos="zoom-out-up">
                <div className='col-md-6'>
                  <form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name<span className='formReqStar'>*</span></Form.Label>
                      <input type="text" className="form-control" name="name" placeholder='Your Name' required />
                      <Form.Text className="text-muted">
                        Please enter valid name
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email<span className='formReqStar'>*</span></Form.Label>
                      <input type="email" className="form-control" name="name" placeholder='someone@mail.com' required />
                      <Form.Text className="text-muted">
                        Please enter valid email
                      </Form.Text>
                    </Form.Group>
                  </form>
                </div>
                <div className='col-md-6 '>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone<span className='formReqStar'>*</span></Form.Label>
                    <input type="number" className="form-control" name="name" placeholder='07########' maxlength="6" required />
                    <Form.Text className="text-muted">
                      Please enter valid phone number
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject<span className='formReqStar'>*</span></Form.Label>
                    <input type="text" className="form-control" name="name" placeholder='Eg: New Membership' required />
                    <Form.Text className="text-muted">
                      Give a heading for your message
                    </Form.Text>
                  </Form.Group>
                </div>
                <div className='col-md-12'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description<span className='formReqStar'>*</span></Form.Label>
                    <textarea rows="6" className="form-control" name="name" placeholder='Eg: I need help for new membership' required />
                    <Form.Text className="text-muted">
                      Give a heading for your message
                    </Form.Text>
                  </Form.Group>
                </div>
                <div className='row'>
                <button className='btn btn-danger btnSubmit mx-3'>Submit</button>
                </div>
               
              </div>
            </div>
            <div className='col-md-3 col-sm-4 s ideTwo mx-4' >
              <div className='FirstSet'
                data-aos="zoom-in-up">
                <h3>Email Us</h3>
                <div className='inqData'>
                  <p>For inquiries only</p>
                  <h5>someone@mail.com</h5>
                </div>
              </div>

              <div className='SecoundSet'
                data-aos="zoom-in-up"
              >
                <h3>Call Us</h3>
                <div className='inqData'>
                  <p>For inquiries only</p>
                  <h5>+94-77554487</h5>
                  <h5>+94-77554487</h5>
                </div>
              </div>

              <div className='ThirdSet' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className='row'>
                  <div className='col'>
                    <div>
                      <Icon.Facebook size={35} className='iconRoundFooter' />
                    </div>
                  </div>
                  <div className='col'>
                    <div>
                      <Icon.Instagram size={35} className='iconRoundFooter' />
                    </div>
                  </div>
                  <div className='col'>
                    <div>
                      <Icon.Twitter size={35} className='iconRoundFooter' />
                    </div>
                  </div>
                  <div className='col'>
                    <div>
                      <Icon.Whatsapp size={35} className='iconRoundFooter' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row lowFooter'>
            <div className='col d-flex content-align-start'>
              &copy; 2023, Design by OBA Media Unit
            </div>
            <div className='col d-flex align-items-end flex-column'>
              Privacy & Cookie Policy | Terms of Service
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer