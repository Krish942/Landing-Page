import "./ProgrammeStructure.css"
// eslint-disable-next-line react/prop-types
const ProgrammeStructure = ({title}) => {
  return (
    <div>

      <div className="Structure">
        <div className="left">
         <img src=" img1.jpg" alt="" id="sem"/>
        </div>

       <div className="KRI">
       <div className="right">
          <center> <h1>{title}</h1></center>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry' standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum standard dummy text ever since the 1500
          </p>
           <button>read more</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default ProgrammeStructure
