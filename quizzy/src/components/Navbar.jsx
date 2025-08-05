import { Button, Layout } from "antd"
import { Header } from "antd/es/layout/layout"
import {LockOutlined } from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
const {user,logout} = useAuth();

    return (

<Layout>
 <Header
          style={{
            background: "#fff",
            padding: "0 24px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ marginRight: "16px" }}>
              Welcome,{" "}
              <strong>{( "User").toUpperCase()}</strong>
            </span>
            <span style={{ marginRight: "16px", fontStyle: "italic" }}>
              {/* (Role: {user?.role.replace('ROLE_', '')}) */}
             
             good luck {user?.role === "ADMIN" ? "Admin" : "User"}
              {/* {user?.role.charAt(0).toUpperCase() + user?.role.slice(1).toLowerCase()} */}
            </span>
            <Button
              type="primary"
              icon={<LockOutlined />}
              onClick={logout}
              danger
            >
              Logout
            </Button>
          </div>
        </Header>

</Layout>

)
}

export default Navbar