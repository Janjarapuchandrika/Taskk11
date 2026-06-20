import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
//import "../styles/ResetPassword.css";

const ResetPassword = () => {

  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      setLoading(true);

      const res = await API.post(`/auth/reset-password/${token}`,{
        password
      });

      alert(res.data.message);

      navigate("/login");

    }catch(err){

      alert(err.response?.data?.message || "Reset Failed");

    }finally{

      setLoading(false);

    }

  };

  return(

<div className="reset-container">

<div className="reset-card">

<h1>Reset Password</h1>

<form onSubmit={handleSubmit}>

<input
type="password"
placeholder="New Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button>

{loading ? "Updating..." : "Reset Password"}

</button>

</form>

</div>

</div>

  );

};

export default ResetPassword;