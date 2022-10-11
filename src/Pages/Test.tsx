import React, {FC} from 'react';
import { Person,  HairColor } from '../componets/Person';


const test: FC = () => {
  return (
    <div className="test">
        <title>test</title>
      <Person name="Joh111n" age={67} email="noo1111b@gmail.com" hairColor={HairColor.blond} />
    </div>
    
  );
}

export default test;
