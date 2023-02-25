import React from "react";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Address</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <select>
              <option value="">Kathmandu</option>
              <option value="">Pokhara</option>
              <option value="">Biratnagar</option>
              <option value="">Janakpur</option>
              <option value="">Birgunj</option>
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pin Code" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>

          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
