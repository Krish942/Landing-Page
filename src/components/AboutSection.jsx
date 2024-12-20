import "./abot.css";
import Navbar from "./Navbar";

function AboutSection() {
  return (
    // <section className="flex bg-orange-400 h-36 w-40">
    //   {/* Image Section */}
    //   {/* <div
    //     className="relative"
    //     style={{
    //     width: "100px",
    //     height:"100px"
    //     }}
    //     >
    //     <img
    //       src="img2.jpg"
    //       alt="School"
    //       className="w-full h-full object-cover  "
    //     />
    //   </div>

    //   {/* About Us Text Section */}
    //   {/* <div
    //     className="bg-white p-6 md:ml-6 mt-6 md:mt-0"
    //     style={{
    //       width: "420px",
    //       borderRadius: "0px 10px 10px 0px",
    //       textAlign: "left",
         
    //     }}
    //   >
    //     <div>
    //     <h2 className="text-lg font-bold mb-2">About Us</h2>
    //     <h3 className="text-2xl font-bold text-blue-600 mb-4">School Name</h3>
    //     <p className="text-gray-700 text-sm leading-relaxed">
          
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry standard dummy text ever
    //       since the 1500s. Lorem Ipsum is simply dummy text of the printing and
    //       typesetting industry. Lorem Ipsum has been the industry’s standard
    //       dummy text ever since the 1500s.
    //     </p>
    //     </div> */}
    //   {/* </div>  */}


    //       <div className="left bg-red-600 h-10 w-10">
    //         img
    //       </div>

    //       <div className="right bg-zinc-950 h-10 w-10">
    //         text
    //       </div>
    // </section>

    
    <div className="about-section">

           {/* <Navbar/> */}
    {/* Left Section */}
    <div className="left">
      <img src="img2.jpg" alt="Description" id="aboutimg" />
    </div>

    {/* Right Section */}
    <div className="right">
       <center>
       <div><h2 className="text-lg font-bold mb-2">About Us</h2></div>
    <div>     <h1 className="schoolname">School Name</h1></div>
        <div><p className="text-gray-700 text-sm leading-relaxed">
          
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
           since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry’s standard
          dummy text ever since the 1500s.
        </p> </div>
       </center>
    </div>
  </div>
  );
}

export default AboutSection;
