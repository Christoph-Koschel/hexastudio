import {GrClose} from "react-icons/gr";

export type EmailVerificationConstructor = {
    show: boolean;
    onClose: any;
    children: any;
}
const EmailVerification = ({show, onClose, children}: EmailVerificationConstructor) => {
    return (
        <div
            className={show ? "fixed left-0 top-0 h-full w-full z-[200] flex justify-center items-center bg-black/70" : "hidden"}>
            <div className="bg-white rounded-xl p-4">
                <GrClose onClick={() => onClose()} className="ml-auto cursor-pointer" size={20}/>
                <p className="pt-2">{children}</p>
                <button onClick={() => onClose()} className="px-8 py-2 mt-4 mr-8">
                    Close
                </button>
            </div>
        </div>
    );
}

export default EmailVerification;