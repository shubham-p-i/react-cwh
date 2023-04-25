import React,{useState} from 'react'
import { ToastContainer, toast , Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure();


export default function Toast(props) {

    
        console.log("msg --> ",props.triggerToast.msg)

        if (props.triggerToast.variant === "success") {
            toast.success(props.triggerToast.msg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
            });
        }
        else if (props.triggerToast.variant === "error") {
            toast.error(props.triggerToast.msg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
            });
        }
        else if(props.triggerToast.variant === "warn"){
            toast.warn(props.triggerToast.msg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "colored",
            });
        }


    return (
        <>
            <ToastContainer
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                // transition={Slide}
            />
            <ToastContainer />  
    </>
    )
}
