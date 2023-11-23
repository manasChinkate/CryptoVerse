import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <h1 style={{
                color: "white",
                textAlign: "center",

            }}>Exchanges Loading</h1>

        </div>
    )
}

export default Loader