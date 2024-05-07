import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomeIcon from './../public/assets/logo.svg';
import OverviewIcon from './../public/assets/overview.svg';
import TicketsIcon from './../public/assets/tickets.svg';
import IdeasIcon from './../public/assets/ideas.svg';
import ContactsIcon from './../public/assets/contacts.svg';
import AgentsIcon from './../public/assets/agents.svg';
import ArticlesIcon from './../public/assets/articles.svg';
import SettingsIcon from './../public/assets/settings.svg';
import SubscriptionIcon from './../public/assets/subscription.svg';
import Search from "./../public/assets/searchIcon.svg"
import Notification from "./../public/assets/notificationIcon.svg"
import Line from "./../public/assets/line.svg"
import Avatar from "./../public/assets/userPhoto.svg"
import Sort from "./../public/assets/sortIcon.svg"
import Filter from "./../public/assets/filterIcon.svg"
import Ava1 from "./../public/assets/avatar1.svg"


const Dashboard = () => <h2>Dashboard</h2>;
const Overview = () => <h2>Overview</h2>;
const Tickets = () => <h2>Tickets</h2>;
const Ideas = () => <h2>Ideas</h2>;
const Contacts = () => <h2>Contacts</h2>;
const Agents = () => <h2>Agents</h2>;
const Articles = () => <h2>Articles</h2>;
const Settings = () => <h2>Settings</h2>;
const Subscription = () => <h2>Subscription</h2>;

const App = () => (
  <Router>
    <div className="main_container flex items-center ">
    <header className='bg-[#363740] w-[15%] h-[120vh] '>
   <div className="app container my-0 mx-auto pt-[37px] ">
      <nav className="sidebar">
        <ul>
          <li className=''>
            <Link className='flex items-center gap-[24px]  mb-[59px]' to="/" >
              <img className='inline-block   pl-[22px]' src={HomeIcon} alt="Home"  />
              <p className='text-[#A4A6B3] text-[16px]  font-normal tracking-[0.2px]'>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[12px]' to="/overview">
              <img className='inline-block pl-[12px]'  src={OverviewIcon} alt="Overview" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-200px] font-normal tracking-[0.2px] '>Overview</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[12px]' to="/tickets">
              <img className='inline-block  pl-[12px] ml-[30px] mr-[30px]' src={TicketsIcon} alt="Tickets" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-20px] font-normal tracking-[0.2px]'>Tickets</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[5px]' to="/ideas">
              <img className='inline-block pl-[12px]'  src={IdeasIcon} alt="Ideas" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-200px] font-normal tracking-[0.2px]'>Ideas</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[5px]' to="/contacts">
              <img className='inline-block pl-[12px]'   src={ContactsIcon} alt="Contacts" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-200px] font-normal tracking-[0.2px]'>Contacts</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[5px]' to="/agents">
              <img className='inline-block pl-[12px]'  src={AgentsIcon} alt="Agents" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-200px] font-normal tracking-[0.2px]'>Agents</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[5px]' to="/articles">
              <img className='inline-block pl-[12px] border-b border-[#60626E]'  src={ArticlesIcon} alt="Articles" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-200px] font-normal tracking-[0.2px]'>Articles</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[5px]' to="/settings">
              <img className='inline-block pl-[12px]'  src={SettingsIcon} alt="Settings" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-200px] font-normal tracking-[0.2px]'>Settings</p>
            </Link>
          </li>
          <li>
            <Link className='flex items-center gap-[20px] mb-[5px]' to="/subscription">
              <img className='inline-block pl-[12px]'  src={SubscriptionIcon} alt="Subscription" />
              <p className='text-[#A4A6B3] text-[16px] ml-[-200px] font-normal tracking-[0.2px]'>Subscription</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
              <Routes>
                {/* <Route path="/" element={<Tickets />} /> */}
                <Route path="/overview" element={<Overview />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/ideas" element={<Ideas />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/subscription" element={<Subscription />} />
              </Routes>
            </div>
    </div>
    </header>
    <main className='bg-[#F7F8FC] w-[85%] mt-[-2%] '>
      <div className="container mx-auto my-0">
        <div className="top flex items-center justify-between">
          <div className="left">
          <h1 className=" py-[36px] px-[30px] text-[#252733] text-[24px] font-bold tracking-[0.3px]">Tickets</h1>
          </div>
          <div className="right flex items-center gap-[28px]">
          <img className='inline-block'   src={Search} alt="" />
          <img className='inline-block'   src={Notification} alt=""  />
          <img className='inline-block'   src={Line} alt=""  />
          <p className="">Jones Ferdinand</p>
           <img className='inline-block'   src={Avatar} alt="" />
          </div>
        </div>

        <div className="main_content container my-0 mx-auto border bg-white rounded-[8px] ">
          <div className="top flex items-center justify-between p-[32px]  ml-[20px] mr-[20px]">
           <div className="left">
            <h2 className="">All tickets</h2>
          </div>
          <div className="right flex items-center gap-[20px]">
            <div className="sort flex items-center gap-[10px]">
              <img src={Sort} alt="" className="" />
              <p className="">Sort</p>
            </div>
            <div className="filter flex items-center gap-[10px]">
              <img src={Filter} alt="" className="" />
              <p className="">Filter</p>
            </div>
          </div>           
          </div>
          <div>
            <ul className=" container my-0 mx-auto flex items-center gap-[24%] pl-[52px]">
              <li className=" text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">Ticket details</li>
              <li className=" text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">Customer Name</li>
              <li className=" text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px]">Date</li>
              <li className=" text-[#9FA2B4] text-[14px] font-semibold tracking-[0.2px] ml-[12px]">Priority</li>
            </ul>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border border-b border-[grey] w-[80px]  bg-[red] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
              

            </div>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border w-[80px]  bg-[yellow] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
              

            </div>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border w-[80px]  bg-[red] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
              

            </div>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border w-[80px]  bg-[#57e6bd] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
            
              

            </div>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border w-[80px]  bg-[red] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
              

            </div>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border w-[80px]  bg-[#57e6bd] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
              

            </div>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border w-[80px]  bg-[yellow] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
              

            </div>
            <hr />
            <div className="  flex justify-between items-center mt-[10px]">
              <div className="flex justify-between items-center gap-3 mt-[20px] px-[50px]">
                <img src={Ava1} alt="" />
                <div className="">
                  <p>Contact Email not Linked</p>
                  <span className="text-[grey]">Updated 1 day ago</span>
                </div>
              </div>
              <div className="ml-[-45px]">
                <p>Tom Cruise</p>
                <span className="text-[grey]">on 24.05.2019</span>
              </div>
              <div className="ml-[150px]">
                <p>May 26, 2019</p>
                <span className="text-[grey] mr-[130px]">6:30 PM</span>
              </div>
              <button className="border w-[80px]  bg-[#57e6bd] px-[5px] py-[5px] text-[white] rounded-2xl mr-[100px]">High</button>
              

            </div>
            <hr />
          </div>



        </div>

      </div>
    </main>
    </div>

 
  </Router>
);

export default App;
