import React, { useRef,useState,useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

 


function Animation() {
 
  const [usesce, setSce] = useState("/jaguar.glb");
    function changecar() {
      //value select
      const select = document.getElementById("countries");
      // onchange select
      select.value === "jaguar" ? setSce("/jaguar.glb")  :setSce("/toyota.glb");
      console.log(usesce.toString());
    }
    function Model(props) {  
      const { scene } = useGLTF(usesce.toString());
      const ref = useRef();
      return <primitive object={scene} {...props} ref={ref} />;
    }

  return (
    <>
      {/* ajouter selection deux model */}
      <div class="max-w-2xl mx-auto">
        <select
          onChange={changecar}
          // onChange={e => setSce(e.target.value)} 
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled value="d">
            Choose voiture{" "}
          </option>
          <option value="jaguar">jaguar</option>
          <option value="toyota">toyota</option>
        </select>
      </div>

      <Canvas
        id="cnv"
        dpr={[1, 2, 2]}
        shadows
        camera={{ position: [100, 20, 100] }}
        style={{
          width: "100%",
          height: "1000px",
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
      
          >
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default Animation;
