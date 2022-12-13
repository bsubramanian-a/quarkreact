export default function authHeader() {
  const coach = JSON.parse(localStorage.getItem("coach") || "{}");
  const accesstoken = JSON.parse(localStorage.getItem("accesstoken") || "");
  console.log("coach from header",coach);
  console.log("accesstoken from header", accesstoken);
  
    if (coach && accesstoken) {
      console.log("accesstoken coming in");
      // For Spring Boot back-end
      return { Authorization: "Bearer " + accesstoken };
  
      // for Node.js Express back-end
      // return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
  }