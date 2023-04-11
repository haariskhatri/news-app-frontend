import React from "react";
import RewardsHeader from "../components/rewardsheader";
import RewardForm from '../components/rewardform'
import Features from "../components/features";
import Footer from "../components/footer";

export default function Rewards(){
    return(
        <>
        <RewardsHeader/>
        <RewardForm/>
        <Features/>
        <Footer/>
        </>
    )
}