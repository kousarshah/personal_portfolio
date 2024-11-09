

import Header from './components/header';
import Footer from './components/Footer';
import './home.css';
import  Image from "next/image";
import logo from './public/logo.jpg';

export default function Home() {
  return (
    <div className='hero'>
      <p className='para'> Hi,I am</p>
      <h1 className='main-heading'>Kousar Shah</h1>
      <h2 className='h2'>Front end developer</h2>
       <Image src={logo} width={300} height={800} alt='logo' className='logo-name'/> 
   </div>
  );
}
// export default function Home() {
//   return (
//     <div className="hero">
//       <p className="para">Hi, I am</p>
//       <h1 className="main-heading">Yusra Fatima</h1>
//       <h2 className="h2">Front-end developer</h2>

//       <Image
//         src={girl}
//         width={300}
//         height={900}
//         alt="Girl Image"
//         className="girl"
//       />
//       )}
