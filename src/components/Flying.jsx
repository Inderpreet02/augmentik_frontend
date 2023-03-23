import React from 'react'
import './Flying.css'
import Input from './Input'
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { BsSend } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Btn from './Btn';

const Flying = () => {
  return (
    <section className='fly'>
        <div className="fly__container">
            <div className="fly__head">
                Where are you flying?
            </div>
            <div className="fly__inputs">
                <Input place={"Lahore - Karachi"} title={"From - To"} inp={"more"} icon={<HiOutlineSwitchHorizontal/>}/>
                <Input place={"Return"} title={"Trip"} inp={"less"}/>
                <Input place={"07 Nov 22 - 13 Nov 22"} title={"Depart-Return"} inp={"more"} icon={<AiOutlineDown/>}/>
                <Input place={"1 Passenger, Economy"} title={"Passenger - Class"} inp={"more"}/>
            </div>
            <div className="fly__btns">
                <p><AiOutlinePlus/> Add Promo Code</p>
                <div className="fly__btn">
                    <Btn text={"Show Flights"} logo={<BsSend/>}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Flying