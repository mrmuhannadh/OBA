import React from 'react'
import '../../Style/footerStyle.css'
import Form from 'react-bootstrap/Form';
import fb from '../../Images/Home/Icons/FB.svg'
import whatsapp from '../../Images/Home/Icons/Whatsapp.svg'
import insta from '../../Images/Home/Icons/Instagram.svg'
import linked from '../../Images/Home/Icons/Linkdin.svg'
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
                  <h3>Contact with us</h3>
                </div>
              </div>
              <div className='row myFormSet'>
                <div className='col-md-6'>
                  <form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name<span className='formReqStar'>*</span></Form.Label>
                      <input type="text" className="form-control myInput" name="name" placeholder='Your Name' required />
                      <Form.Text className="text-muted">
                        Please enter valid name
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email<span className='formReqStar'>*</span></Form.Label>
                      <input type="email" className="form-control myInput" name="name" placeholder='someone@mail.com' required />
                      <Form.Text className="text-muted">
                        Please enter valid email
                      </Form.Text>
                    </Form.Group>
                  </form>
                </div>
                <div className='col-md-6 '>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone<span className='formReqStar'>*</span></Form.Label>
                    <input type="number" className="form-control myInput" name="name" placeholder='07########' maxlength="6" required />
                    <Form.Text className="text-muted">
                      Please enter valid phone number
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject<span className='formReqStar'>*</span></Form.Label>
                    <input type="text" className="form-control myInput" name="name" placeholder='Eg: New Membership' required />
                    <Form.Text className="text-muted">
                      Give a heading for your message
                    </Form.Text>
                  </Form.Group>
                </div>
                <div className='col-md-12'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description<span className='formReqStar'>*</span></Form.Label>
                    <textarea rows="6" className="form-control myInput" name="name" placeholder='Eg: I need help for new membership' required />
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
              <div className='FirstSet'>
                <h3>Email Us</h3>
                <div className='inqData'>
                  <p>For inquiries only</p>
                  <h5>someone@mail.com</h5>
                </div>
              </div>

              <div className='SecoundSet'
              >
                <h3>Call Us</h3>
                <div className='inqData'>
                  <p>For inquiries only</p>
                  <h5>+94-77554487</h5>
                  <h5>+94-77554487</h5>
                </div>
              </div>

              <div className='ThirdSet'
              >
                <div className='row'>
                  <div className='col'>
                    <div>
                      <img src={fb}
                        alt="fb"
                        className='icon fbicon'
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div>
                      <img src={insta}
                        alt="fb"
                        className='icon fbicon'
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div>
                      <img src={linked}
                        alt="fb"
                        className='icon fbicon'
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div>
                      <img src={whatsapp}
                        alt="fb"
                        className='icon fbicon'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row lowFooter py-3'>
            <div className='col d-flex content-align-start text-nowrap'>
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