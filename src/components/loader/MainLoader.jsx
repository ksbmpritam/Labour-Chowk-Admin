import React from 'react'
import { useSelector } from 'react-redux';

const MainLoader = () => {
    const { isLoading } = useSelector(state => state?.commonReducer)
    console.log("Loader State ::: ", isLoading)

    return (
        <>
            {
                isLoading && <div>Loader</div>
            }
        </>
    )
}

export default MainLoader