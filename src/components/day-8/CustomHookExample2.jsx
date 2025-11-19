import { useState } from "react";

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleValueChange };
};

export default function Form() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");
  const fileProps = useFormInput("");

  console.log("File input props:", fileProps);
  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <label>
        File
        <input type="file" {...fileProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}

// import { useFormInput } from "./useFormInput.js";

// export default function Form() {
//   const firstNameProps = useFormInput("Mary");
//   const lastNameProps = useFormInput("Poppins");

//   return (
//     <>
//       <label>
//         First name:
//         <input {...firstNameProps} />
//       </label>
//       <label>
//         Last name:
//         <input {...lastNameProps} />
//       </label>
//       <p>
//         <b>
//           Good morning, {firstNameProps.value} {lastNameProps.value}.
//         </b>
//       </p>
//     </>
//   );
// }

//useFormInput custom hook implementation
// import { useState } from "react";

// export function useFormInput(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   function handleChange(e) {
//     setValue(e.target.value);
//   }

//   const inputProps = {
//     value: value,
//     onChange: handleChange,
//   };

//   return inputProps;
// }
