import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React from 'react'

function EarnMoney() {
  return (
    <Layout title={"Earn Money Info"} className={"text-[15px]"}>
       <div className="p-5 pt-[100px]">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className='flex  flex-col items-center p-5 gap-4  '>
        {gameData?.earnMoneyInfo?.slice(0, 4).map((item, index) => (
          <a href={item.slug} key={index}>
            <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
              <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                <img
                  src={item.url}
                  className="w-[56px] h-[56px]"
                />
              </div>
              <div className='flex flex-col justify-center'>
                <div className='text-[16px] font-medium'>{item.name}</div>
                <div className='text-[10px] '>{item.description}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="p-5 ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="6816460021"
          data-full-width-responsive="true"
        />
      </div>
      <div className='flex  flex-col items-center p-5 gap-4  '>
        {gameData?.earnMoneyInfo?.slice(4, 9).map((item, index) => (
          <a href={item.slug} key={index}>
            <div className="flex gap-2 cursor-pointer p-2 bg-primary1 shadow-2xl rounded-[15px]">
              <div className='bg-image flex items-center justify-center p-2 bg-white  rounded-[10px] shadow-2xl'>
                <img
                  src={item.url}
                  className="w-[56px] h-[56px]"
                />
              </div>
              <div className='flex flex-col justify-center'>
                <div className='text-[16px] font-medium'>{item.name}</div>
                <div className='text-[10px] '>{item.description}</div>
              </div>
            </div>
          </a>
        ))}
      </div>

    </Layout>
  )
}

export default EarnMoney
