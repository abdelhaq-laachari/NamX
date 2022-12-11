import './newCars.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewCar = () => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
              <Navbar />
                <h1 class="title_form">Add New Order</h1>
    <form action="">
        <section class="form">
            <div class="item_form">
                <input placeholder="text..." type="text" />
            </div>
            <div class="item_form">
                <input placeholder="text..." type="text" />
            </div>
            <div class="item_form">
                <input placeholder="text..." type="text" />
            </div>
            <div class="item_form">
                <input placeholder="text..." type="text" />
            </div>
            <div class="item_form">
                <input placeholder="text..." type="text" />
            </div>
            <div class="item_form">
                <input placeholder="text..." type="text" />
            </div>
            <div class="item_form_button">
                <button class="button_blue">Submit</button>
                <button class="button_gray">Reset</button>
            </div>
            <div class=""></div>
        </section>
    </form>

        
        

      </div> 
    </div>
  );
};

export default NewCar;