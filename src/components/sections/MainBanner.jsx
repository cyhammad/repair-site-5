import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const MainBanner = ({ company = companyName }) => {
  return (
    <div className="flex items-center justify-center w-full bg-[url(/static/main-banner.jpg)] bg-cover bg-fixed bg-no-repeat bg-center min-h-[35rem] h-full">
      <div className="bg-black/75 text-white w-full h-full min-h-[35rem] flex items-center justify-center">
        <div className="flex flex-col uppercase text-center px-5 py-10">
          <h2 className="mb-3">
            Reliable <span className="text-primary">&</span> Affordable
          </h2>
          <h1 className="text-4xl uppercase">We offer premium</h1>
          <h1 className="text-4xl font-bold">appliance repairs</h1>
          <CallAndWhatsappButton
            company={company}
            className="py-5 justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
