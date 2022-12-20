export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const accesstoken = JSON.parse(localStorage.getItem("accesstoken") || "");
  console.log("user from header",user);
  console.log("accesstoken from header", accesstoken);
  
    if (user && accesstoken) {
      console.log("accesstoken coming in");
      // For Spring Boot back-end
      return { Authorization: "Bearer " + accesstoken };
  
      // for Node.js Express back-end
      // return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
  }