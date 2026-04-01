import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import axios from "axios";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionid;
            },
          );
          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };
          const updateQuantity = async () => {
            await axios.update(
              `/api/cart-items/${cartItem.quantity.productId}`,
            );
            await loadCart();
          };
          return (
            <div key={cartItem.productid} className="cart-item-container">
              <div className="delivery-date">Delivery date: 27, feb 2026</div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span
                      className="update-quantity-link link-primary"
                      onClick={updateQuantity}
                    >
                      Update
                    </span>
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <div className="delivery-options">
                  <div className="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  {deliveryOptions.map((deliveryOption) => {
                    let priceString = "FREE Shipping";
                    if (deliveryOption.priceCents > 0) {
                      priceString = `${formatMoney(deliveryOption.priceCents)} - shipping`;
                    }
                    const updateDeliveryOption = async () => {
                      await axios.put(`/api/cart-items/${cartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id,
                      });
                      await loadCart();
                    };

                    return (
                      <div
                        key={deliveryOption.id}
                        className="delivery-option"
                        onClick={updateDeliveryOption}
                      >
                        <input
                          type="radio"
                          checked={
                            deliveryOption.id === cartItem.deliveryOptionId
                          }
                          onChange={() => {}}
                          className="delivery-option-input"
                          name={`delivery-option-${cartItem.productId}`}
                        />
                        <div>
                          <div className="delivery-option-date">
                            {dayjs(
                              deliveryOption.estimatedDeliveryTimeMs,
                            ).format("ddd, MMMM D")}
                          </div>
                          <div className="delivery-option-price">
                            {priceString}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
