import {  useState } from "react";
// import toast from "react-hot-toast";
import { BiLogoBlogger } from "react-icons/bi";
import {
  FaBullseye,
  FaEye,
  FaFlag,
  FaHome,
  FaMehRollingEyes,
  FaQuestionCircle,
  FaRegEye,
  FaSellcast,
  FaSignOutAlt,
  FaStreetView,
  FaUsers,
  FaVoteYea,
} from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import PropTypes from 'prop-types'; 

const DashboardSideBar = ({ setIsOpenSidebar }) => {
  // const [isOpen, setIsOpen] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAboutawardOpen, setAboutawardOpen] = useState(false);
  const [isAboutclienteleOpen, setAboutclienteleOpen] = useState(false);
  const [isAbouttestimonialOpen, setAbouttestimonialOpen] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isRecruitmentOpen, setRecruitmentOpen] = useState(false);
  const [isaboutusOpen, setaboutusOpen] = useState(false);
  const [isEventcare, setEventcare] = useState(false);
  const [isCareerOpen, setCareerOpen] = useState(false);
  const [isService, setServiceOpen] = useState(false);
  const [isContactus, setContactus] = useState(false);
  const { userLogOut } = useFirebase();


//   const { logOut, authReloader, setAuthReloader } = useContext(AuthContext);
  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  
  const handleAboutAward = () => {
    setAboutawardOpen(!isAboutawardOpen);
  };
  const handleAboutclientele = () => {
    setAboutclienteleOpen(!isAboutclienteleOpen);
  };
  const handleAbouttestimonial = () => {
    setAbouttestimonialOpen(!isAbouttestimonialOpen);
  };
  const handleBlogToggle = () => {
    setBlogOpen(!isBlogOpen);
  };
  const handleRecruitmentToggle = () => {
    setRecruitmentOpen(!isRecruitmentOpen);
  };
  const handleaboutusToggle = () => {
    setaboutusOpen(!isaboutusOpen);
  };
  const handleCareerToggle = () => {
    setCareerOpen(!isCareerOpen);
  };
  const handleServiceToggle = () => {
    setServiceOpen(!isService);
  };
  const handleContactToggle = () => {
    setContactus(!isContactus);
  };
  const handleEventcareToggle = () => {
    setEventcare(!isEventcare);
  };

  
  // const handleToggle = (idx) =>
  //   setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <>
      <div className="w-full overflow-hidden">
        <section className="flex flex-col gap-2">
          <NavLink onClick={() => setIsOpenSidebar(false)} to={"/dashboard"}>
            <div className="  shadow  flex items-center justify-center gap-2 font-bold p-3 mt-4 duration-300 active:scale-75 md:pr-0">
              <FaHome className="text-xl text-[#007cde]" />
              <h2 className="font-semibold hidden md:block">
                Dashboard - Home
              </h2>
            </div>
          </NavLink>

          {/* pages start features  */}

          <div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div className="overflow-hidden ">
                <div
                  onClick={handleSettingsToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden ">
                      <FaHome
                        className={`text-xl text-[#007cde] ${
                          isSettingsOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Home</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isSettingsOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/homebanner"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaStreetView className="text-xl text-[#01c0c9] font-semibold" />
                        <h2 className="font-semibold hidden md:block">
                          Banner
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/homeaboutus"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaEye className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                          HomeAbout
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/serviceshome"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaFlag className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        HomeService
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/projectshome"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaEye className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        HomeProject
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/awardclient"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaVoteYea className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        HomeAward
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/testimonalhome"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaBullseye className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                          Testimonial
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clientshomes"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaVoteYea className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        ClientGallery
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/categoryhomesclints"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaVoteYea className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        CategoryClient
                        </h2>
                      </div>
                    </NavLink>
                    {/* <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/showGetintouch"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaVoteYea className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        HomeContact
                        </h2>
                      </div>
                    </NavLink> */}
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/getformhomedatas"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaVoteYea className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                        ContactFormdata
                        </h2>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

           

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleAboutAward}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <FaUsers
                        className={`text-xl text-[#007cde] ${
                            isAboutawardOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">AboutAward</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isAboutawardOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/aboutawardsbanners"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">BannerAward</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/awardcard"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">AwardRecognition</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/statusawards"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">AwardStatus</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/awardsclients"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ClientAward</h2>
                      </div>
                    </NavLink>
                   
                  </div>
                </div>
              </div>
            </div>
            {/* about award end  */}


            {/* about clientele start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleAboutclientele}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <FaUsers
                        className={`text-xl text-[#007cde] ${
                            isAboutclienteleOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">AboutClientele</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isAboutclienteleOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/cleintetesbanners"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ClienteleBanner</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/about"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ClienteleAbout</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clienteteaboutksa"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">CategoryKsa</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clienteteaboutus"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ClienteleKsa</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clienteteaboutuae"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">CategoryUAE</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clientcategoryuae"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ClienteleUae</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clientaboutsqatars"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">CategoryQatar</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/addcategoryqatars"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ClienteleQatar</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/categorykuwaitssdatas"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ClienteleKuwait</h2>
                      </div>
                    </NavLink>
                   
                  </div>
                </div>
              </div>
            </div>
            {/* about clientele end  */}


            {/* about testimonial start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleAbouttestimonial}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <FaUsers
                        className={`text-xl text-[#007cde] ${
                            isAbouttestimonialOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">AboutTestimonial</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isAbouttestimonialOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/bannertestimonials"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">TestimonialBanner</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/grouptestimonial"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">TestimonialGroup</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/clienttestimonial"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaSellcast className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">TestimonialClient</h2>
                      </div>
                    </NavLink>
                   
                 
                      
                   
                  </div>
                </div>
              </div>
            </div>
            {/* about testimonial end   */}


            {/* about us sttart  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleaboutusToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <BiLogoBlogger
                        className={`text-xl text-[#007cde] ${
                          isaboutusOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">About Us</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isaboutusOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/aboutbannersparts"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">AboutBanner</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/detailsaboutsparts"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">AboutDetails</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/whyaboutus"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">WhyAbout</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/addmemberboard"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">BoardMember</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/addmemberteam"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">TeamMember</h2>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* about us end  */}


            {/* about recruitment start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleRecruitmentToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <BiLogoBlogger
                        className={`text-xl text-[#007cde] ${
                          isRecruitmentOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Recruitment</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isRecruitmentOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/recruitmentbanners"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">RecruitmentBanner</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/recruitmentprocesstime"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">RecruitmentProcess</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/getformdatas"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">GetFormData</h2>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* about recruitment end  */}

            {/* about section end  */}

            {/* Blog section start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleBlogToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <BiLogoBlogger
                        className={`text-xl text-[#007cde] ${
                          isBlogOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Blog</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isBlogOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/blogpart"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">BlogCard</h2>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog section end  */}

            {/* service section start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden ">
                <div
                  onClick={handleServiceToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <GrServices
                        className={`text-xl text-[#007cde] ${
                          isService ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Service</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isService
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/bannerservice"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaRegEye className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                          ServiceBanner
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/serviceHr"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaEye className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                          ServiceHr
                        </h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/serviceadmins"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaMehRollingEyes className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                          ServiceAdmin
                        </h2>
                      </div>
                    </NavLink>

                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/employeeservices"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaUsers className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                          ServiceEmployee
                        </h2>
                      </div>
                    </NavLink>

                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/managementservices"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <FaQuestionCircle className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">
                          {" "}
                          ServiceManagement
                        </h2>
                      </div>
                    </NavLink>

                   
                  </div>
                </div>
              </div>
            </div>
            {/* service section end   */}

            {/* contact us section start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleContactToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <BiLogoBlogger
                        className={`text-xl text-[#007cde] ${
                          isContactus ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">ContactUs</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isContactus
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/showaddresscontacts"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">ContactAddress</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/contactTeam"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">TeamContact</h2>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

         
            {/* contact us section end  */}





            {/* event we care part start  */}

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleEventcareToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <BiLogoBlogger
                        className={`text-xl text-[#007cde] ${
                          isEventcare ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Event</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isEventcare
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/careecentbanner"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">CareBanner</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/videocares"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">Videocare</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/eventmedia"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">EventMedia</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/gallerymedia"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">Gallerymedia</h2>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

           
            {/* evenr we care part end  */}

           

            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div
                  onClick={handleCareerToggle}
                  className={`border-orange-500 border-l-[3px] cursor-pointer`}
                >
                  <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow overflow-hidden">
                    <span className="overflow-hidden">
                      <BiLogoBlogger
                        className={`text-xl text-[#007cde] ${
                          isCareerOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                    <h4 className="font-semibold hidden md:block">Career</h4>
                  </div>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isCareerOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/bannercareers"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">CareerBanner</h2>
                      </div>
                    </NavLink>

                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/workcareers"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">WorkCareer</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/globalcareers"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">GlobalCareer</h2>
                      </div>
                    </NavLink>
                    <NavLink
                      onClick={() => setIsOpenSidebar(false)}
                      to={"/dashboard/postcareersdatas"}
                    >
                      <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                        <BiLogoBlogger className="text-xl text-[#01c0c9]" />
                        <h2 className="font-semibold hidden md:block">GetCareerdata</h2>
                      </div>
                    </NavLink>


                  </div>

                    
                </div>
              </div>
            </div>


            



          </div>

          {/* settings part start  */}
          {/* <div className="hidden">
            <div
              onClick={() => handleToggle(8)}
              className={` border-orange-500 border-l-[3px] cursor-pointer`}
            >
              <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow">
                <span>
                  <IoIosArrowDown className="text-xl text-[#FF6600]" />
                </span>
                <h4 className="font-semibold hidden md:block">Settings</h4>
              </div>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                isOpen === 8
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <NavLink
                  onClick={() => setIsOpenSidebar(false)}
                  to={"/dashboard/addFooter"}
                >
                  <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                    <FaClosedCaptioning className="text-xl text-[#FF6600]" />
                    <h2 className="font-semibold hidden md:block">
                      Profile Setting
                    </h2>
                  </div>
                </NavLink>
              </div>
            </div>
          </div> */}

          {/* settings part end  */}

          {/* message start  */}
          {/* <div className="hidden">
            <div
              onClick={() => handleToggle(9)}
              className={` border-orange-500 border-l-[3px] cursor-pointer `}
            >
              <div className="ml-2 dashboardNavLink flex items-center gap-2 bg-white p-3 hover:bg-white select-none duration-300 active:scale-75 shadow">
                <span>
                  <IoIosArrowDown className="text-xl text-[#FF6600]" />
                </span>
                <h4 className="font-semibold hidden md:block">Message</h4>
              </div>
            </div>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                isOpen === 9
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <NavLink
                  onClick={() => setIsOpenSidebar(false)}
                  to={"/dashboard/addFooter"}
                >
                  <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                    <FaClosedCaptioning className="text-xl text-[#FF6600]" />
                    <h2 className="font-semibold hidden md:block">
                      Show Message
                    </h2>
                  </div>
                </NavLink>
                <NavLink
                  onClick={() => setIsOpenSidebar(false)}
                  to={"/dashboard/showfooter"}
                >
                  <div className="dashboardNavLink border-l-[3px] flex items-center gap-2 bg-white p-3 ml-3 mt-2 hover:scale-110 duration-300 active:scale-75 pr-0">
                    <FaRegEye className="text-xl text-[#FF6600]" />
                    <h2 className="font-semibold hidden md:block">Settings</h2>
                  </div>
                </NavLink>
              </div>
            </div>
          </div> */}

          {/* message end  */}

          {/* logout start */}
          <NavLink className="fw-bold" to={'/'} style={({ isActive }) => ({
                                      color: isActive ? "black" : "black",
                                  })}><li onClick={userLogOut} className=' flex ms-5 font-bold' style={{fontSize:"20px"}}>
                                  <FaSignOutAlt className='me-1 mt-2 ' /> Log Out
                              </li></NavLink>

          {/* logout end */}
        </section>
      </div>

      <div className="w-full h-[2px] bg-white mt-5"></div>
    </>
  );
};

DashboardSideBar.propTypes = {
  setIsOpenSidebar: PropTypes.node.isRequired,
};

export default DashboardSideBar;
