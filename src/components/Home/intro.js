import React from "react"

const Intro = () => {
    var introLettersLine1 = "B a c k - e n d / P H P";
    var introLettersLine2 = "W o r d p r e s s";
    var introLettersLine3 = "W e b / D e v e l o p e r";

    var introLettersArray = introLettersLine1.split(" ");
    const introTextLine1 = []

    for (const [index, value] of introLettersArray.entries()) {
        if (value === '/'){
            introTextLine1.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter" >
                        &nbsp;
                    </div>
                </div>
            )
        }else {
            introTextLine1.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter glitch" data-text={value}>
                        {value}
                    </div>
                </div>
            )
        }
    }

    var introLettersArray = introLettersLine2.split(" ");
    const introTextLine2 = []

    for (const [index, value] of introLettersArray.entries()) {
        if (value === '/'){
            introTextLine2.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter">
                        &nbsp;
                    </div>
                </div>
            )
        }else {
            introTextLine2.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter glitch" data-text={value}>
                        {value}
                    </div>
                </div>
            )
        }
    }

    var introLettersArray = introLettersLine3.split(" ");
    const introTextLine3 = []

    for (const [index, value] of introLettersArray.entries()) {
        if (value === '/'){
            introTextLine3.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter">
                        &nbsp;
                    </div>
                </div>
            )
        }else {
            introTextLine3.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter glitch" data-text={value}>
                        {value}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="titleIntro container largeContainer
        pl-0 pr-0 mb-20 pt-0
        md:pl-8 md:pr-8 md:pt-24 md:mb-16
        lg:pl-10 lg:pr-10 lg:pt-32 lg:mb-24
        xl:pl-8 xl:pr-8 xl:pt-32 xl:mb-24">
            <div className="rowTitle row1 animate__animated animate__fadeInLeft">
                {introTextLine1}
            </div>
            <div className="rowTitle row2 animate__animated animate__fadeInLeft">
                {introTextLine2}
            </div>
            <div className="rowTitle row3 animate__animated animate__fadeInLeft">
                {introTextLine3}
            </div>
        </div>
    )
}

export default Intro
