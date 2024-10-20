export default function Cart() {

    //서버에서 가져온 데이터라고 가정
    //cartList Cart 라는 함수 내 지역변수
    //Cart 함수 밖에서는 사용할 수 없다.
    let cartList = ['Tomatoes', 'pastas'];

    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem cartList={cartList}/>
            <CartItem cartList={cartList}/>
            <CartItem cartList={cartList}/>
            <Banner name="롯데"/>
            <Banner name="현대"/>
            <Button colorName="red"/>
            <Button colorName="blue"/>
        </div>
    )
}

function Banner(props) {
    return (
        <h5>{props.name}카드 결제 행사중</h5>
    )
}

function Button(props) {
    return (
        <button style={{background : props.colorName}}>{props.colorName}버튼</button>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.cartList[0]}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}
//props 전송방향 : 부모 -> 자식 만 가능
//Cart : 부모 컴포넌트
//ㄴ CartItem: 자식 컴포넌트
//ㄴ CartItem: 자식 컴포넌트
