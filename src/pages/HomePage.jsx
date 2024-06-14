import React from "react";
import Header from "../components/Header";
import Tabview from "../components/TabView";
import {
  Typography,
  Button
} from "@material-tailwind/react";
import Footer from "../components/Footer";

const Page1 = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-5 justify-center">
        <Typography
          as="li"
          variant="h1"
          color="black"
          className="p-1 font-medium"
        >
          Học tập thật hiệu quả với ILearn!
        </Typography>
        <Typography
          as="li"
          variant="h6"
          color="black"
          className="p-1 font-medium"
        >
          ILearn giúp bạn học tập hiệu quả hơn, tiết kiệm thời gian và giảm bớt căng thẳng. Hãy tải xuống ILearn ngay hôm nay để bắt đầu trải nghiệm những lợi ích tuyệt vời mà ứng dụng mang lại!
        </Typography>
        <Button
          variant="text" className="inline-flex items-center gap-2 self-start" style={{ backgroundColor: '#3E49F3', color: '#ffffff' }}>
          Tải xuống ngay{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>
      <div className="flex items-center justify-center" >
        <img src="/src/assets/screen1.png" alt="homepage" className="w-1/2 pl-5" />
      </div>
    </div>

  );
}

const Page2 = () => {
  return (
    <>
      <div className="pt-12 flex flex-col gap-5 justify-center items-center">
        <Typography
          as="li"
          variant="h5"
          color="orange"
          className="p-1 font-medium"
        >
          <a href="#" className="flex hover:text-blue-500 transition-colors">
            AMAZING FEATURES
          </a>
        </Typography>
        <Typography
          as="li"
          variant="h2"
          color="black"
          className="p-1 font-medium"
        >
          <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
            Features that work for you
          </a>
        </Typography>
      </div>
      <div className="flex items-center justify-center h-full">
        <Tabview />
      </div>
    </>
  );
}

const Page3 = () => {
  return (
    <div>
      <div className="pt-5 max-w-screen-xl mx-auto grid grid-cols-3 gap-5">
        <div className="flex flex-col gap-2">
          <Typography
            as="li"
            variant="h4"
            color="#08104D"
            className="p-1 font-medium"
          >
            <a className="flex transition-colors">
              Hassle-free assistance
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h6"
            color="black"
            className="p-1 font-medium"
          >
            <a className="flex items-center transition-colors">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.
            </a>
          </Typography>
        </div>
        <div className=" flex flex-col gap-2">
          <Typography
            as="li"
            variant="h4"
            color="#08104D"
            className="p-1 font-medium"
          >
            <a className="flex transition-colors">
              Safeguard documentation
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h6"
            color="black"
            className="p-1 font-medium"
          >
            <a className="flex items-center transition-colors">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </a>
          </Typography>
        </div>
        <div className=" flex flex-col gap-2">
          <Typography
            as="li"
            variant="h4"
            color="#08104D"
            className="p-1 font-medium"
          >
            <a className="flex transition-colors">
              Support over phone, email
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h6"
            color="black"
            className="p-1 font-medium"
          >
            <a className="flex items-center transition-colors">
              Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}

const Page4 = () => {
  return (
    <>
      <div className="pt-10 max-w-screen-xl mx-auto grid grid-cols-2 gap-4">
        <div className="flex items-center justify-center" >
          <img src="/src/assets/screen1.png" alt="homepage" className="w-1/2" />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <Typography
            as="li"
            variant="h5"
            color="orange"
            className="p-1 font-medium"
          >
            <a href="#" className="flex hover:text-blue-500 transition-colors">
              AVAILABLE ON THE APP STORE AND GOOGLE PLAY
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h1"
            color="black"
            className="p-1 font-medium"
          >
            <a href="#" className="flex hover:text-blue-500 transition-colors">
              Download Now!
            </a>
          </Typography>
          <Typography
            as="li"
            variant="h6"
            color="black"
            className="p-1 font-medium"
          >
            <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
              Et enim eu neque nunc id arcu. Nunc, massa lacus pretium, ipsum praesent. Maecenas dolor at ut nunc ultricies egestas convallis.
            </a>
          </Typography>
          <div className="grid grid-cols-2">
            <img src="/src/assets/Apple_App_Store.png" alt="homepage" className="w-1/2" />
            <img src="/src/assets/Google_Play_Store.png" alt="homepage" className="w-1/2" />
          </div>
        </div>

      </div>
    </>
  );
}

const HomePage = () => {
  return (
    <>

      <div className="h-screen flex flex-col bg-homepage-fill bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col gap-15">
          <Header />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Footer />
        </div>
      </div >
    </>
  );
};
export default HomePage;