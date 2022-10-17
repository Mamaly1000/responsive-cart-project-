import { toast } from "react-toastify";
export const notify = (text, type) => {
    if(type==="success"){
        toast.success(text)
    }else{
        toast.error(text)
    }
}




// {
//   if (type === "success") {
//     toast.success("🦄 Wow so easy!", {
//       position: "top-left",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   } else {
//     toast.error("🦄 Wow so easy!", {
//       position: "top-left",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   }
// };
