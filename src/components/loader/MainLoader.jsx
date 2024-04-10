import React, { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const MainLoader = () => {
    const [width, setWidth] = useState(200);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth <= 768 ? 100 : 200;
            setWidth(newWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <SkeletonTheme color="#e0e0e0" highlightColor="#f5f5f5">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                        <Skeleton height={35} width={width} />
                        <Skeleton height={35} width={width} />
                    </div>
                    <h2><Skeleton height={40} /></h2>
                    <Skeleton height={35} count={5} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: "20px" }}>
                        <Skeleton height={35} width={width * 2} />
                    </div>
                </SkeletonTheme>
            </div>
        </>
    )
}

export default MainLoader