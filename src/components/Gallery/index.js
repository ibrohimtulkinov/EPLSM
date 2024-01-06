import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import ImageViewer from "../ImageViewer";

export default function Galleries() {

    const [gallery, setGallery] = useState()
    const getGallery = async () => {
        const response = await fetch('https://api.eplsm.uz/api/gallery-list/')
        const data = await response.json()
        setGallery(data)
    }

    useEffect(() => {
        getGallery()
    }, [])

    const images = gallery?.map(item => item?.photo_medium)

    return (
        <>
            <div className="ps-5 pt-5 overflow-x-hidden">
                <ImageViewer images={images} />
            </div>
        </>
    )
}