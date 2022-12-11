import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { roomsList } from "../../data";

export default function RegisterPage(props) {
  const { bookedSeats } = props;
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");
  const subRoomId = searchParams.get("subRoomId");
  const movieId = searchParams.get("movieId");

  const room = roomsList.filter((room) => room.id == roomId)[0];
  const hasSubRoom = subRoomId !== null;
  const movie = hasSubRoom
    ? room.subRooms[subRoomId].movies[movieId]
    : room.movies[parseInt(movieId)];
  const { poster, title, date, time, price, langue } = movie;

  return (
    <div className="payment-form-container">
      {/* payment info */}
      <div className="payment-info">
        <div>
          <span>unit cost</span>
          <span>{price}Da</span>
        </div>
        <div>
          <span>ticket count</span>
          <span>{bookedSeats.length}</span>
        </div>
        <div>
          <span>subtotal</span>
          <span>{bookedSeats.length * price}Da</span>
        </div>
        <div>
          <span>additional fees</span>
          <span>0$</span>
        </div>
        <div>
          <span>Total ammount</span>
          <span>{bookedSeats.length * price}Da</span>
        </div>
      </div>

      {/* payment method */}
      <div className="payment-method-container">
        <h1>Payment Method</h1>
        <ul>
          <li>Baridi Mob</li>
          <li>Paypal</li>
          <li>Socité generale</li>
        </ul>
      </div>

      {/* continue button */}
      <Link to="/Payment" state={"haaaaaaa"}>
        Continue
      </Link>
    </div>
  );
}
