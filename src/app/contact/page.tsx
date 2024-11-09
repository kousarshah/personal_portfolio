
//  export default function Contact() {
//    return (
//     <div>
//         <h1>Contact</h1>
//         <h4>feel free to ask</h4>
//         <form>
//             <table>
//                 <th>
//                     <tr>
//                         <td>Enter your Name:</td>
//                         <td><input type='text'></input></td>
//                     </tr>
//                 </th>
//                 <th>
//                     <tr>
//                         <td>Enter Your Email:</td>
//                         <td><input type='text'></input></td>
//                     </tr>
//                 </th>

//                 <th>
//                     <tr>
//                         <td> Enter Your Message:</td>
//                         <td><input type='text'></input></td>
//                     </tr>
//                 </th>
//             </table>
//         </form>
//     </div>
//    )
//  }

import './contact.css';
export default function Contact(){
    return (
 <div>
 <h1 id='contact'  className="heading1">Contact</h1>
 <h3 className='feel-para'>Feel free to contact</h3>
 <form action="#" method="post" id="mainform">
 <div className="form-group1">
   {/* <label htmlFor="name" className="name">Full Name</label> */}
   <input type="text"  id="name" name="name" required placeholder='Enter your Name'   className="form-input1" />
 </div>
 
 <div className="form-group2">
   {/* <label htmlFor="email" className='email'>Email</label> */}
   <input type="text" id="email" name="email" placeholder=' Enter your email address'  className="form-input2" />
 </div>
 
 <div className="form-group3">
   {/* <label htmlFor="msg" className='msg'>Message</label> */}
   <textarea id="message" name="message" rows={5}  placeholder='Message'  className="form-input3"></textarea>
 </div>

<button className="contact-button">SUBMIT</button>
</form>

</div>
 )
}

//  <div>
//  <h1 id='contact'  className="heading1">Contact</h1>
//  <h3 className='feel-para'>Feel free to contact</h3>
//  <form action="#" method="post" id="mainform">
//  <div className="form-group1">
//    {/* <label htmlFor="name" className="name">Full Name</label> */}
//    <input type="text"  id="name" name="name" required placeholder='Enter your Name'   className="form-input1" />
//  </div>
 
//  <div className="form-group2">
//    {/* <label htmlFor="email" className='email'>Email</label> */}
//    <input type="text" id="email" name="email" placeholder=' Enter your email address'  className="form-input2" />
//  </div>
 
//  <div className="form-group3">
//    {/* <label htmlFor="msg" className='msg'>Message</label> */}
//    <textarea id="message" name="message" rows={5}  placeholder='Message'  className="form-input3"></textarea>
//  </div>

// <button className="contact-button">SUBMIT</button>
// </form>
// </div>  
