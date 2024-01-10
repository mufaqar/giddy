"use client"
import React, { useState } from 'react'
import { FaArrowRightLong, FaRegBookmark } from 'react-icons/fa6'

const CauseTags = () => {
    const [open, setOpen] = useState<any>(1);

    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(id);
        }
        setOpen(id);
    };
    return (
        <div className='bg-white p-6 rounded-lg border border-[#C6C6C6] cause_tags'>
            <h3 className='md:text-[32px] md:leading-[32px] font-medium text-black mb-8 flex justify-between gap-7'>
                Erectile Dysfunction <FaRegBookmark className="text-[#307FE2]" />
            </h3>
            <ul className='flex flex-wrap gap-1 w-full'>
                {faqs_Data?.map((item: any, idx: any) => {
                    return (<li key={idx}
                        onClick={() => handleFaq(item.id)}
                        className={`${open === item.id ? "border-2 border-[#3185FC] font-medium" : "border border-[#C6C6C6] font-normal"} text-base text-black py-2 rounded-[20px] px-4 min-w-fit max-w-fit cursor-pointer`}>
                        {item?.title}
                    </li>
                    )
                })}
            </ul>
            <div className='mt-8'>
                {faqs_Data?.map((item: any, idx: any) => {
                    return (<div key={idx} className={`${open === item.id ? "block" : "hidden"}`}>
                        <div dangerouslySetInnerHTML={{ __html: item?.content }} />
                        <div>
                            <button className='text-base font-normal text-black py-3 px-4 border border-[#C8C8C8] bg-transparent hover:text-white hover:bg-black hover:scale-95 transition-all duration-200 ease-linear rounded-full max-w-[225px] w-full mx-auto flex justify-between items-center mt-8'>
                                Read more <FaArrowRightLong className="text-2xl font-normal" />
                            </button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CauseTags

const faqs_Data = [
    {
        id: 1,
        title: "Causes",
        content: "<p>Erectile dysfunction can stem from various factors, including both physical and psychological aspects. Common physical causes include cardiovascular issues, diabetes, hormonal imbalances, and neurological disorders that affect blood flow or nerve function. Lifestyle factors such as smoking, excessive alcohol consumption, and obesity can also contribute. Psychological factors like stress, anxiety, depression, and relationship problems may play a significant role, affecting both arousal and performance.  </p><p>Additionally, certain medications and underlying health conditions can contribute to erectile difficulties. Identifying the specific cause is crucial for developing an effective treatment plan tailored to the individual's needs. If experiencing persistent erectile dysfunction, consulting with a healthcare professional is advisable for a thorough evaluation and personalized guidance.</p>"
    },
    {
        id: 2,
        title: "Symptoms",
        content: "<p>Symptoms dysfunction can stem from various factors, including both physical and psychological aspects. Common physical causes include cardiovascular issues, diabetes, hormonal imbalances, and neurological disorders that affect blood flow or nerve function. Lifestyle factors such as smoking, excessive alcohol consumption, and obesity can also contribute. Psychological factors like stress, anxiety, depression, and relationship problems may play a significant role, affecting both arousal and performance.  </p><p>Additionally, certain medications and underlying health conditions can contribute to erectile difficulties. Identifying the specific cause is crucial for developing an effective treatment plan tailored to the individual's needs. If experiencing persistent erectile dysfunction, consulting with a healthcare professional is advisable for a thorough evaluation and personalized guidance.</p>"
    },
    {
        id: 3,
        title: "Risks",
        content: "<p>Risks dysfunction can stem from various factors, including both physical and psychological aspects. Common physical causes include cardiovascular issues, diabetes, hormonal imbalances, and neurological disorders that affect blood flow or nerve function. Lifestyle factors such as smoking, excessive alcohol consumption, and obesity can also contribute. Psychological factors like stress, anxiety, depression, and relationship problems may play a significant role, affecting both arousal and performance.  </p><p>Additionally, certain medications and underlying health conditions can contribute to erectile difficulties. Identifying the specific cause is crucial for developing an effective treatment plan tailored to the individual's needs. If experiencing persistent erectile dysfunction, consulting with a healthcare professional is advisable for a thorough evaluation and personalized guidance.</p>"
    },
    {
        id: 4,
        title: "Diagnosis",
        content: "<p>Erectile dysfunction can stem from various factors, including both physical and psychological aspects. Common physical causes include cardiovascular issues, diabetes, hormonal imbalances, and neurological disorders that affect blood flow or nerve function. Lifestyle factors such as smoking, excessive alcohol consumption, and obesity can also contribute. Psychological factors like stress, anxiety, depression, and relationship problems may play a significant role, affecting both arousal and performance.  </p><p>Additionally, certain medications and underlying health conditions can contribute to erectile difficulties. Identifying the specific cause is crucial for developing an effective treatment plan tailored to the individual's needs. If experiencing persistent erectile dysfunction, consulting with a healthcare professional is advisable for a thorough evaluation and personalized guidance.</p>"
    },
    {
        id: 5,
        title: "Treatment",
        content: "<p>Diagnosis dysfunction can stem from various factors, including both physical and psychological aspects. Common physical causes include cardiovascular issues, diabetes, hormonal imbalances, and neurological disorders that affect blood flow or nerve function. Lifestyle factors such as smoking, excessive alcohol consumption, and obesity can also contribute. Psychological factors like stress, anxiety, depression, and relationship problems may play a significant role, affecting both arousal and performance.  </p><p>Additionally, certain medications and underlying health conditions can contribute to erectile difficulties. Identifying the specific cause is crucial for developing an effective treatment plan tailored to the individual's needs. If experiencing persistent erectile dysfunction, consulting with a healthcare professional is advisable for a thorough evaluation and personalized guidance.</p>"
    },
    {
        id: 6,
        title: "Living With",
        content: "<p>Living dysfunction can stem from various factors, including both physical and psychological aspects. Common physical causes include cardiovascular issues, diabetes, hormonal imbalances, and neurological disorders that affect blood flow or nerve function. Lifestyle factors such as smoking, excessive alcohol consumption, and obesity can also contribute. Psychological factors like stress, anxiety, depression, and relationship problems may play a significant role, affecting both arousal and performance.  </p><p>Additionally, certain medications and underlying health conditions can contribute to erectile difficulties. Identifying the specific cause is crucial for developing an effective treatment plan tailored to the individual's needs. If experiencing persistent erectile dysfunction, consulting with a healthcare professional is advisable for a thorough evaluation and personalized guidance.</p>"
    },
    {
        id: 7,
        title: "Statistics",
        content: "<p>Statistics dysfunction can stem from various factors, including both physical and psychological aspects. Common physical causes include cardiovascular issues, diabetes, hormonal imbalances, and neurological disorders that affect blood flow or nerve function. Lifestyle factors such as smoking, excessive alcohol consumption, and obesity can also contribute. Psychological factors like stress, anxiety, depression, and relationship problems may play a significant role, affecting both arousal and performance.  </p><p>Additionally, certain medications and underlying health conditions can contribute to erectile difficulties. Identifying the specific cause is crucial for developing an effective treatment plan tailored to the individual's needs. If experiencing persistent erectile dysfunction, consulting with a healthcare professional is advisable for a thorough evaluation and personalized guidance.</p>"
    },
]