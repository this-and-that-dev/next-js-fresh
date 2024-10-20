function List() {

    let 상품 = ['tomatoes', 'pasts', 'coconut']

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
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default List;
