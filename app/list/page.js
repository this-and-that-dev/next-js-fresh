'use client'
import {useState} from "react";

function List() {

    let 상품 = ['tomatoes', 'pasts', 'coconut'];
    // let [수량, 수량변경] = useState(1); //client component 에서만 사용가능
    let [상품_좋아요, 상품_좋아요_변경] = useState([0,0,0]);
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
                                <span> ❤️ :  {상품_좋아요[i]} </span>
                                <button onClick={() => { //client component 에서만 사용가능
                                    const NEW_상품_좋아요 = [...상품_좋아요];
                                    NEW_상품_좋아요[i] += 1;
                                    상품_좋아요_변경(NEW_상품_좋아요)
                                }}>+</button>
                                <button onClick={() => { //client component 에서만 사용가능
                                    const NEW_상품_좋아요 = [...상품_좋아요];
                                    NEW_상품_좋아요[i] -= 1;
                                    상품_좋아요_변경(NEW_상품_좋아요)
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
