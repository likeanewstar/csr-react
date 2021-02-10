import React from "react";
import { Helmet } from "react-helmet";

const Main = () => {
    return (
        <>
            <Helmet>
                <title>홈</title>
            </Helmet>
            <div>
                <h2>AndWise.inc</h2>
                <p>비전 : 구성원이 행복한 강소기업</p>
                <p>- 외부 투자 없이 100% 내부 소유, 내실 중심 경영</p>
                <p>- 경영현황 공유 및 성과 공유</p>
                <p>- 팀 중심의 자율 경영</p>
            </div>
        </>
    )
}

export default Main;