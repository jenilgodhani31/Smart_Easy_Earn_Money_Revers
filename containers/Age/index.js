// pages/age/index.js

import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Age() {
    const router = useRouter()
    function handleClick() {
        router.push('/country');
    }

    return (
        <Layout title={"Age"} className={"text-[15px]"}>
            <div className="p-5 pt-[100px]">
                <Ads
                    data-ad-format="auto"
                    data-ad-slot="6816460021"
                    data-full-width-responsive="true"
                />
            </div>
            <div className="flex flex-col gap-5 mx-auto  p-4  h-screen">
                <div className='grid grid-cols-1 gap-4 '>
                    {gameData?.Age?.map((item, index) => (
                        <div
                            key={index}
                            onClick={handleClick}
                            className={`cursor-pointer text-center font-semibold text-[18px] p-4 rounded-2xl bg-primary1 text-white 
                                }`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Age;
