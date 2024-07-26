// import { useEffect, useState } from "react";
// import "./style.css";
// import styled from "styled-components";

// const Time = () => {
//   const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const Sentime = () => {
//     const eventSource = new EventSource(
//       "https://projeck7.onrender.com/time/eventtime"
//     );
//     eventSource.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       setTime(data);
//     };
//     eventSource.onerror = (event) => {
//       console.error("EventSource failed:", event);
//       eventSource.close();
//       return () => {
//         eventSource.close();
//       };
//     };
//   };
//   useEffect(() => {
//     Sentime();
//   }, []);

//   return (
//     <Wapper>
//       <Container>
//         <h1>
//           {time.hours}: <span>h</span>
//         </h1>
//         <h1>
//           {time.minutes}: <span>m</span>
//         </h1>
//         <h1>
//           {time.seconds} <span>pm</span>
//         </h1>
//       </Container>
//     </Wapper>
//   );
// };
// export default Time;
// const Wapper = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   z-index: -1;
//   display: none;
// `;
// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   border: 1px solid #fff;
//   padding: 10px;
//   position: absolute;
//   right: 15%;
//   top: 50%;
//   background: #b39df1;
//   border-radius: 5px;
//   z-index: 12;
//   h1 {
//     color: #fff;
//   }
//   span {
//     color: #000;
//   }
// `;
