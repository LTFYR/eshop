import React from "react";
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
import styled from "styled-components";

const Profile = () => {
  const { totalAmount, cart, clearBasket } = useCartContext();
  const { logedUser, logout, loginWithRedirect } = useUserContext();

  console.log(logedUser);
  if (!logedUser) {
    return (
      <Empty>
        <h2>Your profile page is not loaded. Try to</h2>
        <button className="btn" onClick={loginWithRedirect}>
          Login
        </button>
      </Empty>
    );
  }
  return (
    <User className="user-profile">
      <div className="detail">
        <h4>{logedUser.nickname}</h4>
        <h5>{logedUser.name}</h5>
        <img src={logedUser.picture} alt="" />
      </div>
      <button
        className="btn"
        onClick={() => {
          clearBasket();
          logout({ returnTo: window.location.origin });
        }}
      >
        Logout
      </button>
    </User>
  );
};

export default Profile;

const Empty = styled.div`
  padding: 160px 0 60px 0;
  text-align: center;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 120px 0 60px 0;
  div {
    text-align: center;
  }
`;
