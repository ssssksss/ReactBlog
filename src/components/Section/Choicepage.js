import React, {useEffect, useState} from "react"
import Java1 from "./page/Java1.js"
import Jsp1 from "./page/Jsp1.js"
import Nodejs1 from "./page/Nodejs1.js"
import OracleDB1 from "./page/OracleDB1.js"
import MySQL1 from "./page/MySQL1.js"
import Backend_error1 from "./page/Backend_error1.js"
import Html1 from "./page/Html1.js"
import Network1 from "./page/Network1.js"
import Design1 from "./page/Design1.js"
import Jsp_Bulletin_Board from "./page/Jsp_Bulletin_Board.js"

// 컨트롤러 역할
const Page = (props) => {
  const [page, setPage] = useState("mainpage")
  useEffect(() => {
    setPage(props.page)
  }, [props.page])

  switch (page) {
    case "main":
      return <p></p>
    // 백엔드
    case "java1":
      return <Java1></Java1>
    case "jsp1":
      return <Jsp1></Jsp1>
    case "nodejs1": //nodejs
      return <Nodejs1></Nodejs1>
    case "OracleDB":
      return <OracleDB1></OracleDB1>
    case "MySQL":
      return <MySQL1></MySQL1>
    case "Backend_error":
      return <Backend_error1></Backend_error1>
    case "html1":
      return <Html1></Html1>
    case "network1":
      return <Network1></Network1>
    case "design1":
      return <Design1></Design1>
    case "jsp_bulletin_board":
      return <Jsp_Bulletin_Board></Jsp_Bulletin_Board>
    default:
      return <></>
  }
}
export default Page
