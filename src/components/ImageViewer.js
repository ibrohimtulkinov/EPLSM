import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const CustomImageViewer = ({ images }) => {


    return (
        <PhotoProvider maskOpacity={0.5}>
            <div className="foo d-flex flex-wrap gap-4 "  >
                {images?.map((item, index) => (
                    <PhotoView key={index} src={item}>
                        <img src={item} alt="" style={{ width: "300px",}} />
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    );
}

export default CustomImageViewer