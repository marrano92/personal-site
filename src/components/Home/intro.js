import React from "react"

const Intro = () => {
    var introLettersLine1 = "C i a o ,";
    var introLettersLine2 = "S o n o / A n d r e a  ,";
    var introLettersLine3 = "S v i l u p p a t o r e / P H P.";

    var introLettersArray = introLettersLine1.split(" ");
    const introTextLine1 = []

    for (const [index, value] of introLettersArray.entries()) {
        if (value === '/'){
            introTextLine1.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter">
                        &nbsp;
                    </div>
                </div>
            )
        }else {
            introTextLine1.push(
                <div className="letterWrapper js_charTrigger">
                    <div className="letter">
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
                    <div className="letter">
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
                    <div className="letter">
                        {value}
                    </div>
                </div>
            )
        }
    }


    return (
        <div className="titleIntro container">
            <div className="rowTitle">
                {introTextLine1}
            </div>
            <div className="rowTitle">
                {introTextLine2}
            </div>
            <div className="rowTitle">
                {introTextLine3}
            </div>
        </div>
    )
}

export default Intro
