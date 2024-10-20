'use client'
import {useState} from "react";

function List() {

    let 상품 = ['tomatoes', 'pasts', 'coconut'];
    let [수량, 수량변경] = useState(1); //client component 에서만 사용가능
    return (
        <>
            <div>
                <h4 className="title">상품목록</h4>
                {
                    상품.map((g, i) => {
                        return (
                            <div className="food" key={i}>
                                <img src={`/food${i}.png`} alt="과일" className="food-img"/>
                                <h4>{g} $40</h4>
                                <span> ❤️ :  {수량} </span>
                                <button onClick={() => { //client component 에서만 사용가능
                                    수량변경(수량 + 1);
                                }}>+</button>
                                <button onClick={() => { //client component 에서만 사용가능
                                    수량변경(수량 - 1);
                                }}>-</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default List;
