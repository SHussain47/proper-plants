export default function Cart({ cart }) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => {
            return (
              // <CartItem />
              // console.log(item)
              <p key={item.id}>{item.name}</p>
            )
          })}
        </ul>
      )}
    </section>
  )
}

