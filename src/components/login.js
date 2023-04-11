import React from "react";
import axios from "axios";
import biglogo from "../images/big-logo.svg";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  async function getDetails() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const nonce = 10;
    const message = "Login with Nonce " + nonce;
    const signature = await signer.signMessage(message);

    const { data } = await axios.post(
      "http://localhost:4000/verify",
      {
        message,
        signature,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (signerAddress == data) {
      navigate("/rewards");
    }
  }

  return (
    <>
      <div className="login-btn">
        <div className="biglogo">
          <img src={biglogo} alt="Logo" />
        </div>
        <button onClick={getDetails}>Login</button>
      </div>
    </>
  );
}
