import React, { useState } from 'react'
import {  FaDownload, FaLocationArrow } from 'react-icons/fa';
function Contact() {
  const [email,setemail]=useState('')
  const [name,setname]=useState('')
  const [subject,setsubject]=useState('')
  const [Message,setmessage]=useState('')
  
  const reset=()=>{
    setemail('')
    setname('')
    setsubject('')
    setmessage('')
  }
  const handleSubmlit=(e)=>{
    e.preventDefault()
    alert(`Thank you ${name} for visiting! If you have any questions or inquiries, feel free to contact me on WhatsApp at +212 649962806 or via email at younessennajy30@gmail.com. :)`)
      reset();
  }
  const handleDownload = () => {
    const cvFileName = 'CV_Ennajy_Youness .pdf';
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${cvFileName}`;
    link.download = cvFileName;
    link.click();
  };
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Let's connect.</p>
        </div>

        <div className="row"  >

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i ><FaLocationArrow/></i>
                <h4>Location:</h4>
                <p>fès</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.246042768383!2d-5.0200777!3d34.0385142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b4fa51f13f7%3A0x939e20c676fcfeaa!2sDhar%20Mehraz%2C%20Fes%2C%20Morocco!5e0!3m2!1sen!2s!4v1637403720152!5m2!1sen!2s"
                frameBorder="0"
                style={{ border: '0', width: '100%', height: '290px' }}
                allowFullScreen
                title="Fez Location">
              </iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmlit} >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" value={email} className="form-control" onChange={(e)=>setemail(e.target.value)} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text"  value={subject} className="form-control" onChange={(e)=>setsubject(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control"  value={Message} onChange={(e)=>setmessage(e.target.value)} rows="10" required></textarea>
              </div>
              <br/>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
      <button id='cv-btn' className="btn btn-primary" onClick={handleDownload}><FaDownload/>  CV</button>

    </section>
  )
}

export default Contact