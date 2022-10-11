import {FC, ChangeEvent, useState } from 'react';



export enum HairColor {
    blond = "your hair is blond, good for u",
    brown = "your hair is brow, wow",
    pink = "wow"
}



interface Props {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor;
}


export const Person: FC<Props> = ({name, age, email, hairColor}) => {

    const [country, setCountry] = useState<string | null>("");

    type NameType = "pedro" | "jack"
    const nameForType: NameType = "jack"

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    
  return (  
    <div>
      <h1> {name}</h1>
      <h1> {email}</h1>
      <h1> {age}</h1>
      <input placeholder="Wirte down your contry......." onChange={handleChange} />
      <h1>{country}</h1>
      <h1>{hairColor}</h1>
    </div>
  );
}
