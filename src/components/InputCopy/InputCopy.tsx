// import React, { useState, useRef } from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

// interface InputWithCopyProps {}
// const InputCopy: React.FC<InputWithCopyProps> = () => {
// // function InputCopy() {
//     const [copied, setCopied] = useState<boolean>(false);
//     const inputRef = useRef<HTMLInputElement>(null);

//     const onCopy = () => {
//         if (inputRef.current) {
//             inputRef.current.blur(); // Ensure blur before copying
//             setCopied(true);
//             setTimeout(() => setCopied(false), 1000); // Timeout for visual feedback
//         }
//     };

//     return (
//         <div className="input-container">
//             <CopyToClipboard text={inputRef.current?.value} onCopy={onCopy}>
//                 <input
//                     ref={inputRef}
//                     type="text"
//                     placeholder="Enter text to copy"
//                     onBlur={() => {
//                         if (copied) {
//                             inputRef.current?.value = ''; // Optional: Clear input after copy and blur
//                         }
//                     }}
//                 />
//             </CopyToClipboard>
//             {copied && <p className="copied-message">Copied!</p>}
//         </div>
//     );
// };

// export default InputCopy
