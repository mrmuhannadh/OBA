import React from 'react'
import phone from '../../Images/Home/Icons/phone.svg'
import mail from '../../Images/Home/Icons/mail.svg'

const SectionThree = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 sol-sm-12'>
                        <div className='container myLeft'>
                            <div className='px-4 py-2'>
                                <p className='thought1'>
                                    ' Indeed , the men who practice charity and the women who
                                    practice charity and [ they who ] have loaned Allah a goodly
                                    loan - it will be multiplied for them , and - they will have a noble reward '
                                </p>
                                <p className='thought1Link'>The Noble Qur'an , 57:18</p>
                            </div>
                            <div className='px-4'>
                                <p className='thought1Link'>
                                    These inspirational quotes of giving back what one has received,
                                    who delight in giving their time and resources to their beloved
                                    School. Your Alma Mater has given each student so much and it’s
                                    the duty of Sebastianites to give back. Please be kind enough to
                                    send your ideas & generous thoughts to info@alazharccd.org.
                                    We would love to hear about it.
                                </p>
                            </div>
                            <div className='p-4'>
                                <p className='thought1Link'>
                                    Send us your donations by contacting the Hon. Treasurer.<br />
                                    Mr. JD Sharfan Ahamed<br />
                                    Hon. Treasurer
                                </p>
                                <div className='row text-nowrap'>
                                    <div className='col d-flex justify-content-start'>
                                        <img src={phone}
                                            alt="P"
                                        />
                                        <div className='px-3'>
                                            +94 (77) 840 2492
                                        </div>
                                    </div>
                                    <div className='col d-flex justify-content-start'>
                                        <img src={mail}
                                            alt="P"
                                        />
                                        <div className='px-3'>
                                            treasurer@alazharccdoba.org
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className='container text-start py-4 px-5'>
                            <div className='row w-100'>
                                <h3 className='donationHead'>
                                    Choose a donation amount
                                </h3>
                            </div>
                            <br />
                            <div className='row donRow'>
                                <div className='col-md-4 colDonation mx-2'>
                                    <input type="radio" className='amount' name='amount' /> Rs.2000
                                </div>
                                <div className='col-md-4 colDonation mx-2'>
                                    <input type="radio" className='amount' name='amount' /> Rs.5000
                                </div>
                                <div className='col-md-4 colDonation mx-2'>
                                    <input type="radio" className='amount' name='amount' /> Rs.10000
                                </div>

                            </div>
                            <div className='row donRow py-2 input-group mb-3'>
                                <div className='col-md-12  w-100 colOtherDonation'>
                                    <input type="number" className='Otheramount w-100 form-control' placeholder='Other Amount' />
                                    <span class="input-group-text lkr" id="basic-addon1">LKR</span>
                                </div>
                            </div>
                            <div className='row'>
                                Choose a donation Frequency
                                <div className='row '>
                                    <div className='col-md-6'>
                                        <input type="radio" className='amount' name='freq' /> Monthly
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="radio" className='amount' name='freq' /> One Time
                                    </div>
                                </div>
                                <p className='py-1'>
                                    student body ample opportunities to develop their Media, technical,
                                    and communication skills. We help them cultivate their skills in written
                                    media tudent body ample opportunit to develop their Media, technical, and
                                    communicatio
                                </p>
                                <div className='row'>
                                    <div className='col d-flex justify-content-start align-items-center'>
                                        <button className='btnCancel'>
                                            Cancel
                                        </button>
                                    </div>
                                    <div className='col d-flex justify-content-start align-items-center'>
                                        <button className='btnCheckout'>
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree