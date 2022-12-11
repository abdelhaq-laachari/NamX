import './newCars.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
const NewCar = () => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
              <Navbar />
        
       
      </div> 
    </div>
  );
};

export default NewCar;
