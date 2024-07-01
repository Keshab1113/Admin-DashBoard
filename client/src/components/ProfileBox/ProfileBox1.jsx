import React, { useState, useRef, useEffect } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import TimezoneSelector from "../../components/ProfileBox/TimeZone";
import Skeleton from '@mui/material/Skeleton';

const ProfileBox1 = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);
  const cropperRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      if (cropperRef.current) {
        cropperRef.current.replace(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCrop = () => {
    const cropper = cropperRef.current;
    const canvas = cropper.getCroppedCanvas();
    if (canvas) {
      const croppedImage = canvas.toDataURL();
      // Do something with the cropped image, like save it or display it.
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 5 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className=" sm:w-[30%] w-full bg-white rounded-2xl dark:bg-slate-800 text-white mb-[7vh] sm:mb-0">
      {loading ? <Skeleton
        sx={{ bgcolor: 'grey', borderRadius: '8px', height: '100%', width: '100%' }}
        variant="rectangular"
        animation="wave"
      /> :
        <>
          <div className=" h-[42%]  ">
            <div className=" h-14 w-full border-b border-black flex justify-center pt-4 pb-4  dark:shadow-slate-600 dark:border-slate-600 ">
              <h1 className=" font-extrabold pb-2 px-6 w-[90%] dark:text-white text-black">
                Project
              </h1>
            </div>
            <div className="  py-4 px-6">
              <div className="">
                <h1 className="dark:text-white text-black">Project Name</h1>
                <div className=" flex justify-between pr-4 items-center mt-2">
                  <input
                    type="text"
                    value="Remote Monitoring System"
                    name=""
                    id=""
                    className=" w-[80%] rounded text-black"
                  />
                  <EditIcon className="dark:text-white text-black" />
                </div>
              </div>
              <div className=" mt-2 w-[79%] text-black">
                <TimezoneSelector />
              </div>
            </div>
          </div>
          <div className=" bg-white dark:bg-slate-700 dark:text-white w-full h-[58%] px-6 rounded-2xl flex justify-center flex-col text-black">
            <div className=" mt-2">
              <h1>Company Logo</h1>
              <div className="w-full flex justify-between pr-4">
                <div className=" w-40 border mt-2 p-2 flex justify-center items-center">
              
                  <img
                    src={image || "https://rms.imatrixautomation.com/logo/615089fe5f4bea24983b47e9_logo.png"}
                    alt="Selected"
                    ref={cropperRef}
                    height={50}
                    width={100}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" ref={imageRef} />
                  <button onClick={() => imageRef.current.click()} className="">
                    <EditIcon />
                  </button>
                  {image && (
                    <>
                      <button onClick={handleCrop} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Crop Image
                      </button>
                    </>
                  )}
                </div>

            
              </div>
            </div>
            <div className=" mt-2">
              <h1>Navbar Background Color</h1>
              <div className="w-full flex justify-between pr-4 mt-2">
                <div className=" w-32 h-11 border  flex justify-center items-center">
                  <div className=" bg-[#ff574a] h-6 w-20"></div>
                </div>
                <EditIcon />
              </div>
            </div>
            <div className=" mt-2">
              <h1>Navbar Text Color</h1>
              <div className="w-full flex justify-between pr-4 mt-2">
                <div className="  w-32 h-11 border  flex justify-center items-center">
                  <div className=" bg-black h-6 w-20"></div>
                </div>
                <EditIcon />
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default ProfileBox1;
