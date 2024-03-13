import React from 'react';

// const myString = 'Hello World';
// const splits = myString.split(' ', 2);

// const first = splits[0].split('', 1);
// const second = splits[1].split('', 1);
// console.log(`${first}${second}`);

const getFirstLettersOfNames = (name1: string, name2: string): string => {
  const firstLetterName1 = name1.charAt(0);
  const firstLetterName2 = name2.charAt(0);
  return `${firstLetterName1}${firstLetterName2}`;
};

type Props = {
  name1: string;
  name2: string;
};
function Avatar({ name1, name2 }: Props) {
  //   const name1 = 'John';
  //   const name2 = 'Doe';
  const firstLetters = getFirstLettersOfNames(name1, name2);

  return (
    <div className="w-[50px] h-[50px] rounded-full bg-cyan-900 flex justify-center items-center">
      <p className="text-white font-medium text-[20px]">{firstLetters}</p>
    </div>
  );
}

//   return (
//     <div className="w-[50px] h-[50px] rounded-full bg-cyan-900 flex justify-center items-center">
//       <p>Input String: {inputString}</p>
//       <p className="text-white font-medium text-[20px]">{firstTwoLetters}</p>
//     </div>
//   );

export default Avatar;
