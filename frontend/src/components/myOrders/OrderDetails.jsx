import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"PidariChowk 12-4 ullas"}
          </p>
        </div>

        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Aman"}
          </p>
          <p>
            <b>Phone</b>
            {"9812071334"}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"26-4-2023"}
          </p>
          <p>
            <b>Delivered At</b>
            {"27-4-2023"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"slja873jld98"}
          </p>
          <p>
            <b>Paid At</b>
            {"27-4-2023"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{2450}
          </p>
          <p>
            <b>Shipping Charges</b>₹{150}
          </p>
          <p>
            <b>Tax</b>₹{133}
          </p>
          <p>
            <b>Total Amount</b>₹{2450 + 150 + 133}
          </p>
        </div>
      </main>
    </section>
  );
};

export default OrderDetails;
