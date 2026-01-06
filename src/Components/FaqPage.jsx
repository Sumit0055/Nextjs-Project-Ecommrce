"use client"
import React, { useEffect } from 'react'

import { getFaq } from "@/Redux/ActionCreators/FaqActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import Breadcrum from './Breadcrum'
export default function FaqPage() {
    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => dispatch(getFaq()))()
    }, [FaqStateData.length])
    return (
        <>
            <Breadcrum title="FAQ'S Page" />

            <div className="container my-5">
                <div className="accordion my-5" id="accordionExample">
                    {
                        FaqStateData.filter(x => x.status)?.map((item,index) => {
                            return <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                                       {item.question}
                                    </button>
                                </h2>
                                <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${index===0?'show':""}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{item.answer}</strong>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
