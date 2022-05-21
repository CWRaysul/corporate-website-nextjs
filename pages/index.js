import React from 'react';
import TopNavbar from "../components/topNavbar/topNavbar";
import TopHeader from '../components/topBanner/topBanner';
import Service from '../components/service/service';
import Analysis from '../components/analysis/analysis';
import Summary from '../components/summary/summary';
import Projects from '../components/projects/projects';
import Customer from "../components/customer/customer";
import Video from "../components/video/video";
import CustomerReview from "../components/customerReview/customerReview";
import Footer from "../components/footer/footer";

const MyComponent = () => {
  return (
    <div>
       <TopNavbar/>
       <TopHeader />
       <Service/>
       <Analysis/>
       <Summary/>
       <Projects/>
       <Customer/>
       <Video/>
       <CustomerReview/>
       <Footer/>
    </div>
  );
};

export default MyComponent;
