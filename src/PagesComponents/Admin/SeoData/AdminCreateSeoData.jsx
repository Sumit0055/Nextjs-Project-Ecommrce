"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Breadcrum from '@/Components/Breadcrum'
import AdminSidebar from '@/Components/AdminSidebar'

import FormValidator from "@/Validators/FormValidator"

import { getSeoData, createSeoData } from "@/Redux/ActionCreators/SeoDataActionCreators"
export default function AdminCreateSeoData() {
    let [data, setData] = useState({
        url: "",
        title: "",
        description: "",
        keywords: "",
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        url: "Url Field is Mendatory",
        title: "Title Field is Mendatory",
        description: "Description Field is Mendatory",
        keywords: "Keywords Field is Mendatory",
    })
    let [show, setShow] = useState(false)

    let SeoDataStateData = useSelector(state => state.SeoDataStateData)
    let dispatch = useDispatch()
    let navigate = useRouter()

    function getInputData(e) {
        let { name, value } = e.target

        setErrorMessage(old => {
            return {
                ...old,
                [name]: FormValidator(e)
            }
        })

        setData(old => {
            return {
                ...old,
                [name]: name === "status" ? (value === "1" ? true : false) : value
            }
        })
    }

    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item = SeoDataStateData.find(x => x.url.toLocaleLowerCase() === data.url.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage(old => {
                    return {
                        ...old,
                        'name': 'SeoData With This Name Already Exist'
                    }
                })
            }
            else {
                dispatch(createSeoData({ ...data }))
                navigate.push("/admin/seodata")
            }
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getSeoData())
        })()
    }, [SeoDataStateData.length])
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='border p-2 text-center'>Create SeoData <Link href="/admin/seodata"> <i className='fa fa-arrow-left float-end'></i></Link></h5>

                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>url*</label>
                                    <input type="text" name="url" onChange={getInputData} placeholder='url' className={`${show && errorMessage.url ? 'border-danger' : ''} form-control`} />
                                    {show && errorMessage.url ? <p className='text-danger'>{errorMessage.url}</p> : null}
                                </div>
                                 <div className="col-12 mb-3">
                                    <label>title*</label>
                                    <input type="text" name="title" onChange={getInputData} placeholder='title' className={`${show && errorMessage.title ? 'border-danger' : ''} form-control`} />
                                    {show && errorMessage.title ? <p className='text-danger'>{errorMessage.title}</p> : null}
                                </div>

                                <div className="col-12 mb-3">
                                    <label>description*</label>
                                    <textarea type="text" name="description" onChange={getInputData} placeholder='Short description' rows={3} className={`${show && errorMessage.description ? 'border-danger' : ''} form-control`}></textarea>
                                    {show && errorMessage.description ? <p className='text-danger'>{errorMessage.description}</p> : null}
                                </div>
                                  <div className="col-12 mb-3">
                                    <label>keywords*</label>
                                    <textarea type="text" name="keywords" onChange={getInputData} placeholder='keywords' rows={3} className={`${show && errorMessage.keywords ? 'border-danger' : ''} form-control`}></textarea>
                                    {show && errorMessage.keywords ? <p className='text-danger'>{errorMessage.keywords}</p> : null}
                                </div>


                                <div className="col-lg-6 mb-3">
                                    <label>Status*</label>
                                    <select name="status" onChange={getInputData} className='form-select'>
                                        <option value="1">Active</option>
                                        <option value="0">Inctive</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <button type="submit" className='btn btn-primary w-100'>Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
