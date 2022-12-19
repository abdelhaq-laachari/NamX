import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import axios from "axios";

function Animation() {


  const [usesce, setSce] = useState("/jaguar.glb");
  const [cars, setCars] = useState();
  const [data, setData] = useState();
  

  useEffect(() => {
    axios
      .get("/getCars")
      .then((res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function changecar() {
    const select = document.getElementById("countries");

    // onchange select
    select.value === "jaguar" ? setSce("/jaguar.glb") : setSce("/toyota.glb");

    console.log(usesce.toString());
    // afficher name car sur consol:
  console.log("car name jg",cars?.filter(car=> car.name ===select.value ));
    console.log(cars?.map(car=> car.name));

    setData(cars?.filter(car=> car.name ===select.value ))
    const car=document.getElementById("car");
    car.style.display="block";
  }
  function Model(props) {
    const { scene } = useGLTF(usesce.toString());
    const ref = useRef();
    // rotation up to 10s after stopping the rotation
    useFrame((state, delta) => {
      ref.current.rotation.y += 0.01;
      // if (state.clock.elapsedTime > 13) {
      //   ref.current.rotation.y = 0;
      // }
    });
   
    return <primitive object={scene} {...props} ref={ref} />;
  }

  return (
    <>
      {/* ajouter selection deux model */}

      <section className="">
        <div class="h-full col-span-4 
         rounded-md flex items-center  ">
          <div className="flex flex-col w-1/3 items-center justify-center  h-screen  ">
            <select
              onChange={changecar}
              id="countries"
              class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled value="d">
                Choose voiture{" "}
              </option>
             {cars?.map((car)=>
              <option value={car.name}>{car.name}</option>
              )}
            </select>
            {/* style={{display:'none'}} id="car" */}
            <div class=" bg-black/30  w-2/3 h-[600px] py-6 my-6 mx-8 border-1   transition duration-300"
             style={{display:'none'}} id="car" >
              <div class="relative flex items-center space-x-4 justify-center ">
              {
                data?.map((car)=>
                <div class="flex flex-col items-center justify-center">
                  <span class="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                 {car.name}
                </span>
                <span class="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                {car.edition}
                </span>
                <span class="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                {car.horsepower}
                </span>
                <span class="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                {car.maxSpeed}
                </span>
                <span class="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                {car.acceleration}
                </span>
                <span class="block w-max font-semibold tracking-wide text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                {car.autonomy}
                </span>
              </div>

                )
              }
                 
              </div>
            </div>
          </div>

          <Canvas
            id="cnv"
            dpr={[1, 2, 2]}
            // shadows
            camera={{ position: [100, 20, 100] }}
            style={{
              width: "100%",
              height: "900px",
              // backgroundImage:
              //   "url(https://cdn.pixabay.com/photo/2016/05/22/13/19/background-1408485_960_720.jpg)",
              backgroundrepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <spotLight intensity={1} position={[0, 0, 0]} />
            <PresentationControls
              spped={1.5}
              global
              zoom={0.5}
              polar={[-0, 8, Math.PI / 4]}
            >
              <Stage
                // shadows={"accumulative"}
                shadows={null}
              >
                <Model scale={0.01} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
      </section>
    </>
  );
}

export default Animation;
