import React, { useEffect } from "react";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { gapi } from "gapi-script";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: `${import.meta.env.VITE_GOOGLE_API_TOKEN}`,
        scope: "email",
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));

    const { name, imageUrl, googleId } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="object-cover w-full h-full"
        />
        <div className="absolute flex flex-col justify-center items-center left-0 right-0 bottom-0 top-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl ">
            <GoogleLogin
              clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center rounded-lg p-3 cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
